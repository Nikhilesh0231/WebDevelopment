let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

console.log(arr)
console.log(arr, typeof arr);
console.log(arr.length)

//Accessing element of the array 
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

//Arrays are mutable the value of array is changed 
arr[0] = 5666;
console.log(arr[0])


console.log(arr.toString())
console.log(arr.join(" and "))


 
let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2) 
console.log(numbers)   
numbers.splice(1, 3) 
console.log(numbers)   

numbers.splice(1, 3, 222, 333)
console.log(numbers)   




// loops in arrays 

let a = [1, 93, 5, 6, 88]


for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

a.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key]; 
        console.log(key, element)
    }
}

for (const value of a) {
    console.log(value)
}