var http = require('http');
var fs = require('fs');

var options = {
  host: 'localhost',
  port: '8124',
  path: '/?file=secondary',
  method: 'get'
}

var processPublicTimeline = function(response){
  console.log('finishedd request');
  console.log(JSON.stringify(response));
  fs.writeFile('test.txt', 'hello world', function(){
    console.log('success');
  });


}

for(var i = 0; i < 1; i++){
  http.request(options, processPublicTimeline).end();
}