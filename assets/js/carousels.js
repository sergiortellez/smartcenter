
//Programa que gobierna la creación y funcionamiento de carruseles de videos basados en playlists de youtube. (SMART Tips)

/*<------------------------------------------------->
<!--	variables Globales	-->
<!------------------------------------------------->*/
//selecciona todos los contenedores de carruseles con la clase 'carrousel_container'
var carouselsContainers = document.querySelectorAll(".carrousel_container");
//selecciona el visor de previsualización
const videoPreview = document.querySelector('#previewVideo');
// Esta constante guarda la clave API de Google. 
const API_KEY = "AIzaSyAY92qoSUcTrzZ669HLcAh-Mx9KBKKfePo";

/*<!------------------------------------------------->
<!--	end variables Globales	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	Creación de carruseles (main)	-->
<!------------------------------------------------->*/
//selecciona todos los contenedores
carouselsContainers.forEach(function (container) {
    //toma el data-id de cada contenedor
    let PLAYLIST_ID = container.getAttribute('data-id');
    // Esta constante guarda el ID de la lista de reproducción que se desea obtener.

    const endpoint = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=12&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;
    // Esta constante guarda la URL de la solicitud API. Incluye el ID de la lista de reproducción y la clave API, además de establecer los detalles que se desean obtener (snippet y contentDetails) y el número máximo de resultados por solicitud (12).
    // Utiliza la función `fetch` para realizar una solicitud GET a la URL de la API.

    fetch(endpoint)
        // Si la solicitud es exitosa, la respuesta se convierte en un objeto JSON.
        .then(response => response.json())
        //Luego, se extrae la información relevante de cada video(ID, título y miniatura) y se almacena en una nueva constante`videos`
        .then(data => {
            const videos = data.items.map(item => {
                return {
                    id: item.snippet.resourceId.videoId,
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnails.default.url
                };
            });


            //Encuentra el elemento carrousel dentro del contenedor
            let carouselElement = container.querySelector(".carousel");

            //borra los placeHolders del contenedor
            carouselElement.innerHTML = ' ';

            //construye los botones 'prev' y 'next'
            let tempPrevButton = buildPrevButton();
            container.prepend(tempPrevButton);
            let tempNextButton = buildNextButton();
            container.append(tempNextButton);

            //para cada uno de los videos del carrusel:
            videos.forEach(function (video) {

                let tempItem = buildCarouselItem(video.id, video.title, video.thumbnail);
                carouselElement.appendChild(tempItem);

            });
            prevNextButtonActivate(carouselElement);
            previewSelectorActivate(carouselElement);

        })
        // Si ocurre un error durante la solicitud, se mostrará un mensaje de error en la consola.
        .catch(error => {
            console.error(error);
        });


});

/*<!------------------------------------------------->
<!--	end Creación de carruseles	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!-- funciones auxiliares de	creación de carruseles	-->
<!------------------------------------------------->*/

function buildPrevButton() {
    // Crea el botón
    let prevButton = document.createElement('button');
    prevButton.setAttribute('type', 'button');
    prevButton.classList.add('prev-button');
    prevButton.classList.add('hideButton');

    //crea el ícono
    let prevIcon = document.createElement('i');
    prevIcon.classList.add('fa-duotone');
    prevIcon.classList.add('fa-square-left');

    //mete el ícono en el botón
    prevButton.appendChild(prevIcon);

    //devuelve el botón
    return prevButton;
}

function buildNextButton() {
    // Crea el botón
    let nextButton = document.createElement('button');
    nextButton.setAttribute('type', 'button');
    nextButton.classList.add('next-button');
    nextButton.classList.add('showButton');

    //crea el ícono
    let nextIcon = document.createElement('i');
    nextIcon.classList.add('fa-duotone');
    nextIcon.classList.add('fa-square-right');

    //mete el ícono en el botón
    nextButton.appendChild(nextIcon);

    //devuelve el botón
    return nextButton;
}

function buildCarouselItem(id, title, thumbnail) {
    //construye el botón
    let carouselItem = document.createElement('button');
    carouselItem.classList.add('carousel-item');
    carouselItem.setAttribute('type', 'button');
    carouselItem.setAttribute('data-id', id);

    //ahora sus elementos:

    //thumbnail
    let itemThumbnail = document.createElement('img');
    itemThumbnail.setAttribute('alt', 'video Thumbnail');
    itemThumbnail.setAttribute('src', thumbnail);


    //title

    //recorta títulos demasiado largos
    if (title.length > 45) {
        title = title.substring(0, 45).concat("...");
    }

    let itemTitle = document.createElement('figcaption');
    itemTitle.innerText = title;

    //mete los elementos al botón
    carouselItem.appendChild(itemThumbnail);
    carouselItem.appendChild(itemTitle);

    //devuélveme el elemento completo
    return carouselItem;

}


/*<!------------------------------------------------->
<!--	end funciones auxiliares de creación de carruseles	-->
<!------------------------------------------------->*/


/*<------------------------------------------------->
<!-- funciones auxiliares de funcionamiento de carruseles	-->
<!------------------------------------------------->*/

function prevNextButtonActivate(carouselElement) {

    //encuentra el botón 'next'
    let botonNext = carouselElement.nextElementSibling;

    //encuentra el botón 'prev'
    let botonPrev = carouselElement.previousElementSibling;

    //determina cuánto mide de ancho el primer elemento (todos tienen un ancho parecido) y multiplícalo por 2
    let itemWidth = carouselElement.firstElementChild.offsetWidth * 2;


    //cuando el carrusel sufra un scroll ejecuta 'displayButtons'
    carouselElement.addEventListener('scroll', displayButtons);
    //cuando se apriete el botón next, ejecuta la función 'showNext'
    botonNext.addEventListener('click', showNext);
    //cuando se apriete el botón prev, ejecuta la función 'showPrev'
    botonPrev.addEventListener('click', showPrev);



    function showNext() {
        //haz scroll la distancia 'itemWith ()' hacia la Izquierda
        carouselElement.scrollLeft += itemWidth;
    }

    function showPrev() {
        //haz scroll la distancia 'itemWith ()' hacia la derecha
        carouselElement.scrollLeft -= itemWidth;
    }

    function displayButtons() {
        // ¿El carrusel está al inicio
        if (carouselElement.scrollLeft === 0) {
            //oculta el botón prev
            botonPrev.classList.add('hideButton');
            botonPrev.classList.remove('showButton');
        } else {
            //muestra el botón prev
            botonPrev.classList.remove('hideButton');
            botonPrev.classList.add('showButton');
        }
        //¿El carrusel está al final? 
        if (carouselElement.scrollLeft + carouselElement.offsetWidth >= carouselElement.scrollWidth) {
            //oculta el botón 'next'
            botonNext.classList.add('hideButton');
            botonNext.classList.remove('showButton');
        } else {
            //muestra el botón 'next'
            botonNext.classList.remove('hideButton');
            botonNext.classList.add('showButton');
        }
    }

}




function previewSelectorActivate() {
    //selecciona todos los elementos que tengan la clase .carrousel-item
    var carouselItems = document.querySelectorAll('.carousel-item');

    carouselItems.forEach(item => {
        let dataId = item.getAttribute('data-id');

        item.addEventListener('click', displayVideo);

        function displayVideo() {
            let src = "https://www.youtube.com/embed/" + dataId;

            videoPreview.src = src;

            if (window.innerWidth <= 769) {

                videoPreview.scrollIntoView({ behavior: 'smooth' });
            }


        }
    });
}




/*<!------------------------------------------------->
<!--	end funciones auxiliares de funcionamiento de carruseles	-->
<!------------------------------------------------->*/








