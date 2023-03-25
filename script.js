'use strict'

/** El elemento button añadirá una clase a todos los elementos del html que tengan la clase NAV */
let button = document.querySelector('.header_button');
let nav = document.querySelectorAll('.nav');

console.log(nav);
/** Al utilizar "querySelectorAll" tengo que recorrer la lista que me genera con un forEach */
nav.forEach((elem)=>{
    button.addEventListener('click', ()=>{
        elem.classList.toggle('active');
    })
});