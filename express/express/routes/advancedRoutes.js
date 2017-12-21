var express = require('express');
var app=express();

var router =express.Router();

app.use('/myFirstRoute',router);

router.get('/heyThereFirstRoute',function(req,resp){
	resp.end(' What is going on');
});

router.get('/heyThereFirstRouteAgain',function(req,resp){
	resp.end(' What is going on there, this is a bit different');
});

app.listen(1337,function(){
	console.log('listenning to port 1337');
});