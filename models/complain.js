
var  client = require('./database.js');
var mysql = client.getDbCon();

function  Complain(complain) {
    this.time = complain.time;
    this.cold = complain.cold;
    this.hot = complain.hot;
    this.wet = complain.wet;
    this.dry = complain.dry;
    this.dark = complain.dark;
    this.glare = complain.glare;
    this.stuffy = complain.stuffy;
}

module.exports = Complain;

Complain.getList =  function  getList(callback) {
    // 读取 complain集合
    var sql = "select * from t_complain order by time desc limit 20";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            callback(err,results,fields);
        }
    });
};