
/*<------------------------------------------------->
<!--	generateRandomInteger( )	-->
<!-------------------------------------------------->
* Descripción:
    Genera un número natural entre 1 y el máximo especificado en el parámetro max
* Parámetros:
    - max, el número máximo que podríamos obtener.
* Dependencias:
    ninguna
* Devuelve/resultado: un número natural entre 1 y el máximo.
<!------------------------------------------------->*/
function generateRandomInteger(max){
    return Math.floor(Math.random() * max) + 1;
}
/*<!------------------------------------------------->
<!--	end generateRandomInteger( )	-->
<!------------------------------------------------->*/


//¿Cuántos archivos hay en la carpeta videos_portada? 
let numeroVideos =11;

//escoge uno
let randomNumber = generateRandomInteger(numeroVideos);

//busca en el HTML la etiqueta video 
let videoSource = document.querySelector('.video video');

//crea un nuevo elemento source
let newSource = document.createElement('source')
newSource.setAttribute('src', `assets/images/videos_portada/${randomNumber}.mp4`);
newSource.setAttribute("type", "video/mp4");

videoSource.append(newSource);






 