var util = require('util');

// 1. first
function First(){
  var self = this;
  this.name = 'first';
  this.test= function(){
    console.log('test!');
    console.log(self.name);
  }
}
First.prototype.output = function(){
  console.log('output!');
  console.log(this.name)
}

console.log('1. first')
var one = new First()
one.test()
console.log('=========')


// 2. second
function Second(){
  // super consturctor
  Second.super_.call(this);
  this.name = 'second'
}
util.inherits(Second, First);

console.log('2. second')
var two = new Second()
two.test();
two.output();
console.log('=========')

// 3. third
function Third(func){
  this.name = 'THIRD';
  this.callMethod = func;
}

console.log('3. third')
var three = new Third(two.test);
three.callMethod();




