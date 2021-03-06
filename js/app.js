import Swiper from "swiper";

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav-active');

        //animate navLinks
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.2}s`;
            }
        });
        //burger animation
        burger.classList.toggle(`toggle`);
    });
}
navSlide();

//clock
const showClock = () => {
    const clock = document.getElementById('clock');
    let currDate = new Date();
    let h = currDate.getHours();
    let m = currDate.getMinutes();
    let s = currDate.getSeconds();
    //add zero to minutes & seconds if smaller than 10
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    //display as hh:mm:ss
    clock.innerText = `${h}:${m}:${s}`;
    setTimeout(showClock, 1000)
}
showClock();

//magnific popup 
$(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});


