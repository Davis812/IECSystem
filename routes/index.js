/*
 * GET home page.
 */
var User = require('../models/getuser.js');
var Sensor = require('../models/getsensor.js');
var Newcmd = require('../models/getnewcmd.js');
var Sendcmd = require('../models/sendcmd.js');

module.exports = function(app) {
//	function checkNotLogin(req, res, next) {
//		if (req.session.user) {
//			req.flash('error', '已登入');
//			return res.redirect('/home');
//		}
//		next();
//	}
//	
//	function checkLogin(req, res, next) {
//		if (!req.session.user) {
//			req.flash('error', '未登入');
//			return res.redirect('/');
//		}
//		next();
//	}
	
	//app.get('/', checkNotLogin);
	app.get('/', function(req, res) {
		res.render('login', {
			title : '登录',
			user: req.session.user,
			success: req.flash('success').toString(),
			error: req.flash('error').toString()
		});
	});

    //app.post('/', checkNotLogin);
	app.post('/', function(req, res) {
		console.log(req.body.username);
		console.log(req.body.password);
		var password = req.body.password;
		User.get(req.body.username, function(err, user) {
			if (!user) {
				req.flash('error', '用户不存在');
				return res.redirect('/');
			} else if (user.password !== password) {
				req.flash('error', '用户口令错误');
				return res.redirect('/');
			} else {
				req.session.user = user;
				//req.flash('success', ' 登入成功');
				res.redirect('/weather');
			}
		});
	});

	app.get('/weather', function(req, res) {
		res.render('weather');
	});
	
	app.get('/ctrluser', function(req, res) {
		User.getList(function(err, users) {
			console.log(users);
			var view = {
				key : 'users',
				body : users
			};
			res.render('ctrluser', view);
		});
	});
	
	app.get('/sensor', function(req, res) {
		Sensor.getList(function(err, sensors) {
			var view = {
				key : 'sensors',
				body : sensors
			};
			res.render('sensor', view);
		});
	});
	
	app.get('/newcmd', function(req, res) {
		Newcmd.getList(function(err, newcmd) {
			var view = {
				key : 'newcmd',
				body : newcmd
			};
			res.render('newcmd', view);
		});
	});
	app.post('/newcmd',function(req,res){
		
	});
	
	app.get('/logout', function(req, res) {
			req.session.user=null;
			req.flash('退出系统').toString();
			res.redirect('/');
		});
};// end function(app){};

