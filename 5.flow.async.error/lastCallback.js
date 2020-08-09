var Obj = function() {};

Obj.prototype.doSomthing = function(arg1, arg2_){
  var arg2 = (typeof(arg2_) === 'string') ? arg2_ : null;

  var callback_ = arguments[arguments.length -1];

  var callback = (typeof(callback_) == 'function') ? callback_ : null;

  if(!arg2)
    return callback(new Error('second argument missing or not a string'));

  callback(arg1);
}

var test = new Obj();
try {
  test.doSomthing('test', 'this', function(err, value){
    if(err) throw err;
    console.log(value);
  })
} catch (err) {
  console.error(err);
}