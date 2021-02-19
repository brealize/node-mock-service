var events = require('events');

var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected(){
// 	console.log('链接成功')
	
// 	eventEmitter.emit('data_received')
// }

// eventEmitter.on('connection',connectHandler);

// eventEmitter.on('data_received',function(){
// 	console.log('数据接收成功')
// })

// eventEmitter.emit('connection')

// console.log('程序执行完毕')

//

eventEmitter.on('someEvent',function(arg1,arg2){
	console.log('listener1',arg1,arg2)
})

eventEmitter.on('someEvent',function(arg1,arg2){
	console.log('listener2',arg1,arg2)
})

eventEmitter.emit('someEvent','arg1参数','arg2参数')