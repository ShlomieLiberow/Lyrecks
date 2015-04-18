/* GET home page. */




var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var home = require('./routes/home');
var about = require('./routes/about');
var app = express();
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    //res.json({ message: 'hooray! welcome to our api!' }); 
    var first_response = res;
    var track_name = "Drone";
    var art_name = "Muse";
    console.log("got here 2");
    rest.json('http://api.musixmatch.com/ws/1.1/track.search?q=' + track_name + '&q_artist=' + art_name + ' &f_has_lyrics=1&apikey=36238a5e7169c1acedc538f970fffb34')
    .on('complete', function(response_track) { 
        console.log("got here 1");
    //console.log(response); 
    var json_track_info = JSON.parse(response_track);
    //console.log(json_track_info.message.body.track_list[0].track_rating);
     //var second_response = "doing something" . reponse;
        var track_id = json_track_info.message.body.track_list[0].track.track_id;
        // console.log(json_track_info);
     	rest.json('http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + track_id + '&apikey=36238a5e7169c1acedc538f970fffb34')
            .on('complete', function(response_2){
            var lyrics = JSON.parse(response_2).message.body.lyrics.lyrics_body;
            
            console.log(lyrics);
            first_response.send("" + lyrics);
            console.log("here");
     	});
         
        
     	
	})
	.on('error', function(err) { 
	      console.log('An error occurred:' + err); 
	 });
});

exports.home = function(req, res){
  res.render('home');
};

