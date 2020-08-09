var http = require('http');
var path = require('path');
var fs = require('fs');
var mime = require('mime');
var base = './examples/public';

http.createServer(function(req, res){

  var url = req.url;
  if(url == '/'){
    url = '/index.html';
  }

  pathname = base + url;
  console.log(pathname);

  fs.stat(pathname, function(err, stat){
    if(err) {
      res.writeHead(404);
      res.write('Bad request 404 \n');
      res.end();
    } else if(stat.isFile()) {
      res.setHeader('Content-Type', mime.getType(pathname));
      res.statusCode = 200;
      var file = fs.createReadStream(pathname);

      file.on('open', function(){
        file.pipe(res);
      });

      file.on('error', function(err){
        console.log(err);
      })
    } else {
      res.writeHead(403);
      res.write('directory access forbidden \n');
      res.end();
    }
  });
}).listen(8124);

console.log('Server running at 8124/');


