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


var path = window.location.pathname;
var page = path.split("/").pop();

var elements = document.getElementsByClassName('nav__element');

for(var i = 0; i < elements.length; i++) {
    var a = elements[i].childNodes[0].href;
    elements[i].childNodes[0].classList.remove('active');
    if(a.substring(a.lastIndexOf('/')) === '/'+page) {
        elements[i].childNodes[0].classList.add('active');
    }
}


