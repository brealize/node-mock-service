const buf = Buffer.from('runoob','ascii');

// const buf = Buffer.from('hello world','utf8')
console.log(buf.toString('hex'));

console.log(buf.toString('base64'))

console.log(buf.toString('utf8'))

const buf1 = Buffer.alloc(10)
const buf2 = Buffer.alloc(10,1)
const buf3 = Buffer.allocUnsafe(10)
const buf4 = Buffer.from([1,2,3])
const buf5 = Buffer.from('tést')
const buf6 = Buffer.from('tést', 'latin1')

console.log(buf1,buf2,buf3,buf4,buf5,buf6)

sbuf = Buffer.alloc(256);
len = sbuf.write('www.runoob.com')
console.log('写入字节数'+len)

sbuf.toString()

ts = Buffer.alloc(26);
for(var i=0;i<26;i++){
	ts[i] = i+97
}

console.log(ts.toString('ascii'))
console.log(ts.toString('ascii',0,5))
console.log(ts.toString())
console.log(ts.toString(undefined,0,5))

var buff1 = Buffer.from('abcdefghikjl');
var buff2 = Buffer.from('runoob')

buff2.copy(buff1,2)
console.log(buff1,toString());