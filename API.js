const request = require('request');
//const process = require('process')

request.patch(
  {
    url:'https://reqres.in/api/users/2',
    form: {
      name: 'Dude'
    }
  },
  function (error, response, body) {
  console.log(response.statusCode)
  console.log(body)
  }
);

/*
{
  "data":
  {
    "id":2,
    "email":"janet.weaver@reqres.in",
    "first_name":"Janet",
    "last_name":"Weaver",
    "avatar":"https://reqres.in/img/faces/2-image.jpg"
  },
  "support":
  {
    "url":"https://reqres.in/#support-heading",
    "text":"To keep ReqRes free, contributions towards server costs are appreciated!"
  },
}
*/

