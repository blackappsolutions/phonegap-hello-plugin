require('cordova/exec');

var Greeter = {
  /* This goes into native-land */
  sayHello : function (str, callback) {
    cordova.exec(callback, function (err) {callback('Nothing to echo.');}, "Hello", "foo", ["Android: "+str]);
  },
  /* Here we stay in js-land */
  tellTheTime : function (str, callback) {
    callback(new Date() + str);
  }
};

module.exports = Greeter;
