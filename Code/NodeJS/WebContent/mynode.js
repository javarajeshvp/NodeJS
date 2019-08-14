var http=require("http");
var server = http.createServer(function(request, response){
	//response.writeHead(200,{'contet-Type':'text/plain'});
	response.end('Helo rajesh VP');
	
});

server.listen(8082);