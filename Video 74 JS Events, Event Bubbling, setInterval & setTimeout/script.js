let button = document.getElementById("btn")

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button.addEventListener("click",()=>{//for single Click
button.addEventListener("dblclick",()=>{//for Double click  
    //  alert("I was clicked . Yayy!!!")
    document.querySelector(".box").innerHTML = "<b> Yayy You Were Clicked </b> Enjoy Your Click "
})

// document.addEventListener("contextmenu",()=>{
//     alert("Don't Hack Us By Right Click Please ")
// })

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})