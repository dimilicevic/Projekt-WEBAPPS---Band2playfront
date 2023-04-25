
// Slider =======================================

$(".gal_slider").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 900,
    pauseOnHover: false,


    infinite: true,
    speed: 500,
    fade: true,
    adaptiveHeight: false,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,
});

$('.gal_slider').mouseover(function () {
    $(this).slick('play')
});

$('.gal_slider').mouseout(function () {
    $(this).slick('pause')
});



$('.service_item').mouseover(function () {
    $(`#service-photo-${$(this).attr('data-img')}`).css("opacity", "1");
});

$('.service_item').mouseout(function () {
    $(`#service-photo-${$(this).attr('data-img')}`).css("opacity", "0");
});


$(".client_box").slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0',


    infinite: true,
    speed: 800,
    fade: false,
    adaptiveHeight: false,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});

$(".service_box").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    centerMode: false,

    infinite: true,
    speed: 800,
    fade: false,
    adaptiveHeight: false,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,

    responsive: [
        {
            breakpoint: 1290,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});



