var express = require('express');
var twilio = require('twilio');
var bodyParser = require('body-parser');
var app = express();

var twilioNumber = '+15735356781';
var twilioSid ='AC91f8fc97a969efb53b69ea9a22afdbe8';
var twilioToken = '7eb0ef8177fc1363cad881171d66d766';
var location = '';
var response = '';

var client = new twilio.RestClient(twilioSid, twilioToken);

app.use(bodyParser());

app.get('/', function(req, res) {
	res.send('Hello World!')
})

app.post('/location', function(req, res) {
	var location = req.body.location;
	var hours = req.body.hours;

	client.messages.create({
	  body: 'Location: ' + location + ' hours: ' + hours,
	  to: '+14154708674',
	  from: twilioNumber
	}, function (e, message) {
	  if (e) return(e);
	  res.send(message.sid);
	});
})

app.post('/response', function(req, res) {
	var response = req.body.response;
	res.send("success");
})

app.get('/response', function(req, res) {
	res.send(response);
})

app.listen(3001, function() {
	console.log('App listening on port 3001')
})