/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes'),
	user = require('./routes/user'),
	http = require('http'),
	path = require('path');

var app = express();

// flash支持
var flash = require('connect-flash');

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(flash());
	app.use(express.cookieParser()); // cookie解析的中间件
	app.use(express.session({ // 提供会话支持
		secret : "hello world",// 这个是session加密需要的，随便写的。
		cookie : {
			maxAge : 60000 * 20
		// 20 minutes
		}
	}));

	app.use(express.static(__dirname + '/public'));
});
// app.dynamicHelpers
app.use(function(req, res, next) {
	var error = req.flash('error');
	var success = req.flash('success');
	res.locals.user = req.session.user;
	res.locals.error = error.length ? error : null;
	res.locals.success = success ? success : null;
	next();
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use("/shows", express.static('views/shows'));
app.use("/stylesheets", express.static('views/stylesheets'));
app.use("/images", express.static('views/images'));

if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

routes(app);
user(app);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
