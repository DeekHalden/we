 var menu = document.querySelector('.button-wrapper');
 var main = document.querySelector('body');
 var drawer = document.querySelector('.nav');

 menu.addEventListener('click', function(e) {
     menu.classList.toggle('active')
     
     drawer.classList.toggle('open');
     e.stopPropagation();
 });
 main.addEventListener('click', function(event) {
     if(drawer.classList.contains('open')) {
         if (target === drawer || drawer.contains(target)) {
             return
         }
         menu.classList.toggle('active')
         var target = event.target;
         drawer.classList.remove('open');
     }
 });