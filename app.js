var express = require('express'),
app = express(),
engine = require('consolidate'),
MongoClient = require('mongodb').MongoClient,
assert = require('assert'),
bodyParser = require('body-parser');

app.engine('html',engine.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true })); 

MongoClient.connect('mongodb://localhost:27017/video', function(err, db) {

	console.log("Connected to MongoDB");

app.get('/', function(req, res){

	res.render('movies');


});
app.post('/toDatabase', function(req, res){


	db.collection('movies').save(req.body, function(err, res){

		if(err){
			console.log(err);
		}



	});

	res.send('Your data has been saved');


});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s.', port);
});

});