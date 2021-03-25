var http = require('http');

// Create a server
http.createServer( function (req, res) { 

   if(req.url=='/sunny'){
     console.log('Yes');
   }
   
 
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/')
