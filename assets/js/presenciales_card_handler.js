
/*<------------------------------------------------->
<!--	Card Handler	-->
<!-------------------------------------------------->
* Descripción:
    Este archivo contiene el código que controla la apertura y cierre de las tarjetas de eventos en la página de eventos presenciales.
* Parámetros:
    -ninguno, corre al inicio. 
* Dependencias:
    -ninguna
* Devuelve/resultado:
 Cada que se oprime el botón "ver más" de una tarjeta, se abre o cierra la tarjeta correspondiente. Controla las alturas y el correcto desplegado independiente aún cuando están en la misma fila del grid. 
<!------------------------------------------------->*/


// Seleccionar el contenedor de los eventos
const eventosGrid = document.querySelector("#events_grid");

// Seleccionar todos los botones "ver más" de cada evento
const botonesMas = eventosGrid.querySelectorAll(".event_more_button");

// Iterar sobre cada botón "ver más"
botonesMas.forEach((boton) => {
    // Añadir un evento click a cada botón "ver más"
    boton.addEventListener("click", () => {

        //obtener una referencia a la tarjeta madre del botón
        const eventCard = boton.closest('.event_card');
        // Obtener el contenedor de datos ocultos correspondiente a este botón "ver más"
        const datosOcultos = eventCard.querySelector('.event_hidden');
        //obtener una referencia al texto dentro de botón "ver más"
        const textBoton = boton.querySelector('span');
        //obtener una referencia al icono dentro de botón "ver más"
        const iconBoton = boton.querySelector('svg');


        //se usarán alturas máximas para controlar la visualización de los datos ocultos (no se usa la propiedad display porque no se puede animar)


        // Si el elemento "oculto" está actualmente oculto, cambiar su estilo para mostrarlo
        if (datosOcultos.style.maxHeight === "0px" || datosOcultos.style.maxHeight === "") {

            //muestra los datos ocultos cambiando su altura máxima
            datosOcultos.style.maxHeight = "800px";


            //cambia el texto del botón
            textBoton.innerHTML = "menos";
            //cambia el ícono de la flecha por el de flecha arriba
            iconBoton.classList.remove('fa-square-caret-down');
            iconBoton.classList.add('fa-square-caret-up');

            //cambia la altura máxima de la tarjeta madre para que se ajuste a los datos ocultos
            eventCard.style.maxHeight = "fit-content";


        } else {

            //oculta los datos reduciendo su altura máxima
            datosOcultos.style.maxHeight = "0px";

            //cambia el texto del botón
            textBoton.innerHTML = "más";
            //cambia el ícono de la flecha por el de flecha abajo
            iconBoton.classList.remove('fa-square-caret-up');
            iconBoton.classList.add('fa-square-caret-down');

            //regresa la altura máxima de la tarjeta madre a su valor original después de 1 segundo. Esto es para que la tarjeta madre no se quede con una altura muy grande si el usuario abre otra tarjeta en la misma fila.
            if (eventCard.style.maxHeight === "fit-content") {
                //espera un segundo
                setTimeout(function () {
                    //regresa la altura máxima de la tarjeta madre a su valor original
                    eventCard.style.maxHeight = "24rem";
                }, 1000);

            };

        }
    });
});


/*<!------------------------------------------------->
<!--	end Card Handler	-->
<!------------------------------------------------->*/


