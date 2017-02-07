 $(function() {
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

         submitHandler: function(form, e) {
             e.preventDefault();
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

         submitHandler: function(form, e) {
             e.preventDefault();
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

         submitHandler: function(form, e) {
             e.preventDefault();
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

         submitHandler: function(form, e) {
             e.preventDefault();
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

         submitHandler: function(form, e) {
             e.preventDefault();
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
             requisites: "required"

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
             requisites: "Данное поле не может быть менее 4 символов"

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
 });




 //     $('.subscribe-action').click(function(e) {

 //         var name = $('#name').val();

 //         checkForValidation($('.subscribe-wrapper__form--error'), e);

 //         if($.trim(name).length === 0 ){
 //             $('.subscribe-wrapper__form--error').empty();
 //             $('.subscribe-wrapper__form--error').append('Введите имя');
 //             e.preventDefault();
 //         }

 //     });

 //     $('.partnership-action').click(function(e) {

 //         var input = $('.form-important');

 //         checkForValidation($('.partnership-form__form--error'), e)
 //         for (var i = 0 ; i < input.length; i++){
 //             console.log(input);
 //             // if(input[i].val.length < 4) {
 //             //     $('.important').css('border-color', 'red')
 //             //     $('.partnership-form__form--error').append(('<br>Поля выделенные красным цветом не могут быть менее 4 символов'))    
 //             // }
 //         }

 //     });

 //     $('.login-form .action-btn').click(function(e) {

 //         checkForValidation($('.login-form__error'), e)

 //     });

 //     $('.forgot-form .action-btn').click(function(e) {

 //         checkForValidation($('.forgot-form__error'), e);

 //     });
 //     $('.register-form .action-btn').click(function(e) {

 //         checkForValidation($('.register-form__error'), e);
 //         if($('.important').val.length < 4){
 //             $('.important').css('border-color', 'red')
 //             $('.register-form__error').append(('<br>Поля выделенные красным цветом не могут быть менее 4 символов'))
 //         }

 //     });
 //     $('.order').click(function(e) {

 //         checkForValidation($('.order-form__error'), e);
 //         if($('.important').val.length < 4){
 //             $('.important').css('border-color', 'red')
 //             $('.order-form__error').append(('<br>Поля выделенные красным цветом не могут быть менее 4 символов'))
 //         }

 //     });
 // });

 // function checkForValidation(selector, e) {
 //     var email = $('#email').val();
 //     if ($.trim(email).length == 0) {
 //             selector.empty();
 //             selector.append('Введите email в формате username@domain.zone');
 //             e.preventDefault();
 //         }
 //         if (validateEmail(email)) {
 //             selector.empty();
 //             // selector.append('Email правильный');
 //         }
 //         else {
 //             selector.empty();
 //             selector.append('Введите email в формате username@domain.zone');
 //             e.preventDefault();
 //         }
 // }


 // function validateEmail(email) {
 //     var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
 //     if (filter.test(email)) {
 //         return true;
 //     }
 //     else {
 //         return false;
 //     }
 // }