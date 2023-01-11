/*<------------------------------------------------->
<!--	Animate in view	-->
anima elementos cuando el scroll se encuentra en el viewport, se apoya en las animaciones de animate.css.
¡¡¡Dependencia a aivp.css!! (contiene las animaciones disponibles)
<!------------------------------------------------->*/

//busca todos los elementos con la clase scrollAnim 
const scrollElements = document.querySelectorAll(".scrollAnim");

/*<------------------------------------------------->
<!--	elementInView	-->
<!-------------------------------------------------->
* Descripción:
    Determina su el elemento dado se encuentra en el viewport, compara la distancia entre el borde superior del elemento y el borde superior del viewport y el tamaño del viewport, si la primera es menor quiere decir que el elemento se encuentra a la vista del usuario. 
* Parámetros:
    - element: un elemento del DOM
    - dividend: valor por default es uno, pero puede acortar o alargar la distancia a la que la función devuelve verdadero.
* Dependencias: getBoundingClientRect() (clase de JS)
* Devuelve/resultado: Boolean: Si el elemento se encuentra en el viewport del usuario devuelve verdadero.
<!------------------------------------------------->*/
function elementInView(element, dividend = 1){ 
    //determina la distancia entre el elemento y el borde de la pantalla del usuario.
    // info de la función getBoundingClientRect():https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const elementTop = element.getBoundingClientRect().top;
    //compara la altura del viewport con la distancia del elemento al borde superior del viewport si el segundo es menor devuelve verdadero.
    return ( elementTop <=(window.innerHeight || document.documentElement.clientHeight) / dividend);
}
/*<!------------------------------------------------->
<!--	end elementInView	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	elementOut	-->
<!-------------------------------------------------->
* Descripción:
    Usa la misma lógica que elementInView() para determinar si el elemento está por salir del viewport
* Parámetros:
    - element: un elemento del DOM
    - dividend: valor por default es uno, pero puede acortar o alargar la distancia a la que la función devuelve verdadero.
* Dependencias: getBoundingClientRect() (clase de JS)
* Devuelve/resultado: Boolean: Si el elemento se encuentra por salir del  del usuario devuelve verdadero.
<!------------------------------------------------->*/
function elementOut(element, dividend = 1){ 
    //determina la distancia entre el elemento y el borde de la pantalla del usuario.
    // info de la función getBoundingClientRect():https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const elementTop = element.getBoundingClientRect().top;
    //compara la altura del viewport con la distancia del elemento al borde superior del viewport si el segundo es menor devuelve verdadero.
    return ( elementTop > (window.innerHeight || document.documentElement.clientHeight) / dividend);
}
/*<!------------------------------------------------->
<!--	end elementOut	-->
<!------------------------------------------------->*/


/*<------------------------------------------------->
<!--	displayScrollElement	-->
<!-------------------------------------------------->
* Descripción:
    Revisa qué animación ha sido asignada al elemento y en consecuencia añade las clases correspondientes. Se pueden añadir más animaciones conforme se necesite. 
    !!! sólo soporta un tipo de animación por elemento.
* Parámetros:
    -element: Elemento del DOM
* Dependencias:ninguna
* Devuelve/resultado:Se añadirán las clases indicadas al elemento.
<!------------------------------------------------->*/

function displayScrollElement(element){
    if(element.classList.contains('slideInOutLeft')){
        element.classList.remove('generalOut');
        element.classList.add("scrolled", 'slideInLeft');
    } else if(element.classList.contains('slideInOutRight')){
        element.classList.remove('generalOut');
        element.classList.add("scrolled", 'slideInRight');
    }else if(element.classList.contains('slideInOutUp')){
        element.classList.remove('generalOut');
        element.classList.add("scrolled", 'slideInUp');
    }else if(element.classList.contains('slideInOutDown')){
        element.classList.remove('generalOut');
        element.classList.add("scrolled", 'slideInDown');
    }
}
/*<!------------------------------------------------->
<!--	end displayScrollElement	-->
<!------------------------------------------------->*/


/*<------------------------------------------------->
<!--	hideScrollElement	-->
<!-------------------------------------------------->
* Descripción:
    Elimina las clases que vuelven visible al elemento y lo animan.
* Parámetros:
    -element: Elemento del DOM
* Dependencias:ninguna
* Devuelve/resultado:Se eliminarán las clases indicadas al elemento.
<!------------------------------------------------->*/
function hideScrollElement(element){
    if(element.classList.contains('slideInOutLeft')){
        element.classList.add('generalOut');
        element.classList.remove("scrolled", 'slideInLeft');
    } else if(element.classList.contains('slideInOutRight')){
        element.classList.add('generalOut');
        element.classList.remove("scrolled", 'slideInRight');
    }else if(element.classList.contains('slideInOutUp')){
        element.classList.add('generalOut');
        element.classList.remove("scrolled", 'slideInUp');
    }else if(element.classList.contains('slideInOutDown')){
        element.classList.add('generalOut');
        element.classList.remove("scrolled", 'slideInDown');
    }
}
/*<!------------------------------------------------->
<!--	end hideScrollElement	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	handleScrollAnimation	-->
<!-------------------------------------------------->
* Descripción:
    Para cada elemento que tiene la clase ScrollAnim revisará si está dentro o fuera del viewport y añadirá o retirará las clases correspondientes.
* Parámetros: ninguno
* Dependencias: elementInView(), displayScrollElement(), elementOut(), hideScrollElement()
* Devuelve/resultado: Se animarán los elementos seleccionados de acuerdo a su relación con el viewport
<!------------------------------------------------->*/
function handleScrollAnimation(){
    scrollElements.forEach(function displayOrHide(element){
        //¿Está dentro del viewport? 
        if (elementInView(element, 1.25)) {
            displayScrollElement(element);
        //Está fuera del viewport?
        } else if(elementOut(element, 1.25)) {
            hideScrollElement(element);
        }
    });
}
/*<!------------------------------------------------->
<!--	end handleScrollAnimation	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	throttle	-->
<!-------------------------------------------------->
* Descripción:
    Podemos reducir el número de veces que se llama a una función con una «función throttle». Es una función de orden superior que llama a la función que se le ha pasado solamente una vez durante un intervalo de tiempo especificado.

    Es sobre todo útil con eventos de desplazamiento, pues no necesitamos detectar cada píxel desplazado por el usuario. Por ejemplo, si tenemos una función throttle con un temporizador de 100 ms, la función se llamará solo una vez por cada 100 ms que el usuario se desplace.

* Parámetros:
    -callback(func): función que se llamará una vez pasado el tiempo.
    -time(num): número en microsegundos que se invocará la función
* Dependencias: ninguna
* Devuelve/resultado: Reduce el número de ejecuciones en el listener. 
<!------------------------------------------------->*/
//inicializa el tiempo transcurrido como falso (global)
let throttleTimer = false;

function throttle(callback, time){
    //si el tiempo transcurrido es verdadero no llames a la función
    if(throttleTimer){
        return;
    }else{
        //Primero cambia el tiempo transcurrido como verdadero para que no se vuelva a llamar la función
        throttleTimer = true;
            
        setTimeout(() => {
            //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
            callback();
            throttleTimer = false;
        }, time);
    }
     
    
}
/*<!------------------------------------------------->
<!--	end throttle	-->
<!------------------------------------------------->*/




// añade un listener para que cada que el usuario ha hecho scroll durante 250 ms se llame la función handleScrollAnimation()
window.addEventListener('scroll', () => {
    throttle(handleScrollAnimation, 250);
  })

//añade un evento para que al cargar el documento se animen todos los elementos dentro del viewport
window.onload = function() {
    handleScrollAnimation();
  };