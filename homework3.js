var fs = require("fs");
var os = require("os"); 
var rand=require('random');

var fileName=rand.int(1e7,1e8);
var data=os.cpus().length;


   fs.writeFile(fileName+'.txt', data, ()=>{
   	console.log('written')
   }); 

