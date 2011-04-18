var http = require('http');
 
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Hello world\n");
  res.end("Trying node.js out. See how it works.\n");
});
 
server.listen(process.env.PORT || 8001);

