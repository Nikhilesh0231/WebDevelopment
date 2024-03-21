// function getData(){
// async function getData(){
// //simulate getting data from a server
//         return new Promise((resolve,reject )=>{
//              setTimeout(() => {
//                 resolve(455)
//              }, 3500);
//         })
// }
async function getData(){
//simulate getting data from a server
        // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        let data = await x.json()
        return data 
        // return 455
}
async function main(){
console.log("Loading Modules")

console.log("Do Something Else ")

console.log("Load Data ")
let data =  await getData()

console.log(data)
console.log("Process Data ")
console.log("Task 2")
}

main()
 
//Instead of doing this we can use async awiat  we make our function as async await fuction which runs in the background 
// data.then((v) => {
// console.log(data)
// console.log("Process Data ")
// console.log("Task 2")
// })
