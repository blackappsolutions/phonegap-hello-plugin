phonegap-hello-plugin
=====================

My first phonegap plugin which respects the new cli interface.

To install:

      phonegap local plugin add https://github.com/blackappsolutions/phonegap-hello-plugin.git


To remove:

      phonegap local plugin remove de.blackapp.phonegap.hello


Don't forget to update your platforms afterwards with

      phonegap build ios android


To use (maybe inside of function receivedEvent from <PROJECT_ROOT>/platforms/ios/www/js/index.js):

   myGreeter.sayHello(function(echoValue) {
      alert(echoValue);
   });

   myGreeter.tellTheTime(function(echoValue) {
      alert(echoValue);
   });
