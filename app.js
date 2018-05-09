

var express = require('express');
var app = express();

var cmd = require('node-cmd');

app.use(express.static('./'));

var lockScreenCmd = "rundll32.exe user32.dll,LockWorkStation";

app.get('/lockScreen', function (req, res) {

	cmd.get(lockScreenCmd, function (data) {
		console.log('ÒÑËø');
	});

	res.send('lockScreen');
});

var server = app.listen(3000, function (a, b) {
	var host = server.address().address;
	var port = server.address().port;

	console.log(' listening at http://%s:%s', host, port);
});
