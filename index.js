const http = require('http');
const serveStatic = require('serve-static');
let serve = serveStatic('public')
http.createServer(function (req, res) {
  serve(req, res);
}).listen(8080);
console.log('Server is running on Port: 8080');