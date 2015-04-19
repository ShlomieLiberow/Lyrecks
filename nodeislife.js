..var watson = require('watson-developer-cloud');
var bodyParser = require('body-parser');
var fs = require('fs');

var my_text = "I am not the kind of girl Who should be rudely barging in on a white veil occasion But you are not the kind of boyWho should be marrying the wrong girlI sneak in and see your friendsAnd her snotty little family all dressed in pastelAnd she is yelling at a bridesmaidSomewhere back inside a roomWearing a gown shaped like a pastryThis is surely not what you thought it would beI lose myself in a daydreamWhere I stand and say[Chorus:]Don’t say Yes, run away nowI’ll meet you when you’re out of the church at the back doorDon’t wait or say a single vowYou need to hear me outAnd they said, Speak now.Fond gestures are exchangedAnd the organ starts to playA song that sounds like a death marchAnd I am hiding in the curtainsIt seems that I was uninvited by your lovely bride-to-beShe floats down the aisle like a pageant queenBut I know you wish it was me,You wish it was me,Don’t you?[Chorus:]Don’t say Yes, run away now,I’ll meet you when you’re out of the church at the back door.Don’t wait or say a single vow,You need to hear me out,And they said, Speak now.Don’t say Yes, run away now,I’ll meet you when you’re out of the church at the back door.Don’t wait or say a single vow,Your time is running out,And they said, Speak now.Oh, la, laOh, ohSay a single vowI hear the preacher say, Speak now or forever hold your peace.There’s the silence, there’s my last chance.I stand up with shaky hands, all eyes on me.Horrified looks from everyone in the roomBut I’m only looking at you.I am not the kind of girlWho should be rudely barging in on a white veil occasionBut you are not the kind of boyWho should be marrying the wrong girl.";
var my_text2 = "The summer's over, this town is closing. They're waving people out of the ocean. We have the feeling like we were floating. We never noticed where time was going. Do you remember when we first got here? The days were longer; the nights were hot here. Now, it's September; the engine's started. You're empty-handed and heavy-hearted. But just remember on the way home (ooh ooh ooh) That you were never meant to feel alone. It takes a little while, but you'd be fine: Another good time coming down the line. You'll go back to love that's waiting. I'll unpack in a rented room. How's that life you swear you're hating? Grass is greener: that makes two. But just remember on the way home (ooh ooh ooh) That you were never meant to feel alone. Just look me up; get back on the bus. I'll see you next week if you need my trust. Life ain't short, but it sure is small. You get forever but nobody at all. Life ain't short, but it sure is small. You get forever but nobody at all. It don't come often, and it don't stay long. (Ooh, ooh, ooh, ooh) But just remember on the way home (ooh ooh ooh) That you don't ever have to feel alone. Just stay on the run; get off the grid. Hide yourself out like you know that I did, And if you might find that your running is done, A little bit of Heaven never hurt no one.";
var personality_insights = watson.personality_insights({
  api_key: 'ZTI5ZTBjZTgtMmE0YS00ODNkLWIwNTgtZTNiYWI5Njg1MGU4OjE3d01pYlRWUDVaNg',
  version: 'v2'
});
;

var selection1 2var selection2 
var selection3 
var selection4 
var selection11
var selection12

var selection5
var selection6
var selection7
var selection8
var selection9
var selection10;




personality_insights.profile ({ text: my_text }, function (err, response) {
  if (err)
    console.log('error:', err);
  else
    //console.log(JSON.stringify(response, null, 2));

   
//var gill = JSON.stringify(response, null, 2);
selection1 = response.tree.children[0].children[0].children[0].percentage;
selection2 = response.tree.children[0].children[0].children[0].children[0].percentage;
selection3 = response.tree.children[0].children[0].children[0].children[1].percentage;
selection4 = response.tree.children[0].children[0].children[0].children[2].percentage;
selection11 = response.tree.children[0].children[0].children[0].children[3].percentage;
selection12 = response.tree.children[0].children[0].children[0].children[4].percentage;


console.log(selection1 + "  Openness A");
console.log(selection2 + "  Openness - personality A");
console.log(selection3 + "  Achievement striving A");
console.log(selection4 + "  Prone to worry A");
console.log(selection11 + "  Uncompromising A");
console.log(selection12 + "  Susceptible to stress A");



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
selection5 = response.tree.children[0].children[0].children[0].percentage;
selection6 = response.tree.children[0].children[0].children[0].children[0].percentage;
selection7 = response.tree.children[0].children[0].children[0].children[1].percentage;
selection8 = response.tree.children[0].children[0].children[0].children[2].percentage;
selection9 = response.tree.children[0].children[0].children[0].children[3].percentage;
selection10 = response.tree.children[0].children[0].children[0].children[4].percentage;

console.log(selection5 + "  Openness B");
console.log(selection6 + "  Openness - personality B");
console.log(selection7 + "  Achievement striving B");
console.log(selection8 + "  Prone to worry B");
console.log(selection9 + "  Uncompromising B");
console.log(selection10 + "  Susceptible to stress B");



});



var myarray=new Array(5)
for (i=0; i <5; i++)
    myarray[i]=new Array(5)

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