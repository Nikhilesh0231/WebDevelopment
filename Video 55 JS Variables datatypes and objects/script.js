console.log("Hey This is Nikhilesh Tiwari ")


var a = 5;// here java script itself take as a number it is globally declared 
var d =1;
{
    let d = 11;// It is only scope is with in the block 
    console.log(d)
}
console.log(d)

var b = 6;


var c = " Nikhilesh Tiwari ";// here Js take c as a String 

var _a = "Manish";// this type of varible declaration is allowed we can start with _ , alphabet,&.
  

//var 2c  = 2;//this type of variable declaration is not allowed as we can start with numbers 
console.log( a + b + 8 )

console.log(c)

console.log(typeof a, typeof b, typeof c)// by doing this we will get to know that which type odf data stored in this variable .


// const a1 = 2;
// a1 = a1+1;// not allowed because a1 is const.

let x = "veeru";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o = {
    "name": "Harry",
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";//objects can be changed accordingly .
console.log(o);