var express = require('express');
var path = require('path');
var fs = require('fs');
var app=express();


app.use('/cssFiles', express.static(__dirname + '/assets'));
app.get('/',function(req, response){
	response.sendFile('index.html',{root:path.join(__dirname,'./files')});
});

app.get(/^(.+)$/,function(req, response){
	console.log(req.params);
	try{
		console.log(path.join(__dirname,'./files/',req.params[0]+'.html'));
		if(fs.statSync(path.join(__dirname,'./files/',req.params[0]+'.html')).isFile()){
			response.sendFile(req.params[0]+'.html',{root:path.join(__dirname,'./files')});
		}
	} catch (err){
		response.sendFile('404.html',{root:path.join(__dirname,'./files')});
	}
	
		
	/*} else {
		response.sendFile('404.html',{root:path.join(__dirname,'./files')});
	}*/
	
});

app.listen(1337,function(){
	console.log('listenning to port 1337');
});

