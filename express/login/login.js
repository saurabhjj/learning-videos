var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
var sessions=require('express-session');

var session;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

app.use(sessions({
	secret:'asasds*(&^*(',
	resave:false,
	saveUninitialized:true
}));

app.post('/login1',function(req, response){
	session=req.session;
	if(session.uniqueID){
		response.redirect('/redirects');
	}
	//if(req.body.username=='admin' && req.body.password=='admin'){
		session.uniqueID=req.body.username;
	//}
	
	response.redirect('/redirects');
});

app.get('/redirects',function(req, response){
	session=req.session;
	if(session.uniqueID =='admin'){
		response.redirect('/admin');
	} else {
		response.send(req.session.uniqueID + ' not found <a href="/logout"> Kill session </a>');
	}
});

app.get('/admin', function(req,resp){
	session=req.session;
	if(session.uniqueID !='admin'){
		resp.end('Un-Authorized access');
	}
	resp.sendFile('admin.html',{root:path.join(__dirname,'/../express/files')});
});

app.get('/logout', function(req,resp){
	req.session.destroy();
	resp.redirect('/login');
});

app.get('/login',function(req, response){
//	console.log('login.html',{root:path.join(__dirname,'/../express/files')});
	response.sendFile('login.html',{root:path.join(__dirname,'/../express/files')});
});

app.listen(1337,function(){
	console.log('listenning to port 1337');
});

