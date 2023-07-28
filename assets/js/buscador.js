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
  document.getElementById('search').value = ' ';


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
    let url = 'https://smartcenter.up.edu.mx/dpi/gdl/dpi.html?id=' + encrypted;
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

/* 
Título: encriptadorId()
Descripción: convierte el id de un alumno en una clave para su url
Parámetros: 
  - idAlumno: un string con el id del alumno.
  
Dependencias: ninguna
Devuelve/resultado: regresa un string con el Id encriptado del alumno del alumno
*/
function encriptadorId(idAlumno) {
  //revisa si el id es un número
  if (isNaN(idAlumno)) {
    //si el id es una palabra regresa el mismo id
    return idAlumno;

  } else {

    //ocuparemos un arreglo para guardar los resultados de cada letra encriptada
    let arregloClave = [];
    //para cada caracter en el ID:
    for (original = 0; original < idAlumno.length; original++) {
      let encriptado;
      //encriptar según cualquiera de los 10 casos
      switch (idAlumno.charAt(original)) {
        case '0':
          encriptado = 'z';
          arregloClave.push(encriptado);
          break;
        case '1':
          encriptado = 'g';
          arregloClave.push(encriptado);
          break;
        case '2':
          encriptado = 'd';
          arregloClave.push(encriptado);
          break;
        case '3':
          encriptado = 'a';
          arregloClave.push(encriptado);
          break;
        case '4':
          encriptado = 'n';
          arregloClave.push(encriptado);
          break;
        case '5':
          encriptado = 'i';
          arregloClave.push(encriptado);
          break;
        case '6':
          encriptado = 'l';
          arregloClave.push(encriptado);
          break;
        case '7':
          encriptado = 's';
          arregloClave.push(encriptado);
          break;
        case '8':
          encriptado = 'x';
          arregloClave.push(encriptado);
          break;
        case '9':
          encriptado = 'w';
          arregloClave.push(encriptado);
          break;
        default:
        //arregloClave.push(idAlumno.charAt(original));
      }

    }
    //regresa la palabra formada por los caracteres en el arreglo
    return arregloClave.join('');
  }

}
  /* -----------fin función encriptadorId()----------- */
