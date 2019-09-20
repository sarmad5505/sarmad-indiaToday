let menu = document.querySelector('.menu');
let nav = document.querySelector('#n-l');
let navClass = document.querySelector('.nav-links');
let clas = document.querySelector('.menu-nav-links');




menu.addEventListener('click', (e) => {
    nav.classList.toggle('menu-nav-links');
    console.log(nav.className);
})


