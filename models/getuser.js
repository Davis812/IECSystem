
var  client = require('./database.js');
var mysql = client.getDbCon();

function  User(user) {
    this.name = user.name;
    this.password = user.password;
    this.privilege = user.privilege;
}
module.exports = User;
//获取用户
User.get =  function  get(username, callback) {
    // 读取 users 集合
    var sql = "select c.username,c.password,c.privilege from t_user c where c.username='"+username+"'";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            callback(err,results[0],fields);
        }
    });
};

//获取用户列表
User.getList =  function  getList(callback) {
    // 读取 users 集合
    var sql = "select * from t_user  ";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            callback(err,results,fields);
        }
    });
};