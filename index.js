var express = require('express');
var mime = require('mime');
var path = require('path');
var fs = require('fs');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/app'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/app/index.html');
});

app.get('/TestResults', function(request, response) {
    response.sendFile(__dirname + '/app/SpecRunner.html');
});

app.get('/CSV', function(request, response) {
    response.sendFile(__dirname + '/app/ToCSV.html');
});

app.get('/CSV-download', function(req, res){

    var file = __dirname + '/app/downloads/report.csv';

    var filename = path.basename(file);
    var mimetype = mime.lookup(file);

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);

    var filestream = fs.createReadStream(file);

    filestream.on('error', function (error) {
        console.log("Caught", error);
    });

    filestream.pipe(res);
});

app.get('/report-raw', function(request, response){
    response.sendFile(__dirname + '/app/downloads/report.json');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


