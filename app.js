var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

function truncateTweets(){
  T.get('statuses/user_timeline', {}, function(err, data, response){
    data.forEach(function(tweet){
      T.post('statuses/destroy/:id', {id: tweet.id_str}, function(err, data, response){
          console.log(data.text);
      })
    })
    if(data.length > 0) truncateTweets();
  })
}

truncateTweets();
