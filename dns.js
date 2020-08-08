var dns = require('dns');

var ip = '127.0.0.1';

var logger = function(obj){
  if(obj.err){
    console.log(obj.err);
  } else {
    if(obj.arr){
      obj.arr.forEach(element => {
        console.log(element);
      }); 
    }else{
      console.log(obj.data);
    }
  }
}

dns.lookup('naver.com', function(err, ip){
  logger({err, data:ip});
  ip = ip;
})

dns.reverse('210.89.160.88', function(err, domains){
  logger({err, arr: domains});
})


