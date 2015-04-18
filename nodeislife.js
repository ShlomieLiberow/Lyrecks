var watson = require('watson-developer-cloud');

var my_text = "I am not the kind of girlWho should be rudely barging in on a white veil occasionBut you are not the kind of boyWho should be marrying the wrong girlI sneak in and see your friendsAnd her snotty little family all dressed in pastelAnd she is yelling at a bridesmaidSomewhere back inside a roomWearing a gown shaped like a pastryThis is surely not what you thought it would beI lose myself in a daydreamWhere I stand and say[Chorus:]Don’t say Yes, run away nowI’ll meet you when you’re out of the church at the back doorDon’t wait or say a single vowYou need to hear me outAnd they said, Speak now.Fond gestures are exchangedAnd the organ starts to playA song that sounds like a death marchAnd I am hiding in the curtainsIt seems that I was uninvited by your lovely bride-to-beShe floats down the aisle like a pageant queenBut I know you wish it was me,You wish it was me,Don’t you?[Chorus:]Don’t say Yes, run away now,I’ll meet you when you’re out of the church at the back door.Don’t wait or say a single vow,You need to hear me out,And they said, Speak now.Don’t say Yes, run away now,I’ll meet you when you’re out of the church at the back door.Don’t wait or say a single vow,Your time is running out,And they said, Speak now.Oh, la, laOh, ohSay a single vowI hear the preacher say, Speak now or forever hold your peace.There’s the silence, there’s my last chance.I stand up with shaky hands, all eyes on me.Horrified looks from everyone in the roomBut I’m only looking at you.I am not the kind of girlWho should be rudely barging in on a white veil occasionBut you are not the kind of boyWho should be marrying the wrong girl.";

var personality_insights = watson.personality_insights({
  api_key: 'ZTI5ZTBjZTgtMmE0YS00ODNkLWIwNTgtZTNiYWI5Njg1MGU4OjE3d01pYlRWUDVaNg',
  version: 'v2'
});

personality_insights.profile ({ text: my_text }, function (err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});