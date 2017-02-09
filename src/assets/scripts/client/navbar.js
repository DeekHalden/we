 (function() {
     var menu = document.querySelector('.button-wrapper');
     var main = document.querySelector('body');
     var drawer = document.querySelector('.nav');

     menu.addEventListener('click', function(e) {
         menu.classList.toggle('active')

         drawer.classList.toggle('open');
         e.stopPropagation();
     });
     main.addEventListener('click', function(event) {
         if (drawer.classList.contains('open')) {
             var target = event.target;
             if (target === drawer || drawer.contains(target)) {
                 return
             }
             menu.classList.toggle('active')
             drawer.classList.remove('open');
         }
     });
 })();


 var path = window.location.pathname;
 var page = path.split("/").pop();

 var elements = document.getElementsByClassName('nav__element');

 for (var i = 0; i < elements.length; i++) {
     var a = elements[i].childNodes[0].href;
     elements[i].childNodes[0].classList.remove('active');
     if (a.substring(a.lastIndexOf('/')) === '/' + page) {
         elements[i].childNodes[0].classList.add('active');
     }
 }



 var user = '<div class="login1"><a href="me.html" class="me">Личный кабинет </a>/&nbsp;&nbsp;&nbsp;&nbsp;<span  onclick="logout()" class="logout">Выйти</span></div>';
 var login = '<a class="nav__element--href lg-hidden popup-with-zoom-anim" href="#login">Вход /<span="login__register"Регистрация</span></a>';
var isLoggedIn = true;
     if (isLoggedIn) {
         console.log(user);
         $('.lg-hidden').empty().append(user);
         // +b.login 
         //             +e.A(href="me.html").me Привет, Юзер  &nbsp;&nbsp;&nbsp;&nbsp;
         //             +e.A(click=loggenIn = false).logout Выйти
     } else {
         $('.lg-hidden').empty().append(login);
     }

 function logout() {

     isLoggedIn = false;
     // $('.lg-hidden').empty().append(login);
 }