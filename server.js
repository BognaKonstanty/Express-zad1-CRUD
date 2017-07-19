var express = require('express');
var fs = require('fs');
var app= express();
var bodyParser = require('body-parser'),
var fileContent;

app.use(bodyParser.json());


app.get('/getNote', function(req,res) {
	console.log();
	fs.readFile('.test.json', 'utf8', function(err, data) {
	if (err) throw err;
	fileContent = data;
	res.send(data);
	});

	res.send('zawartość json' + fileContent );
});


app.post('/updateNote/:note', function(req, res) {
	fileContent = req.params.note;
	console.log();
	fs.writeFile('/test.json', stringifyFile, function(err, data) {
	if (err) throw err;
	console.log('file update');
	});

	res.send(' zawratość json + note' + req.params.note );
});


app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});


app.listen(3000);