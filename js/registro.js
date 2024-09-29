"use strict";
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente

        // Agregar la clase 'submitted' al botón
        const button = document.querySelector('button');
        button.classList.add('submitted');

        // Simular la creación de la cuenta y quitar la clase después de la animación
        setTimeout(function() {
            button.classList.remove('submitted');
        }, 800); // Duración de la animación
    });
});
