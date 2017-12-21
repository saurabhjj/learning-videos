var connect=require('connect');
var http=require('http');

var app = connect();

function doFirst(request, response, next){
	console.log("bacon");
	next();
}

function doSecond(request, response, next){
	console.log("tuna");
	next();
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);

console.log("server.running");