$(function() {
    $('.change-btn').click(function() {
        var $displaySlide = $('.active');

        $displaySlide.removeClass('active');

        if($(this).hasClass('next')) {
            $displaySlide.next().addClass('active');
        } else {
            $displaySlide.prev().addClass('active');
        }

        var slideIndex = $('.slide').index($('.active'));

        $('.change-btn').show();

        if(slideIndex == 0) {
            $('.prev').hide();
        } else if (slideIndex == $('.slide').length - 1) {
            $('.next').hide();
        }
    });

    $('#back-btn').click(function() {
        $('html,body').animate({
            'scrollTop':0
        },'slow');
    });

    $('.qanda').click(function() {
        var $answer = $(this).find('.answer');
        if($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
        } else {
            $answer.addClass('open');
            $answer.slideDown();
        }
    });
    $('.header-menu2').click(function() {
        $('.column-menu-list').slideToggle();
    });
    
});
