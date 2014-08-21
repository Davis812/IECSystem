var client = require('./database.js');
var mysql = client.getDbCon();

function Setpoint(setpoint) {
	this.time = setpoint.time;
	this.temp_up = setpoint.temp_up;
	this.temp_down = setpoint.temp_down;
	this.humi_up = setpoint.humi_up;
	this.humi_down = setpoint.humi_dowm;
	this.ill_up = setpoint.ill_up;
	this.ill_down = setpoint.ill_dowm;
	this.co_up = setpoint.co_up;
	this.co_down = setpoint.co_dowm;
}

module.exports = Setpoint;

Setpoint.getList = function getList(callback) {
	// 读取 command 集合
	var sql = "select * from t_setpoint order by time desc limit 1";
	console.log(sql);
	mysql.query(sql, function(err, results, fields) {
		if (err) {
			throw err;
		} else {
			callback(err, results, fields);
		}
	});
};

Setpoint.save = function(setwhich, upper, down, callback) {
	var newset = Setpoint
			.getList(function(err, setpoints) {
				var setpoint = setpoints[0];
				var date = new Date();
				var time = date.getFullYear() + "-" + (date.getMonth() + 1)+ "-";
				time = time + date.getDate() + " " + date.getHours() + ":";
				time = time + (date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes()) + ":";
				time = time + (date.getSeconds() < 10 ? '0' + date.getSeconds()
								: date.getSeconds());
				console.log(time);
				setpoint[setwhich + "_up"] = upper;
				setpoint[setwhich + "_down"] = down;
				setpoint.time = time;

				var sql = "insert into t_setpoint (time,temp_up ,temp_down,humi_up,humi_down,ill_up,ill_down,co_up,co_down) values(?,?,?,?,?,?,?,?,?)";
				mysql.query(sql, [ setpoint.time, setpoint.temp_up,
						setpoint.temp_down, setpoint.humi_up,
						setpoint.humi_down, setpoint.ill_up, setpoint.ill_down,
						setpoint.co_up, setpoint.co_down ], function(err,
						results, fields) {
					if (err) {
						throw err;
					} else {
						return callback(err, fields);
					}
				});
			});

};