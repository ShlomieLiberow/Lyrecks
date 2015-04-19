/* GET home page. */


var express = require('express');
var app = express();
var router = express.Router();
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
//console.log("call 1");



exports.home = function(req, res){
  res.render('home');
};


