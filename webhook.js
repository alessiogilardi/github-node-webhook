var fs = require('fs'); 
var https = require('https'); 
var options = { 
    key: fs.readFileSync('encryption/server-key.pem'), 
    cert: fs.readFileSync('encryption/server-crt.pem'), 
    ca: fs.readFileSync('encryption/ca-crt.pem'), 
};

https.createServer(options, function (req, res) { 
    console.log(new Date()+' '+ 
        req.connection.remoteAddress+' '+ 
        req.method+' '+req.url); 
    res.writeHead(200); 
    res.end("hello world\n"); 
}).listen(8433);