var http = require('http');
var fs = require('fs');

var server=http.createServer(function(req,res){
	console.log('request was made from ' + req.url);
	res.writeHead(200, {'Content-Type': 'application/json'});
	var myObj = {
		name:'Ryu',
		job:'Ninja',
		age:29
	};
	res.end(JSON.stringify(myObj));
});
/*
app.post('/',function(req, response){
	response.end(JSON.stringify(req.body));
});

app.get('/',function(req, response){
	response.sendFile('index.html',{root:path.join(__dirname,'./files')});
});*/

server.listen(1337,'127.0.0.1');

