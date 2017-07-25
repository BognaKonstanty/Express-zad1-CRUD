var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var username;
app.use(express.static('assets'));

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/auth/google', function(req, res) {
  res.render('first-view.pug',{header: 'Zaloguj się'});  

});

/*app.get('/auth/google', function(req, res){
    res.render('/userscreen.pug');
    const response = {
    	username: req.query.Username,
    	password: req.query.Password
    };
    res.end(JSON.stringify(response));
});*/

app.post('/userscreen', function(req, res) {
    //res.sendFile('/first-view.pug');
	username : req.query.username; 
	res.render('userscreen.pug', {header: ', jesteś zalogowany!', username: username});
    //res.end(JSON.stringify(username));
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});