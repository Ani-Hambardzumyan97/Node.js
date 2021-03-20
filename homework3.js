const { Transform } = require('stream');

class RemoveSpecialChars extends Transform {

  constructor(char) {
    super();
    this.replaceChar = char;
  }

  _transform(chunk, encoding, callback) {
      const transformChunk = chunk.toString()
        .replace(/[$&+,:;=?@#|'<>.-^*()%!]/g, "");
      this.push(transformChunk)
      callback();
  }



}

var sStream = new RemoveSpecialChars('Hello!:-)');

process.stdin
  .pipe(sStream)
  .pipe(process.stdout);