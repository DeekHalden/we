 var $attr= $('.love').attr('src')
 $('.love').on('hover',function() {
     $(this).attr('src', 'https://static.parastorage.com/services/santa/8d3ff8f04524fe3516858e31f987a38e39e17215/static/images/new-blog-social-icons/like-post-hover.svg');
 });
 // $('.love').on('mouseleave', function() {
 //     $(this).attr('src', $attr);
 // });
 if($('.count').html() === '0') {
    $('.count').css('display','none');
 } 

 $('.favorite').on('click', function() {



     $(this).toggleClass('active');
     if (!$(this).hasClass('active')) {
         $('.count').html(function(i, val) {
            $('.count').css('display','none');
             return +val - 1
         });
     } else {
         $('.count').html(function(i, val) {
            $('.count').css('display','inline-block');
             return +val + 1
         });
     }

 });