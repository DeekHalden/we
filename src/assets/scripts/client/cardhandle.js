$('.card__remove').on('click',function () {
	
	
	$(this).parent().remove();

	setParallaxHeight();
});