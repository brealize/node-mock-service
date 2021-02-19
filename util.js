const util = require('util');

// async function fn(){
// 	return 'hello world'
// }
// const callbackFunction = util.callbackify(fn);

// callbackFunction((err,ret)=>{
// 	if(err) throw err;
// 	console.log(ret)
// })

function fn(){
	return Promise.reject(null);
}

const callbackFunction = util.callbackify(fn);

callbackFunction((err,ret)=>{
	err && err.hasOwnProperty('reason') && err.reason === null;
})

//util.inherits 实现对象间原型继承
function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayhello = function(){
		console.log('hello'+this.name)
	}
}
Base.prototype.showName = function(){
	console.log(this.name)
}
function Sub(){
	this.name = 'sub'
}
util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName()
objBase.sayhello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
console.log(objSub)