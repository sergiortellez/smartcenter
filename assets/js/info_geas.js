/* ---------------------------------------------------------------------------
------------------------------------------------------------------------------
Enviar correo de información de GEA

Envía un correo electrónico con la información de un GEA cuando se presiona el botón de 'informes' en la tarjeta de cada GEA.
------------------------------------------------------------------------------
------------------------------------------------------------------------------*/


//obtener todos los botones de información
const infoButtonsArray = document.querySelectorAll(".send-info-button");

//correo de contacto
const email = "mx_meetingpoint@up.edu.mx";

//para cada uno de  los botones de información
infoButtonsArray.forEach(infoButton => {
    //grab the data-id attribute from the button
    const nombre_gea = infoButton.getAttribute("data-id");
    //add an event listener to the button
    infoButton.addEventListener('click', () => {
        //cuando se presiona el botón, se envía el correo
        sendEmail(nombre_gea);
    });
});


/* 
Título:sendEmail
Descripción: Esta función envía un correo electrónico con la información de un GEA cuando se ha presionado un botón de 'informes' en la tarjeta de cada GEA.
Parámetros: 
    * nombre_gea: nombre del GEA del cual se quiere obtener información (string)
Dependencias: ninguna
Devuelve/resultado: abre una ventana de correo electrónico con el asunto y el cuerpo del correo.
*/

function sendEmail(nombre_gea) {
    //asunto del correo
    let subject = `Informes sobre ${nombre_gea}`;
    //cuerpo del correo
    let body = `Me gustaría saber más sobre ${nombre_gea}.`;
    //crear url para enviar correo
    let mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    //enviar correo
    window.location.href = mailtoUrl;
}
/* -----------fin funcion sendEmail()----------- */
