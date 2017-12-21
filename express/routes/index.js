
/*
 * GET home page.
 */

var vd=require('../videodata.json');

exports.index = function(req, res){
  res.render('index', {
	  title: 'Express' ,
	  videodata :vd
  });
};