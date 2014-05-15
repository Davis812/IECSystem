/* GET users listing. */

var Sensor = require('../models/sensor.js');

module.exports = function(app) {
	app.get('/sensor', function(req, res) {
		Sensor.getList(function(err, sensors) {
			var view = {
				key : 'sensors',
				body : sensors
			};
			res.render('sensor', view);
		});
	});
};
