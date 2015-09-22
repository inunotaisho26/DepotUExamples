var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	console.log(req.url);
	if(req.url.substr(req.url.length - 4) === 'json'
		&& req.url.length >= 4) {
		var path = __dirname + req.url;
		try {
			res.setHeader('access-control-allow-origin', '*');
			res.setHeader('content-type', 'text/json');
			res.end(fs.readFileSync(path));
		} catch(e) {
			res.statusCode = 500;
			res.statusMessage = 'file not found';
			res.end();
		}
	} else {
		res.end('only accepts json');
	}
});

server.listen(3000, function() {
	console.log('server listening on port 3000;')
;});
