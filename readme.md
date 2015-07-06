Tweet Remover
=============
Quick and dirty js code for truncating all tweets.

    $ git clone https://github.com/haruair/tweet-remover.git
    $ npm install

May you need to create your own [Twitter Apps](https://apps.twitter.com/) as
higher access level and then get all keys and tokens from the app. Then fill in
the information into `config.js` file.

Now you can truncate your tweets:

    $ node app.js

FYI: During the process, it could be reached API limitation. When it happens,
wait for a while and then run again. There is no code for this occasion.
