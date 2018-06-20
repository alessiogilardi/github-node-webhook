var fs = require('fs'); 
var https = require('https'); 
var options = { 
    key: fs.readFileSync('encryption/server-key.pem'), 
    cert: fs.readFileSync('encryption/server-crt.pem'), 
    ca: fs.readFileSync('encryption/ca-crt.pem'), 
};

https.createServer(options, function (request, response) { 
    console.log(new Date()+' '+ 
        request.connection.remoteAddress+' '+ 
        request.method+' '+request.url); 
    if (request.method === 'POST') {
    	let body = [];
    	request.on('data', (chunk) => {
    		body.push(chunk);
    	}).on('end', () => {
    		body = Buffer.concat(body).toString();
    		d = JSON.parse(body);
    		response.statusCode = 200;
    		response.end();
    	});
    } else {
    	response.statusCode = 404;
    	response.end();
}}).listen(8433);