let express = require('express');    //引入express模块
let Mock = require('mockjs');        //引入mock模块
var bodyParser = require('body-parser')
let app = express();                //实例化express
var bodyParser = require('body-parser')
 // var multer = require('multer')

app.use('/public',express.static('public'))



var urlencodedParser = bodyParser.urlencoded({extended:false})

app.post('/process_post',urlencodedParser,function(req,res){
	var response = {
		"first":req.body.first_name,
		"last":req.body.last_name
	}
	console.log(response);
	res.end(JSON.stringify(response))
})

app.get('/process_get',function(req,res){
	var response = {
		"first_name":req.query.first_name,
		"last_name":req.query.last_name
	}
	console.log(response);
	res.end(JSON.stringify(response))
})


app.get('/', function (req, res) {
   res.send('Hello World');
})

app.post('/',function(req,res){
	console.log('主页post请求');
	res.send("hello post")
})

app.get('/del_user',function(req,res){
	console.log('del_user响应delete请求')
	res.send('删除页面')
})

app.get('/ab*cd',function(req,res){
	console.log('/ab*cd GET请求');
	res.send('正则匹配')
})


//文件上传

//app.use(multer({dest:'/tmp/'}).array('image'));
app.post('/file_upload',function(req,res){
	console.log(req.files[0]);
	
	var des_file = __dirname+"/"+req.files[0].originalname;
	fs.readFile(req.files[0].path,function(err,data){
		fs.writeFile(des_file,data,function(err){
			if(err){
				console.log(err)
			}else{
				response = {
					message:"File uploaded successfully",
					filename:req.files[0].originalname
				}
			}
			console.log(response);
			res.end(JSON.stringify(response));
		})
	})
})

//处理cookie
// var cookieParser = require('cookie-parser')
// app.get('/',function(req,res){
// 	console.log("Cookies:"+util.inspect(req.cookies));
// })


/*为app添加中间件处理跨域请求*/
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
/**
 * 监听8090端口
 */
app.listen('8090');

console.log('localhost:8090')