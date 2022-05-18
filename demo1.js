var http = require('http');

http.createServer(function(req,res)
{
    res.write("Hello Team! Welcome to bootcamp");
    res.end();
}).listen(8080);
