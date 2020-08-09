var fs = require('fs')
var async = require('async');

var asyncFunc = async function(path){
  console.log(path);

  return new Promise(function(resolve){
    fs.readFile(path, 'utf8', function(err, data){
      resolve(data);
    });
  })
}

var test = async function(){
  var data1 = await asyncFunc('./data/data1.txt');
  var data2 = await asyncFunc('./data/data2.txt');
  var data3 = await asyncFunc('./data/data3.txt');
  
  console.log({data1, data2, data3});
}

test();

/*
Promise.all([
  (function(){ 
    return new Promise(function(resolve){
      fs.readFile('./data/data1.txt', 'utf8', function(err, data){
        resolve(data);
      })
    });
  })(),
  (function(){ 
    return new Promise(function(resolve){
      fs.readFile('./data/data2.txt', 'utf8', function(err, data){
        resolve(data);
      })
    });
  })(),
  (function(){ 
    return new Promise(function(resolve){
      fs.readFile('./data/data3.txt', 'utf8', function(err, data){
        resolve(data);
      })
    });
  })()]
).then(function(results){
  console.log(results);
})
*/

/*
try {
  // 병렬로 실행
  async.parallel(
    {
      data1: function(callback){
        fs.readFile('./data/data1.txt', 'utf8', function(err, data){
          callback(err, data);
        })
      },
      data2: function(callback){
        fs.readFile('./data/data2.txt', 'utf8', function(err, data){
          callback(err, data);
        })
      },
      data3: function(callback){
        fs.readFile('./data/data3.txt', 'utf8', function(err, data){
          callback(err, data);
        })
      }, 
    },
    function(err, result) {
      if(err) throw err;

      console.log(result);
    }
  );
} catch (err) {
  console.log(err);
}
*/