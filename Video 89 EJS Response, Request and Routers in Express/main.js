const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    //Hey its a get request 
    console.log("Get Request")
  res.send('Hello World2!')
})
app.post('/', (req, res) => {
    //Hey its a Post request 
    console.log("Post Request")
  res.send('Hello World2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})