// Your code goes here

const links = document.querySelectorAll('.nav-link');


// mouse leave
links.forEach((e)=>{e.addEventListener('mouseleave',(event)=>{
    event.target.style.backgroundColor='white';
    event.target.style.padding='2%';
     
    
})});
// mouse over
links.forEach((e)=>{e.addEventListener('mouseover',(event)=>{
    event.target.style.width= "20%";
    event.target.style.padding='3% 4%';
    event.target.style.borderRadius = "10px";
    if (event.target.style.backgroundColor==='white'){
        event.target.style.backgroundColor='yellow';
    }
       
        // e.stopPropagafftion();
    
})});




//keydown
const funBus = document.querySelector('.home');

document.addEventListener('keydown',(e)=>{ 
    funBus.style.backgroundImage = "linear-gradient(#f2dc68,#4ffef8)";
   
});
//double click
const nav = document.querySelector('.nav-container');
document.addEventListener('dblclick',(e)=>{ 
    e.target.style.backgroundImage = "linear-gradient(#f2dc68,#4ffef8)";
   
});

//click
const navContainer = document.querySelector('.nav');

document.addEventListener('click',e=>{
    navContainer.style.width='85%';
    navContainer.style.backgroundColor = "#cbf5db";
    navContainer.style.padding='2%';
 });

//wheel
const destination = document.querySelector('.intro img');

document.addEventListener('mouseenter',()=>{
    
    destination.style.transform = "rotate(15deg) translate(10px,10px)"

    document.addEventListener('mouseout',()=>{
        destination.style.transform = "rotate(0deg)"
    })
})


document.addEventListener('wheel',()=>{
    
          destination.style.transform = "scale(1.2)";
    });









