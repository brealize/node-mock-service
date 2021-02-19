// var http = require("http")

// http.createServer(function(request,response){
// 	response.writeHead(200,{'Content-Type':'text/plain'});
// 	response.end("hello World\n")
// }).listen(8888)

// console.log('Server running at http://127.0.0.1:8888/')





// var http = require('http');
// var url = require('url')

// function start(route){
// 	function onRequest(request,response){
// 		var pathname = url.parse(request.url).pathname;
// 		console.log('Request for' + pathname + 'received.')
		
// 		route(pathname)
		
// 		response.writeHead(200,{'Content-Type':"text/plain"})
// 		response.write("Hello world")
// 		response.end();
// 	}
	
// 	http.createServer(onRequest).listen(8888);
// 	console.log('Server has started.')
// }

// exports.start = start




var http = require('http');
var fs = require('fs')
var url = require('url')

http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	
	console.log("request for" + pathname + 'received.')
	
	fs.readFile(pathname.substr(1),function(err,data){
		if(err){
			console.log(err);
			res.writeHead(404,{'Content-Type':'text/html'})
		}else{
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write(data.toString())
		}
		res.end();
	})
}).listen(8080)