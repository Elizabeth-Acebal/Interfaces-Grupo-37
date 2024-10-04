"use strict"
//Boton menu 
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector(".btn-menu").addEventListener("click", mostrarMenu);

    function mostrarMenu() {
        document.querySelector('nav').classList.toggle('active');
    }
})

//div perfil
document.getElementById('img-perfil').addEventListener('click', function() {
    const perfilContainer = document.getElementById('container-perfil');
    perfilContainer.classList.toggle('visible'); // Alterna la clase 'visible'
});