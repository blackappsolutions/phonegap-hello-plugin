phonegap-hello-plugin
=====================

My first phonegap plugin which respects the new cli interface.

To install: phonegap local plugin add https://github.com/blackappsolutions/phonegap-hello-plugin.git
To remove:  phonegap local plugin remove de.blackapp.phonegap.hello

To use (maybe inside of function receivedEvent from <PROJECT_ROOT>/platforms/ios/www/js/index.js):

        window.Hello("echome", function(echoValue) {
            alert("Echo from inside our app: " + echoValue);
        });
