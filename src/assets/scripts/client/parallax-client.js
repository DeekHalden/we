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
    setParallaxHeight();
    if($(window).width() > 1024) {
        $('.imgBox').imgZoom({
            origin: 'data-origin'
        });
    }

});

