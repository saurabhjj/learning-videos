var events=require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEmitter',function(arg1,arg2){
	console.log(arg1+arg2);
});

setTimeout(function(){
	eventEmitter.emit('myCustomEmitter','String1',' and String2');
},2000);