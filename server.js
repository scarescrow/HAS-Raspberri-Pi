var express = require('express');
var bodyParser = require('body-parser');
var pythonShell = require('python-shell');

var app;
var shell;

sent = false;

var PORT = 4000;

app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var server = app.listen(PORT, function() {
	console.log('Express Started');
});

app.get('/', function(req, res) {
	res.end('Welcome to the Home Automation System!');
});

app.get('/on', function(req, res) {
	if(shell != undefined) {
		shell.send('stop').end(function(err) {});
		shell = undefined;
	}
	shell = new pythonShell('python_scripts/on.py');
	res.end('You sent on');
});

app.get('/off', function(req, res) {
	if(shell != undefined) {
		shell.send('stop').end(function(err) {});
		shell = undefined;
	}
	shell = new pythonShell('python_scripts/off.py');
	res.end('You sent off');
});

app.get('/blink', function(req, res) {
	if(shell != undefined) {
		shell.send('stop').end(function(err) {});
		shell = undefined;
	}
	shell = new pythonShell('python_scripts/blink.py');
	res.end('You sent blink');
});

app.get('/pwm', function(req, res) {
	if(shell != undefined) {
		shell.send('stop').end(function(err) {});
		shell = undefined;
	}
	shell = new pythonShell('python_scripts/pwm.py');
	res.end('You sent pwm');
});

app.get('/stop', function(req, res) {
	if(shell != undefined) {
		shell.send("stop").end(function(err) {});
		shell = undefined;
	}
	res.end('You sent Stop.');
});