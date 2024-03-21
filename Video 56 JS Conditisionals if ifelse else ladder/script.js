console.log("Hey I am Conditional")


// let age = 45 ;
// let age =17 ;
let age =0 ;
// let grace = 2;

// console.log(age+grace);//addition
// console.log(age-grace);//subtraction 
// console.log(age*grace);//multiplication 
// console.log(age/grace);//division 
// console.log(age**grace);//exponent 
// console.log(age%grace);

// if ((age+grace)>18)
 if(age==18){
    console.log("You Can Drive..");
}
else if(age==0){
    console.log("Are You Kidding !!!");
}
else if(age==100){
    console.log("You are to much old your part will not work properly to drive "); 
}
else{
    console.log("You Cann't Drive..");
}

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/