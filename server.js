var express = require('express')
var app = express()
var dataYear = require("./data.json")
var ejs = require('ejs')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('pages/index', {
        data: dataYear
    });
}); 


app.listen(8080);
console.log('8080 is the magic port');