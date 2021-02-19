exports.world = function(){
  console.log('Hello World');
}

exports.hello = function(){
	var name;
	this.setName = function(thyName){
		name = thyName;
	}
	this.sayHello = function(){
		console.log('hello'+name)
	}
}



