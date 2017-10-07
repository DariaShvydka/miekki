"use strict";

jQuery(document).ready(function () {
    $('.carousel-gallery').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '12%',
        slidesToShow: 3,
        speed: 500,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


$('.carousel-quotes').slick({
    centerMode: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    });

    $('.carousel-header').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    });
