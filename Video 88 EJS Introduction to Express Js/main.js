const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
//app.get or app.post  or app.put or app.delete(path,handler )
app.get('/', (req, res) => {
  res.send('Hello World!22')
})

app.get('/about', (req, res) => {
  res.send('Hello about')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog')
})
app.get('/blog/:slug', (req, res) => {
    //logic to fetc {slug}  from the db

    // for URL:http://127.0.0.1:3000/blog/intro-to-veeru?mode=dark&region=in
    console.log(req.params)//will output { slug: 'intro-to-veeru' }
    console.log(req.query)//will output { mode: 'dark', region: 'in' }
})
// app.get('/blog/:slug/:second', (req, res) => {
//     //logic to fetc {slug}  from the db
//   res.send(`${req.params.slug} and ${req.params.second}`)
// })
// app.get('/blog/intro-to-js', (req, res) => {
//     //logic to fetc into to js  from the db
//   res.send('Hello intro-to-js')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//     //logic to fetc into to python from the db
//   res.send('Hello intro-to-python')
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})