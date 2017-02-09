var inputList = $('.radio-input');

for (var i = inputList.length - 1; i >= 0; i--) {
    $(inputList[i]).prettyCheckable();
}

var check = $('.subscribe-checkbox');

if(check.length != 0) {
	check.prettyCheckable();
}

