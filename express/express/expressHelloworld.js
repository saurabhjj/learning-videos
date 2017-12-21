var express = require('express');
var app=express();


console.log(__dirname + '/assets');
app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/helloThere',function(request, response){
	response.send(' Hello There from express !');
});

app.listen(1337,function(){
	console.log('listenning to port 1337');
});