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

if($(window).width() < 991) {
    $('.filter-accordion__title').first().addClass('passive');
    $('.filter-accordion__title').first().next().removeClass('show').slideUp(350);

    $('.filters').addClass('hide').slideUp();
    $('.filter-menu .heading').click(function(){
        $(this).toggleClass('show');
        if(!$('.filters').is('.hide')) {
            $('.filters').addClass('hide').slideUp();
            

        } else {
            $('.filters').removeClass('hide').slideDown();            
            

        }

    })

}