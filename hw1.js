const request = require('request')

request('https://lidemy-book-store.herokuapp.com/books?_limit=10', function (error, response, body) {
  const arr = JSON.parse(body)
  for (let i = 0; i < 10; i++) {
    console.log(Number(arr[i].id), arr[i].name)
  }
})

/*
request.patch(
  {
    url:'https://lidemy-book-store.herokuapp.com/posts/6',
    form: 
    {
      id: 5,
      content: '*********'
    }
  }, 
  function(err, httpResponse, body){
    console.log(body)
  }
)
*/



/*
request.post(
  {
    url:'https://lidemy-book-store.herokuapp.com/posts',
    form: 
    {
      id: 7,
      content: '.......'
    }
  }, 
  function(err,httpResponse,body){
    console.log(body)
  }
)
*/

/*

request.post(
  {
    url:'https://lidemy-book-store.herokuapp.com/posts',
    form: 
    {
      "content": "踏踏！"
    }
  }, 
  function(err,httpResponse,body){
    console.log(body)
  }
)
*/
