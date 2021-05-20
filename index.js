const request = require('request');

request('https://github.com/Lidemy/mentor-program-5th-channy666', function (error, response, body) {
  //console.error('error:', error); 
  //console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body);
});