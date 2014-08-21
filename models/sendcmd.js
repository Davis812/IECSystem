var client = require('./database.js');
var mysql = client.getDbCon();

function Sendcmd(time, light, wetting, air_conditioner, exhaust_fan) {
	this.light = light;
	this.wetting = wetting;
	this.air_conditioner = air_conditioner;
	this.exhaust_fan = exhaust_fan;
	if (time) {
		this.time = time;
	} else {
		var date = new Date();
		this.time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-";
		this.time = this.time +  date.getDate() + " " + date.getHours() + ":";
		this.time = this.time + (date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes()) + ":";
		this.time = this.time + (date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds());
		console.log(this.time);
	}
}

module.exports = Sendcmd;

Sendcmd.prototype.save = function(callback) {
	// 存入数据库的一组控制命令
	var sendcmd = {
		time : this.time,
		light : this.light,
		wetting : this.wetting,
		air_conditioner : this.air_conditioner,
		exhaust_fan : this.exhaust_fan
	};
	var sql = "insert into t_command (time,light,wetting,air_conditioner,exhaust_fan) values(?,?,?,?,?)";
	mysql.query(sql, [ sendcmd.time, sendcmd.light, sendcmd.wetting,
			sendcmd.air_conditioner, sendcmd.exhaust_fan ], function(err,
			results, fields) {
		if (err) {
			throw err;
		} else {
			return callback(err, fields);
		}
	});
};