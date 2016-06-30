var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/app'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get('/app/templates/login.html', function(request, response) {
  response.sendFile(__dirname + '/app/templates/login.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


