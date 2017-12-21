var express = require('express');
var cookieParser = require('cookie-parser');
var app=express();

app.use(cookieParser());

app.get('/',function(req,resp){
	resp.cookie('myFirstCookie','looks good');
	resp.end('wow done');
});

app.get('/clearCookie',function(req,resp){
	resp.clearCookie('myFirstCookie');
	resp.end('cookie cleared');
});

app.listen(1337,function(){
	console.log('listenning to port 1337');
});