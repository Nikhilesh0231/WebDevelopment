//to explore https://www.npmjs.com/package/mongodb

import mongoose from "mongoose";
import express from "express";
import { todo } from "./models/todo.js";


let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todoo = new todo({ title: "Hey First todo", desc: "Description of thid todo", isDone: false, days:12 })
    todoo.save()
    res.send('Hello World!')
})
app.get('/a', async(req, res) => {
   let todoo = await todo.findOne({})
   console.log(todoo)
    res.json({title: todoo.title,desc :todoo.desc})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})