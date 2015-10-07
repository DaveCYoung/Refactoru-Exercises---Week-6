var http = require('http')

var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'html'})
	response.end('<h1>hello world</h1>')
})//web server is basically callback function

server.listen(8000)