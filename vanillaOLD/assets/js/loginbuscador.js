/*<------------------------------------------------->
<!--	responseGOauth()	-->
<!-------------------------------------------------->
* Descripción:
    Se ejecuta como callback al botón de googleOAuth2, obtiene el nombre de usuario, la foto y el correo y las usa para enviárselo como parámetro a una nueva ventana que carga en la URL el formulario de actualización de datos. 
* Parámetros:
     - credentialResponse: objeto qu genera la api de OAuth con la información del usuario codificada en un token.
* Dependencias:
     -parseJWT(): Se usa para descodificar el token dentro de "credetialResponse"
* Devuelve/resultado:

Abre una nueva página con el formulario, habiendo enviado el nombre de usuario, el correo y la fotografía. 
<!------------------------------------------------->*/
function responseGOauth(credentialResponse) {

    //Crea un objeto para alojar la decodificación JSON del objeto 'credentialResponse'
    var credencialesJSON = {};
    //decodifica el la propiedad 'credential' de credentialResponse.
    credencialesJSON = JSON.stringify(parseJWT(credentialResponse.credential));
    //convierte el resultado en un objeto de JS. 
    credencialesObject = JSON.parse(credencialesJSON);

    //compón un URL que se enviará como parámetro a la siguiente página

    var nombreUsuario = credencialesObject.name;
    // var fotoUsuario = credencialesObject.picture;
    var emailUsuario = credencialesObject.email;
    var userName = emailUsuario.split('@')[0];

    //elementos de la página a modificar
    let notLoggedInBanner = document.getElementById('notLogged');
    let buscador = document.getElementById('buscador');


    //si existe un usuario toggle entre el banner de aviso y el buscador
    if (credencialesJSON && isNaN(Number(userName))) {
        notLoggedInBanner.style.display = 'none';
        buscador.style.display = 'grid';
    } else {
        notLoggedInBanner.style.display = 'block';
        buscador.style.display = 'none';
    }

}
/*<!------------------------------------------------->
<!--	end responseGOauth()	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	parseJWT()	-->
<!-------------------------------------------------->
* Descripción:
    Función que decodifica el Token dentro del objeto  'credentialResponse'
* Parámetros:
    -token: debe apuntar al objeto: credentialResponse.credential
* Dependencias: ninguna
* Devuelve/resultado: Un objeto de JSON decodificado con las credenciales del usuario.
<!------------------------------------------------->*/
function parseJWT(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
/*<!------------------------------------------------->
<!--	end parseJWT()	-->
<!------------------------------------------------->*/