$("#partnership-form").validate({

    // Specify the validation rules
    rules: {
        name: "required",
        tel: "required",
        email: {
            required: true,
            email: true
        },
        organization: "required",
        id_number: "required",
        requisites: "required"

    },

    // Specify the validation error messages
    messages: {
        name: "Введите имя",
        tel: "Введите номер телефона",
        email: "Введите email в формате username@domain.zone",
        organization: "Данное поле не может быть менее 4 символов",
        id_number: "Данное поле не может быть менее 4 символов",
        requisites: "Данное поле не может быть менее 4 символов"

    },

    submitHandler: function(form) {

        form.submit();
    }
});
$("#partnership-page-form").validate({

    // Specify the validation rules
    rules: {
        name: "required",
        tel: "required",
        email: {
            required: true,
            email: true
        },
        organization: "required",
        id_number: "required",
        requisites: "required"

    },

    // Specify the validation error messages
    messages: {
        name: "Введите имя",
        tel: "Введите номер телефона",
        email: "Введите email в формате username@domain.zone",
        organization: "Данное поле не может быть менее 4 символов",
        id_number: "Данное поле не может быть менее 4 символов",
        requisites: "Данное поле не может быть менее 4 символов"

    },

    submitHandler: function(form) {
        form.submit();
    }
});
$("#subscribe-form").validate({

    // Specify the validation rules
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        }
    },

    // Specify the validation error messages
    messages: {
        name: "Введите имя",
        email: "Введите email в формате username@domain.zone"

    },

    submitHandler: function(form) {

        form.submit();
    }
});
$("#forgot-form").validate({

    // Specify the validation rules
    rules: {

        email: {
            required: true,
            email: true
        }
    },

    // Specify the validation error messages
    messages: {
        email: "Введите email в формате username@domain.zone"
    },

    submitHandler: function(form) {

        form.submit();
    }
});
$("#contacts-form").validate({

    // Specify the validation rules
    rules: {
        name: "required",

        email: {
            required: true,
            email: true
        },
        title: "required",
        message: "required"

    },

    // Specify the validation error messages
    messages: {
        name: "Введите имя",
        email: "Введите email в формате username@domain.zone",
        title: "Данное поле не может быть пустым",
        message: "Данное поле не может быть пустым"

    },

    submitHandler: function(form) {

        form.submit();
    }
});
$("#login-form").validate({
    // Specify the validation rules
    rules: {
        email: {
            required: true,
            email: true
        },
        password: "required"

    },

    // Specify the validation error messages
    messages: {
        email: "Введите email в формате username@domain.zone"
    },
    submitHandler: function(form) {
        console.log(1)
        form.submit();

    }
});
$("#change-form").validate({

    // Specify the validation rules
    rules: {
        email: {
            required: true,
            email: true
        }
    },
    // Specify the validation error messages
    messages: {

        email: "Введите email в формате username@domain.zone"

    },

    submitHandler: function(form) {

        form.submit();
    }
});
$("#register-form").validate({

    // Specify the validation rules
    rules: {
        name: "required",
        tel: "required",
        email: {
            required: true,
            email: true
        },
        entity: "required",
        entity_address: "required",
        id_number: "required",
        KPP: "required",
        ORGN: "required",
        requisites: "required",
        password: "required",
        password_again: {
            equalTo: '#password'
        }

    },

    // Specify the validation error messages
    messages: {
        name: "Введите имя",
        tel: "Введите номер телефона",
        email: "Введите email в формате username@domain.zone",
        entity: "Данное поле не может быть пустым",
        entity_address: "Данное поле не может быть пустым",
        KPP: "Данное поле не может быть менее 4 символов",
        ORGN: "Данное поле не может быть менее 4 символов",
        id_number: "Данное поле не может быть менее 4 символов",
        requisites: "Данное поле не может быть менее 4 символов",
        password: "Данное поле не может быть пустым",
        password_again: "Пароли не совпадают"

    },


    submitHandler: function(form) {

        form.submit();
    }
});
$("#change-information-form").validate({

    // Specify the validation rules
    rules: {
        name: "required",
        tel: "required",
        email: {
            required: true,
            email: true
        },
        entity: "required",
        entity_address: "required",
        id_number: "required",
        KPP: "required",
        ORGN: "required",
        requisites: "required",
        password: "required",
        password_again: {
            equalTo: '#password'
        }

    },

    // Specify the validation error messages
    messages: {
        name: "Введите имя",
        tel: "Введите номер телефона",
        email: "Введите email в формате username@domain.zone",
        entity: "Данное поле не может быть пустым",
        entity_address: "Данное поле не может быть пустым",
        KPP: "Данное поле не может быть менее 4 символов",
        ORGN: "Данное поле не может быть менее 4 символов",
        id_number: "Данное поле не может быть менее 4 символов",
        requisites: "Данное поле не может быть менее 4 символов",
        password: "Данное поле не может быть пустым",
        password_again: "Пароли не совпадают"

    },


    submitHandler: function(form) {

        form.submit();
    }
});
$("#order-form").validate({

    // Specify the validation rules
    rules: {
        name: "required",
        tel: "required",

        email: {
            required: true,
            email: true
        },
        // country: "required",
        city: "required",
        street: "required",
        delivery: "required",
        payment: "required"

    },

    // Specify the validation error messages
    messages: {
        name: "Введите имя",
        tel: "Введите номер телефона",
        email: "Введите email в формате username@domain.zone",
        // country: "Данное поле обязательное для заполнения",
        city: "Данное поле обязательное для заполнения",
        street: "Данное поле обязательное для заполнения",
        delivery: "Данное поле обязательное для заполнения",
        payment: "Данное поле обязательное для заполнения"

    },

    submitHandler: function(form) {

        form.submit();
    }
});