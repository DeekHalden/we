$(document).ready(function(e) {
    $('.subscribe-action').click(function(e) {

        var name = $('#name').val();

        checkForValidation($('.subscribe-wrapper__form--error'), e);

        if($.trim(name).length === 0 ){
            $('.subscribe-wrapper__form--error').empty();
            $('.subscribe-wrapper__form--error').append('Введите имя');
            e.preventDefault();
        }

    });

    $('.partnership-action').click(function(e) {

        checkForValidation($('.partnership-wrapper__form--error'), e)

    });

    $('.login-form .action-btn').click(function(e) {

        checkForValidation($('.login-form__error'), e)

    });

    $('.forgot-form .action-btn').click(function(e) {

        checkForValidation($('.forgot-form__error'), e);

    });
    $('.register-form .action-btn').click(function(e) {

        checkForValidation($('.register-form__error'), e);
        if($('.important').val.length < 4){
            $('.important').css('border-color', 'red')
            $('.register-form__error').append(('<br>Поля выделенные красным цветом не могут быть менее 4 символов'))
        }

    });
    $('.order').click(function(e) {

        checkForValidation($('.order-form__error'), e);
        if($('.important').val.length < 4){
            $('.important').css('border-color', 'red')
            $('.order-form__error').append(('<br>Поля выделенные красным цветом не могут быть менее 4 символов'))
        }

    });
});

function checkForValidation(selector, e) {
    var email = $('#email').val();
    if ($.trim(email).length == 0) {
            selector.empty();
            selector.append('Введите email в формате username@domain.zone');
            e.preventDefault();
        }
        if (validateEmail(email)) {
            selector.empty();
            // selector.append('Email правильный');
        }
        else {
            selector.empty();
            selector.append('Введите email в формате username@domain.zone');
            e.preventDefault();
        }
}


function validateEmail(email) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(email)) {
        return true;
    }
    else {
        return false;
    }
}