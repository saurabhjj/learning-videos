var express = require('express');
var path = require('path');
var app =express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

console.log(__dirname + '/express/assets' );

app.use('/assets', express.static(__dirname + '/express/assets'));



app.get('/', function(req,res){
	res.render('index2');
});

app.get('/about2', function(req,res){
	res.render('about2');
});

app.get('/contact', function(req,res){
	res.render('contact',{qs:req.query});
});

app.post('/contact', urlencodedParser, function (req, res) {
	 console.log(req.body) ;
	 res.render('contact-success',{data:req.body});
})

app.get('/profile/:name', function(req,res){
	var data = {age:29, job:'ninja', hobbies:['fighting','eating','fishing']};
	res.render('profile',{person:req.params.name,data:data});
});

/*app.get('/login', function(req,res){
	res.sendFile('admin.html',{root:path.join(__dirname,'/../express/files')});
});*/

app.listen(3000);