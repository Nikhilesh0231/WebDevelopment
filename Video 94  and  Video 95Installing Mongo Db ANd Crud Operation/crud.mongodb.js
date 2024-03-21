//CRUD OPERATION
use("crudDb")
console.log(db)
// //CREATE
// db.createCollection("courses")

// db.courses.insertOne({
//     name : "Nikhilesh Tiwari`s",
//     price : 0,
//     assignments :12,
//     projects: 45
// })

// db.courses.insertMany([{
//     name : "veeru Tiwari`s",
//     price : 20,
//     assignments :15,
//     projects: 35
// },
// {
//     name : "Suraj Tiwari`s",
//     price : 200,
//     assignments :25,
//     projects: 25
// },
// {
//     name : "veeruNikhi Tiwari`s",
//     price : 2000,
//     assignments :35,
//     projects: 15
// },
// {
//     name : "Neelesh Tiwari`s",
//     price : 100000,
//     assignments :115,
//     projects: 315
// },
// {
//     name : "Heren Tiwari`s",
//     price : 2000000000,
//     assignments :1500,
//     projects: 3500
// }
// ])

//READ

// let a = db.courses.find({price:0})
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())

// let b = db.courses.findOne({price:0})
// console.log(b)

//UPDATE

// db.courses.updateOne({price : 0},{$set:{price:100000000}})

// db.courses.updateMany({price : 0},{$set:{price:100000000}})


//DELETE

// db.courses.deleteOne({price:100000000})
db.courses.deleteMany({price:2000})