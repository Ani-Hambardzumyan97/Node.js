var http = require('http');
var querystring = require('querystring');
const fs =require('fs');
// Create a server
http.createServer( function (req, res) {  
   // Parse the request containing file name

     if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); 
    });
    req.on('end', () => {
        var firstName=querystring.parse(body).first_name;
        var lastName=querystring.parse(body).last_name;
        var filterWord = querystring.parse(body).filter;

     if(filter==firstName){
     	var content= firstName;
       res.end(content)
   }
   else if(filter==lastName){
    var content= lastName;
    res.end(content)
    }else{
   	res.writeHead(200,{'content-type':'text/html'});
    		res.end(`<form method="POST">
        <input name="filter" type="text" 
	<p>
		First Name <input type="" name="first_name">
	</p>
  <p>
		Last Name <input type="" name="last_name">
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
		Name<input type="" name="file">
	</p>
	<p>
	
	<input type="submit" name="" value="Send">
	
</form>`)
    }





 
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/')
