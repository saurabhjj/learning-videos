var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');

//connect to mlab.com database
mongoose.connect('mongodb://learningexpress:learningexpress123@ds153501.mlab.com:53501/learningexpress');

//create a schema
var loginSchema = new mongoose.Schema({
	username:String,
	password:String,
	email:String,
	fNmame:String,
	lName:String
});

//user model
var Users = mongoose.model('users',loginSchema);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports=function(app){
	
	app.get('/',function(req,res){	
		res.render('index2');
	});

	app.get('/index',function(req,res){		
		res.render('index2');
	});
	
	app.get('/register',function(req,res){
			res.render('register');
	});
	
	app.post('/register',urlencodedParser,function(req,res){
		session=req.session;
		Users(req.body).save(function(err,data){
			if(err) throw err;
			console.log(" back from ajax with data :::; " + data);
//			res.json(data);
			req.session.user='sasdad';		
			res.status(200).send('User saved successfully');
		});
	});
	

	
	app.post('/testAction',urlencodedParser,function(req,res){
		
		var reqData = JSON.parse(JSON.stringify(req.body));
		console.log(" reqData username :::::::: " + reqData['username']);
		
		console.log(" reqData password :::::::: " + reqData['password']);
			
		Users.findOne({username:reqData['username']},function(err,data){
			if(err) throw err;
			console.log(" back from ajax with data in login controller :::; " + data);
			res.json(data);
//			res.status(200).send('User saved successfully');
		});
		
		console.log("inside index2 post");
		
	});
	
	app.get('/register123/:userid/:status/',function(req,res){
		console.log("hurray !!!");
		var userd = req.params.userid;
		console.log("userd ::::::: " + userd);
		var regStatus = req.params.status;
		console.log("regStatus :::::::::: " + regStatus);
		sendMail();
//		res.render('register');
		res.end();
	});
	
	//creating the sender 
	var transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "connectsall4@gmail.com",
            pass: "connectsall41"
        }
    });
	
	//generating the message
	// Message object
	var message = {

	    // sender info
	    from: 'Lets Connect <connectsall4@gmail.com>',

	    // Comma separated list of recipients
	    to: '"Saurabh" <saurabhjj@gmail.com>',

	    // Subject of the message
	    subject: 'Mail from my application ✔✔✔✔✔✔✔✔', 

	    // plaintext body
	    text: 'Thanks for registrating to my app.... !',

	    // HTML body
	    html:'<p><b>Hello</b> Sonali <img src="cid:note@node"/></p>'+
	         '<a href="localhost:3000">Lets Connect</a>'
	};
	
	//sending the mail
	function sendMail(){
		console.log("inside send mail");
		transport.sendMail(message, function(error){
			if(error){
				console.log('Error occured');
				console.log(error.message);
				return;
			}
			console.log('Message sent successfully!');

			// if you don't want to use this transport object anymore, uncomment following line
			transport.close(); // close the connection pool
		});
	}
	
	

};