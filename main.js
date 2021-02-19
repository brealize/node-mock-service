var fs = require("fs");

// var data = fs.readFileSync('input.txt')

// console.log(data.toString());
// console.log('程序执行介绍')

// 非阻塞
// fs.readFile('input.txt',function(err,data){
// 	if(err) return console.error(err);
// 	console.log(data.toString())
// })

// console.log('执行完毕')

//监听器
var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log('listener1执行')
}

var listener2 = function listener2(){
	console.log('listener2执行')
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2)

var eventListeners = eventEmitter.listenerCount('connection')
console.log(eventListeners + '个监听器监听连接事件')

eventEmitter.emit('connection')

eventEmitter.removeListener('connection',listener1)
console.log('listener1不再监听')

eventEmitter.emit('connection')

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners+'个监听器')

console.log('程序监听完毕')

eventEmitter.emit('error')