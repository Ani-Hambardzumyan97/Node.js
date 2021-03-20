const { Transform } = require('stream');
const fs = require("fs")

const readableStream = fs.createReadStream('./input.txt');

new Promise((resolve, reject) => {
   class toUppercase extends Transform {
    
      _transform(chunk, encoding, callback) {
          const transformChunk = chunk.toString();
          transformChunk.charAt(0).toUpperCase() + transformChunk.slice(1);
          this.push(transformChunk)
          callback();
      }
   }
   toUppercase(readableStream)
}).finally(() => alert("Promise ready"))
.then(

 result => alert(result), // shows "done!" after 1 second
 error => alert(error) // doesn't run


)
 
