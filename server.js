/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Charlene Wang
 * Email: wangchar@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var expresshandle = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;
var data = require("./twitData.json");
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', expresshandle({defaultLayout: 'main'} ));
app.set('view engine', 'handlebars')
app.use(express.static('public'));

app.get('/', function (req, res, next) {
    
    res.status(200).render('body',{

    allTwits: data
        
    })
    
});

app.get('*', function (req, res) {
    res.status(404).render('404', {layout: false})
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});
