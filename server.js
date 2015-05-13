var express = require('express'),
	http = require('http'),
	path = require('path');
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

if ('production' == app.get('env')) {
	app.use(express.static(path.join(__dirname, 'dist')));
} else {
	app.use(express.static(path.join(__dirname, 'app')));
	app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function() {
	console.log("Server running at", app.get('port'), "in", app.get('env'), "mode");
});