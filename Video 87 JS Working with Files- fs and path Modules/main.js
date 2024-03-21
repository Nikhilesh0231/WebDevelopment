const fs = require("fs")
//const fs = require("fs/promises")
console.log(fs)

console.log("Starting")
// fs.writeFileSync("veeru.txt","Veeru is a Hacker")
fs.writeFile("Veeru2.txt", "Veeru is a Coder", () => {
    console.log("done")
    fs.readFile("Veeru2.txt", (error, data) => {
        console.log(error, data.toString())
    })
})


fs.appendFile("Veeru.txt", "One man Army ", (e, d) => {
    console.log(d)
})
console.log("Ending")