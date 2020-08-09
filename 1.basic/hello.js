var http = require('http');

var port = 8124;

http.createServer(function(req, res){
  // req : http.ServerRequest
  // res : http.ServerResponse

  // head = {
  //   'content-length' : 123,
  //   'content-type' : 'text/plain',
  //   'connection' : 'keep-alive',
  //   'accept': '*/*'
  // }
  

  res.write('hello world');

  //http:serverResponse.end
  // param1 : data chunk
  // param2 : encoding type
  res.end();
  // = res.end('hello world\n');

}).listen(port);

console.log(`Server running on ${port}`);

