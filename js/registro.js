"use strict";

"use strict";


// Redirigir al home después de un registro exitoso
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío por defecto del formulario
    // La redirección ahora la haremos después de cerrar el popover y lanzar el confeti
});

// popover
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const popover = document.getElementById('myPopover');
    const closePopoverButton = document.getElementById('closePopoverButton');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Mostrar el popover, el overlay y lanzar el confeti al enviar el formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario
        overlay.style.display = 'block'; // Muestra el overlay
        popover.classList.remove('hidden'); // Muestra el popover
        setTimeout(() => {
            popover.classList.add('show'); // Activa la animación del popover
        }, 10); // Un pequeño retardo para asegurar que la transición ocurra

        // Lanzar confeti al mostrar el popover
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    });

    // Ocultar el popover y redirigir al home al hacer clic en el botón de cerrar
    closePopoverButton.addEventListener('click', () => {
        popover.classList.remove('show'); // Quita la animación del popover
        setTimeout(() => {
            overlay.style.display = 'none'; // Oculta el overlay
            popover.classList.add('hidden'); // Oculta el popover después de la animación
            window.location.href = 'home.html'; // Redirige a la página de inicio
        }, 500); // Espera a que termine la animación antes de ocultar el popover
    });
});