var http = require('http');
var PORT = 3000;
var server = http.createServer(function(req, res){
	
	res.setHeader('content-type','text/html');
	res.write(req.url + '<br>');
	res.end('Hello World!');
});

server.listen(PORT, function(){
	
	console.log('Server listening on port %s', PORT);
});