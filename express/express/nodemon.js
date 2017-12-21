var express = require('express');
var app=express();


app.get('/',function(req,resp){
	resp.end('wow done without restart');
});

app.listen(1337,function(){
	console.log('listenning to port 1337');
});