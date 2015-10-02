var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

function reqResponse(res, data, contentType, statusCode) {
	statusCode = statusCode || 200;
	var header = {
		'Content-Type': contentType
	};
	res.writeHead(statusCode, header);
	res.write(data + '');
	res.end();
};

function requestPartialHTML(req, res){
	var file = path.join(__dirname, '../client');
	fs.readFile(file + req.url, function (err, data) {
		reqResponse(res, data, 'text/html');
	});
};

function requestHTML(req, res) {
	var file = path.join(__dirname, '../client/index.html');
	fs.readFile(file, function (err, data) {
		reqResponse(res, data, 'text/html');
	});
};

function requestCSS(req, res) {
	var file = path.join(__dirname, '../client');
	fs.readFile(file + req.url, function (err, data) {
		reqResponse(res, data, 'text/css');
	});
};

function requestJS(req, res) {
	var file = path.join(__dirname, '../client');
	fs.readFile(file + req.url, function (err, data) {
		reqResponse(res, data, 'application/javascript');
	});
};

function requestHandler(req, res){
	var reqURL = url.parse(req.url).pathname;
	if(reqURL === '/'){
		requestHTML(req, res);
	} else if(req.url.slice(-2) === 'js'){
		requestJS(req, res);
	} else if(req.url.slice(-3) === 'css'){
		requestCSS(req, res);
	} else if(req.url.slice(-4) === 'html'){
		requestPartialHTML(req, res);
	} else {
		res.statusCode = 404;
		res.end();
	}
};

var server = http.createServer(requestHandler);
server.listen(3000);
console.log('Listening on port', 3000);