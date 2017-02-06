function setParallaxHeight() {
    var $body = $('body');
    var parallax = $('.parallax-container')[0];
    var clientHeight = $body.outerHeight();
    $(parallax).css('height', clientHeight + 700 + 'px');
};

$(document).ready(function() {


    if ($(window).width() > 1199) {
        $('.parallax-container').parallax();

    }
    // $('.love').hover(function() {
    //     $(this).attr('src','https://static.parastorage.com/services/santa/1.2080.14/static/images/new-blog-social-icons/like-post-hover.svg');
    // })

    setParallaxHeight();


});