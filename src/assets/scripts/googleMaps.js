function initMap() {
    // Create a map object and specify the DOM element for display.

    var latLng = {lat:57.105755,lng:41.727576}
    var map = new google.maps.Map(document.getElementById('map'), {
        center: latLng,
        scrollwheel: false,
        zoom: 15
    });

    var marker = new google.maps.Marker({
	    position: latLng,
	    map: map,
	    title: 'ОСНОВА Родники, ул. Советская, 20'
	  });
}



$('.map-btn').on('click',function(e){
	e.preventDefault();
	$('.main-contacts-wrapper').empty();
	$('#map').css('display', 'block').appendTo('.main-contacts-wrapper');
	setParallaxHeight();
	initMap();
	
});
