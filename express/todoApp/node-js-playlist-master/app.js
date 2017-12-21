var express = require('express');
var todoController = require('./controllers/todocontroller');
var app =express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static('./public'));




//fire controllers
todoController(app);



app.listen(3000);
console.log( " you are listening to port 3000");