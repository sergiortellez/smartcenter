//añade las variables globales y los event listeners que controlan las barras de navegación. 

//iconTrigger es el botón que abre el menú colapsado
const button = document.querySelector('.iconTrigger');
button.addEventListener('click', toggleNav);

//este listener sólo tiene sentido si la pantalla mide menos de 600px

if (window.innerWidth < 648) {

    //nav contents en este contexto es el menú expandido
    const clickableArea = document.querySelector('.navContents');
    clickableArea.addEventListener('click', toggleNav);
    clickableArea.addEventListener('touchend', toggleNav);
}

/*<------------------------------------------------->
<!--	GSAP para la barra que se encoje en scroll	-->
<!------------------------------------------------->*/

//registra el plugin
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '#experiencias_digitales', //el elemento que desencadena el comportamiento
    start: '100px top', //cuando el top + 100px del elemento toca el top del viewport
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


function toggleNav() {

    //encuentra la barra de navegación
    var nav = document.querySelector('nav');

    //encuentra el ícono
    var toggleIcon = document.querySelector('#toggleIcon');

    //revisa si la barra está expandida
    if (nav.classList.contains('expanded')) {
        //contrae la barra
        nav.classList.remove('expanded');
        //quita el ícono de cerrar
        toggleIcon.classList.remove('fa-xmark');
        //añade el ícono de barras
        toggleIcon.classList.add('fa-duotone');
        toggleIcon.classList.add('fa-bars');
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