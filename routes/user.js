/* GET users listing. */

var User = require('../models/user.js');

module.exports = function(app) {
	app.get('/home', function(req, res) {
		User.getList(function(err, users) {
			console.log(users);
			var view = {
				key : 'users',
				body : users
			};
			res.render('home', view);
		});
	});
};
