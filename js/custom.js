$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.main_visual_desc'
    });

    $('.main_visual_desc').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.main_visual_slide'
    });


    $('.main_visual .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });

    $('.main_visual .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });

    $('.slide_product').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('#bgndVideo').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=4cWyLPidWcA',
        containment: '.main_movie',
        showControls: false,
        playOnlyIfVisible: true,
    });


    let sw = true;

    $('.main_movie .switch').on('click', function () {
        $(this).toggleClass('on');
        if (sw) {
            $('#bgndVideo').YTPPause();
        } else {
            $('#bgndVideo').YTPPlay();
        }
        sw = !sw;
    });

    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })


})
