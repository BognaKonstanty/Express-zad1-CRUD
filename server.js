var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var password;
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/auth/google', function(req, res) {
  res.render('first-view.pug',{header: 'Zaloguj się'});  

});

app.post('/userscreen', function(req, res) {
    password = req.body.password;
   if (password.length >= 8 ) {
     res.render('userscreen.pug', {
      header: ', jesteś zalogowany!', 
         username: req.body.username
      }); 
     } else {
       res.render('notlog.pug');
     }

});

app.listen(3000);
app.use(function(req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});