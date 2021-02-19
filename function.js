function say(word){
	console.log(word);
}

function execute(someFunction,value){
	someFunction(value)
}

execute(say,'hello')

execute(function(word){console.log(word)},'hello world')

var http = require('http')

function onRequest(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('is response')
	response.end();
}

http.createServer(onRequest).listen(8888);