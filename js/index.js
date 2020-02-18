

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
   funBus.style.color = "#454545";
});

//double click
const nav = document.querySelector('.nav-container');
nav.addEventListener('dblclick',(e)=>{ 
    e.target.style.backgroundImage = "linear-gradient(#f2dc68,#4ffef8)";
   
});

//click

const boat21 = document.querySelector('.boatImg');

   boat21.addEventListener('click',()=>{

      let start = Date.now();
      let timer = setInterval(()=>{
        let timePassed = Date.now()-start;
           
            if (timePassed>3000){
            clearInterval(timer) //reset timer
            }else
            boat21.style.width = timePassed/5+'px';
        }); // interval method
        
     }); // event listener method

const navContainer = document.querySelector('.nav');

navContainer.addEventListener('click',(e)=>{
    e.target.style.width='85%';
    e.target.style.backgroundColor = "#cbf5db";
    e.target.style.padding='2%';
 });

//wheel
const destination = document.querySelector('.intro img');

destination.addEventListener('wheel',(e)=>{
    e.target.style.transform ="scale(0.8)";
    // e.target.style.transform = " translate(10px,200px)";
         
        e.target.style.border="2px dashed #4a4a4a";
        
        });
// resize

        window.addEventListener('resize',()=>{
            destination.src="https://images.unsplash.com/photo-1501393091915-82f0cbd8f338?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
            destination.style.width= "100%";
        });
 
// select

const introduction = document.querySelector('.intro p');
    introduction.addEventListener('select', (event)=>{

    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
       
   alert(`You selected: ${selection}`);
  
});

   

       
    







