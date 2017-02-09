var num = $('.item-quantity');

// Listen for input event on numInput.
num.on('keydown',function(e) {
	console.log()
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    	}
	}
);