// Server.js


	// Setup
	var express =  require('express');
	var app = express();
	var mongoose = require('mongoose'); // Mongo
	var morgan = require('morgan'); // Log request to the console
	var bodyParser = require('body-parser'); // Pull information from HTML POST
	var methodOverride = require('method-override'); // Simulate DELETE and PUT


	// Configuration
	mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uw03mypu');

	app.use(express.static(__dirname + '/public'));
	app.use(morgan('dev')); // Log every request to the console
	app.use(bodyParser.urlencoded({'extended':'true'}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
	app.use(methodOverride());

	app.listen(8080);
	console.log('- App listening on port 8080 -');