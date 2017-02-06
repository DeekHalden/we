 $('.love').on('click', function() {



     $(this).toggleClass('active');
     if (!$(this).hasClass('active')) {

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

 });