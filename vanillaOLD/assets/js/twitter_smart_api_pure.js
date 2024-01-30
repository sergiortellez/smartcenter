/* -----------********************************DEPRECIADO******************************-----------*/
/* -----------********************************DEPRECIADO******************************-----------*/
/* -----------********************************DEPRECIADO******************************-----------*/


/*<------------------------------------------------->
<!--	
SMART NEws Generator api	
-->
<!------------------------------------------------->*/


/*
¿De dónde salen estos datos? 

Usando la API de twitter se extraen los datos de los últimos 8 tweets la url de petición es este:

https://api.twitter.com/2/users/1486624750801760256/tweets?expansions=attachments.media_keys&media.fields=preview_image_url,url&max_results=8&tweet.fields=text,created_at

En google appsScript se creó un script (https://docs.google.com/spreadsheets/d/1eg7MyN0pEkoVrlzp4tU24dc-MI0hHWDN_9UJR8VQKSk/edit#gid=710314341) con la función getTwitterData() que hace el request y acomoda los datos para ser importados aquí.



Esta api funciona así: 

instagram post -> IFTTT -> tweet -> apiTwitter -> google sheets

 
Finalmente se creó un api en JSON desde sheets que es el origen de estos datos. (se tuvo que exportar los datos a mi cuenta personal porque la UP no permite crear aplicaciones externas de la api de google).

*/



/*<------------------------------------------------->
<!--	Parámetros	-->
<!------------------------------------------------->*/

//JSON con los últimos 10 tweets de la cuenta smartcenter_up
const URLTwitterFeed = "https://sheets.googleapis.com/v4/spreadsheets/1TS5Qa0eBI-cv1dSB0ipNVxzlWtQ56B3S3Jn3XfH-OaQ/values/pure!A1:D8?key=AIzaSyDzdEQYUcSwjzEmZNZhYd2vh1E_P6ykPAY";

/*
Los datos tienen la siguiente forma:

data = [
      "fecha de creación",
      "enlace a ig",
      "contenido (texto) ",
      "enlace a imagen de ilustración"
    ]

*/

/*<!------------------------------------------------->
<!--	end Parámetros	-->
<!------------------------------------------------->*/


/*<------------------------------------------------->
<!--	onPageLoad	-->
<!-------------------------------------------------->
* Descripción:
    Se ejecuta cuando la página carga generando este orden:
    página carga -> se llama la función de buildData -> buildData baja los datos de la api de sheets -> se ejecuta buildPageData para crear la sección de noticias
* Parámetros:
    -ninguno
* Dependencias: buildData()
* Devuelve/resultado: ejecuta la función buildNews() cuando la página termine de cargar. 
<!------------------------------------------------->*/

window.onload = function () {
    //Construye el arreglo con los códigos. 
    buildData(URLTwitterFeed);
};


/*<!------------------------------------------------->
<!--	end onPageLoad	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	buildData	-->
<!-------------------------------------------------->
* Descripción:
    Usa un URL para hacer fetch a los datos de JSON, transforma esos datos en objetos que tienen arreglos, pasa como parámetro uno de esos arreglos ".values" a la función buildNews(). 
* Parámetros:
    -URLdata: string (debe ser un url con datos JSON)
* Dependencias: buildNews()
* Devuelve/resultado: genera un arreglo "data" y lo pasa como parámetro a las funciones que construyen la sección de noticias.
<!------------------------------------------------->*/
function buildData(URLdata) {
    var data = [];
    fetch(URLdata)
        .then(function (response) {
            return response.json();
        })
        .then(object => {
            data = object.values;
            //funciones a ejecutar con la data
            buildNews(data);
        });
}
/*<!------------------------------------------------->
<!--	end buildData	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	buildNews	-->
<!-------------------------------------------------->
* Descripción:
    Usa los datos que vienen de buildData para llenar el HTML de SMART News.
* Parámetros:
    -data: arreglo con datos de la url 
* Dependencias: ninguna
* Devuelve/resultado: alimenta el código HTML que construye la sección SMART News
<!------------------------------------------------->*/

function buildNews(data) {

    /*los datos tienen la forma: 
    [["hecha y hora", "enlace a ig", "texto publicado", "enlace a ilustración"],[entrada 2],[entradaN]]*/

    //localiza el contenedor del grid
    let smartNewsGrid = document.querySelector("#grid-news");

    //recorre todos los datos para construir las tarjetas
    data.forEach(pub => {

        //crea un contenedor para la tarjeta
        let card = document.createElement('blockquote');
        //añade la clase 'tweet-card'
        card.classList.add('tweet-card');


        /*<--	*** añade el enlace ***	-->*/

        /*cada tarjeta tendrá un ancla que lleva a la publicación de IG*/
        //crea un ancla
        let anchor = document.createElement('a');


        //existe el enlace externo a ig? 
        if (pub[1].length > 1) {
            //el enlace será el elemento uno del arreglo
            anchor.setAttribute('href', pub[1]);
        } else {
            //si no hay enlace simplemente te lleva a twitter
            anchor.setAttribute('href', "https://twitter.com/smart__UP");
        }

        //se debe abrir en una página nueva
        anchor.setAttribute('target', "_blank");

        //añádelo al contenedor de tarjeta.
        card.append(anchor);

        /*<--	*** end añade el enlace ***	-->*/


        /*<--	*** añade el texto ***	-->*/

        // crea un párrafo
        let paragraph = document.createElement('p');
        //añade el texto
        paragraph.innerText = pub[2]
        //ponlo dentro del ancla
        anchor.append(paragraph);
        /*<--	*** end añade el texto ***	-->*/

        /*<--	*** añade imagen de ilustración ***	-->*/
        /*¿existe un campo para la imagen?*/
        if (pub[3].length > 1) {
            //crea una imagen
            let image = document.createElement('img');
            //añade el atributos src
            image.setAttribute('src', pub[3]);
            //agrégalo al contenedor tarjeta
            anchor.append(image);
        } else {
            //crea una imagen genérica

            //crea una imagen
            let image = document.createElement('img');
            //añade el atributos src
            image.setAttribute('src', "assets/images/smart_comunica.webp");
            //agrégalo al contenedor tarjeta
            anchor.append(image);
        }


        /*<--	*** end añade imagen de ilustración ***	-->*/

        /*<--	*** añadir contenedor para fecha ***	-->*/

        //crea un div
        let dataPublication = document.createElement('div');
        //añade la clase 'data-publication'
        dataPublication.classList.add('data-publication');
        //crea un span para contener la fecha
        let dateContainer = document.createElement('span');

        //transforma el elemento fecha en algo legible:

        //guarda los parámetros de los elementos fecha en este objeto: 
        var dateOptions = { weekday: undefined, year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', };
        //crea una fecha y usa el string que viene del api
        const normalDate = new Date(pub[0]);
        //añade el texto "fecha" pero transformado a la hora de México, con las opciones que se especificaron en la línea 202
        dateContainer.innerHTML = normalDate.toLocaleTimeString('es-MX', dateOptions);;
        //agrega la fecha al contenedor de datos
        dataPublication.append(dateContainer);
        //añade logo de origen de redes sociales
        let socialLogo = document.createElement('i');
        //añade las clases de font-awesome
        socialLogo.classList.add('fa-brands');

        //veamos si escogeremos el logo de instagram o de twitter:

        //existe el enlace externo a ig? 
        if (pub[1].length > 1) {
            //añade la clase de ig
            socialLogo.classList.add('fa-square-instagram');
            socialLogo.style.color = '#833AB4';
        } else {
            //añade la clase de twitter
            socialLogo.classList.add('fa-square-twitter');
            socialLogo.style.color = '#00acee';
        }

        //añade el logo de ig o twitter al contenedor de datos
        dataPublication.append(socialLogo);
        //añade el contenedor de datos a la tarjeta

        anchor.append(dataPublication);

        /*<--	*** end añadir contenedor para fecha ***	-->*/

        //añade el elemento completo al grid
        smartNewsGrid.append(card);

    });



}
/*<!------------------------------------------------->
<!--	end buildNews	-->
<!------------------------------------------------->*/

