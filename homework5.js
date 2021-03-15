var fs=require('fs');
var os = require('os'); 

var date=new Date();
var hour=date.getHours();
var time= date.getHours();
var second = date.getSeconds(); 

var fileName=os.platform()+ "_"+hour+ "_" + time + "_" + second;
var content="";
for(let i=1;i<5;i++){
	content+=fs.readFileSync('homework'+i+'.js',"utf8")+'\n';
}


console.log(content);

fs.writeFileSync(fileName+'.txt', content);




  
