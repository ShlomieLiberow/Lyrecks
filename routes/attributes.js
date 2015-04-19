/* GET home page. */

var express = require('express');
var app = express();
var router = express.Router();


exports.about = function(req,res){
//	console.log('herer 33');	
	res.render('attributes'); 
//	console.log('AHHAHasdfasdfasdfasdfA ' + query);
}

app.get('/', function(req, res){
	req.param("name");
//	console.log('AHHAHA ' + req.query.name);
//	    console.log('from app.js');
});