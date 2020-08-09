var fs = require('fs');

try{
  fs.readFile('./apples.txt', 'utf8', function(err, data){
    if(err) throw err;

    console.log(data);
    var adjData = data.replace(/[A/a]pple/g, 'orenge');

    fs.writeFileSync('/oranges.txt', adjData);
  });
  

}catch(err){
  console.log(err)
}