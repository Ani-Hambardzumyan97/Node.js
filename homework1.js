var os = require('os'); 
var gigaByte = 1 / (Math.pow(1024, 3)); 
console.log('Total Memory', os.totalmem() * gigaByte, 'GBs'); 