require('cordova/exec');

window.Hello = function (str, callback) {
  cordova.exec(callback, function (err) {callback('Nothing to echo.');}, "Hello", "foo", ["Android"+str]);
};

module.exports = window.Hello;
