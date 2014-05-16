var  client = require('./database.js');
var mysql = client.getDbCon();

function  Newcmd(newcmd) {
    this.time = newcmd.time;
    this.light = newcmd.light;
    this.wetting = newcmd.wetting;
    this.air_conditioner = newcmd.air_conditioner;
    this.exhaust_fan = newcmd.exhaust_fan;
}

module.exports = Newcmd;

Newcmd.getList =  function  getList(callback) {
    // 读取 command 集合
    var sql = "select * from t_command order by time desc limit 10";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            callback(err,results,fields);
        }
    });
};