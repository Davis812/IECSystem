/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes'),
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
			maxAge : 60*60*60*24
		// 20 minutes
		}
	}));

	app.use("/static",express.static(__dirname + '/public'));
});
// app.dynamicHelpers
app.use(function(req, res, next) {
	var error = req.flash('error');
	var success = req.flash('success');
	console.log(req.url);
	var url = req.url;
	res.locals.user = req.session.user;
	res.locals.error = error.length ? error : null;
	res.locals.success = success ? success : null;
	var path = req.path;
	if((path !== "/api/login") && (path !== "/") && (!req.session.user) && (url.indexOf("/static") <= 0) && (url.indexOf("api") <= 0) ){
		res.redirect('/');
	}else if((path !== "/api/login") && (!req.session.user) && (url.indexOf("api") > 0)){
		//说明用户未登录，且当前的访问是android,并且不是android的登录操作
		res.send({"error":"未登录"});
	}else{
		next();
	}
});

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(app.router);

if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

routes(app);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
