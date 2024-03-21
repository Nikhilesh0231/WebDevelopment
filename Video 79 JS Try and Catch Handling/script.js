let a = prompt("Enter First Number")


let b = prompt("Enter Second Number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed ")
}
let sum = parseInt(a) + parseInt(b)

// console.log("The sum is " , sum )


// try {
//     console.log("The sum is ", sum * x)
// } catch (error) {
//     console.log("Error a gaya bhai")
// }
function main(){
let x=1
try {
    console.log("The sum is ", sum * x)
    return true 
} catch (error) {
    console.log("Error a gaya bhai")
    return false
}
//finally are used in case of function we return some then code after return eill not execute then  finally block is used to  execute further code
finally {
    console.log("Files are being closed up db connection is being closed ")
}
}

let c = main()
