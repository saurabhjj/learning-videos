var express = require('express');
var path = require('path');
var app=express();


app.use('/cssFiles', express.static(__dirname + '/assets'));
app.get('/',function(req, response){
//	response.sendFile('index.html',{root:path.join(__dirname,'./files')});
	var resp = "Hello ! " + req.query.firstName;
//	response.end(JSON.stringify(req.query));
	response.end(resp);
});

app.listen(1337,function(){
	console.log('listenning to port 1337');
});

