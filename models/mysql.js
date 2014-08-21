var mysql = require('mysql');

var connection = mysql.createConnection({
<<<<<<< HEAD
	host     : 'localhost',
	user     : 'root',
	password : 'nfz'
=======
	host     : 'localhost', //本地数据库
	user     : 'root',     //数据库用户名
	password : 'test',      //数据库密码
	database: 'iecsys'  //数据库名称
>>>>>>> origin/master
});

module.exports.open = function(){
	connection.connect(function(err) {
		if (err) { throw err;}
	});
<<<<<<< HEAD
	connection.query('use test');
=======
	connection.query('use iecsys');
>>>>>>> origin/master
};

module.exports.query = function(sql,ck){
	connection.query(sql, function(err, rows, fields) {
		if (err) {throw err;}
		console.log(rows);
		ck(rows);
	});
};

module.exports.close = function(){
	connection.end();
};

