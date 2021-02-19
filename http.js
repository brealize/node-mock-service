var http = require('http');
var fs = require('fs')
var url = require('url')

// http.createServer(function(req,res){
// 	var pathname = url.parse(req.url).pathname;
	
// 	console.log("request for" + pathname + 'received.')
	
// 	fs.readFile(pathname.substr(1),function(err,data){
// 		if(err){
// 			console.log(err);
// 			res.writeHead(404,{'Content-Type':'text/html'})
// 		}else{
// 			res.writeHead(200,{'Content-Type':'text/html'});
// 			res.write(data.toString())
// 		}
// 		res.end();
// 	})
// }).listen(8080)

// 用于请求的选项
var options = {
   host: 'localhost',
   port: '8080',
   path: '/index.html'  
};
 
// 处理响应的回调函数
var callback = function(response){
   // 不断更新数据
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // 数据接收完成
      console.log(body);
   });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();

console.log('server running at http://127.0.0.1:8080/')