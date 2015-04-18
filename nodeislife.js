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
personality_insights.profile ({ text: my_text }, function (err, response) {
  if (err)
    console.log('error:', err);
  else
    //console.log(JSON.stringify(response, null, 2));

   
//var gill = JSON.stringify(response, null, 2);
var selection = response.tree.children[0].children[0].children[0].percentage;
console.log(selection + "  Openness");


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
    console.log('error:', err);
  else
    //console.log(JSON.stringify(response, null, 2));

   
//var gill = JSON.stringify(response, null, 2);
var selection2 = response.tree.children[0].children[0].children[0].percentage;
var selection3 = response.tree.children[0].children[0].children[0].children[0].percentage;
var selection4 = response.tree.children[0].children[0].children[0].children[1].percentage;
var selection5 = response.tree.children[0].children[0].children[0].children[2].percentage;


console.log(selection2 + "  Openness B");
console.log(selection3 + "  Openness - personality B");
console.log(selection4 + "  Achievement striving");
console.log(selection5 + "  Prone to worry");




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