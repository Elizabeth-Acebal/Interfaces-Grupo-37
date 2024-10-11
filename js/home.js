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


//carrusel
document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  const visibleSlides = 3; // Número de imágenes visibles a la vez
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slideContainer = document.querySelector('.slides');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  // Mostrar las diapositivas iniciales
  showSlides();

  // Event listener para el botón "Anterior"
  prevButton.addEventListener('click', function() {
    moveSlide(-1);
  });

  // Event listener para el botón "Siguiente"
  nextButton.addEventListener('click', function() {
    moveSlide(1);
  });

  function moveSlide(n) {
    slideIndex += n;

    // Control para que el índice no se desborde
    if (slideIndex > totalSlides - visibleSlides) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = totalSlides - visibleSlides;
    }

    showSlides();
  }

  function showSlides() {
    const slideWidth = slides[0].offsetWidth; // Obtener el ancho de una diapositiva
    const offset = -(slideIndex * slideWidth); // Calcular la posición de desplazamiento

    slideContainer.style.transform = `translateX(${offset}px)`; // Mover las diapositivas
  }
});

//para los demas carruseles
document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  const visibleSlides = 3; // Número de imágenes visibles a la vez
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slideContainer = document.querySelector('.slides');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  // Mostrar las diapositivas iniciales
  showSlides();

  // Event listener para el botón "Anterior"
  prevButton.addEventListener('click', function() {
    moveSlide(-1);
  });

  // Event listener para el botón "Siguiente"
  nextButton.addEventListener('click', function() {
    moveSlide(1);
  });

  function moveSlide(n) {
    slideIndex += n;

    // Control para que el índice no se desborde
    if (slideIndex > totalSlides - visibleSlides) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = totalSlides - visibleSlides;
    }

    showSlides();
  }

  function showSlides() {
    const slideWidth = slides[0].offsetWidth; // Obtener el ancho de una diapositiva
    const offset = -(slideIndex * slideWidth); // Calcular la posición de desplazamiento

    slideContainer.style.transform = `translateX(${offset}px)`; // Mover las diapositivas
  }
});





