
var  client = require('./database.js');
var mysql = client.getDbCon();

function  Sensor(sensor) {
    this.time = sensor.time;
    this.fresh_temp = sensor.fresh_temp;
    this.fresh_humi = sensor.fresh_humi;
    this.co2 = sensor.co2;
    this.room_temp = sensor.room_temp;
    this.room_humi = sensor.room_humi;
    this.illumination = sensor.illumination;
}

module.exports = Sensor;

Sensor.getList =  function  getList(callback) {
    // 读取 sensor 集合
    var sql = "select * from t_sensor";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            callback(err,results,fields);
        }
    });
};