var http=require('http');
var fs = require('fs');
var path=require('path');

var myReadStream = fs.createReadStream(path.join(__dirname, '/../coremodules/readWriteFile/corn.txt'),'utf8');

var myWriteStream = fs.createWriteStream(path.join(__dirname, '/../coremodules/readWriteFile/writeMe.txt'));

myReadStream.on('data',function(chunk){
	console.log('new chunk received');
//	console.log(chunk);
	myWriteStream.write(chunk);
});