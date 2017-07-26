var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var username;
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/auth/google', function(req, res) {
  res.render('first-view.pug',{header: 'Zaloguj się'});  

});

app.post('/userscreen', function(req, res) {
	//username : req.username; 
	res.render('userscreen.pug', {header: ', jesteś zalogowany!', username:req.username});

});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});