const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send("Hello world")
})

app.get('/recipe', (req, res) => {
  const recipeName = req.query.anything;
  res.send(`This is my ${recipeName} page`)

  console.log(recipeName)
})

app.listen(port)