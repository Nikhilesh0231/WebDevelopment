console.log("I am a loop ..");
let a = 1;
console.log(a);
console.log(a+1);
console.log(a+2);

//for loop
for (let i = 0; i < 100; i++) { 
    console.log(a + i); 
}

let obj = {
    name: "Veeru",
    role: "Programmer",
    company: "Veeru AI"
}
 
//for in loop 
for (const key in obj) {  
        console.log(key)
}


//for of loop 
for (const c of "Nikhilesh") {
    console.log(c)
}

// while loop 
let i = 0;
while (i<600) {
    console.log(i)
    i++;
}

//do-while loop 

let j = 10;
do {
    console.log(j)
    j++;
} while (j<6);