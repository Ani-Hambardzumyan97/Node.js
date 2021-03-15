const os = require('os');
console.log(os.networkInterfaces()['Wi-Fi'][1].address);