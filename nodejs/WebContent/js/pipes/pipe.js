var http=require('http');
var fs = require('fs');
var path=require('path');
var http=require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	
	var myReadStream = fs.createReadStream(path.join(__dirname, '/../coremodules/readWriteFile/corn.txt'),'utf8');

//	var myWriteStream = fs.createWriteStream(path.join(__dirname, '/../coremodules/readWriteFile/writeMe.txt'));

	myReadStream.pipe(res);
	
//	res.end('Hey Ninjas');
	
}) ;

server.listen(3000,'127.0.0.1');
console.log("lestening tp server");