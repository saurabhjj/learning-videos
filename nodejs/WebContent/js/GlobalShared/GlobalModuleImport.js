var movies = require('./GlobalExportMovie');// never include .js extn. Always use ./ if referring to the same folder. only name ( movie) means its a module. 

movies.printAvatar();

console.log(movies.favMovie);