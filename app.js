

var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var home = require('./routes/home');
var about = require('./routes/about');
var attributes = require('./routes/attributes');
var app = express();
var rest = require('restler');
var open = require('open');
var router = express.Router();  



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
app.get('/', home.home);
app.get('/home', home.home);
//app.get('/about', about.about);

var input_content = [];
var track_name;
var art_name;

app.get('/attributes', function(req, res)
{
    res.render('attributes.jade');
});

app.post('/', function(req, res)
{
    console.log(req.body.myinput);
    // res.json({ message: 'hooray! welcome to our api!' }); 
    if(typeof req.body.myinput != "undefined")
    {   
        var input = req.body.myinput;
        console.log("asdf " + input);
        if(input.indexOf(',') > -1)
        {
            console.log('aahahah');
            input_content = input.toString().split(',');
            track_name = input_content[1];
            art_name =  input_content[0];
        }
    
    //console.log("finised 1");
    //open('/routes/about');

    //res.json({ message: 'hooray! welcome to our api!' }); 
    //console.log("input_content " + input_content);
    
    console.log(track_name +  " .. got here 2 .. " + art_name);

    var callAPI = 'http://api.musixmatch.com/ws/1.1/track.search?q=';

    if(track_name != '')
        callAPI += track_name;
    
    callAPI += '&q_artist=' ;

    if(art_name != '')
        callAPI += art_name;

    rest.json(callAPI + '&f_has_lyrics=1&apikey=36238a5e7169c1acedc538f970fffb34')
    .on('complete', function(response_track) { 
    
    console.log("got here 1");
    //console.log(response); 
    //console.log(req.body + "");
    var json_track_info = JSON.parse(response_track);
    //console.log(json_track_info.message.body.track_list[0].track_rating);
    //var second_response = "doing something" . reponse;
    var track_id = json_track_info.message.body.track_list[0].track.track_id;

    //console.log(json_track_info);
    rest.json('http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + track_id + '&apikey=36238a5e7169c1acedc538f970fffb34')
            .on('complete', function(response_2){
            var lyrics = JSON.parse(response_2).message.body.lyrics.lyrics_body;
            console.log("ok");    
            var lyrics_clear = lyrics.split("*");        
            console.log(lyrics_clear);
            //first_response.send("" + lyrics);

            var data = ['Nikolai','Yoachim','Him', 'Mark', 'Steph'];
            res.render('about.jade', {lyrics: lyrics_clear, data: data});
            console.log("here");
        });
    }).on('error', function(err) { 
          console.log('An error occurred:' + err); 
    });
    }
});

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
/// error handlers
// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
} 

if (app.get('/') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var port = process.env.PORT || 3000;

app.listen(port);

module.exports = app;
