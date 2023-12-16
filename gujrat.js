//let moon =document.getElementById("main_title");
// let text=document.getElementById("text");
// let train = document.getElementById("train");
// let secondTrain=document.getElementById("second_train");
// let tree=document.getElementById("tree");
// let desert_moon=document.getElementById("desert-moon");
//let man=document.getElementById("man");
// let birds=document.getElementById("birds");

// let trolley=document.getElementById("trolley");
let plane = document.getElementById("plane");

let cartans=document.getElementById("cartans");
let left_gear = document.getElementById("left_gear");
let right_gear=document.getElementById("right_gear");
// let middle_gear_1=document.getElementById("middle_gear_1");
// let middle_gear_2=document.getElementById("middle_gear_2");
let ship=document.getElementById("ship");
window.addEventListener("scroll" , ()=>{
    let value=window.scrollY;
     //moon.style.top = value * .9 + "px";
    //text.style.top = 80+value * -0.2 + "%";
    let new_val=value/2;
    // train.style.left=value * 1.5 +"px";
    // trolley.style.left=value * -0.5 +"px";

    // let scale = 1 + scrollY * 0.001;
    // second_train.style.left =new_val * -0.4 + "px";
    // tree.style.left= (new_val/2 ) * 0.6 +"px";

    //desert_moon.style.top=value * .3 + "px";

    //man.style.left=value * .6 +"px";

    // birds.style.top = new_val/3 * -0.5 +"px";
    // birds.style.right = new_val/3 * 0.7 +"px";
    // plane.style.transform = `scale(${scale})`;
    plane.style.left = new_val * 0.4 + "px"; 

    cartans.style.left = value * 0.5 +"px";

    let rotationAngle = window.scrollY;
    left_gear.style.transform = `rotate(${rotationAngle}deg)`;
    right_gear.style.transform = `rotate(${rotationAngle}deg)`;
    // middle_gear_1.style.transform = `rotate(${rotationAngle}deg)`;
    // middle_gear_2.style.transform = `rotate(${rotationAngle}deg)`;
     ship.style.top= new_val * 0.5+"px";
   
   

   

});

// let calScrollValue=()=>{
//     let scrollProgress=document.getElementById("progress");
//     let pos=document.documentElement.scrollTop;
//     console.log(pos);
// }

// window.onscroll=calScrollValue;
// window.onload=calScrollValue;

