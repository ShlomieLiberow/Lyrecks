/* GET home page. */

var express = require('express');
var app = express();
var router = express.Router();


exports.about = function(req,res){
	console.log('herer 33');	
	res.render('attributes'); 
	console.log('AHHAHasdfasdfasdfasdfA ' + query);
}

app.get(function(req, res){
	console.log('AHHAHA ' + query);
	var url = require('url');
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	console.log('AHHAHA ' + query);
	res.render('attributes'); 
	
});