// Reveal
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}



// Link Active
const linkWork = document.querySelectorAll('.project__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
}

linkWork.forEach((l=> l.addEventListener('click', activeWork)))


/// Hamburger


const hamburger = document.querySelector('.hamburger');

const navMenu = document.querySelector('.nav-menu')

const body = document.querySelector("body");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('activeburg');
    navMenu.classList.toggle('activeburg');

    if (navMenu.classList.contains("activeburg")) {
    // Disable scroll
    body.style.overflow = "hidden";
    } else {
    // Enable scroll
    body.style.overflow = "auto";
    }
})