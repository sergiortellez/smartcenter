/*<------------------------------------------------->
<!--	creación de carruseles	-->
<!------------------------------------------------->*/

const API_KEY = "AIzaSyAY92qoSUcTrzZ669HLcAh-Mx9KBKKfePo";
// Esta constante guarda la clave API de Google. 

const PLAYLIST_ID = "PLhMMXwN8RXkwqQ7JMSyWl2JYt2B4_sU5O";
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
    })
    // Si ocurre un error durante la solicitud, se mostrará un mensaje de error en la consola.
    .catch(error => {
        console.error(error);
    });

/*<!------------------------------------------------->
<!--	end creación de carruseles	-->
<!------------------------------------------------->*/


/*<------------------------------------------------->
<!--	funcionamiento de carruseles	-->
<!------------------------------------------------->*/



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
        console.log(src);
        videoPreview.src = src;
        console.log(getVideoTitle(dataId));
    }


    function getVideoTitle(videoId) {

        var ytApiKey = "AIzaSyAY92qoSUcTrzZ669HLcAh-Mx9KBKKfePo";
        var videoId = videoId;

        $.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + ytApiKey, function (data) {
            return (data.items[0].snippet.title);
        });
    }
});



/*<!------------------------------------------------->
<!--	end funcionamiento de carruseles	-->
<!------------------------------------------------->*/







