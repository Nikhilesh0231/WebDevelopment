// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises"
import fsn from "fs"
import path from "path"
import { exit } from "process"

const basepath = "\\web development\\Videos on Backend Java Script Node Js\\Video 91 Exerxise 15 Clear the Clutter Solution Video 93"
let files = await fs.readdir(basepath)


for (const items of files) {
    let ext = items.split(".")[items.split(".").length - 1]
    if (ext != "js" && ext != "json" && items.split(".").length > 1) {

        if (fsn.existsSync(path.join(basepath, ext))) {
            //move the file to this directory if it is not js or json fie 
            fs.rename(path.join(basepath, items), path.join(basepath, ext, items))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, items), path.join(basepath, ext, items))
        }

    }

}