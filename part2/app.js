// Requires \\
var express = require('express');
var bodyParser = require('body-parser');


// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendfile('home.html', {root : './public'});
});

app.post('/formsubmit', function(req, res){
	res.redirect('/success')
})

app.get('/success', function(req, res){
	console.log('Form :', req.body)
	res.send('Success.')
})
// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})  