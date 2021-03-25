var http = require('http');
var querystring = require('querystring');
const fs =require('fs');
// Create a server
http.createServer( function (req, res) {  
   // Parse the request containing file name

     if (req.method === 'GET') {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); 
    });
    req.on('end', () => {
        var name=querystring.parse(body).name;

     if(name=="sunny"){
     	var content= fs.readFileSync(name+'.txt');
       res.end(content)
   }else{
   	res.writeHead(200,{'content-type':'text/html'});
    		res.end(`<form method="POST">
	<p>
		Name<input type="" name="name">
	</p>
	<p>
	
	<input type="submit" name="" value="Send">
	
</form>`)
   }
       

    });
    }else{
    	      	res.writeHead(200,{'content-type':'text/html'});
    		res.end(`<form method="POST">
	<p>
		Name<input type="" name="name">
	</p>
	<p>
	
	<input type="submit" name="" value="Send">
	
</form>`)
    }





 
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/')
