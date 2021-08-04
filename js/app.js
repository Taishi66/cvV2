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

    //zoom in photo onclick


})