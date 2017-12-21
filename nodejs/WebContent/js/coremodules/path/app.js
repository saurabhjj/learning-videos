var path = require('path');

var websiteHome="Desktop/Bucky//thenewboston/index.html";
var websiteAbout="Desktop/Bucky/thenewboston/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));