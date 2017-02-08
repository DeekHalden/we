var sidebar = document.getElementsByClassName('checkout')[0];
var main = document.querySelector('body');
var drawer = document.getElementsByClassName('checkout-sidebar')[0];
if (sidebar) {
    sidebar.addEventListener('click', function(e) {
        $('.checkout-sidebar__title--toggle').toggleClass('passive')
        drawer.classList.toggle('open');
        e.stopPropagation();
    });
    $('.checkout-sidebar__title--toggle').click(function() {
        $(this).toggleClass('passive')
        drawer.classList.remove('open');
    })
    main.addEventListener('click', function(event) {
        if (drawer.classList.contains('open')) {
            var target = event.target;
            if (target === drawer || drawer.contains(target)) {
                return
            }
            drawer.classList.remove('open');
        }
    });
}