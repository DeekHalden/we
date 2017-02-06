 if ($(window).width() < 1199) {
     var slides = $('.thumb')
     var slide;
     var newSlides = [];
     for (var i = 0; i < slides.length; i++) {
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