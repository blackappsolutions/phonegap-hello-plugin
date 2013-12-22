require('cordova/exec');

var Greeter = function (message) {
  this.msg = message;
};

Greeter.prototype.sayHello = function (callback) {
  cordova.exec(callback, function (err) {
    callback('Nothing to echo.');
  }, "Hello", "foo", ["iOS: " + this.msg]);
};

/* Here we stay in js-land */
Greeter.prototype.tellTheTime = function (callback) {
  callback(new Date() + this.msg);
};

var myGreeter = new Greeter("---- Testomat ----")
module.exports = myGreeter;
