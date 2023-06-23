const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send({city:'New york', country:'USA'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})