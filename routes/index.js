/*
 * GET home page.
 */
var User = require('../models/user.js');

module.exports = function(app) {

	function checkNotLogin(req, res, next) {
		if (req.session.user) {
			req.flash('error', '已登入');
			return res.redirect('/home');
		}
		next();
	}
	
	function checkLogin(req, res, next) {
		if (!req.session.user) {
			req.flash('error', '未登入');
			return res.redirect('/');
		}
		next();
	}
	

	app.get('/', checkNotLogin);
	app.get('/', function(req, res) {
		res.render('login', {
			title : '登录',
			user: req.session.user,
			success: req.flash('success').toString(),
			error: req.flash('error').toString()
		});
	});

	app.post('/', checkNotLogin);
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
				req.flash('success', ' 登入成功');
				res.redirect('/home');
			}
		});
	});

};// end function(app){};

