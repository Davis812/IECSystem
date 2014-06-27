/*
 * GET home page.
 */
var User = require('../models/getuser.js');
var Sensor = require('../models/getsensor.js');
var Newcmd = require('../models/getnewcmd.js');
var Sendcmd = require('../models/sendcmd.js');
var Setpoint = require('../models/getsetpoint.js');
var Complain = require('../models/complain.js');

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
		var view = {
			key:'weather'
		};
		res.render('weather',view);
	});
	
	app.get('/ctrluser', function(req, res) {
		User.getList(function(err, users) {
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
	//抛出服务接口
	app.get('/service/sensor', function(req, res) {
		Sensor.getList(function(err, sensors) {
			var view = {
				key : 'sensors',
				body : sensors
			};
			res.send(view);
			//console.log(view);
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
		//该如何提交
		var time = req.body.time,
			light = (req.body.light === null ? 0 : req.body.light),
			wetting = (req.body.wetting === null? 0: req.body.wetting),
			air_conditioner = (req.body.air_conditioner === null? 0:req.body.air_conditioner),
			exhaust_fan = (req.body.exhaust_fan === null? 0: req.body.exhaust_fan);
			console.log(light,wetting,air_conditioner,exhaust_fan);
		var sendcmd = new Sendcmd(time,light,wetting,air_conditioner,exhaust_fan);
		sendcmd.save(function (err){
			if(err){
				req.flash('error',err);
			}else{
				req.flash('success','保存成功');
			}
			res.redirect('/newcmd');
		});
	});
	
	app.get('/setpoint', function(req, res) {
		Setpoint.getList(function(err, setpoint) {
			var view = {
				key : 'setpoint',
				body : setpoint
			};
			res.render('setpoint', view);
		});
	});
	
	app.post('/setpoint',function(req,res){
		//该如何提交
		var setwhich = req.body.setwhich,
			upper = req.body.upper,
			down = req.body.down;
			console.log(setwhich,upper,down);
			Setpoint.save(setwhich, upper, down, function(err){
			if(err){
				req.flash('error',err);
			}else{
				req.flash('success','保存成功');
			}
			res.redirect('/setpoint');
		});
	});
	
	app.get('/complain', function(req, res) {
		Complain.getList(function(err, complains) {
			var view = {
				key : 'complains',
				body : complains
			};
			res.render('complain', view);
		});
	});
	app.get('/logout', function(req, res) {
			req.session.user=null;
			req.flash('退出系统').toString();
			res.redirect('/');
		});
};// end function(app){};

