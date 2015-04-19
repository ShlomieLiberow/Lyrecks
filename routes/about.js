

var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var rest = require('restler');
var open = require('open');
var router = express.Router();  

exports.about = function(req,res){
	console.log('herer 33');	
	//res.render('about'); 
}




// app.get('/', function(req, res)
// {

//     console.log(req.body.myinput);
//     // res.json({ message: 'hooray! welcome to our api!' }); 
//     if(typeof req.body.myinput != "undefined")
//     {   
//         var selection = req.body.user;
//         //console.log("asdf " + selection);
//         // if(input.indexOf(',') > -1)
//         // {
//         // 	console.log('ss');
//         // }
//         //selection.add
//     }
// });
//console.log('ok');