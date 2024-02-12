/*<------------------------------------------------->
<!--	Biblioteca de tarjetas expandibles	-->
<!------------------------------------------------->*/
/* 


En los grids será útil tener la habilidad de mostrar y ocultar información.

El uso es sencillo es necesario tener un botón, preferente, pero no necesariamente dentro de la tarjeta con los atributos: 

data-type="button" data-id="id" (id es el de la tarjeta que se quiere expandir)

Dentro del grid, se crea en la posición deseada una tarjeta con la siguiente estructura:

<!-- tarjeta expandida -->
            <article class="expanded_card" data-expand="hidden" id="id">
                <header>
                    <span class="title-expanded"></span>
                    <!-- botón cerrar -->
                    <button data-action="close">
                        <i class="fa-duotone fa-rectangle-xmark"></i>
                    </button>
                    <!-- end botón cerrar -->
                </header>
                <div class="expanded-content">

                </div>
            </article>
<!-- end tarjeta expandida -->

Las clases pueden cambiar, pero es importante respetar los atributos data-set y que los id's coincidan respecto a la información proporcionada en data-id y el id de la tarjeta a expandir. 



*/
/*<!------------------------------------------------->
<!--	end Biblioteca de tarjetas expandibles	-->
<!------------------------------------------------->*/


/*<------------------------------------------------->
<!--	listeners	-->
<!------------------------------------------------->*/

//usaremos el body para vigilar todos los elementos y crear un solo event listener
const body = document.querySelector('body');

//añadimos un listener al body aprovechando las propiedades de manejo y delegación de eventos. Cualquier elemento dentro del body responderá al llamado.
body.addEventListener('click', (e) =>{

    //si el elemento que responde al click es un botón y tiene el data-type = 'button'
    if(e.target  && e.target.dataset.type === 'button'){
        //usamos el data-id del botón para apuntar al objeto que queremos expandir.

        //cierra todas las instancias de tarjetas abiertas
        closeAllExpanded();
        //guarda el valor de data-id
        let cardToExpandId = e.target.dataset.id;
       
        // encuentra el elemento con el id que correspondía al valor de data-id del botón
        let cardToExpand = document.getElementById(cardToExpandId);
        //cuando una tarjeta ya fue expandida y cerrada, se agregan estas propiedades, hay que removerlas antes de abrir la tarjeta.
        cardToExpand.style.removeProperty('height');
        cardToExpand.style.removeProperty('opacity');
        //cambia su propiedad data-expand a expanded.
        cardToExpand.dataset.expand = 'expanded';
    };

    // si el que responde al click es un botón con el data-action = 'close' 
    if(e.target && e.target.tagName === 'BUTTON' && e.target.dataset.action === 'close'){
        //obtén el padre del padre, pues la estructura de las tarjetas expandibles es article>header>button
        let cardToClose = e.target.parentElement.parentElement;
        //añade estas propiedades al nodo.
        cardToClose.style.height= 0;
        cardToClose.style.opacity= 0;
        //espera 0.4 segundos y cambia el estado de data-expanded a "hidden"
        setTimeout(function(){
            cardToClose.dataset.expand = 'hidden';
        }, 400);
        
    }
});
/*<!------------------------------------------------->
<!--	end listeners	-->
<!------------------------------------------------->*/



/*<------------------------------------------------->
<!--	closeAllExpanded	-->
<!-------------------------------------------------->
* Descripción:
    Esta función busca cualquier instancia de tarjeta abierta y la cierra.
* Parámetros:
    ninguno
* Dependencias: ninguna
* Devuelve/resultado:Cualquier tarjeta que esté expandida será cerrada.
<!------------------------------------------------->*/
function closeAllExpanded(){
    //encuentra todas las tarjetas que estén abiertas
    let tarjetasAbiertas = document.querySelectorAll('[data-expand="expanded"]');
    //para cada tarjeta que encontraste
    tarjetasAbiertas.forEach(function(card){
        //añade estas propiedades al nodo.
        card.style.height= 0;
        card.style.opacity= 0;
        //espera 0.4 segundos y cambia el estado de data-expanded a "hidden"
        setTimeout(function(){
            card.dataset.expand = 'hidden';
        }, 400);
    });
}
/*<!------------------------------------------------->
<!--	end closeAllExpanded	-->
<!------------------------------------------------->*/

