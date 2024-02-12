//TODO: trabajar en mapa de documentación
/*<------------------------------------------------->
<!--	Parámetros	-->
<!------------------------------------------------->*/

const URLdata = 'https://sheets.googleapis.com/v4/spreadsheets/12s8z3DKqUWCre_FnzjAPDZKqOwrSW6WaiQ708cdeUvM/values/main!A1:T?key=AIzaSyDzdEQYUcSwjzEmZNZhYd2vh1E_P6ykPAY';

/*<!------------------------------------------------->
<!--	end Parámetros	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	onPageLoad	-->
<!-------------------------------------------------->
* Descripción:
    Se ejecuta cuando la página carga y llama al resto de las funciones
* Parámetros:
    -ninguno
* Dependencias: buildData()
* Devuelve/resultado: ejecuta las demás funciones cuando la página termine de cargar. 
<!------------------------------------------------->*/
window.onload = function () {
    buildData(URLdata);
};
/*<!------------------------------------------------->
<!--	end onPageLoad	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	buildData	-->
<!-------------------------------------------------->
* Descripción:
    Usa un URL para hacer fetch a los datos de Jason, transforma esos datos en objetos que tienen arreglos, pasa como parámetro uno de esos arreglos '.values' a la función buildTable(). 
* Parámetros:
    -URLdata: string
* Dependencias: fillTable()
* Devuelve/resultado: genera un arreglo 'data' y lo pasa como parámetro a las funciones que construyen las tablas y gráficas
<!------------------------------------------------->*/
function buildData(URLdata) {
    var data = [];
    fetch(URLdata)
        .then(function (response) {
            return response.json();
        })
        .then(object => {
            data = object.values;
            //funciones a ejecutar con la data:
            //construye las tarjetas
            buildCards(data);
            //remplaza los fantasmas
            replaceGhosts();
            //agrega funcionalidad a las tarjetas
            cardHandler();
            //si hay un ID en la URL, abre la tarjeta correspondiente
            openCard();
        });
}
/*<!------------------------------------------------->
<!--	end buildData	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	buildCards	-->
<!-------------------------------------------------->
* Descripción:
    Construye las tarjetas de los cursos presenciales
* Parámetros:
    -data: arreglo de arreglos proveniente del API de Google Sheets.
* Dependencias: ninguna
* Devuelve/resultado: Escribe en el DOM las tarjetas de los cursos presenciales provenientes de los datos del API de Google Sheets. 
<!------------------------------------------------->*/
function buildCards(data) {

    /*<------------------------------------------------->
    <!--	creación de objetos	-->
    <!------------------------------------------------->*/
    //definimos una objeto que toma como argumento el arreglo de arreglos 'data' y añadimos las propiedades de cada tarjeta
    class Event {
        /*<--	*** definiciones ***	-->*/
        constructor(data) {
            this.active = data[0];
            this.campus = data[1];
            this.category = data[2];
            this.title = data[3];
            this.description = data[4];
            this.start_date = data[5];
            this.end_date = data[6];
            this.modality = data[7];
            this.time = data[8];
            this.duration = data[9];
            this.location = data[10];
            this.url = data[11];
            this.speaker = data[12];
            this.tag_1 = data[13];
            this.tag_2 = data[14];
            this.tag_3 = data[15];
            this.tag_4 = data[16];
            this.link = data[17];
            this.emergency = data[18];
            this.id = data[19];
        }
        /*<--	*** end definiciones ***	-->*/


        /*<------------------------------------------------->
        <!--	métodos	-->
        <!------------------------------------------------->*/

        //Método para construir la tarjeta
        buildCard() {
            //revisamos si la tarjeta está activa
            if (this.active == 'TRUE') {

                //crea la tarjeta
                let card = createCard(this.category, this.id);

                //añádele el título
                card.appendChild(cardTitle(this.title));

                //añade un hr para separar el título de los datos
                let hr = document.createElement('hr');
                card.appendChild(hr);

                //añade la sección "event data"
                card.appendChild(eventData(this.start_date, this.end_date, this.duration, this.modality));

                //añade la sección "event location"
                card.appendChild(eventLocation(this.location, this.campus, this.url));

                //añade el botón "más"
                card.appendChild(eventMore());

                //revisa si el evento tiene un mensaje de emergencia
                if (this.emergency) {
                    //añade la sección correspondiente al mensaje de emergencia
                    card.appendChild(eventEmergency(this.emergency));
                }

                //añade la sección oculta del evento
                card.appendChild(eventHidden(this.description, this.time, this.speaker, this.tag_1, this.tag_2, this.tag_3, this.tag_4, this.link));


                //este método regresa la tarjeta construida si el evento está activo, de lo contrario regresa null
                return card;
            } else {
                return null;
            }
        }
        /*<!------------------------------------------------->
        <!--	end métodos	-->
        <!------------------------------------------------->*/
    }
    /*<!------------------------------------------------->
    <!--	end creación de objetos	-->
    <!------------------------------------------------->*/



    // Itera sobre el arreglo de arreglos 'data' y crea una instancia del objeto Event por cada elemento del arreglo
    const eventsArray = data.map(event => new Event(event));
    //obtén una referencia al contenedor de grid de eventos
    const container = document.getElementById('events_grid');

    // haremos un contador para revisar cuántas tarjetas se han construido
    let counterCards = 0;
    //itera sobre el arreglo de eventos y construye las tarjetas
    eventsArray.forEach(event => {
        let constructedCard = event.buildCard();
        //si la tarjeta existe agrégala al contenedor.
        if (constructedCard != null) {
            container.appendChild(constructedCard);
            //aumenta el contador de tarjetas
            counterCards++;
        }
    });

    //si no se construyó ninguna tarjeta, muestra el mensaje de "no hay eventos"
    if (counterCards == 0) {
        //obtén una referencia al contenedor de grid de eventos (es el título del grid)
        let gridParent = container.parentElement;
        //cambia el contenido del contenedor por el mensaje de "no hay eventos"
        gridParent.innerHTML = '<p class="no_events">No hay eventos en los próximos 30 días.</p>';
    }
}

/*<!------------------------------------------------->
<!--	end buildCards	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	createCard	-->
<!-------------------------------------------------->
* Descripción:
    Este método crea una tarjeta de evento. Le asigna la clase "event_card" y la clase correspondiente a su área
* Parámetros:
    - categoría(string): el área a la que pertenece el evento.
    - id(string): el id del evento.
* Dependencias: ninguna
* Devuelve/resultado: una tarjeta de evento con la clase correspondiente a su área.
<!------------------------------------------------->*/
function createCard(category, id) {
    //crea una etiqueta article y ponle la clase 'event_card'
    let card = document.createElement('article');
    card.classList.add('event_card');
    //asigna el id del evento
    card.setAttribute('id', id);

    /*<--	*** categoría  ***	-->*/
    //averigüemos la categoría de la tarjeta
    let categoryClass;
    switch (category) {
        case 'Meeting':
            categoryClass = 'meeting_card';
            break;
        case 'Talent':
            categoryClass = 'talent_card';
            break;
        case 'Advisory':
            categoryClass = 'advisory_card';
            break;
        case 'Success':
            categoryClass = 'success_card';
            break;
        default:
            categoryClass = ' ';

    }
    /*<--	*** end categoría  ***	-->*/

    //añade la clase de acuerdo a la categoría
    card.classList.add(categoryClass);

    //devuelve la tarjeta
    return card;
}
/*<!------------------------------------------------->
<!--	end createCard	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	cardTitle	-->
<!-------------------------------------------------->
* Descripción:
    Este método crea el título de la tarjeta de evento. Le asigna el contenido y los elementos estéticos.
* Parámetros:
    -título(string): el título del evento.
* Dependencias: ninguna
* Devuelve/resultado: la sección que contiene el título del evento.
<!------------------------------------------------->*/
function cardTitle(title) {
    //crea un div con la clase 'event title'
    let eventTitle = document.createElement('div');
    eventTitle.classList.add('event_title');
    // crea una etiqueta i con las clases 'fa-duotone' y 'fa-quote-left' y añádela al div 'event_title'
    let quoteLeft = document.createElement('i');
    quoteLeft.classList.add('fa-duotone', 'fa-quote-left');
    eventTitle.appendChild(quoteLeft);
    //crea un h4 con el título del evento y añádelo al div 'event_title'
    let titleH4 = document.createElement('h4');
    titleH4.textContent = title;
    eventTitle.appendChild(titleH4);
    // crea una etiqueta i con las clases 'fa-duotone' y 'fa-quote-right' y añádela al div 'event_title'
    let quoteRight = document.createElement('i');
    quoteRight.classList.add('fa-duotone', 'fa-quote-right');
    eventTitle.appendChild(quoteRight);

    //devuelve el div 'event_title'
    return eventTitle;
}
/*<!------------------------------------------------->
<!--	end cardTitle	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	eventData	-->
<!-------------------------------------------------->
* Descripción:
    Este método crea la sección de datos del evento. Le asigna el contenido y los elementos estéticos.
* Parámetros:
    -inicio(string): la fecha de inicio del evento.
    -fin(string): la fecha de fin del evento.
    -duración(string): la duración en horas del evento.
    modalidad(string): la modalidad del evento.
* Dependencias: ninguna
* Devuelve/resultado: la sección que contiene los datos del evento.
<!------------------------------------------------->*/
function eventData(start, end, duration, modality) {
    //crea un div con la clase 'event_data'
    let eventData = document.createElement('div');
    eventData.classList.add('event_data');

    /*<--	*** fechas ***	-->*/
    //crea un div donde alojaremos las fechas del evento 
    let eventDates = document.createElement('div');
    //añade el ícono correspondiente
    let calendarIcon = document.createElement('i');
    calendarIcon.classList.add('fa-duotone', 'fa-calendar-day');
    eventDates.appendChild(calendarIcon);
    //un span contendrá las fechas
    let dates = document.createElement('span');
    //revisa si es un evento de varios días o sólo uno
    if (end) {
        dates.textContent = start + ' - ' + end;
    } else {
        dates.textContent = start;
    }
    //añade el span 'dates' al div 'eventDates'
    eventDates.appendChild(dates);
    //añade el div 'eventDates' al div 'eventData'
    eventData.appendChild(eventDates);
    /*<--	*** end fechas ***	-->*/

    /*<--	*** duración ***	-->*/
    //revisa si existe la duración del evento   
    if (duration) {
        //crea un div donde alojaremos la duración del evento y le daremos la clase 'event_duration'
        let eventDuration = document.createElement('div');
        eventDuration.classList.add('event_duration');
        //añade el ícono correspondiente
        let clockIcon = document.createElement('i');
        clockIcon.classList.add('fa-duotone', 'fa-hourglass-start');
        eventDuration.appendChild(clockIcon);
        //un span contendrá la duración
        let durationSpan = document.createElement('span');
        durationSpan.textContent = duration + ' hrs.';
        eventDuration.appendChild(durationSpan);
        //añade el div 'eventDuration' al div 'eventData'
        eventData.appendChild(eventDuration);
    }
    /*<--	*** end duración ***	-->*/

    /*<--	*** modalidad ***	-->*/
    //crea un div donde alojaremos la modalidad del evento y le daremos la clase event_type'
    let eventType = document.createElement('div');
    eventType.classList.add('event_type');
    //añade el ícono correspondiente
    let modalityIcon = document.createElement('i');
    //determina el tipo de evento para asignar el ícono correspondiente
    switch (modality) {
        case 'Presencial':
            modalityIcon.classList.add('fa-duotone', 'fa-user-group');
            break;
        case 'En línea':
            modalityIcon.classList.add('fa-duotone', 'fa-laptop');
            break;
        case 'Híbrido':
            modalityIcon.classList.add('fa-duotone', 'fa-laptop');
            let hybridIcon = document.createElement('i');
            hybridIcon.classList.add('fa-duotone', 'fa-user-group');
            eventType.appendChild(hybridIcon);
            break;
    }
    //añade el ícono al div 'eventType'
    eventType.appendChild(modalityIcon);
    //un span contendrá la modalidad
    let modalitySpan = document.createElement('span');
    modalitySpan.textContent = modality;
    eventType.appendChild(modalitySpan);
    //añade el div 'eventType' al div 'eventData'
    eventData.appendChild(eventType);
    /*<--	*** end modalidad ***	-->*/

    //devuelve el div 'eventData'
    return eventData;
}
/*<!------------------------------------------------->
<!--	end eventData	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	eventLocation	-->
<!-------------------------------------------------->
* Descripción:
    Este método crea la sección de ubicación del evento. Le asigna el contenido y los elementos estéticos.
* Parámetros:
    -location(string): la ubicación del evento.
    -campus(string): el campus donde se llevará a cabo el evento.
    -url(string): la url del evento.
* Dependencias: ninguna
* Devuelve/resultado: la sección que contiene la ubicación del evento.
<!------------------------------------------------->*/
function eventLocation(location, campus, url) {

    //crea un div con la clase 'event_location'
    let eventLocation = document.createElement('div');
    eventLocation.classList.add('event_location');

    /*<--	*** ubicación ***	-->*/
    //prueba si existe la ubicación del evento
    if (location) {
        //crea un div donde alojaremos la ubicación del evento y le daremos la clase 'event_link'
        let eventLink = document.createElement('div');
        eventLink.classList.add('event_link');
        //añade el ícono correspondiente
        let locationIcon = document.createElement('i');
        locationIcon.classList.add('fa-duotone', 'fa-location-dot');
        eventLink.appendChild(locationIcon);
        //un span contendrá la ubicación
        let locationSpan = document.createElement('span');
        locationSpan.textContent = location;
        eventLink.appendChild(locationSpan);
        //añade el div 'eventLink' al div 'eventLocation'
        eventLocation.appendChild(eventLink);
        /*<--	*** end ubicación ***	-->*/
    }
    /*<--	*** end ubicación ***	-->*/

    /*<--	*** URL ***	-->*/
    //prueba si existe la url del evento
    if (url) {
        //crea un div donde alojaremos la url del evento y le daremos la clase 'event_url'
        let eventUrl = document.createElement('div');
        eventUrl.classList.add('event_url');
        //añade el ícono correspondiente
        let urlIcon = document.createElement('i');
        urlIcon.classList.add('fa-duotone', 'fa-link');
        eventUrl.appendChild(urlIcon);
        //un ancla contendrá la url
        let urlAnchor = document.createElement('a');
        //asigna la url al atributo 'href' del ancla
        urlAnchor.setAttribute('href', url);
        //el enlace debe abrirse en una nueva página
        urlAnchor.setAttribute('target', '_blank');
        //asigna al texto del ancla un texto genérico
        urlAnchor.textContent = 'Acompáñanos';
        eventUrl.appendChild(urlAnchor);
        //añade el div 'eventUrl' al div 'eventLocation'
        eventLocation.appendChild(eventUrl);
    }
    /*<--	*** end url ***	-->*/


    /*<--	*** campus ***	-->*/
    //crea un div donde alojaremos el campus y le daremos la clase 'event_campus'
    let eventCampus = document.createElement('div');
    eventCampus.classList.add('event_campus');
    //añade el ícono correspondiente
    let campusIcon = document.createElement('i');
    campusIcon.classList.add('fa-duotone', 'fa-map-pin');
    eventCampus.appendChild(campusIcon);
    //un span contendrá el campus
    let campusSpan = document.createElement('span');
    campusSpan.textContent = campus;
    eventCampus.appendChild(campusSpan);
    //añade el div 'eventCampus' al div 'eventLocation'
    eventLocation.appendChild(eventCampus);
    /*<--	*** end campus ***	-->*/

    //devuelve el div 'eventLocation'
    return eventLocation;

}
/*<!------------------------------------------------->
<!--	end eventLocation	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	eventMore	-->
<!-------------------------------------------------->
* Descripción:
    Este método crea un botón para ver más información del evento.
* Parámetros:
    -ninguno
* Dependencias: ninguna
* Devuelve/resultado: una sección con un botón para ver más información del evento.
<!------------------------------------------------->*/
function eventMore() {
    //crea un div con la clase 'event_more'
    let eventMore = document.createElement('div');
    eventMore.classList.add('event_more');
    //crea un botón con la clase 'event_more_button'
    let moreButton = document.createElement('button');
    moreButton.classList.add('event_more_button');
    //añade un span con el texto 'más'
    let moreText = document.createElement('span');
    moreText.textContent = 'más';
    moreButton.appendChild(moreText);
    //añade el ícono correspondiente
    let moreIcon = document.createElement('i');
    moreIcon.classList.add('fa-solid', 'fa-square-caret-down');
    moreButton.appendChild(moreIcon);

    //añade el botón 'moreButton' al div 'eventMore'
    eventMore.appendChild(moreButton);

    //devuelve el div 'eventMore'
    return eventMore;
}
/*<!------------------------------------------------->
<!--	end eventMore	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	eventEmergency	-->
<!-------------------------------------------------->
* Descripción:
    Este método crea la sección de emergencia del evento. Le asigna el contenido y los elementos estéticos.
* Parámetros:
    -ninguno
* Dependencias: ninguna
* Devuelve/resultado: una sección con la información de emergencia del evento.
<!------------------------------------------------->*/
function eventEmergency(emergency) {

    //crea un div con la clase 'event_message' y añade la clase 'event_message'
    let eventMessage = document.createElement('div');
    eventMessage.classList.add('event_message');
    //añade el ícono correspondiente
    let messageIcon = document.createElement('i');
    messageIcon.classList.add('fa-duotone', 'fa-triangle-exclamation');
    eventMessage.appendChild(messageIcon);
    //un párrafo contendrá el mensaje
    let message = document.createElement('p');
    message.textContent = emergency;
    eventMessage.appendChild(message);

    //devuelve el div 'eventMessage'
    return eventMessage;
}
/*<!------------------------------------------------->
<!--	end eventEmergency	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	eventHidden	-->
<!-------------------------------------------------->
* Descripción:
    Este método crea la sección de información oculta del evento. Le asigna el contenido y los elementos estéticos.
* Parámetros:
    -description(string): la descripción del evento.
    -time(string): el horario del evento.
    -speaker(string): el nombre del ponente.
    -tag1(string): la primera etiqueta del evento.
    -tag2(string): la segunda etiqueta del evento.
    -tag3(string): la tercera etiqueta del evento.
    -tag4(string): la cuarta etiqueta del evento.
    -link(string): la url de inscripción al evento.
* Dependencias:
* Devuelve/resultado:
<!------------------------------------------------->*/
function eventHidden(description, time, speaker, tag1, tag2, tag3, tag4, link) {
    //crea un div con la clase 'event_hidden'
    let eventHidden = document.createElement('div');
    eventHidden.classList.add('event_hidden');

    /*<--	*** event description ***	-->*/
    //crea un div con la clase 'event_description'
    let eventDescription = document.createElement('div');
    eventDescription.classList.add('event_description');
    //un párrafo contendrá la descripción
    let descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = description
    eventDescription.appendChild(descriptionParagraph);

    //añade el div 'eventDescription' al div 'eventHidden'
    eventHidden.appendChild(eventDescription);

    /*<--	*** end event description ***	-->*/

    /*<--	*** event time ***	-->*/
    //crea un div con la clase 'event_time'
    let eventTime = document.createElement('div');
    eventTime.classList.add('event_time');
    //añade el ícono correspondiente
    let timeIcon = document.createElement('i');
    timeIcon.classList.add('fa-duotone', 'fa-clock');
    eventTime.appendChild(timeIcon);
    //un span contendrá la hora
    let timeSpan = document.createElement('span');
    timeSpan.textContent = time;
    eventTime.appendChild(timeSpan);

    //añade el div 'eventTime' al div 'eventHidden'
    eventHidden.appendChild(eventTime);
    /*<--	*** end event time ***	-->*/

    /*<--	*** event instructor ***	-->*/
    //revisa si el evento tiene un expositor
    if (speaker) {
        //crea un div con la clase 'event_instructor'
        let eventInstructor = document.createElement('div');
        eventInstructor.classList.add('event_instructor');
        //añade el ícono correspondiente
        let instructorIcon = document.createElement('i');
        instructorIcon.classList.add('fa-solid', 'fa-podium');
        eventInstructor.appendChild(instructorIcon);
        //un span contendrá el instructor
        let instructor = document.createElement('span');
        instructor.textContent = speaker;
        eventInstructor.appendChild(instructor);

        //añade el div 'eventInstructor' al div 'eventHidden'
        eventHidden.appendChild(eventInstructor);
    }
    /*<--	*** end event instructor ***	-->*/

    /*<--	*** event tags ***	-->*/
    //crea un div con la clase 'event_tags'
    let eventTags = document.createElement('div');
    eventTags.classList.add('event_tags');
    //crea un arreglo con los tags del evento
    let tagsArray = [tag1, tag2, tag3, tag4];
    //itera el arreglo de tags
    tagsArray.forEach(tag => {
        //prueba si el tag existe
        if (tag) {
            //crea un div con la clase 'tag'
            let tagDiv = document.createElement('div');
            tagDiv.classList.add('tag');
            //el texto del tag se añade directamente al div
            tagDiv.textContent = tag;
            //añade el div 'tagDiv' al div 'eventTags'
            eventTags.appendChild(tagDiv);
        }
    });
    //añade el div 'eventTags' al div 'eventHidden'
    eventHidden.appendChild(eventTags);
    /*<--	*** end event tags ***	-->*/

    /*<--	*** event button ***	-->*/
    //revisa si el evento tiene un enlace de inscripción
    if (link) {
        //crea un div con la clase 'event_button'
        let eventButton = document.createElement('div');
        eventButton.classList.add('event_button');
        //crea un enlace con el atributo 'href' correspondiente al enlace del evento
        let eventSubscription = document.createElement('a');
        eventSubscription.setAttribute('href', link);
        //debe abrir en una nueva pestaña
        eventSubscription.setAttribute('target', '_blank');
        //el texto del enlace se añade directamente al enlace
        eventSubscription.textContent = 'Inscripción';
        //añade el enlace 'eventSubscription' al div 'eventButton'
        eventButton.appendChild(eventSubscription);

        //añade el div 'eventButton' al div 'eventHidden'
        eventHidden.appendChild(eventButton);
        /*<--	*** end event button ***	-->*/
    }

    //devuelve el div 'eventHidden'
    return eventHidden;
}
/*<!------------------------------------------------->
<!--	end eventHidden	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	replaceGhosts	-->
<!-------------------------------------------------->
* Descripción:
    Este método reemplaza los elementos fantasmas del grid de eventos por elementos construidos por cardBuilder().
* Parámetros:
    -ninguno
* Dependencias: ninguna
* Devuelve/resultado: Elimina las tarjetas fantasmas cuando las tarjetas están listas. 
<!------------------------------------------------->*/
function replaceGhosts() {
    //crea una referencia al contenedor de grid de eventos
    const container = document.getElementById('events_grid');
    //crea una referencia a los elementos fantasmas
    const ghosts = container.querySelectorAll('.tarjeta_fantasma');
    //itera sobre los elementos fantasmas
    ghosts.forEach(ghost => {
        //elimina la tarjeta fantasma
        container.removeChild(ghost);
    });
}
/*<!------------------------------------------------->
<!--	end replaceGhosts	-->
<!------------------------------------------------->*/

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

function cardHandler() {

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
}

/*<!------------------------------------------------->
<!--	end Card Handler	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	openCard	-->
<!-------------------------------------------------->
* Descripción:
    Si existe un id en la URL de la página, abre la tarjeta correspondiente.
* Parámetros:
    -ninguno, corre al inicio.
* Dependencias: ninguna
* Devuelve/resultado: Hace Scroll en la página cargada localizando el id en la URL y abre la tarjeta correspondiente.
<!------------------------------------------------->*/
function openCard() {
    //obtiene el id de la URL
    let hash = window.location.hash.substr(1); // remove the '#' prefix
    //si existe un id en la URL
    if (hash) {
        //busca el elemento con el id correspondiente
        let element = document.getElementById(hash);
        //si existe un elemento con el id correspondiente
        if (element) {
            //hace scroll hasta el elemento pero 90px más arriba para que no quede pegado al tope
            var navbarHeight = 90;
            //has scroll hasta el elemento
            window.scroll({
                //resta la altura del navbar para que no quede pegado al tope
                top: element.offsetTop - navbarHeight,
                left: 0,
                behavior: 'smooth'
            });

        }
    }

}
/*<!------------------------------------------------->
<!--	end openCard	-->
<!------------------------------------------------->*/