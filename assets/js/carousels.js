
//selecciona todos los carruseles de la página que tengan la clase '.carousel'
let carousels = document.querySelectorAll(".carousel");
let carouselItems = document.querySelectorAll('.carousel-item');
let videoPreview = document.querySelector('#previewVideo');


carousels.forEach(carousel => {
    //encuentra el botón 'next'
    let botonNext = carousel.nextElementSibling;
    //encuentra el botón 'prev'
    let botonPrev = carousel.previousElementSibling;
    //determina cuánto mide de ancho el primer elemento (todos tienen un ancho parecido) y multiplícalo por 2
    let itemWidth = carousel.firstElementChild.offsetWidth * 2;


    //cuando el carrusel sufra un scroll ejecuta 'displayButtons'
    carousel.addEventListener('scroll', displayButtons)
    //cuando se apriete el botón next, ejecuta la función 'showNext'
    botonNext.addEventListener('click', showNext);
    //cuando se apriete el botón prev, ejecuta la función 'showPrev'
    botonPrev.addEventListener('click', showPrev);



    function showNext() {
        //haz scroll la distancia 'itemWith ()' hacia la Izquierda
        carousel.scrollLeft += itemWidth;
    }

    function showPrev() {
        //haz scroll la distancia 'itemWith ()' hacia la derecha
        carousel.scrollLeft -= itemWidth;
    }

    function displayButtons() {
        // ¿El carrusel está al inicio
        if (carousel.scrollLeft === 0) {
            //oculta el botón prev
            botonPrev.classList.add('hideButton');
            botonPrev.classList.remove('showButton');
        } else {
            //muestra el botón prev
            botonPrev.classList.remove('hideButton');
            botonPrev.classList.add('showButton');
        }
        //¿El carrusel está al final? 
        if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
            //oculta el botón 'next'
            botonNext.classList.add('hideButton');
            botonNext.classList.remove('showButton');
        } else {
            //muestra el botón 'next'
            botonNext.classList.remove('hideButton');
            botonNext.classList.add('showButton');
        }
    }
});


carouselItems.forEach(item => {
    let dataId = item.getAttribute('data-id');

    item.addEventListener('click', displayVideo);

    function displayVideo() {
        let src = "https://www.youtube.com/embed/" + dataId;
        console.log(src)
        videoPreview.src = src;

    }
});