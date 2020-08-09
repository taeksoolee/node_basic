var connect = require('connect');
var http = require('http');

var app = connect()
  //.use(connect.favicon())
  //.use(connect.logger())
  .use(function(req, res){
    res.end('hello world \n');
  });

http.createServer(app).listen(8124);