/*<------------------------------------------------->
<!--	expandImage	-->
<!-------------------------------------------------->
* Descripción:
    Función que gobierna las galerías dentro de las tarjetas de las GEAS, la idea es tomar el src de una miniatura y sustituirlo en un contenedor ampliado, mismo asunto con el alt, que se vuelve el texto.
    Esta función es reutilizable en una página siempre y cuando se respete la estructura en el HTML
* Parámetros:
    -currentImg: elemento (imagen) que llama a la función con el parámetro 'this'
* Dependencias: ninguna
* Devuelve/resultado: amplía la imagen que pertenece a una galería y le pone un título al hacer click en la miniatura. 
<!------------------------------------------------->*/
function expandImage(currentImg) {

    // sube un nivel
    var contenedorMiniaturas = currentImg.parentElement;


    //--todas las miniaturas serán transparentes--

    //crea un arreglo que tenga todos los hijos del contenedor (debe ser un arreglo porque un HTML collection no se puede iterar.)
    let miniaturas = Array.from(contenedorMiniaturas.children);
    //remueve la clase de opacidad 1 a todos los elementos del arreglo.
    miniaturas.forEach(function (image) {
        image.classList.remove('selected');
    });


    //el elemento que quedó seleccionado sí tendrá opacidad 1
    currentImg.classList.add('selected');

    // Encuentra el contenedor de la imagen expandida (está inmediatamente después del contenedor de miniaturas)
    var expandContainer = contenedorMiniaturas.nextElementSibling;
    //borra cualquier cosa dentro del contenedor
    expandContainer.innerHTML = '';
    //prueba si el elemento es una imagen o un video
    if (currentImg.tagName == 'IMG') {
        //crea una imagen 
        const expandedImage = document.createElement('img');
        //le da un atributo src
        expandedImage.setAttribute('src', currentImg.src);
        //dale un atributo data-image con el valor 'expandedImg'
        expandedImage.setAttribute('data-image', 'expandedImg');
        //dale un atributo alt con el valor del alt de la imagen
        expandedImage.setAttribute('alt', currentImg.alt);

        //fija el ancho a 100%
        expandedImage.style.width = '100%';
        //agrega la imagen al contenedor de la imagen expandida
        expandContainer.appendChild(expandedImage);


        // encuentra el contenedor de texto
        const expandTxt = expandContainer.querySelector("[data-txt='imgtext']");
        //crea un elemento span
        const textContainerSpan = document.createElement('span');
        //dale un atributo data-txt con el valor 'imgtext'
        textContainerSpan.setAttribute('data-txt', 'imgtext');
        //Usa el valor del atributo alt de la imagen como texto dentro de la imagen expandida
        textContainerSpan.innerHTML = currentImg.alt;
        //agrega el texto al contenedor de imagen
        expandContainer.appendChild(textContainerSpan);

    } else if (currentImg.tagName == 'VIDEO') {
        //crea un video 
        const expandedVideo = document.createElement('video');
        //le da un atributo src
        expandedVideo.setAttribute('src', currentImg.src);
        //dale un atributo data-image con el valor 'expandedImg'
        expandedVideo.setAttribute('data-image', 'expandedImg');
        //fija el ancho a 100%
        expandedVideo.style.width = '85%';
        //añade el atributo controls
        expandedVideo.setAttribute('controls', '');
        //agrega la imagen al contenedor de la imagen expandida
        expandContainer.appendChild(expandedVideo);
    }

}
/*<!------------------------------------------------->
<!--	end expandImage	-->
<!------------------------------------------------->*/

