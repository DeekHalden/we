var inputList = $('.radio-input');

for (var i = inputList.length - 1; i >= 0; i--) {
    $(inputList[i]).prettyCheckable();
}


var input = $('.checkbox');
input.prettyCheckable();