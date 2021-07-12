'use strict'


// const main = document.querySelector('main')

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const navToggle = document.getElementById("nav-toggle")
    const navClose = document.getElementById("nav-close")
    const nav = document.getElementById("nav-menu")

    // validate if navToggle exist
    if(navToggle /*if is true*/) {
        // add click event on navToggle
        navToggle.addEventListener('click', function() {
            nav.classList.add('show__menu')
        })
    }

    // validate if navClose exist
    if(navClose /*if is true*/) {
        // add click event on navClose
        navClose.addEventListener('click', function() {
            nav.classList.remove('show__menu')
        })
    }

    // also hide menu when any of link is clicked
    const links = document.querySelectorAll('.nav__link')

    function linkAction() {
        // remove show__nav class on click of any of nav links
        nav.classList.remove('show__menu')
    }

    // loop through all nav links and apply linkAction func on the current link
    links.forEach(link => link.addEventListener('click', linkAction))

    // === OWL CAROUSEL INIT
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            lazyLoad: true,
            center: true,
            navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>'],
            navClass: ['arrow-left', 'arrow-right']
        });
    });


    //  === SCROLL REVEAL INIT
    // header
    ScrollReveal().reveal('.header', { delay: 100 });

    // home
    ScrollReveal().reveal('.section', { delay: 300 });

    // sub__footer
    ScrollReveal().reveal('.sub__footer', { delay: 400 });

    // // programs
    // ScrollReveal().reveal('.programms', { delay: 500 });

    // // courses
    // ScrollReveal().reveal('.courses', { delay: 700 });

    // // courses
    // ScrollReveal().reveal('.how__it--works', { delay: 500 });
});

