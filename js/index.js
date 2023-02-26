var hamburguer = document.querySelector('#menu');

hamburguer.addEventListener('click', function(e) {
    var logo = document.querySelector('.mobile_menu');
    if (logo.style.display !== 'none') {
        logo.style.display = 'none';
    } else {
        logo.style.display = 'flex';
    }

});