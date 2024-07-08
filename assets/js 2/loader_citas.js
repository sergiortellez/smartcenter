/* 
Título: loader_citas.js
Descripción: Controla el loader (los fantasmitas) de la página de citas para que cuando un usuario entre a la página, el loader se muestre hasta que el iframe haya cargado completamente.
Parámetros: ninguno
Dependencias: ninguna
Devuelve/resultado:  oculta el loader cuando el iframe haya cargado completamente.
*/


// Seleccionar el contenedor del iframe mediante su ID
const iframeContainer = document.querySelector("#app_citas");

// Seleccionar el iframe dentro del contenedor
const myIframe = iframeContainer.querySelector("iframe");

//selecciona el loader  
const loader = document.querySelector("#loader");


// Obtener la altura inicial del iframe, incluyendo el padding, el borde y la barra de desplazamiento (si existe)
initialHeight = myIframe.offsetHeight;

// Configurar un intervalo que se ejecute cada segundo
const intervalId = setInterval(function () {

    // Obtener la altura actual del iframe, incluyendo el padding, el borde y la barra de desplazamiento (si existe)
    currentHeight = myIframe.offsetHeight;

    // Si la altura actual es diferente a la altura inicial, significa que el iframe ha mostrado algo en la pantalla
    if (currentHeight !== initialHeight) {

        // Mostrar un mensaje en la consola indicando que el iframe ha mostrado algo en la pantalla
        console.log("IFrame has displayed something on the screen.");

        // ocultar el loader
        loader.style.display = "none";

        // Limpiar el intervalo para que deje de ejecutarse
        clearInterval(intervalId);
    }
}, 1000); // Intervalo de 1000ms (1 segundo) entre cada ejecución de la función```


/* -----------fin funcion ()----------- */