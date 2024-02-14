// importa todas las claves de url de la API del documento URL(respuestas)
//codifica el número de cuenta del alumno
//compara la codificación con el arreglo importado de la API
//si el valor existe crea una nueva pestaña  y envía al usuario a la url correcta (https://smartcenter.up.edu.mx/reload/dpi.html?id=erangel)
//si el valor no existe envía una notificación al usuario en pantalla
//resetea la caja de búsqueda. 

/*<------------------------------------------------->
<!--	Parámetros	-->
<!------------------------------------------------->*/

const URLdata = "https://sheets.googleapis.com/v4/spreadsheets/1WAvF8Qs9s9EK6mAv1KY9hpGKxdFQ5V9myJpTjBkECIE/values/cdmx!A1:A?key=AIzaSyDzdEQYUcSwjzEmZNZhYd2vh1E_P6ykPAY";

/*<!------------------------------------------------->
<!--	end Parámetros	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	triggers	-->
<!------------------------------------------------->*/
var searchBox = document.getElementById("search");
searchBox.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {  //revisa que la tecla que se presionó fue enter "Enter"
    getID(e);
  }
});
/*<!------------------------------------------------->
<!--	end triggers	-->
<!------------------------------------------------->*/


function getID() {
  //busca la caja de búsqueda
  let id = document.getElementById('search').value;
  //guarda su valor
  //llama la función buildData() que contiene una promesa de fetch de datos de JSON (las claves encriptadas de cada DPI) por eso la ejecución tendrá que continuar en el resultado de la promesa: 
  buildData(URLdata, id);
  //resetea la caja de búsqueda
  document.getElementById('search').value = '';


}



/*<------------------------------------------------->
<!--	buildData	-->
<!-------------------------------------------------->
* Descripción:
    Usa un URL para hacer fetch a los datos de Jason, transforma esos datos en objetos que tienen arreglos, pasa como parámetro uno de esos arreglos ".values" a la función buildTable(). 
* Parámetros:
    -URLdata: string
* Dependencias: fillPageData()
* Devuelve/resultado: llama compareEntryData 
<!------------------------------------------------->*/
function buildData(URLdata, id) {
  var data = [];
  fetch(URLdata)
    .then(function (response) {
      return response.json();
    })
    .then(object => {
      data = object.values;
      //funciones a ejecutar con la data
      compareEntryData(data, id);
    });
}
/*<!------------------------------------------------->
<!--	end buildData	-->
<!------------------------------------------------->*/



/*<------------------------------------------------->
<!--	compareEntryData	-->
<!-------------------------------------------------->
* Descripción:
    Usa los datos que vienen de buildData para generar un arreglo y compararlo con el valor que el usuario pasó. y actuar acorde. 
* Parámetros:
    -data: arreglo con datos de la url
    -id: string que el asesor escribió en la caja de búsqueda. 
* Dependencias: dataToArray()
* Devuelve/resultado: si el id está en la base de datos abre el DPI, si no envía una notificación
<!------------------------------------------------->*/

function compareEntryData(data, id) {
  //obtén un arreglo de las claves de los DPIs registrados en la base de datos
  let clavesArray = dataToArray(data);
  //encripta el id proporcionado por el asesor
  let encrypted = encriptadorId(id);
  // console.log(encrypted);
  // console.log(clavesArray.indexOf('zddnlni'));
  //verifica si el id existe en la base de datos y actúa dependiendo el caso. 
  if (clavesArray.indexOf(encrypted) !== -1) {
    let url = 'https://smartcenter.up.edu.mx/dpi/dpi.html?id=' + encrypted;
    window.open(url);
  } else {
    alert("El alumno que estás buscando no está en nuestros registros");
  }
}
/*<!------------------------------------------------->
<!--	end compareEntryData	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	dataToArray()	-->
<!-------------------------------------------------->
* Descripción:
    Toma los datos de la promesa y los convierte en un arreglo
* Parámetros:
    -data: Objeto con arreglos de datos
* Dependencias: ninguna
* Devuelve/resultado: un arreglo con las claves encriptadas de los DPIs existentes.
<!------------------------------------------------->*/
function dataToArray(data) {
  let clavesArray = [];
  for (let index = 0; index < data.length; index++) {
    clavesArray.push(data[index][0]);
  }
  return (clavesArray);
}
/*<!------------------------------------------------->
<!--	end dataToArray()	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	encriptadorId()	-->
<!-------------------------------------------------->

Descripción: convierte el id de un alumno en una clave para su url
Parámetros: 
  - idAlumno: un string con el id del alumno.
  
Dependencias: ninguna
Devuelve/resultado: regresa un string con el Id encriptado del alumno del alumno
*/
function encriptadorId(idAlumno) {

  //ocuparemos un arreglo para guardar los resultados de cada letra cifrada
  let arregloClave = [];
  //para cada caracter en el ID:
  for (original = 0; original < idAlumno.length; original++) {
    let cifrado;
    //encriptar según cualquiera de los 10 casos
    switch (idAlumno.charAt(original)) {
      case '0':
        cifrado = 'z';
        arregloClave.push(cifrado);
        break;
      case '1':
        cifrado = 'g';
        arregloClave.push(cifrado);
        break;
      case '2':
        cifrado = 'd';
        arregloClave.push(cifrado);
        break;
      case '3':
        cifrado = 'a';
        arregloClave.push(cifrado);
        break;
      case '4':
        cifrado = 'n';
        arregloClave.push(cifrado);
        break;
      case '5':
        cifrado = 'i';
        arregloClave.push(cifrado);
        break;
      case '6':
        cifrado = 'l';
        arregloClave.push(cifrado);
        break;
      case '7':
        cifrado = 's';
        arregloClave.push(cifrado);
        break;
      case '8':
        cifrado = 'x';
        arregloClave.push(cifrado);
        break;
      case '9':
        cifrado = 'w';
        arregloClave.push(cifrado);
        break;
      default:
        cifrado = idAlumno.charAt(original);
        arregloClave.push(cifrado);
    }

  }
  //guarda el id cifrado en una variable
  let idCifrado = arregloClave.join('');
  // encuentra la llave única de cada ID
  let keyId = llaveId(idAlumno);
  //aplica la llave a cada idCifrado
  let idCifradoConLlave = cifrarConLlave(idCifrado, keyId);

  //encriptar
  let idEncriptado = encriptadoSeguroUrl(idCifradoConLlave);




  //regresa la palabra cifrada a texto, cifrada con llave y encriptada en base 64
  console.log(idEncriptado);
  return idEncriptado;

}
/*<------------------------------------------------->
<!--	end encriptadorId()	-->
<!-------------------------------------------------->*/


/*<------------------------------------------------->
<!--	encriptadoSeguroUrl(text)	-->
<!-------------------------------------------------->

Descripción: encripta un string en base64 pero seguro para usar en una URL
Parámetros:
- texto: string a encriptar.


  Dependencias: ninguna
Devuelve / resultado: regresa un string con el texto encriptado sin carácteres prohibidos
  */

function encriptadoSeguroUrl(text) {
  // Apply Base64 encryption to the current value
  // Utilities.base64Encode() encodes the given text (string) to base64 format
  var encryptedValue = btoa(text);

  // Make the Base64 result URL safe by replacing '+' with '-' and '/' with '_'
  // Also, remove any trailing '=' characters used for padding in standard Base64 encoding
  var urlSafeEncryptedValue = encryptedValue.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');


  return (urlSafeEncryptedValue);
}


/*<------------------------------------------------->
<!--	end encriptadoSeguroUrl(text)	-->
<!-------------------------------------------------->*/

/*<------------------------------------------------->
<!--	llave(id)	-->
<!-------------------------------------------------->
Descripción: determina una llave única para cada alumno, con ella se hará una encriptación
Parámetros: 
  - idAlumno: un string con el id del alumno.
 
Dependencias: ninguna
Devuelve/resultado: regresa número que se usará como llave
*/

function llaveId(id) {


  // Initialize the sum variable to 0
  let key = 0;

  // Iterate over each character in the string
  for (let i = id.length - 2; i < id.length; i++) {
    // Attempt to parse each character as an integer (base 10)
    let digit = parseInt(id.charAt(i), 10);

    // Check if the parsed value is a number
    if (!isNaN(digit)) {
      // If it's a number, add it to the sum
      key += digit;
    } else {
      // If it's not a number (NaN), add 0 to the sum (which effectively does nothing)
      // This line is optional and can be omitted, as adding 0 does not change the sum
      key += 0;
    }
  }

  // Return the final sum
  return key;
}

/*<------------------------------------------------->
<!--	llave(id)	-->
<!-------------------------------------------------->*/

/*<------------------------------------------------->
<!--	cifrarConLlave(text, key) 	-->
<!-------------------------------------------------->
Descripción: usa una llave para cifrar una palabra. 
Parámetros: 
  - texto: string a cifrar.
  -llave: llave que se usará para el cifrado
  
Dependencias: ninguna
Devuelve/resultado: regresa un string con la palabra cifrada
*/

function cifrarConLlave(text, key) {
  return text.split('').map(function (char) {
    if (char >= 'a' && char <= 'z') {
      // Compute the new character code after shifting
      var newCharCode = ((char.charCodeAt(0) - 97 + key) % 26) + 97;
      return String.fromCharCode(newCharCode);
    } else {
      // Non-alphabet characters are returned as is
      return char;
    }
  }).join('');
}

/*<------------------------------------------------->
<!--	cifrarConLlave(text, key) 	-->
<!-------------------------------------------------->*/
