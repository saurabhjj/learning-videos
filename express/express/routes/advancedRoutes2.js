var express = require('express');
var app=express();

var router =express.Router();

app.use('/users',router);

router.use('/:username(\\w+)',function(req,resp){ //(\\w+) - depicts regular expression restricting only to alphabets and numbers
	resp.end(JSON.stringify(req.params));
});

/*app.get('/heyThereFirstRouteAgain',function(req,resp){
	resp.end(' What is going on there, this is a bit different');
});*/

app.listen(1337,function(){
	console.log('listenning to port 1337');
});