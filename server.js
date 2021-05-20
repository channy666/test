let http = require('http')

let server = http.createServer(function(req, res) {
  if (req.url ==='/') {
    res.write('Welcome!')
    res.end()
    return
  }

  if (req.url === '/hello') {
    res.write('Hello!')
    res.end()
    return
  }

  if (req.url === '/redirect') {
    res.writeHead(302, {
      'Location': 'https://google.com'
    })
    res.end()
    return
  }
  res.writeHead(404)
  res.end()
})
  


server.listen(5000) //port