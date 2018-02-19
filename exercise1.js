var request = require('request');
var fs = require('fs');

console.log('Downloading Image...');
request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         console.log('Fatal Error Occurred!!', err);
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ',response.statusMessage);
         console.log('Response Headers: ',response.headers['content-type']);
         console.log('Download complete');
       })
       
       .pipe(fs.createWriteStream('./future.jpg'))

       .on('end', function() {
         
       });

