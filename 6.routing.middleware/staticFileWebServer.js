var http = require('http');
var path = require('path');
var fs = require('fs');
var base = './examples/public';

http.createServer(function(req, res){

  var url = req.url;
  if(url == '/'){
    url = '/index.html';
  }

  pathname = base + url;
  console.log(pathname);


  fs.exists(pathname, function(exists){
    if(!exists) {
      res.writeHead(404);
      res.write('Bad request 404 \n');
      res.end();
    }else {
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = 200;
      var file = fs.createReadStream(pathname);

      file.on('open', function(){
        file.pipe(res);
      });

      file.on('error', function(err){
        console.log(err);
      })
    }
  });
}).listen(8124);

console.log('Server running at 8124/');


