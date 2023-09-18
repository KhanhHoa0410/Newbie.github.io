// Banner
$(document).ready(function () {
    $('.banner-slick').slick({
        // dots: true,
        prevArrow: false,
        nextArrow: false,
    });
});
// Product-new
// $(document).ready(function(){
//     $('.slick-product').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     prevArrow:"<button type='button' class='prnew-prev pull-left' style='display: flex;'><i class='fa-solid fa-chevron-left fa-lg' style='color: #e9ecef;'></i></button>",
//     nextArrow:"<button type='button' class='prnew-next pull-right' style='display: flex;'><i class='fa-solid fa-chevron-right fa-lg' style='color: #e9ecef;'></i></button>"
//     });
// });
$(document).ready(function () {
    $('.slick-product').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:
            `<button type='button' class='slick-prev pull-left' style='margin-left: -40px;'><i class='fa-solid fa-chevron-left fa-lg' style='color: #e9ecef;'></i></button>`,
        nextArrow:
            `<button type='button' class='slick-next pull-right' style='margin-right: -40px;'><i class='fa-solid fa-chevron-right fa-lg' style='color: #e9ecef;'></i></button>`
    });
});
// Feedback

$(document).ready(function () {
    $('.feedback-form').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

// Detail-product
$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        prevArrow:
            `<button type='button' class='slick-prev pull-left' style='margin-left: -40px;'><i class='fa-solid fa-chevron-left fa-lg' style='color: #e9ecef;'></i></button>`,

        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        asNavFor: '.slider-for',
        vertical: true,
        centerMode: true,
        nextArrow:
            `<button type='button' class='slick-next pull-right' style='margin-right: -40px; z-index : 1'><i class='fa-solid fa-chevron-right fa-lg' style='color: #e9ecef;'></i></button>`,
        focusOnSelect: true
    });
});

$('.relate-product').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
        `<button type='button' class='slick-prev pull-left' style='margin-left: -40px;'><i class='fa-solid fa-chevron-left fa-lg' style='color: #e9ecef;'></i></button>`,
    nextArrow:
        `<button type='button' class='slick-next pull-right' style='margin-right: -40px;'><i class='fa-solid fa-chevron-right fa-lg' style='color: #e9ecef;'></i></button>`

});




$('.slick-slides').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    arrows: true,
    prevArrow:
        `<button type='button' class='slick-prev pull-left' style='margin-left: -40px;'><i class='fa-solid fa-chevron-left fa-lg' style='color: #e9ecef;'></i></button>`,
    nextArrow:
        `<button type='button' class='slick-next pull-right' style='margin-right: -40px;'><i class='fa-solid fa-chevron-right fa-lg' style='color: #e9ecef;'></i></button>`,

    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// TEST
$(document).ready(function () {
    $('.your-class').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});