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

//animacion sppiner//

document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const homeContent = document.getElementById('home-content');
  const loadingPercentage = document.getElementById('loading-percentage');

  let progress = 0;
  const loadingDuration = 5000; // 5 segundos
  const interval = loadingDuration / 100; // Intervalo para incrementar el porcentaje

  const loadingInterval = setInterval(() => {
      progress++;
      loadingPercentage.textContent = `${progress}%`;

      if (progress >= 100) {
          clearInterval(loadingInterval);
          loadingScreen.classList.add('hidden'); // Oculta la pantalla de carga
          homeContent.classList.remove('hidden'); // Muestra el contenido de la página
      }
  }, interval);
});




// carruseles
document.addEventListener('DOMContentLoaded', function () {
  //  carrusel principal
  const principalCarrusel = document.querySelector('.principal-carrusel');
  if (principalCarrusel) {
      configurarCarrusel(principalCarrusel, 'slides', 'next', 'prev',  obtenerNumeroDeImagenes()); // El carrusel principal muestra 3 imágenes
    }
     // Función para determinar cuántas imágenes mostrar
  function obtenerNumeroDeImagenes() {
    return window.innerWidth < 768 ? 2 : 3; // Muestra 2 imágenes en móviles y 3 en desktop
}

// Agrega un evento para actualizar el carrusel al redimensionar la ventana
window.addEventListener('resize', function() {
    configurarCarrusel(principalCarrusel, 'slides', 'next', 'prev', obtenerNumeroDeImagenes());
});

  // Configuración de los carruseles secundarios
  const carruselesSecundarios = document.querySelectorAll('.carrusel-secundario');
  carruselesSecundarios.forEach(carrusel => {
      const visibleSlides = window.innerWidth <= 768 ? 3 : 6; // Secundarios muestran 4 en móvil, 6 en pantallas grandes
      configurarCarrusel(carrusel, 'slides2', 'next2', 'prev2', visibleSlides);
  });

  function configurarCarrusel(carrusel, slideClass, nextButtonClass, prevButtonClass, visibleSlides) {
      const slides = carrusel.querySelectorAll(`.${slideClass} .slide, .${slideClass} .slide-card`);
      const slideContainer = carrusel.querySelector(`.${slideClass}`);
      const prevButton = carrusel.querySelector(`.${prevButtonClass}`);
      const nextButton = carrusel.querySelector(`.${nextButtonClass}`);
      let slideIndex = 0;
      const totalSlides = slides.length;

      showSlides(slideContainer, slides, slideIndex, visibleSlides);

      prevButton.addEventListener('click', function () {
          moveSlide(-1, slideContainer, slides, visibleSlides);
      });

      nextButton.addEventListener('click', function () {
          moveSlide(1, slideContainer, slides, visibleSlides);
      });

      function moveSlide(n, slideContainer, slides, visibleSlides) {
          slideIndex += n;

          // Control para evitar desbordes
          if (slideIndex > totalSlides - visibleSlides) {
              slideIndex = 0;
          } else if (slideIndex < 0) {
              slideIndex = totalSlides - visibleSlides;
          }

          showSlides(slideContainer, slides, slideIndex, visibleSlides);
      }

      function showSlides(slideContainer, slides, slideIndex, visibleSlides) {
          const slideWidth = slides[0].offsetWidth;
          const offset = -(slideIndex * slideWidth);

          slideContainer.style.transform = `translateX(${offset}px)`;

          slides.forEach(slide => slide.classList.remove('active-slide'));

          for (let i = 0; i < visibleSlides; i++) {
              const currentSlide = slides[slideIndex + i];
              if (currentSlide) {
                  currentSlide.classList.add('active-slide');
              }
          }
      }
  }
});

