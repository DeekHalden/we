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