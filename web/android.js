/*
 * GET Android beg.
 */
var User = require('../models/getuser.js');
var Sensor = require('../models/getsensor.js');
var Newcmd = require('../models/getnewcmd.js');
var Sendcmd = require('../models/sendcmd.js');
var Setpoint = require('../models/getsetpoint.js');
var Complain = require('../models/complain.js');

module.exports = function(app) {
	
	app.get('/api/login', function(req, res) {
		var password = req.param('password');
		var username = req.param('username');
		console.info(password);
		console.info(username);
		User.get(username, function(err, user) {
			if (!user) {
				res.send({"error":"用户名错误"});
			} else if (user.password !== password) {
				res.send({"error":"用户口令错误"});
			} else {
				req.session.user = user;
				res.send({"success":"登入成功"});
			}
		});
		return;
	});
	
	app.get('/api/sensor', function(req, res) {
		Sensor.getList(function(err, sensors) {
			var view = {
				key : 'sensors',
				body : sensors
			};
			res.send(view);
		});
	});
		
	app.post('/newcmd',function(req,res){
		//该如何提交
		var time = req.body.time;
		var	light = req.body.light === undefined ? 0 : req.body.light;
		var	wetting = req.body.wetting === undefined? 0: req.body.wetting;
		var	air_conditioner = req.body.air_conditioner === undefined? 0:req.body.air_conditioner;
		var	exhaust_fan = req.body.exhaust_fan === undefined? 0: req.body.exhaust_fan;
			console.log(light,wetting,air_conditioner,exhaust_fan);
		var sendcmd = new Sendcmd(time,light,wetting,air_conditioner,exhaust_fan);
		sendcmd.save(function (err){
			if(err){
				res.send({"error":"命令发送失败"});
			}else{
				res.send({"success":"发送成功"});
			}
			res.send({"success":"命令发送成功"});
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
				res.send({"error":"反馈失败"});
			}else{
				res.send({"success":"反馈成功"});
			}
			res.send({"success":"反馈成功"});
		});
	});

	app.get('/api/logout', function(req, res) {
			req.session.user=null;
			res.send({"success":"退出系统"});
		});
};

