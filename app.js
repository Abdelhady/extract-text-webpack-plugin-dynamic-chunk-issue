var express = require('express');
var app = express();
var path = require('path');


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/entry1', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/entry1.html'));
});
app.get('/entry2', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/entry2.html'));
});

app.use('/build', express.static(__dirname + '/build'));

app.listen(8080, function(){
	console.log('Listening at: http://localhost:8080');
});
