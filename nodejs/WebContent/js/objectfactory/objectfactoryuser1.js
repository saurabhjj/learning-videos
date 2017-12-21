var movies = require('./objectfactoryMovie');

var emilysMovies=movies();
emilysMovies.favMovie="The notebook";
console.log("Emilys fav movie is " + emilysMovies.favMovie);