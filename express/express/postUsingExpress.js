var express = require('express');
var path = require('path');
var app=express();
var bodyParser = require('body-parser');

console.log(__dirname + '/assets');
app.use('/cssFiles', express.static(__dirname + '/assets'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

app.post('/',function(req, response){
	response.end(JSON.stringify(req.body));
});

app.get('/',function(req, response){
	response.sendFile('index.html',{root:path.join(__dirname,'./files')});
});

app.listen(1337,function(){
	console.log('listenning to port 1337');
});

