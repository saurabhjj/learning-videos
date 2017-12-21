var events=require('events');
var util = require('util');

var person=function(name){
	this.name=name;
};

util.inherits(person,events.EventEmitter);

var james=new person('James');
var mary=new person('Mary');
var ryu=new person('Ryu');

var people = [james,mary,ryu];

people.forEach(function(person) {
	person.on('speak',function(mssg){
		console.log(person.name+' said '+mssg);
	});
});

james.emit('speak','hey dude');