window.onscroll = function() {
    const header = document.querySelector('nav.navbar');
    const fixed_navbar = header.offsetTop;

    if (window.pageYOffset > fixed_navbar) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};