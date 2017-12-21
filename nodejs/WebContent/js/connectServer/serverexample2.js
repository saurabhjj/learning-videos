var connect=require('connect');
var http=require('http');

var app = connect();

function profile(request, response){
	console.log("user requested profile");
}

function forum(request, response){
	console.log("user requested forum");
}

app.use('/profile',profile);
app.use('/forum',forum);

http.createServer(app).listen(8888);

console.log("server.running");