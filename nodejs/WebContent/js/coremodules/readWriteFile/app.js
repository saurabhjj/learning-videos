var fs = require('fs'); // without ./ means its a core module

// create text file

fs.writeFileSync("corn.txt", "Corn is good, Corn is life");
console.log(fs.readFileSync("corn.txt").toString());

//asynch way of read and write process.

/*fs.readFile("corn.txt","utf8",function(err,data){
	fs.writeFile("writeMe.txt",data);
	console.log(data);
});*/


console.log('test data');

//deleting a file

//fs.unlink('writeMe.txt');

//fs.mkdirSync('stuff1');

//fs.rmdirSync('stuff1');

//mkdir async
/*fs.mkdir('stuff1',function(){
	fs.readFile("corn.txt",function(err,data){
		fs.writeFile("./stuff1/writeMe.txt",data);
	});
});*/

//del directory async

fs.unlink('./stuff1/writeMe.txt',function(){
	fs.rmdir("stuff1");
});

