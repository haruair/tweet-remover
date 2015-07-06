var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

function unFavs(){
  T.get('favorites/list', {}, function(err, data, response){
    data.forEach(function(tweet){
      if(!tweet.id_str) return;
      T.post('favorites/destroy', {id: tweet.id_str}, function(err, data, response){
        if(data.text) console.log(data.text);
      });
    });
    if(data.length > 0) unFavs();
  });
}

unFavs();
