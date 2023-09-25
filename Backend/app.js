//a normal server
const http = require('http');

const attendees = ['koxy', 'KEN']

const server = http.createServer((req, res) => {
     if (req.url === '/') {
          res.write("hell babe")
          // res.write(JSON.stringify(attendees))
          res.end()
     }

     if (req.url === '/api/attendees') {
          res.write(JSON.stringify(attendees))
          res.end()
     }

     if (req.url === '/api/attendees/:id') {
          const attendee = attendees[req.query.id]
          console.log(attendee)
          res.write(JSON.stringify(attendee))
          res.end()
     }
})
server.listen(3000)
console.log("listening to port 3000")
