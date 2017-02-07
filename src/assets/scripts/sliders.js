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
         auto: true,   
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

 var pauseableSlider = $("#lightSlider1").lightSlider({
    auto:true,
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
     onBeforeSlide: function (el) {
            $('.current').text(el.getCurrentSlideCount());
        },
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
if(pauseableSlider){
    // $('.total').text(pauseableSlider.getTotalSlideCount());
     $('.pause').click(function() {
         
        if($(this).text() =="►") {
            $(this).text('❚❚')
            pauseableSlider.pause(); 
        } else{
            $(this).text('►') 
            pauseableSlider.play(); 
        }

     });
}



 $("#lightSlider2").lightSlider({
auto: true,
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
    auto:true,
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