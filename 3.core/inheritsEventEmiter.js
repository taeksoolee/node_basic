var util = require('util');
var EventEmiter = require('events').EventEmitter;
var fs = require('fs');

function InputChecker (name, file) {
  this.name = name;
  this.writeStream = fs.createWriteStream(
    './' + file + '.txt',
    {
      'flags' : 'a',
      'encoding': 'utf8',
      'mode': 0666
    }
  )
}

util.inherits(InputChecker, EventEmiter);

InputChecker.prototype.check = function check(input) {
  var command = input.toString().trim().substr(0,3);
  if(command == 'wr:'){
    this.emit('write', input.substr(3, input.length));
  }else if(command == 'en') {
    this.emit('end');
  } else {
    this.emit('echo', 'input')
  }

  //this.emit('write', input);
}

var ic = new InputChecker('shelley', 'output');

ic.on('write', function(data){
  this.writeStream.write(data, 'utf8');
})

ic.on('echo', function(data){
  console.log('end!!')
  process.exit();
})

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input){
  console.log(input);
  ic.check(input);
})
