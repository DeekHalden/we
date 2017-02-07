 var sidebar = document.getElementsByClassName('checkout')[0];
 var main = document.querySelector('body');
 var drawer = document.getElementsByClassName('checkout-sidebar')[0];
if(sidebar){
     sidebar.addEventListener('click', function(e) {
        console.log(sidebar);
         sidebar.classList.toggle('active')
         drawer.classList.toggle('open');
         console.log(drawer);
         e.stopPropagation();
     });
     main.addEventListener('click', function(event) {
         if(drawer.classList.contains('open')) {
             var target = event.target;
             if (target === drawer || drawer.contains(target)) {
                 return
             }
             sidebar.classList.toggle('active')
             drawer.classList.remove('open');
         }
     });
}