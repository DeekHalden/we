 $('#current_menu').css('display', 'none')
 $("#current_page").click(function() {
     $("#current_menu").slideToggle();

 });

 $("#current_menu a").click(function(event) {
     event.preventDefault(); //prevent synchronous loading
     
     $('.select-wrapper__item--checked').remove();
     var text = $(this).text();

     $(this).html(text + '<span class="select-wrapper__item--checked">&#10004;</span>');
     $("#current_page").html(text + '<i class="icon-down-angle"></i>');

     $("#current_menu").slideToggle();
 });