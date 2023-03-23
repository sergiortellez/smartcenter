//añade las variables globales y los event listeners que controlan las barras de navegación. 

//iconTrigger es el botón que abre el menú colapsado
const button = document.querySelector('.iconTrigger');
button.addEventListener('click', toggleNav);

//este listener sólo tiene sentido si la pantalla mide menos de 600px

if (window.innerWidth < 648) {

    //nav contents en este contexto es el menú expandido
    const clickableArea = document.querySelector('.navContents');
    //cuando se hace click en el menú expandido, se ejecuta la función toggleNav
    clickableArea.addEventListener('click',
        //se necesita capturar el elemento que desencadena el evento y pasarlo como parámetro a la función toggleNav para que al finalizar su trabajo nos dirija al link que contiene. 
        function (e) {
            let target = e.target;
            toggleNav(target);
        });
    //en caso de dispositivos touch.
    clickableArea.addEventListener('touchend',
        function (e) {
            let target = e.target;
            toggleNav(target);

        });
}

/*<------------------------------------------------->
<!--	GSAP para la barra que se encoje en scroll	-->
<!------------------------------------------------->*/

//registra el plugin
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '#app_citas', //el elemento que desencadena el comportamiento
    start: 'top 100px', //cuando el centro del elemento toca el top del viewport
    //end:'800px 200px',
    onEnter: function enter() {
        if (window.innerWidth > 1024) {
            const navSmartLogoMin = document.getElementById('navSmartLogoMin');
            const navSmartLogo = document.getElementById('navSmartLogo');
            const navUpLogo = document.getElementById('navUpLogo');
            const nav = document.querySelector('nav');

            nav.style.setProperty('--navHeight', 7 + "vh")
            navSmartLogo.style.display = 'none';
            navSmartLogoMin.style.display = 'inline';
            navUpLogo.style.display = 'none';

        }
    },
    onEnterBack: function back() {
        if (window.innerWidth > 1024) {
            const navSmartLogoMin = document.getElementById('navSmartLogoMin');
            const navSmartLogo = document.getElementById('navSmartLogo');
            const navUpLogo = document.getElementById('navUpLogo');
            const nav = document.querySelector('nav');

            nav.style.setProperty('--navHeight', 16 + "vh")
            navSmartLogo.style.display = 'inline';
            navSmartLogoMin.style.display = 'none';
            navUpLogo.style.display = 'inline';
        }
    },
    markers: false
});




/*<!------------------------------------------------->
<!--	end GSAP para la barra que se encoje en scroll	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	toggleResponsiveNav	-->
<!-------------------------------------------------->
* Descripción: función encargada de expandir y contraer la barra de navegación, controla además los íconos de apertura y cierre. Agrega o retira la clase "expanded"
    
* Parámetros:
    -ninguno
* Dependencias:ninguna
* Devuelve/resultado: contrae y expande la barra- 
<!------------------------------------------------->*/


function toggleNav(target) {

    //encuentra la barra de navegación
    var nav = document.querySelector('nav');

    //encuentra el ícono
    var toggleIcon = document.querySelector('#toggleIcon');

    //revisa si la barra está expandida
    if (nav.classList.contains('expanded')) {
        console.log(target)
        //quita el ícono de cerrar
        toggleIcon.classList.remove('fa-xmark');
        //añade el ícono de barras
        toggleIcon.classList.add('fa-duotone');
        toggleIcon.classList.add('fa-bars');
        //contrae la barra
        nav.classList.remove('expanded');
        //el elemento tiene un enlace? o sólo se quiere cerrar la barra?
        if (target.href) {
            window.location.href = target.href;
        }
    } else {

        nav.classList.add('expanded');
        //quita el ícono de barras
        toggleIcon.classList.remove('fa-bars');
        //añade el ícono de cerrar
        toggleIcon.classList.add('fa-duotone');
        toggleIcon.classList.add('fa-xmark');

    }

}

/*<!------------------------------------------------->
<!--	end toggleResponsiveNav	-->
<!------------------------------------------------->*/