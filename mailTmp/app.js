var express = require('express');
//var session = require('express-session');
var registerController = require('./controllers/registerController');
//var loginController = require('./controllers/loginController.js');
var app =express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static('./public'));
//app.use(session({secret: 'ssshhhhh'}));


//fire controllers
registerController(app);
//loginController(app);




app.listen(3000);
console.log( " you are listening to port 3000");