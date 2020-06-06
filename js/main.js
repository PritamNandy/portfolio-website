$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});

$(function() {
    $("#home-link").on('click', function() {
        var position = $("#home-area").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 1000);
    });
});

$(function() {
    $("#about-link").on('click', function() {
        var position = $("#about-area").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 1000);
    });
});

$(function() {
    $("#services-link").on('click', function() {
        var position = $("#services-area").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 1000);
    });
});

$(function() {
    $("#portfolio-link").on('click', function() {
        var position = $("#project-area").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 1000);
    });
});

$(function() {
    $("#feedback-link").on('click', function() {
        var position = $("#client-say-area").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 1000);
    });
});

$(function() {
    $("#contact-link").on('click', function() {
        var position = $("#subscribe-us-area").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 1000);
    });
});