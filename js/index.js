// Your code goes here

// 1-mouse over
const mainNavigation = document.querySelector('.nav');
mainNavigation.addEventListener('mouseover',(e)=>{
    mainNavigation.style.padding='4%';
    mainNavigation.style.width='100%'
    
    mainNavigation.style.backgroundColor='hotpink'
    
})

// 2-mouse leave
mainNavigation.addEventListener('mouseout',(e)=>{

    mainNavigation.style.backgroundColor='white'
})

// 3-resize
const headerImg = document.querySelector('.intro img')
window.addEventListener('resize',e=>{
        headerImg.style.display='none'
   
  })

  // 4-double click
  const contentSection = document.querySelectorAll('.content-section')

  contentSection.forEach(el=>{
      el.addEventListener('dblclick',e=>{
        el.style.backgroundColor='black';
        el.style.color='white';
        el.style.padding='1% 2%'
      })
      
  })

  // 5-select
  const introduction = document.querySelector('.intro p');
    window.addEventListener('select', event=>{

    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        console.log(selection)
   alert(`You selected: ${selection}`);
   

});

// 6-load
const contentText = document.querySelectorAll('.text-content p')
   
    window.addEventListener('load',e=>{
        contentText[0].style.backgroundColor='#d0f0f0';
        contentText[0].style.fontSize='2.5rem';

        contentText[1].style['font-size']='2rem';
        // contentText[1].style['font-size'] = '2.3rem';
        contentText[2].style['font-size'] = '2.3rem';
        contentText[3].style.color='green';
      
    })

       
         // 7-focus
        
         const labels = document.createElement('label')
         const inputs = document.createElement('input')
         const inputContainer = document.createElement('div')
         const intro = document.querySelector('.intro')

         labels.style.fontSize='2.5rem';
         inputs.style.padding='1%';
         inputs.style.fontSize='2.5rem'
         inputContainer.style.textAlign = 'center';
         inputContainer.style.margin = '1%'
         inputContainer.appendChild(labels)
         labels.textContent = 'Enter Your Name here:'
         labels.appendChild(inputs)
         intro.appendChild(inputContainer)


         inputs.addEventListener('focus',e=>{
             e.target.style.backgroundColor='green';
             
         })

         // 8-wheel
const logoHeading = document.querySelector('.logo-heading');	

//styles for the animated element
const styles = ()=>{
    logoHeading.style.transform = "translate(-500px,500px)";//move it to the left of body page
    logoHeading.style.fontSize='5rem';
    logoHeading.style.color='#101010';
    logoHeading.style.fontWeight='750';
    logoHeading.style.opacity='0.3';
    logoHeading.style.backgroundColor='##ededed';
    logoHeading.style.paddingBottom='10%';
    logoHeading.style.marginBottom='20%'
    const links = document.querySelectorAll('.nav-link')
    links.forEach(e=>{
        e.style.padding='1% 2%';
    })
}
const moveName  = e =>{
    //call the styles
        styles();
    let name = document.querySelector('input').value;
    logoHeading.textContent = `Welcome to ${name}'s Website `;
     gsap.to (logoHeading,{rotation: 360, duration: 5, repeat:1})
}

window.addEventListener('wheel',(e)=>{
    styles();
 
        let name='Mohamed'
        
        logoHeading.textContent = `Welcome to ${name}'s Website `;
       
        gsap.to (logoHeading,{rotation: 360, duration: 5, repeat:1})
       
     });


            // create a button to do the action 
            // 9-click
            const myButton = document.createElement('button');
            myButton.textContent = 'Make it Yours'
            myButton.style.fontSize='2.5rem'
            myButton.style.padding='1%'
            myButton.style.marginLeft='2%'
            inputContainer.appendChild(myButton);

            myButton.addEventListener('click',e=>{

            moveName();
            //clear input
           inputs.value=''; 
            })

              // keydown or keypress does the same job

         const destination = document.querySelector('.content-destination')
         window.addEventListener('keydown',e=>{
            destination.style.transform='rotate(360deg)'
            destination.style.transition='10s'
           
                   
         })

         const destinationImg = document.querySelector('.content-destination img')
         window.addEventListener('keydown',e=>{
            destinationImg.style.transform='rotate(-360deg)'
            destinationImg.style.transition='5s 3s'
            e.stopPropagation();
         })

         //stop propagation

         destination.addEventListener('click',e=>{
             e.target.style.backgroundColor = '#f88987'
         })
         const destinationH= document.querySelector('.content-destination h2')

         destinationH.addEventListener('click',e=>{
                e.stopPropagation();
             e.target.style.backgroundColor = '#58f894';
             
         })





