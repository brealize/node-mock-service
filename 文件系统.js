var fs = require('fs')

// fs.readFile('input.txt',function(err,data){
// 	if(err){
// 		return console.log(err);
// 	}
// 	console.log('异步读取：'+data.toString())
// })

// var data = fs.readFileSync('input.txt');
// console.log('同步读取：'+data.toString());

// console.log('程序执行完毕。')

fs.open('input.txt','r+',function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log('文件打开成功')
})

fs.stat('input.txt',function(err,stats){
	if(err){
		return console.error(err)
	}
	console.log(stats)
	console.log('读取文件信息成功')
	
	console.log("是否为文件(isFile)?"+stats.isFile())
	console.log("是否为目录(isDirectory)?"+stats.isDirectory())
})