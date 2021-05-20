const request = require('request')
const process = require('process')


if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20', function (error, response, body) {
    const arr = JSON.parse(body)
    for (let i = 0; i < 20; i++) {
      console.log(Number(arr[i].id), arr[i].name)
    }
  })
}

if (process.argv[2] === 'read') {
  request('https://lidemy-book-store.herokuapp.com/books/' + process.argv[3], function (error, response, body) {
    const obj = JSON.parse(body)
    console.log(obj.name)
  })
}


if (process.argv[2] === 'delete') {
  request.del('https://lidemy-book-store.herokuapp.com/books/' + process.argv[3])
}



if (process.argv[2] === 'create') {
  
  request.post(
      {
        url:'https://lidemy-book-store.herokuapp.com/books',
        form:
        {
          name: process.argv[3]
        }
      },
      function(err, response, body) {
        console.log(body)
      }
    )
}


if (process.argv[2] === 'update') {
  request.patch(
    {
      url:'https://lidemy-book-store.herokuapp.com/books/' + process.argv[3],
      form:
      {
        //id: process.argv[3],
        name: process.argv[4]
      }
    },
    function(err, response, body) {
      console.log(body)
    }
  )
}



/*
request('https://lidemy-book-store.herokuapp.com/books/' + process.argv[3], function (error, response, body) {
  console.log(body)
})


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

request.patch(
  {
    url:'https://lidemy-book-store.herokuapp.com/books/21',
    form: 
    {
      name: 'WHAT??!!!'
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