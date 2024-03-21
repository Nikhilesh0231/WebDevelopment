import fs from "fs/promises"

let a = await fs.readFile("veeru.txt")


// let b = await fs.writeFile("veeru.txt" ,"this is amazing problem")

let b = await fs.appendFile("veeru.txt","\n\n\n\n\n\nthis is amazing problem")

console.log(a.toString())