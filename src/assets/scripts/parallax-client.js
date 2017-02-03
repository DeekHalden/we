$(document).ready(function(){
    // $('#posts').jPaginate({items: 10, paginaton_class: "myownclass"});
    
    if ($(window).width() > 1199) {
        $('.parallax-container').parallax();

    }
    function setParallaxHeight(){
        var $body = $('body');
        var parallax = $('.parallax-container')[0];
        var clientHeight = $body.outerHeight();
        $(parallax).css('height', clientHeight +700+ 'px');
        console.log($(parallax).height(), clientHeight)
    }

    // $('.love').hover(function() {
    //     $(this).attr('src','https://static.parastorage.com/services/santa/1.2080.14/static/images/new-blog-social-icons/like-post-hover.svg');
    // })
    $('.love').on('click',function() {
        
        
     
        $(this).toggleClass('active');
        if(!$(this).hasClass('active')){

            $(this).attr('src', 'https://static.parastorage.com/services/santa/1.2080.14/static/images/new-blog-social-icons/like-post.svg');    
            $('.count').html(function(i, val) {
                console.log(val)
                return +val - 1
            });
        } else {
            $(this).attr('src', 'https://static.parastorage.com/services/santa/1.2080.14/static/images/new-blog-social-icons/like-post-red.svg');
            $('.count').html(function(i, val) {
                return +val + 1
            });
        }

    })

    

    $('#posts').easyPaginate({
        paginateElement: '.post-card',
        elementsPerPage: 10
    });
    $('.easyPaginateNav a').on('click',function() {
        setParallaxHeight();
    })
    if ($(window).width() < 1199) {
        var slides = $('.thumb')
        var slide;
        var newSlides = [];
        for(var i = 0; i < slides.length; i++){
            slide = $('<li>').append(slides[i]);
            newSlides.push(slide)
        }
        var $ulSlider = $('<ul class="additional-slider">').append(newSlides);
        $('.recent').append($ulSlider);
        $(".additional-slider").lightSlider({

            item: 1,
            pager: false,
            keyPress: false,
            slideMove: 1,
            slideMargin: 40,
            mode: 'slide',
            useCSS: true,
            easing: 'linear',
            loop: true,
            enableTouch: true,
            responsive: [

            ]

        });
    }

    $("#lightSlider1").lightSlider({

        item: 5,
        pager: false,
        keyPress: false,
        slideMove: 1,
        slideMargin: 40,
        mode: 'slide',
        useCSS: true,
        easing: 'linear',
        loop: true,
        enableTouch: true,
        responsive: [{
            breakpoint: 1400,
            settings: {
                item: 3,
                slideMove: 1,
                margin: 10

            }
        }, {
            breakpoint: 900,
            settings: {
                item: 2,
                slideMove: 1
            }
        }, {
            breakpoint: 540,
            settings: {
                item: 1,
                slideMove: 1,
                margin: 0
            }
        }]

    });
    $("#lightSlider2").lightSlider({

        item: 1,
        pager: false,
        keyPress: false,
        slideMove: 1,
        slideMargin: 40,
        mode: 'slide',
        useCSS: true,
        easing: 'linear',
        loop: true,
        enableTouch: true,
        responsive: [

        ]

    });
    $("#lightSliderfavorites-slider").lightSlider({

        item: 1,
        pager: false,
        keyPress: false,
        slideMove: 1,
        slideMargin: 40,
        mode: 'slide',
        useCSS: true,
        easing: 'linear',
        loop: true,
        enableTouch: true,
        responsive: [

        ]

    });

    $("#item-gallery").lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 9,
        slideMargin: 0,
        enableDrag: false,
        currentPagerPosition: 'left'


    });

    
   
    $(".my-foto").imagezoomsl({

     zoomrange: [3, 3]
    }).click(function(){
        console.log($(this))
    });


    var max_chars = 500;

    $('#chars-remaining').html(max_chars);

    $('#feedback').keyup(function() {
        var text_length = $(this).val().length;
        var text_remaining = max_chars - text_length;
        $('#chars-remaining').html(text_remaining);
    })



    $('.filter-accordion__title').on('click', function(e) {

        // e.preventDefault();
        e.stopPropagation();


        var $this = $(this);

        $this.toggleClass('passive');

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show').slideUp(350);

        } else {

            $this.parent().parent().find('filter-accordion__content').removeClass('show');
            $this.parent().parent().find('filter-accordion__content').slideUp(350);
            $this.next().addClass('show').slideDown(350);
        }
    });
    $('.nstSlider').nstSlider({
        "left_grip_selector": ".leftGrip",
        "right_grip_selector": ".rightGrip",
        "value_bar_selector": ".bar",
        "value_changed_callback": function(cause, leftValue, rightValue) {
            $(this).parent().find('.leftLabel').text(leftValue + ' руб.');
            $(this).parent().find('.rightLabel').text(rightValue + ' руб.');
        }
    });
    $('#current_menu').css('display', 'none')
    $("#current_page").click(function() {
        $("#current_menu").slideToggle();
    });

    $("#current_menu a").click(function(event) {
        event.preventDefault(); //prevent synchronous loading
        var text = $(this).text();
        $(this).html(text + '<span class="select-wrapper__item--checked">&#10004;</span>');
        $("#current_page").html(text + '<span class="down-arrowhead">&#709;</span>');

        $("#current_menu").slideToggle();
    });
    (function() {
        $('.post-card__info--content').text($('.post-card__info--content').text().substr(0, 300) + '...');

    })()
    setParallaxHeight();
})