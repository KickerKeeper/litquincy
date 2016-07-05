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

var jsonToCSV = function (jsonpath, cachepath, csvpath, callback){
    var curr_contents = JSON.parse(fs.readFileSync(jsonpath, 'utf8'));
    // var cache_contents = JSON.parse(fs.readFileSync(cachepath, 'utf8'));
    if (/*curr_contents != cache_contents*/ true) {

        // SET REPORT_CACHE'S CONTENTS EQUAL TO REPORT'S CONTENTS

        var csvString = "";
        if (curr_contents.length > 0) {
            var labels = Object.keys( curr_contents[0] );
            for (var i = 0; i < labels.length; i++) {
                csvString += labels[i];
                if (i != labels.length - 1) {
                    csvString+=","
                }
            }
            csvString += "\n";

            for (var i = 0; i < curr_contents.length; i++) {
                for (var property in curr_contents[i]) {
                    if (curr_contents[i].hasOwnProperty(property)) {
                        csvString += curr_contents[i][property] + ",";
                    }
                }
                // Remove last comma in line
                csvString = csvString.substring(0, csvString.length - 1);
                csvString += "\n";
            }
        }

        // Write CSV string to CSV file
        fs.writeFile(csvpath, csvString, function(err) {
            if (err) {
                return console.log(err);
            }

            console.log("The .CSV file was successfully updated!");
        });
    } else {
        console.log("There was no need to update the .CSV file prior to download.");
    }
    callback();
}

app.get('/CSV-download', function(req, res){

    jsonToCSV(__dirname + "/app/downloads/report.json", __dirname + "/app/downloads/report-cache.json",
        __dirname + "/app/downloads/report.csv", function () {
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

    /*
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
    */
});

app.get('/report-raw', function(request, response){
    response.sendFile(__dirname + '/app/downloads/report.json');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


