

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
var ArrayList = require('arraylist')
var summary;
var lyrics_clear ;


var watson = require('watson-developer-cloud');
var bodyParser = require('body-parser');
var fs = require('fs');

var my_text = "I am not the kind of girl Who should be rudely barging in on a white veil occasion But you are not the kind of boyWho should be marrying the wrong girlI sneak in and see your friendsAnd her snotty little family all dressed in pastelAnd she is yelling at a bridesmaidSomewhere back inside a roomWearing a gown shaped like a pastryThis is surely not what you thought it would beI lose myself in a daydreamWhere I stand and say[Chorus:]Don’t say Yes, run away nowI’ll meet you when you’re out of the church at the back doorDon’t wait or say a single vowYou need to hear me outAnd they said, Speak now.Fond gestures are exchangedAnd the organ starts to playA song that sounds like a death marchAnd I am hiding in the curtainsIt seems that I was uninvited by your lovely bride-to-beShe floats down the aisle like a pageant queenBut I know you wish it was me,You wish it was me,Don’t you?[Chorus:]Don’t say Yes, run away now,I’ll meet you when you’re out of the church at the back door.Don’t wait or say a single vow,You need to hear me out,And they said, Speak now.Don’t say Yes, run away now,I’ll meet you when you’re out of the church at the back door.Don’t wait or say a single vow,Your time is running out,And they said, Speak now.Oh, la, laOh, ohSay a single vowI hear the preacher say, Speak now or forever hold your peace.There’s the silence, there’s my last chance.I stand up with shaky hands, all eyes on me.Horrified looks from everyone in the roomBut I’m only looking at you.I am not the kind of girlWho should be rudely barging in on a white veil occasionBut you are not the kind of boyWho should be marrying the wrong girl.";
var my_text2 = "The summer's over, this town is closing. They're waving people out of the ocean. We have the feeling like we were floating. We never noticed where time was going. Do you remember when we first got here? The days were longer; the nights were hot here. Now, it's September; the engine's started. You're empty-handed and heavy-hearted. But just remember on the way home (ooh ooh ooh) That you were never meant to feel alone. It takes a little while, but you'd be fine: Another good time coming down the line. You'll go back to love that's waiting. I'll unpack in a rented room. How's that life you swear you're hating? Grass is greener: that makes two. But just remember on the way home (ooh ooh ooh) That you were never meant to feel alone. Just look me up; get back on the bus. I'll see you next week if you need my trust. Life ain't short, but it sure is small. You get forever but nobody at all. Life ain't short, but it sure is small. You get forever but nobody at all. It don't come often, and it don't stay long. (Ooh, ooh, ooh, ooh) But just remember on the way home (ooh ooh ooh) That you don't ever have to feel alone. Just stay on the run; get off the grid. Hide yourself out like you know that I did, And if you might find that your running is done, A little bit of Heaven never hurt no one.";
var personality_insights = watson.personality_insights({
  api_key: 'ZTI5ZTBjZTgtMmE0YS00ODNkLWIwNTgtZTNiYWI5Njg1MGU4OjE3d01pYlRWUDVaNg',
  version: 'v2'
});
;

var selection1 = new Array(15);
var selection2 = new Array(15);

// important stuff going on here please dont touch
var diff;
var diffID;
var simi; 
var simiID; 



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


//my_text2 = lyrics_clear;
    


// 10 and 14 correct? As opposed to 5

var input_content = [];
var track_name;
var art_name;

app.get('/attributes', function(req, res)
{
    //console.log(req.param("name"));
    var txt1 = req.param("name") + "\n  ";

    var txt2 = art_name + "\n";
    var numbY = Math.random(5);
    var numbX = Math.random(0,5);
    while(numbX === numbY)
        numbX = Math.random(0,5);

    var selectionStr = ['Openness', 'Openness - personality', 'Self-conscious', 'Achievement striving', 'Prone to worry', 'Uncompromising', 'Susceptible to stress' ];
    //console.log(selectionStr[0]);

    var txt11 = "They are similar for: " + selectionStr[2];
    var txt22 = "They are different for: " + selectionStr[3];

    res.render('attributes.jade', {first: txt1, second: txt2, firstTxt: txt11, secondTxt: txt22});
    //console.log("here");


personality_insights.profile ({ text: my_text }, function (err, response) {
  if (err)
    //console.log('error:', err);
  // else
    //console.log(JSON.stringify(response, null, 2));

   
//var gill = JSON.stringify(response, null, 2);


selection1[0] = response.tree.children[0].children[0].children[0].percentage;
selection1[1] = response.tree.children[0].children[0].children[0].children[0].percentage;
selection1[2] = response.tree.children[0].children[0].children[0].children[1].percentage;
selection1[3] = response.tree.children[0].children[0].children[0].children[2].percentage;
selection1[4] = response.tree.children[0].children[0].children[0].children[3].percentage;
selection1[5] = response.tree.children[0].children[0].children[0].children[4].percentage;


// console.log(selection1 + "  Openness A");
// console.log(selection2 + "  Openness - personality A");
// console.log(selection3 + "  Achievement striving A");
// console.log(selection4 + "  Prone to worry A");
// console.log(selection11 + "  Uncompromising A");
// console.log(selection12 + "  Susceptible to stress A");



    /*var path = 'C:/Users/Shlomie/Desktop/MLH\ Manchester/Watson/Lyrecks/file.txt',
    buffer = new Buffer(gill);
    fs.open(path, 'w', function(err, fd) {
        if (err) {
            throw 'error opening file: ' + err;
        } else {
            fs.write(fd, buffer, 0, buffer.length, null, function(err) {
                if (err) throw 'error writing file: ' + err;
                fs.close(fd, function() {
                    console.log('file written');
                })
            });
        }
    });
*/
});



personality_insights.profile ({ text: my_text2 }, function (err, response) {
  if (err)
    //console.log('error:', err);
  
    //console.log(JSON.stringify(response, null, 2));

   
//var gill = JSON.stringify(response, null, 2);
selection2[0] = Math.floor(response.tree.children[0].children[0].children[0].percentage * 100);
selection2[1] = Math.floor( response.tree.children[0].children[0].children[0].children[0].percentage* 100);
selection2[2] = Math.floor( response.tree.children[0].children[0].children[0].children[1].percentage* 100);
selection2[3] = Math.floor( response.tree.children[0].children[0].children[0].children[2].percentage* 100);
selection2[4] = Math.floor(response.tree.children[0].children[0].children[0].children[3].percentage * 100);
selection2[5] = Math.floor( response.tree.children[0].children[0].children[0].children[4].percentage* 100);


simi = 0;
diff = 1000;
for(var i =0; i < selection1.length; i++)
{
    console.log(selection1[i] + "");
    for(var j =0; j < selection2.length; j++)
    {
        var delta = Math.abs(selection1[i] - selection2[j]);
        //console.log(delta + "");
        if(diff < delta)
        {
            diffID = i;
            diff = delta;
        }
        if(simi > delta) 
        {
            simi = delta;
            simiID = i;
        }
    }
}
//console.log(simiID + " " + diffID);
//console.log("similar in : " + selectionStr[simiID] + "  and diffrenet in " + selectionStr[diffID]);

// console.log(selection5 + "  Openness B");
// console.log(selection6 + "  Openness - personality B");
// console.log(selection7 + "  Achievement striving B");
// console.log(selection8 + "  Prone to worry B");
// console.log(selection9 + "  Uncompromising B");
// console.log(selection10 + "  Susceptible to stress B");

});

});

app.post('/', function(req, res)
{
    console.log('from app.js')
    console.log(req.body.myinput);
    // res.json({ message: 'hooray! welcome to our api!' }); 
    if(typeof req.body.myinput != "undefined")
    {   
        var input = req.body.myinput;
        //console.log("asdf " + input);
        if(input.indexOf(',') > -1)
        {
            //console.log('aahahah');
            input_content = input.toString().split(',');
            track_name = input_content[1];
            art_name =  input_content[0];
        }
    
    //console.log("finised 1");
    //open('/routes/about');

    //res.json({ message: 'hooray! welcome to our api!' }); 
    //console.log("input_content " + input_content);
    
    //console.log(track_name +  " .. got here 2 .. " + art_name);

    var callAPI = 'http://api.musixmatch.com/ws/1.1/track.search?q=';

    if(track_name != '')
        callAPI += track_name;
    
    callAPI += '&q_artist=' ;

    if(art_name != '')
        callAPI += art_name;

    rest.json(callAPI + '&f_has_lyrics=1&apikey=36238a5e7169c1acedc538f970fffb34')
    .on('complete', function(response_track) { 
    
    //console.log("got here 1");
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
            //console.log("ok");    
            lyrics_clear = lyrics.split("*");        
            //console.log(lyrics_clear);

            //first_response.send("" + lyrics);
            var name ;
            var data = new ArrayList;

            for(var i = 0; i < 10; i++) {

                if(typeof art_name != "undefined")
                {
                    if(art_name.indexOf(' ') > - 1)
                        name = art_name.split(' ')[0];
                }
                else    
                    name = art_name;
                console.log(myarray[i][0].toLowerCase() + " " + name.toLowerCase());

                
                if(myarray[i][0].toLowerCase().indexOf(name.toLowerCase()) > -1)
                {
                    summary = myarray[i][1];
                    var index = 2;
                    while(myarray[i][index] != null )
                    {
                        console.log("add  " + i + " "+  index + " " + myarray[i][index]);
                        data.add(myarray[i][index]);
                        index++;
                    }

                }
            }
            summary = summary.split(".").join("\n");
            summary = summary.split(",").join("\n");
            res.render('about.jade', {lyrics: lyrics_clear, data: data, summary: summary});
            //console.log("here");
        });
    }).on('error', function(err) { 
          //console.log('An error occurred:' + err); 
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

var myarray=new Array(10)

for (i=0; i <14; i++)
    myarray[i]=new Array(15);

myarray[0][0]="Rihanna";
myarray[0][1]="You are explosive, easily rattled and can be perceived as shortsighted. You are excitement-seeking: you are excited by taking risks and feel bored without lots of action going on. You are susceptible to stress: you are easily overwhelmed in stressful situations. And you are emotionally aware: you are aware of your feelings and how to express them. Your choices are driven by a desire for belongingness. You are relatively unconcerned with tradition: you care more about making your own path than following what others have done. You consider helping others to guide a large part of what you do: you think it is important to take care of the people around you.";
myarray[0][2]="Jay Z";
myarray[0][3]="Chris Brown";
myarray[0][4]="Omarion Grandberry";
myarray[0][5]="Wilmer Valderrama";
myarray[0][6]="Justin Timberlake";
myarray[0][7]="Josh Henderson";
myarray[0][8]="Aubrey Graham";
myarray[0][9]="Travis Barker";

myarray[1][0]="Taylor Swift";
myarray[1][1]="You are explosive, somewhat compulsive and can be perceived as shortsighted.You are excitement-seeking: you are excited by taking risks and feel bored without lots of action going on. You are susceptible to stress: you are easily overwhelmed in stressful situations. And you are emotionally aware: you are aware of your feelings and how to express them. Your choices are driven by a desire for modernity. You consider helping others to guide a large part of what you do: you think it is important to take care of the people around you. You are relatively unconcerned with achieving success: you make decisions with little regard for how they show off your talents.";
myarray[1][2]="Joe Jonas";
myarray[1][3]="John Mayer";
myarray[1][4]="Cory Monteith";
myarray[1][5]="Jake Gyllenhaal";
myarray[1][6]="Chord Overstreet";
myarray[1][7]="Thomas Odell";
myarray[1][8]="Matt Healy";
myarray[1][9]="Calvin Harris";
myarray[1][10]="Garrett Hedlund";
myarray[1][11]="Conor Kennedy";
myarray[1][12]="Harry Styles";

myarray[2][0]="Miley Cyrus";
myarray[2][1]="You are social, somewhat dependent and easily rattled. You are susceptible to stress: you are easily overwhelmed in stressful situations. You are emotionally aware: you are aware of your feelings and how to express them. And you are prone to worry: you tend to worry about things that might happen. Your choices are driven by a desire for modernity. You consider both independence and taking pleasure in life to guide a large part of what you do. You like to set your own goals to decide how to best achieve them. And you are highly motivated to enjoy life to its fullest.";
myarray[2][2]="Justin Bieber";
myarray[2][3]="Dylan Sprouse";
myarray[2][4]="Nick Jonas";
myarray[2][5]="Justin Gaston";
myarray[2][6]="Mike Will Made It";

myarray[3][0]="Demi Lovato";
myarray[3][1]="You are a bit compulsive, somewhat shortsighted and somber. You are susceptible to stress: you are easily overwhelmed in stressful situations. You are emotionally aware: you are aware of your feelings and how to express them. And you are self-conscious: you are sensitive about what others might be thinking about you. Your choices are driven by a desire for discovery. You consider helping others to guide a large part of what you do: you think it is important to take care of the people around you. You are relatively unconcerned with tradition: you care more about making your own path than following what others have done.";
myarray[3][2]="Alex DeLeon";
myarray[3][3]="Trace Cyrus";
myarray[3][4]="Joe Jonas";
myarray[3][5]="Wilmer Valderrama";

myarray[4][0]="Jennifer Lopez";
myarray[4][1]="You are generous, confident and active. You are altruistic: you feel fulfilled when helping others, and will go out of your way to do so. You are outgoing: you make friends easily and feel comfortable around other people. And you are self-assured: you feel you have the ability to succeed in the tasks you set out to do. Your choices are driven by a desire for stability. You consider both helping others and independence to guide a large part of what you do. You think it is important to take care of the people around you. And you like to set your own goals to decide how to best achieve them.";
myarray[4][2]="Chris Paciello";
myarray[4][3]="Marc Anthony";
myarray[4][4]="Sean Combs";

myarray[5][0]="Chris Brown";
myarray[5][1]="You are social, somewhat dependent and imperturbable. You are assertive: you tend to speak up and take charge of situations, and you are comfortable leading groups. You are cheerful: you are a joyful person and share that joy with the world. And you are respectful of authority: you prefer following with tradition in order to maintain a sense of stability. Your choices are driven by a desire for modernity. You consider both independence and taking pleasure in life to guide a large part of what you do. You like to set your own goals to decide how to best achieve them. And you are highly motivated to enjoy life to its fullest.";
myarray[5][2]="Anara Atanes";
myarray[5][3]="Rihanna";
myarray[5][4]="Natalie Nunn";

myarray[6][0]="Katy Perry";
myarray[6][1]="You are sentimental, easily rattled and can be perceived as verbose. You are susceptible to stress: you are easily overwhelmed in stressful situations. You are emotionally aware: you are aware of your feelings and how to express them. And you are melancholy: you think quite often about the things you are unhappy about. You are fiery: you have a fiery temper, especially when things do not go your way. You are excitement-seeking: you are excited by taking risks and feel bored without lots of action going on. And you are self-conscious: you are sensitive about what others might be thinking about you.";
myarray[6][2]="Justin York";
myarray[6][3]="Matthew Thiessen";
myarray[6][4]="Travie McCoy";
myarray[6][5]="Mika";
myarray[6][6]="Josh Groban";
myarray[6][7]="Russell Brand";
myarray[6][8]="Robert Pattinson";
myarray[6][9]="Baptiste Giabiconi";
myarray[6][10]="Robert Ackroyd";
myarray[6][11]="John Mayer";
myarray[6][12]="Diplo";
myarray[6][12]="Jared Leto";

myarray[7][0]="Joe Jonas";
myarray[7][1]="You are social, somewhat dependent and imperturbable. You are altruistic: you feel fulfilled when helping others, and will go out of your way to do so. You are sociable: you enjoy being in the company of others. And you are outgoing: you make friends easily and feel comfortable around other people. Your choices are driven by a desire for connectedness. You consider both taking pleasure in life and independence to guide a large part of what you do. You are highly motivated to enjoy life to its fullest. And you like to set your own goals to decide how to best achieve them.";
myarray[7][2]="AJ Michalka";
myarray[7][3]="Taylor Swift";
myarray[7][4]="Demi Lovato";

myarray[8][0]="Ariana Grande";
myarray[8][1]="You are a bit verbose, somewhat dependent and unpretentious. You are cheerful: you are a joyful person and share that joy with the world. You are assertive: you tend to speak up and take charge of situations, and you are comfortable leading groups. And you are respectful of authority: you prefer following with tradition in order to maintain a sense of stability. Your choices are driven by a desire for well-being. You consider independence to guide a large part of what you do: you like to set your own goals to decide how to best achieve them. You are relatively unconcerned with tradition: you care more about making your own path than following what others have done.";
myarray[8][2]="Graham Phillips";
myarray[8][3]="Jai Brooks";
myarray[8][4]="Nathan Sykes";
myarray[8][5]="Big Sean";

myarray[9][0]="Beyoncé Knowles";
myarray[9][1]="You are a bit verbose, somewhat dependent and unpretentious. You are unconcerned with art: you are less concerned with artistic or creative activities than most people who participated in our surveys. You are respectful of authority: you prefer following with tradition in order to maintain a sense of stability. And you are assertive: you tend to speak up and take charge of situations, and you are comfortable leading groups. Your choices are driven by a desire for organization. You are relatively unconcerned with both taking pleasure in life and independence. You prefer activities with a purpose greater than just personal enjoyment. And you welcome when others direct your activities for you.";
myarray[9][2]="Yasiin Bey";
myarray[9][3]="Jay Z";



module.exports = app;
