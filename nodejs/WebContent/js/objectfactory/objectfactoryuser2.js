var movies = require('./objectfactoryMovie');

var movies = require('./objectfactoryMovie');

var buckysMovies=movies();
buckysMovies.favMovie="Good will hunting";
console.log("Buckys fav movie is " + buckysMovies.favMovie);