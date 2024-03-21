console.log("This is strings tutorial")
let a = "Veeru";

//Asecessing String 
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);//it shows undefined 

console.log(a.length);//this prints the length of the String 

let real_name = "Veeru"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)

//instead of writing above line we can write it using template literal back tik 

console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"

//String Methods 
console.log(b.toUpperCase())//Changes to upper case
console.log(b.toLowerCase())//Changes to lower case 
console.log(b.length)//prints the length 
console.log(b.slice(1, 5)) //slice from index 1 to 4 --> hiva
console.log(b.slice(1)) //slice from index 1 to end --> hivamSh

console.log(b.replace("Sh", "77"))//replaces Sh With 77
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))//Concate all Strings
 

//Strings Are immutable it means after perfoming many action still our string is not changed it same as it being created.

console.log(b)