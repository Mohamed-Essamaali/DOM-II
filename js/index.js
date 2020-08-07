// Your code goes here
const mainNavigation = document.querySelector('.main-navigation');
mainNavigation.addEventListener('mouseover',(e)=>{
    e.stopPropagation();
    mainNavigation.style.backgroundColor='hotpink'
})
mainNavigation.addEventListener('mouseout',(e)=>{
    // e.stopPropagation();
    mainNavigation.style.backgroundColor='white'
})
const headerImg = document.querySelector('.intro img')
window.addEventListener('resize',e=>{
        headerImg.style.width='300px'
   
  })

  const contentSection = document.querySelectorAll('.content-section')

  contentSection.forEach(el=>{
      el.addEventListener('dblclick',e=>{
        el.style.backgroundColor='black';
        el.style.color='white'
      })
      
  })