var https = require('https');
var fs    = require('fs');
var sys   = require('sys')
var exec  = require('child_process').exec;

var port  = 8433;

var options = {
  key: fs.readFileSync('privateKey.key'),
  cert: fs.readFileSync('certificate.crt')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  
  //res.end("hello world!");
}).listen(port);

console.log("Listening to port " + port);

function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("ls -la", puts);