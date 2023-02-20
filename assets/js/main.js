/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener('scroll', function () {
  header.classList.toggle("change-header",window.scrollY > 40)
})
/*=============== SHOW SCROLL UP ===============*/ 
window.addEventListener('scroll', function () {
let scrollUp=document.getElementById('scrollUp');
  scrollUp.classList.toggle("show-scroll",window.scrollY >= 400)
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

/*scroll reveal*/
const setScroll=() => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 240,
    // reset: true
})

sr.reveal(`.home-container`)
sr.reveal(`.home-data`,{delay:300})''
sr.reveal(`.product-container`, { delay: 500 });
sr.reveal(`.product-content`, { delay: 500 });
sr.reveal(`.steps`, { delay: 900 });
sr.reveal(` .right-contact `, {delay: 900})
sr.reveal(`.testimonial`, {delay: 600})
sr.reveal(` .products-boxes .box , .question, .footer`,{interval: 100})

}
setScroll();