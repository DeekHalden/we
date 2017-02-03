$(document).ready(function(e) {
    $('.subscribe-action').click(function(e) {
        var email = $('#email').val();
        var name = $('#name').val();
        if ($.trim(email).length == 0) {
        	$('.subscribe-wrapper__form--error').empty();
            $('.subscribe-wrapper__form--error').append('Введите правильный адрес');
            e.preventDefault();
        }
        if (validateEmail(email)) {
        	$('.subscribe-wrapper__form--error').empty();
            // $('.subscribe-wrapper__form--error').append('Email правильный');
        }
        else {
        	$('.subscribe-wrapper__form--error').empty();
            $('.subscribe-wrapper__form--error').append('Введите адрес в формате username@domain.zone');
            e.preventDefault();
        }
        if($.trim(name).length === 0 ){
            $('.subscribe-wrapper__form--error').empty();
            $('.subscribe-wrapper__form--error').append('Введите имя');
            e.preventDefault();
        }
    });
    $('.partnership-action').click(function(e) {
        var email = $('#email').val();
        var name = $('#name').val();
        if ($.trim(email).length == 0) {
            $('.partnership-wrapper__form--error').empty();
            $('.partnership-wrapper__form--error').append('Введите адрес в формате username@domain.zone');
            e.preventDefault();
        }
        if (validateEmail(email)) {
            $('.partnership-wrapper__form--error').empty();
            // $('.partnership-wrapper__form--error').append('Email правильный');
        }
        else {
            $('.partnership-wrapper__form--error').empty();
            $('.partnership-wrapper__form--error').append('Введите адрес в формате username@domain.zone');
            e.preventDefault();
        }
    });

});


function validateEmail(email) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(email)) {
        return true;
    }
    else {
        return false;
    }
}