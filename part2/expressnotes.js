// Requires \\
var express = require('express');// module name - pulls in that module from package JSON file.  Express is not built into node.  
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
// Data is normally sent in a URL encoded string or stringified JSON

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serving static files (typically HTML, CSS, JS, or images)  defines place public files live.  
app.use(express.static(__dirname + '/public'));  // folder called public in the directory where the app is stored.

// Routes \\
app.get('/', function(req, res){
  res.send('Hello')
});


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})