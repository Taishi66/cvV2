$(document).ready(function() {

    //smooth effect onclick menu
    $('nav a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 750);
        }
    });

    //smooth scroll navbar
    var prevScrollpos = window.pageYOffset;
    navbar = document.getElementById('navbar');

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $('#navbar').addClass('scroll');
            navbar.style.top = "0";
        } else {
            $('#navbar').removeClass('scroll');
            navbar.style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }

    //fade in section
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -250px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll,
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    //burger menu 
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menuBurger");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

});