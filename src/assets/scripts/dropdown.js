 $('#current_menu').css('display', 'none')
 $("#current_page").click(function() {
     if ($("#current_menu").css('display') == 'none') {
         $(".down-arrowhead").css('transform', 'rotate(180deg)')
     } else {
         $(".down-arrowhead").css('transform', 'rotate(360deg)')

     }
     $("#current_menu").slideToggle();

 });

 $("#current_menu a").click(function(event) {
     event.preventDefault(); //prevent synchronous loading
     var text = $(this).text();
     $(this).html(text + '<span class="select-wrapper__item--checked">&#10004;</span>');
     $("#current_page").html(text + '<span class="down-arrowhead">&#709;</span>');

     $("#current_menu").slideToggle();
 });