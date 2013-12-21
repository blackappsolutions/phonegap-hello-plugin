// require('cordova/exec');
window.Hello = function (str, callback) {
  cordova.exec(callback, function (err) {callback('Nothing to echo.');}, "Hello", "foo", [str]);
};
/*
 if (typeof module != 'undefined' && module.exports) {
 module.exports = window.Hello;
 }
 */
