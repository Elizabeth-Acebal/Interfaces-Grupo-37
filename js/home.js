"use strict"
//Boton menu 
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector(".btn-menu").addEventListener("click", mostrarMenu);

    function mostrarMenu() {
        document.querySelector('nav').classList.toggle('active');
    }
})

