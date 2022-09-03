/*<------------------------------------------------->
<!--	
SMART NEws Generator api	
-->
<!------------------------------------------------->*/


/*
¿De dónde salen estos datos? 

Se intentó usar el api de twitter, pero la única manera de acceder a los datos si usar node.js era con un comando cURL. 
La importación de los datos mediante un fetch o un HTTP request fue imposible por los criterios de protocolos CORS que dicen básicamente que un dominio no puede pedir ese tipo de datos a otro dominio, aunque el código funciona en herramientas que no son navegadores nunca funcionará en navegadores (por seguridad). 

Por tal motivo se optó por usar IFTTT para hacer tres cosas

instagram post -> IFTTT -> tweet -> IFTTT -> google sheets

IFTTT convierte nuestros posts de foto o video en tweets, después otro applet escribe el código embedible de nuestros tweets en una hoja de google sheets. 

En sheets (https://docs.google.com/spreadsheets/d/1eg7MyN0pEkoVrlzp4tU24dc-MI0hHWDN_9UJR8VQKSk/edit#gid=710314341) se diseñó un script en appleScript para filtrar y ordenar el feed.

Finalmente se creó un api en JSON desde sheets que es el origen de estos datos. 

*/
  


/*<------------------------------------------------->
<!--	Parámetros	-->
<!------------------------------------------------->*/

//JSON con los últimos 10 tweets de la cuenta smartcenter_up
const URLTwitterFeed = "https://sheets.googleapis.com/v4/spreadsheets/1TS5Qa0eBI-cv1dSB0ipNVxzlWtQ56B3S3Jn3XfH-OaQ/values/public!A1:A10?key=AIzaSyDzdEQYUcSwjzEmZNZhYd2vh1E_P6ykPAY";

/*<!------------------------------------------------->
<!--	end Parámetros	-->
<!------------------------------------------------->*/


/*<------------------------------------------------->
<!--	onPageLoad	-->
<!-------------------------------------------------->
* Descripción:
    Se ejecuta cuando la página carga generando este orden:
    página carga -> carga script de widgets de twitter -> espera a que las funciones twttr estén listas -> construye los datos de la api que viene de google sheets.
* Parámetros:
    -ninguno
* Dependencias: buildData()
* Devuelve/resultado: ejecuta la función buildData() cuando la página termine de cargar. 
<!------------------------------------------------->*/

window.onload = function() {

    //carga el widget de twitter: https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
    
    window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
      
        t._e = [];
        t.ready = function(f) {
          t._e.push(f);
        };
      
        return t;
      }(document, "script", "twitter-wjs"));
    
    //¿Están listas las funciones de twitter?
      twttr.ready(
        function (twttr) {
          // bind events here
           //Construye el arreglo con los códigos. 
            buildData(URLTwitterFeed);
        }
      );
   
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
function buildData(URLdata){
    var data = [];
    fetch(URLdata)
    .then(function(response){
        return response.json();
    })
    .then(object => {
        data = object.values;
        //funciones a ejecutar con la data
        fillPageData(data);
    });    
}
/*<!------------------------------------------------->
<!--	end buildData	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	fillNews	-->
<!-------------------------------------------------->
* Descripción:
    Usa los datos que vienen de buildData para llenar el HTML de SMART News.
* Parámetros:
    -data: arreglo con datos de la url 
* Dependencias: ninguna
* Devuelve/resultado: alimenta el código HTML que construye la sección SMART News
<!------------------------------------------------->*/

function fillPageData(data){
    

    let smartNewsGrid = document.querySelector(".news");
    //para cada dato en nuestro arreglo, inyecta el código de una tarjeta.
    data.forEach(function(dataArray){
        smartNewsGrid.innerHTML += dataArray[0];
    });
    
    /*
    después de inyectar el HTML funcional de tweets escanea la clase "news" para convertir en widgets
    
    fuente:https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-loading-and-initialization

    */
    twttr.widgets.load( 
        document.querySelector(".news")
      );
    

}
/*<!------------------------------------------------->
<!--	end fillNews	-->
<!------------------------------------------------->*/

