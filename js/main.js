var navMenu = document.getElementById("nav-menu")
var navToggle = document.getElementById("nav-toggle")
var closeNav = document.getElementById("closeMenu")

navToggle.addEventListener("click" , function(){
    navMenu.classList.toggle('show')
})

closeNav.addEventListener("click" , function(){
    navMenu.classList.remove('show')
})

var scrollRev = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
scrollRev.reveal('.home-text')
scrollRev.reveal('.buttons' , {delay : 300})
scrollRev.reveal('.sora' , {delay : 400})
scrollRev.reveal('.icons' , {interval :400})

scrollRev.reveal('.about-title')
scrollRev.reveal('.sub-title' , {delay:200})
scrollRev.reveal('.imgaya' , {delay:400})
scrollRev.reveal('.about-text' , {delay:700})

scrollRev.reveal('.skill')
scrollRev.reveal('.skills-title' , {delay : 300})
scrollRev.reveal('.skill-img' , {delay : 400})
scrollRev.reveal('.progress-border' , {interval :500})

scrollRev.reveal('.parent' , {interval :500})

scrollRev.reveal('.contact' , {interval :500})
