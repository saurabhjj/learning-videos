var http = require('http');
var fs = require('fs');
var path=require('path');

var server=http.createServer(function(req,res){
	console.log('request was made from ' + req.url);
	if(req.url==='/home'|| req.url==='/'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(path.join(__dirname, '/../files/index.html')).pipe(res);
	} else if (req.url==='/contact'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(path.join(__dirname, '/../files/login.html')).pipe(res);
	} else if (req.url==='/api/ninjas'){
		var myObj = [{name:'Ryu',age:29},{name:'yoshi',age:32}];		
		res.writeHead(200,{'Content-Type':'application/json'});
		res.end(JSON.stringify(myObj));
	}else {
		res.writeHead(404,{'Content-Type':'text/html'});
		fs.createReadStream(path.join(__dirname, '/../files/404.html')).pipe(res);
	}
});

server.listen(1337,'127.0.0.1');