var hamburguer = document.querySelector('#menu');

hamburguer.addEventListener('click', function(e) {
    var logo = document.querySelector('#logo');
    if (logo.style.display === 'none') {
        logo.style.display = 'block';
    } else {
        logo.style.display = 'none';
    }
    var subMenu = document.querySelectorAll('.display_button');
    for (let index = 0; index < subMenu.length; index++) {
        if (subMenu[index].style.display == 'none') {
            subMenu[index].style.display = 'block';
        } else {
            subMenu[index].style.display = 'none';
        }
    }



    e.preventDefault();
});