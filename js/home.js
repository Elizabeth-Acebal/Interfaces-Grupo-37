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

  /*function showSlides() {
    const slideWidth = slides[0].offsetWidth; // Obtener el ancho de una diapositiva
    const offset = -(slideIndex * slideWidth); // Calcular la posición de desplazamiento

    slideContainer.style.transform = `translateX(${offset}px)`; // Mover las diapositivas
  }
});
*/


function showSlides() {
  const slideWidth = slides[0].offsetWidth; // Obtener el ancho de una diapositiva
  const offset = -(slideIndex * slideWidth); // Calcular la posición de desplazamiento

  // Mover las diapositivas
  slideContainer.style.transform = `translateX(${offset}px)`;

  // Eliminar la clase active-slide de todas las tarjetas
  slides.forEach(slide => slide.classList.remove('active-slide'));

  // Añadir la clase active-slide a la tarjeta actual
  slides[slideIndex].classList.add('active-slide');
}
});








document.addEventListener('DOMContentLoaded', function() {
  let cardIndex = 0;
  const visibleCards = 4; 
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;
  const cardContainer = document.querySelector('.cards');
  const buttonMenos = document.querySelector('.btnMenos');
  const buttonMas = document.querySelector('.btnMas');

  
  showCards();

  
  buttonMenos.addEventListener('click', function() {
    moveCard(-1);
  });

 
  buttonMas.addEventListener('click', function() {
    moveCard(1);
  });

  function moveCard(n) {
    cardIndex += n;

    
    if (cardIndex > totalCards - visibleCards) {
      cardIndex = 0;
    } else if (cardIndex < 0) {
      cardIndex = totalCards - visibleCards;
    }

    showCards();
  }

  function showCards() {
    const cardWidth = cards[0].offsetWidth; 
    const offsett = -(cardIndex * cardWidth); 

    cardContainer.style.transform = `translateX(${offsett}px)`; 
  }
});





//animacion sppiner

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
