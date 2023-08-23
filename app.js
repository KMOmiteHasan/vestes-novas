
// Card Slider

$(document).ready(function () {
    $(".card-slider")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: ".slider-btn-left",
            nextArrow: ".slider-btn-right",
            responsive: [
                {
                    breakpoint: 770,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
});

$(document).ready(function () {
    $(".women-prod-listings")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: ".women-slider-btn-left",
            nextArrow: ".women-slider-btn-right",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
});


$(document).ready(function () {
    $(".men-prod-listings")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: ".men-slider-btn-left",
            nextArrow: ".men-slider-btn-right",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
});


$(document).ready(function () {
    $(".kids-prod-listings")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: ".kids-slider-btn-left",
            nextArrow: ".kids-slider-btn-right",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
});



$(document).ready(function () {
    $(".blog-posts")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: ".blog-slider-btn-left",
            nextArrow: ".blog-slider-btn-right",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
});

