var http = require('http');
var fs = require('fs');


function writeNumbers(res){
  var counter = 0;

  for(var i = 0; i<10; i++){
    counter++;
    res.write(counter.toString() + '\n');
  }
}

http.createServer(function(req, res){
  var query = require('url').parse(req.url).query;
  var app = require('querystring').parse(query).file + '.txt';

  res.writeHead(200, {'Content-Type': 'text/plain'});

  writeNumbers(res);

  // async 
  setTimeout(function(){
    console.log('opening ' + app);
    fs.readFile(app, 'utf-8', function(err, data){
      if(err){
        res.write('Could not find or open file for reading\n');
      }else{
        res.write(data);
      }
    })
  }, 2000);

  /* 
  new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('opening ' + app);
      fs.readFile(app, 'utf-8', function(err, data){
        if(err){
          resolve('Could not find or open file for reading\n');
        }else{
          resolve(data);
        }
      })
    }, 2000);
  }).then(function(result){
    res.write(result);
  }).catch(function(error){
    console.log(err);
  }).finally(function(){
    res.end();
  });
  */
}).listen(8124);

console.log(`Server running at 8124`);