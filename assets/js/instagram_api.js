/*<------------------------------------------------->
<!--	
Instagram Generator api	
-->
<!------------------------------------------------->*/


/*
¿De dónde salen estos datos? 
Api de Instagram 


/*<------------------------------------------------->
<!--	Parámetros	-->
<!------------------------------------------------->*/

//TODO: enviar el token a google sheets y usar su api como backend, crear un nuevo documento para la api de instagram y crear las tarjetas. 
//clave de acceso
const accessToken = "IGQVJWbXg4OWQ1X0VKSHF5eURzLWYzT0NaNEFiUGhvazNXZAFEzWC1Jak1YVjdISHR0MUduNmdOOFJhMG9HM0RQaXJRRmY5RmZArSXhaTXZAwUms0dkkwXzFzTF9ueml5dUJScjExZAzVfR3FhSWV3REVEVQZDZD";
//¿Cuántos posts se necesitan?
const limit = 8;
//URL endpoint
const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,thumbnail_src,is_video,location&limit=${limit}&access_token=${accessToken}`;

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
    buildData();
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

async function buildData() {
    try {
        const response = await fetch(endpoint);
        const json = await response.json();

        if (!json.data) {
            console.error("No data was returned from the API");
            return;
        }

        const media = json.data;
        for (const data of media) {
            const type = data.media_type;
            const caption = data.caption;
            let thumbnail = '';
            if (data.media_type === 'VIDEO') {
                thumbnail = data.thumbnail_url;
            } else {
                thumbnail = data.media_url;
            }
            const postLink = data.permalink;

            // Format date string
            const date = new Date(data.timestamp).toLocaleString('es-MX', {
                day: 'numeric',
                month: 'long',
                hour: '2-digit',
                minute: '2-digit'
            });

            console.log(type, caption, thumbnail, postLink, date);
            // Do something with the data, such as creating a card
        }
    } catch (error) {
        console.error(error);
    }
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





