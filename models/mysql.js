var mysql = require('mysql');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'nfz'
});

module.exports.open = function(){
	connection.connect(function(err) {
		if (err) { throw err;}
	});
	connection.query('use test');
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

