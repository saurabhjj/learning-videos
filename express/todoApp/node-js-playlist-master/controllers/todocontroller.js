var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//connect to mlab.com database
mongoose.connect('mongodb://todotest123:todotest123@ds149481.mlab.com:49481/todotest123');

//create a schema
var todoSchema = new mongoose.Schema({
	item1:String
});

//todo model
var Todo = mongoose.model('Todo',todoSchema);

/*//saving data to DB
var item1= Todo({item:'buy Flowers'}).save(function(err){
	if(err) throw err;
	console.log('item saved');
});*/



//var data=[{item:'get milk'},{item:'walk dog'},{item:'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports=function(app){
	app.get('/todo',function(req,res){
		// get data from DB and pass to view
		Todo.find({},function(err,data){
			if(err) throw err;
			res.render('todo',{todos:data});
		});
		
	});
	
	app.post('/todo',urlencodedParser,function(req,res){
		// get data from view and add to db
		
		var newTodo=Todo(req.body).save(function(err,data){
			if(err) throw err;
			res.json(data);
		});
	});
	
	app.delete('/todo/:item',function(req,res){
		
		// delete the requested item from db
		Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
			if(err) throw err;
			res.json(data);
		})
		/*data=data.filter(function(todo){
			return todo.item.replace(/ /g, "-")!== req.params.item;
		});
		res.json(data);*/
	});
};