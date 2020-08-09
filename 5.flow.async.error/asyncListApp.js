var fs = require('fs');
const { finished } = require('stream');

var writeStream = fs.createWriteStream('./log.txt',
  {
    'flag': 'a',
    'encoding': 'utf8',
    'mode': 0666
  }
);

try {
  // 파일 목록을 자겨옴
  fs.readdir('./data/', function(err, files){
    console.log(files);
    files.forEach(function(name){
      fs.readFile('./data/' + name, 'utf8', function(err, data){
        if(err) throw err

        var adjData = data.replace(/somecompany\.com/g, 'burningbird.net');

        fs.writeFile('./data/' + name, adjData, function(err){
          if(err) throw err;

          writeStream.write('changed '  + name + '\n', 'utf8', function(err){
            if(err) throw err;
          });
          console.log('finished' + name);
        })
      })
    })
  })
} catch(err) {

}