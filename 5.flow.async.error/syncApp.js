var fs = require('fs');

try{
  var data = fs.readFileSync('./apples.txt', 'utf8');
  console.log(data);
  var adjData = data.replace(/[A/a]pple/g, 'orenge');

  fs.writeFileSync('/oranges.txt', adjData);

}catch(err){
  console.log(err)
}