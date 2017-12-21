var bucky = {
	printName:function(){
		console.log("My Name is saurabh");
		console.log(this===bucky);
	}
};

bucky.printName();

//The default calling context is global
function doSOmthingWorthLess(){
	console.log("I am in worthless");
	console.log(this===global);
}

doSOmthingWorthLess();