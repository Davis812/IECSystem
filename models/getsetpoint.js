var  client = require('./database.js');
var mysql = client.getDbCon();

function  Setpoint(setpoint) {
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

Setpoint.getList =  function  getList(callback) {
    // 读取 command 集合
    var sql = "select * from t_complain order by time desc limit 1";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            callback(err,results,fields);
        }
    });
};