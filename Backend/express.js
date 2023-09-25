//express server
const express = require('express')
const app = express()

const attendees = ['koxy', 'lexx', 'lisa', 'motun']

app.get('/', (req, res) => {
     res.send('welcome koxy');
})

//difference between a query and a param

//query is used when you are not accessing. Writteen as /api/attendees/
//any information in the database, it is juzt a random tag.
//eg form, password or sending random information

app.get('/api/attendees', (req, res) => {
     const attendee = attendees[req.query]
     res.send('come back home');
})

//param is used when to access an information in a database. 
//it is Written as /api/attendees/:id
//eg detting random details from a database.

app.post('/api/attendees/:id', (req, res) => {
    const attendee = attendees.push[req.params.id]
     res.send(JSON.stringify(attendee))
})

app.delete('/api/attendees/:id', (req, res) => {
     const newAttendeee = attendees.filter((e, i) => i !=req.params.id)
     console.log(JSON.stringify(newAttendeee))
     res.send()
})


app.listen(3000, () => console.log('listening on port 300'))