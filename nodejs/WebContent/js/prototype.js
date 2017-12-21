function user(){
	this.name="";
	this.life=100;
	this.giveLife=function giveLife(targetPlayer){
		targetPlayer.life+=1;
		console.log(this.name + " give 1 life to " + targetPlayer.name);
	}
}

var Bucky=new user();
var Wendy=new user();

Bucky.name="Becky";
Wendy.name="Wendy";

Bucky.giveLife(Wendy);

console.log("Wendy ::" + Wendy.life);
console.log("Bucky ::" + Bucky.life);

//you can add functions
user.prototype.uppercut=function uppercut(targetPlayer){
	targetPlayer.life-=3;
	console.log(this.name + " just uppercutted " + targetPlayer.name);
};

Wendy.uppercut(Bucky);

console.log("Wendy ::" + Wendy.life);
console.log("Bucky ::" + Bucky.life);


//you can add add properties 
user.prototype.magic=60;
console.log("Wendy ::" + Wendy.magic);
console.log("Bucky ::" + Bucky.magic);
