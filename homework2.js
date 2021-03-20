const fs = require('fs');

const readableStream = fs.createReadStream('./homework2.txt',{
    highWaterMark: 1
});
const writeStream =fs.createWriteStream('homework2arm.txt');
var engArm={
        a : 'ա',
		b : 'բ',
		g : 'գ',
		d : 'դ',
		e : 'ե',
		z : 'զ',
		e : 'է',
		y : 'ը',
		t : 'թ',
		i : 'ի',
		l : 'լ',
		x : 'խ',
		k : 'կ',
		h : 'հ',
		m : 'մ',
		y : 'յ',
		n : 'ն',
		o : 'ո',
		p : 'պ',
		j : 'ջ',
		r : 'ռ',
		s : 'ս',
		v : 'վ',
		t : 'տ',
		r : 'ր',
		c : 'ց',
		w : 'ւ',
		p : 'փ',
		q : 'ք',
		o : 'օ',
		f : 'ֆ',
		u : 'ու',
		
		}

readableStream.setEncoding('UTF8')

readableStream.on('data', (chunk) => {
	var index=chunk.toString().toLowerCase()
	if(engArm[index]==undefined){
		writeStream.write(' ')
	}else{
		
		writeStream.write(engArm[index])
	}
   
 
});

readableStream.on('end', () => {
    console.log('DONE');
});


  