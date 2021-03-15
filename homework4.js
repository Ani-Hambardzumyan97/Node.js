var fs = require("fs");  
// Asynchronous read  
fs.readFile('input.txt', function (err, data) {  
   if (err) {  
       return console.error(err);  
   }  
  var str=data.toString()
   data1=str.replace(/ /g,"-")

console.log(data1);
   fs.writeFile('write.txt', data1, ()=>{
   	console.log('written')
   }); 

});  
