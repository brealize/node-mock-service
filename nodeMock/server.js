//使用nodejs搭建本地服务器，返回mockjs的测试数据接口模板

let express = require('express');    //引入express模块
let Mock = require('mockjs');        //引入mock模块

let app = express();                //实例化express



/**
 * 配置test.action路由
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */


//制作分页返回数据
var MockRandom = Mock.Random;
var pageCount = MockRandom.integer(1,10);
var haseMore = true;
var ids = 10000;
var bookListTemplate={}
console.log(pageCount)

app.all('/paging.action',function(req,res,next){
	var currentPage = parseInt(req.query.currentPage || 1);
	console.log('当前请求page页：'+currentPage)
	ids = 10000+currentPage * 10;
	if(currentPage === pageCount){
		haseMore = false;
		bookListTemplate = {
			"hasMore":false,
			'totalPage':pageCount,
			'list|1-10':[
				{
					'id|+1':ids,
					'title':'@ctitle(5,15)',
					'desc':'@cparagraph(2,5)',
					//'img'：MockRandom.image('200x100', '#4A7BF7', '@name book'),
					'time':MockRandom.now('yyy-MM-dd')
				}
			]
		}
	}else{
		bookListTemplate = {
			'hasMore': true,
		  'totalPage': pageCount,
		  'list|10': [//有分页的时候一页10条数据
			{
			  'id|+1': ids,
			  'title': '@ctitle(5, 15)',
			  'desc': '@cparagraph(2, 5)',
			  'img': MockRandom.image('200x100', '#4A7BF7', '@name book'),//经测试MockRandom.dataImage()无效,看了下源码，是有该函数的 - 下的mockjs@1.0.1-beta3包
			  'time': MockRandom.now('yyyy-MM-dd')
			}
		  ]
		}
	}
	var mockData = Mock.mock(bookListTemplate);
	res.json({
		status:true,
		data:mockData,
		msg:''
	})
})

//测试案例
app.all('/json.action', function(req, res) {
    /**
     * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
     */
    res.json(Mock.mock({
        "status": 200,
        "data|1-9": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+1": 1,
            "value|0-500": 20
        }]
    }));
});

//用户信息案例
app.all('/userinfo.action',function(req,res){
	res.json(Mock.mock({
		"status":200,
		"userinfo|10-20":[{
			"name":'@cname',
			"id|+1":1,
			"region":'@province',
			"email":'@email',
			"desc":"@cparagraph"
		}]
	}))
})

/*为app添加中间件处理跨域请求*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
/**
 * 监听8090端口
 */
app.listen('8090');
console.log('localhost:8090')