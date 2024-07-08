/*<------------------------------------------------->
<!--	
Instagram Generator api	
-->
<!------------------------------------------------->*/


/*
¿De dónde salen estos datos? 
Api de Instagram 

TOKEN EXPIRADO? 

1) hacer la prueba de token expirado con este código:

*********
var url = "token";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

*********

2) Si el error devuelve un token expirado, entonces hay que generar uno nuevo.

3) Para generar un nuevo token, hay que ir a https://developers.facebook.com/apps y seguir los siguientes pasos:
    -selecciona tu app
    -haz click en "visualización básica de instagram"
    -haz click en "visualización básica"
    - ve a "User Token Generator"
    - Genera un nuevo token
    -sustitúyelo en este documento de sheets: https://docs.google.com/spreadsheets/d/12s8z3DKqUWCre_FnzjAPDZKqOwrSW6WaiQ708cdeUvM/edit#gid=2043418408



/*<------------------------------------------------->
<!--	Parámetros	-->
<!------------------------------------------------->*/



const URLdata = 'https://sheets.googleapis.com/v4/spreadsheets/12s8z3DKqUWCre_FnzjAPDZKqOwrSW6WaiQ708cdeUvM/values/token!A1?key=AIzaSyDzdEQYUcSwjzEmZNZhYd2vh1E_P6ykPAY';



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

    getToken(URLdata);
};


/*<!------------------------------------------------->
<!--	end onPageLoad	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	getToken	-->
<!-------------------------------------------------->
* Descripción:
    Usa un URL para hacer fetch a los datos de Jason, transforma esos datos en objetos que tienen arreglos, pasa como parámetro uno de esos arreglos '.values' a la función buildTable(). 
* Parámetros:
    -URLdata: string
* Dependencias: fillTable()
* Devuelve/resultado: genera un arreglo 'data' y lo pasa como parámetro a las funciones que construyen las tablas y gráficas
<!------------------------------------------------->*/
function getToken(URLdata) {
    var data = [];
    fetch(URLdata)
        .then(function (response) {
            return response.json();
        })
        .then(object => {
            data = object.values;
            //funciones a ejecutar con la data:
            //construye las tarjetas
            getInstagramEndpoint(data);

        });
}
/*<!------------------------------------------------->
<!--	end getToken	-->
<!------------------------------------------------->*/


/*<------------------------------------------------->
<!--	getInstagramEndpoint	-->
<!-------------------------------------------------->
* Descripción:
    
* Parámetros:
    -
* Dependencias:
* Devuelve/resultado:
<!------------------------------------------------->*/
function getInstagramEndpoint(data) {
    //clave de acceso
    const accessToken = data[0][0];
    //¿Cuántos posts se necesitan?
    const limit = 8;
    //URL endpoint
    const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,thumbnail_src,is_video,location&limit=${limit}&access_token=${accessToken}`;

    buildData(endpoint);
}
/*<!------------------------------------------------->
<!--	end getInstagramEndpoint	-->
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

async function buildData(endpoint) {
    try {
        const response = await fetch(endpoint);
        const json = await response.json();

        if (!json.data) {
            console.error("No data was returned from the API");
            return;
        }
        var dataPostsArray = [];
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
            //mete todo en un arreglo
            let post = [type, caption, thumbnail, postLink, date];
            //manda ese arreglo al arreglo data (para exportar)
            dataPostsArray.push(post);
        }
        //manda el arreglo dataPostsArray a la función que construye la sección de noticias
        buildNews(dataPostsArray);
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
    -data: arreglo de arreglos con los datos de cada post
        -data[i][0]: tipo de publicación (colección, video o imagen)
        -data[i][1]: texto de la publicación
        -data[i][2]: imagen de la publicación
        -data[i][3]: enlace a la publicación
        -data[i][4]: fecha de la publicación

* Dependencias: ninguna
* Devuelve/resultado: alimenta el código HTML que construye la sección Noticias
<!------------------------------------------------->*/

function buildNews(dataPostsArray) {

    //localiza el contenedor del grid
    let smartNewsGrid = document.querySelector("#grid-news");
    //limpia el contenedor
    smartNewsGrid.innerHTML = "";

    //recorre todos los datos para construir las tarjetas
    dataPostsArray.forEach(pub => {

        //crea un contenedor para la tarjeta
        let card = document.createElement('blockquote');
        //añade la clase 'insta-card'
        card.classList.add('insta-card');


        /*<--	*** añade el enlace ***	-->*/

        /*cada tarjeta tendrá un ancla que lleva a la publicación de IG*/
        //crea un ancla
        let anchor = document.createElement('a');
        //añade el enlace externo
        anchor.setAttribute('href', pub[3]);
        //se debe abrir en una página nueva
        anchor.setAttribute('target', "_blank");
        //añádelo al contenedor de tarjeta.
        card.append(anchor);

        /*<--	*** end añade el enlace ***	-->*/


        /*<--	*** añade imagen de ilustración ***	-->*/

        //crea una imagen
        let image = document.createElement('img');
        //añade el atributos src
        image.setAttribute('src', pub[2]);
        //agrégalo al contenedor tarjeta
        anchor.append(image);

        /*<--	*** end añade imagen de ilustración ***	-->*/


        /*<--	*** añade el texto ***	-->*/

        // crea un párrafo
        let paragraph = document.createElement('p');
        //añade el texto
        paragraph.innerText = pub[1]
        //ponlo dentro del ancla
        anchor.append(paragraph);

        /*<--	*** end añade el texto ***	-->*/



        /*<--	*** añadir contenedor para fecha ***	-->*/

        //crea un div
        let dataPublication = document.createElement('div');
        //añade la clase 'data-publication'
        dataPublication.classList.add('data-publication');
        //crea un span para contener la fecha
        let dateContainer = document.createElement('span');
        //añade la fecha
        dateContainer.innerText = pub[4];


        dataPublication.append(dateContainer);
        //añade logo de origen de redes sociales
        let socialLogo = document.createElement('i');
        //añade las clases de font-awesome
        socialLogo.classList.add('fa-solid');

        //veamos qué tipo de publicación es para escoger el logo respectivo

        //es una colección?
        if (pub[0] === 'CAROUSEL_ALBUM') {
            //añade la clase de colección
            socialLogo.classList.add('fa-rectangle-vertical-history');
        } else if (pub[0] === 'VIDEO') {
            //añade la clase de video
            socialLogo.classList.add('fa-video');
        } else {
            //añade la clase de imagen
            socialLogo.classList.add('fa-image');
        }


        //añade el logo 
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





