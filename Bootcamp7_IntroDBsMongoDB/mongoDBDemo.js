//index.js
const express = require('express')
const mongoose = require('mongoose')

const app = express()
// you need this for parsing JSON
app.use(express.json())

// ------------------ connect to MongoDB
const url = "mongodb+srv://dbUserCole:dbPassword@cluster0.lsqhe.mongodb.net/Example-for-demos?retryWrites=true&w=majority"

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((error) => console.log('Could not connect to mongoDB :( ', error.message ))

// ----------------- This is a schema/model
const PersonSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone: String,
  city: String,
  profession: [String],
  cars: [Object],
}, {collection: 'Demo'});

const Person = mongoose.model('Person', PersonSchema)
// --------------- end of schema/model

// default route
app.get('/', (req, res) => {
  res.send('Hello all!')
})

// gets all People from route
app.get('/api/person', async (req, res) => {
  const people = await Person.find({})
  res.send(people)
})

// adds new person from route, given the below exists in the post requests body
app.post("/api/person", async (req, res) => {
  const { first_name, last_name, phone, city, profession, cars } = req.body
  let person = new Person({
    first_name,
    last_name,
    phone,
    city,
    profession,
    cars
  })

  person.save(function (err, person) {
    if (err) { 
      return next(err) 
    }
    res.send(`Person named ${first_name} ${last_name} added to collection`)
  })
});

// deletes person given id, given id is in requests body
app.delete("/api/person", (req, res) => {
  Person.findByIdAndRemove(req.body.id, (err, person) => {
      // check if query error
      if (err) {
          console.log(err);
          res.send(err.message);
      }
      res.send(`Person with id ${req.body.id} was deleted: `)
  });
});

// port to listen on
app.listen(3001)