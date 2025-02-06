/*<---------------------------------------------------------------------------->
<!--	VideoExperiences(Data)	-->
<!----------------------------------------------------------------------------->
* Description: Data for the existing linked experiences in the Experiences component, It should be imported in the Experiencias component for creating the cards.

* Parameters:
    - none
* Dependencies:
    - none
* Returns/results: Exported array with the objects containing the data of each experience.
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//Logos origin CDMX
import cvmpLogo from '@assets/intercampi/experiencias/cvmp.webp';
import oylbLogo from '@assets/intercampi/experiencias/oylb.webp';
import recreandoLogo from '@assets/intercampi/experiencias/recreando.webp';
import versionLogo from '@assets/intercampi/experiencias/version.webp';




//icons
import { faFingerprint, faClock, faHashtag } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'
import { faYoutube } from '@awesome.me/kit-c09e05c963/icons/classic/brands';

export const VideoExperiencesData = [

    /*<------------------------------------------------->
    <!-- Organizing your life like a boss 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'oylb',
        cardLogo: oylbLogo,
        cardTitle: 'Organizing your life like a boss',
        details: [
            { icon: faYoutube, text: 'video' },
            { icon: faClock, text: '20 min' },
            { icon: faHashtag, text: 'personal' }
        ],
        whatIsIt: (<p>Esta experiencia te permitirá ver cómo organizas tu tiempo para detectar en qué áreas puedes mejorar con el fin de aumentar tu productividad y hacer más en menos tiempo.</p>),
        whatToExpect: [
            '9 videos de máximo 3 minutos con estrategias sencillas para aumentar tu productividad.',
            'La oportunidad de tener una sesión de coaching personalizado para que en una sesión uno a uno puedas maximizar el uso de tu tiempo.',
            'Durante los videos, habrá distintos ejercicios en formato pdf. Te pedimos que si vas a aplicar a las sesiones de coaching, no los resuelvas.'
        ],
        instructions: [
            'Disfruta cualquiera de los videos que están en la playlist.',
            'Cada vídeo tiene actividades y técnicas, sigue las instrucciones en cada vídeo.'],
        appointmentBool: true,
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe8zxHLheIkbv7H_HJnsQdxruwjwxhQse9tp21H3OPPR3qJRw/viewform',
        playList: [
            {
                title: 'Introducción',
                id: 'RyBQv4WI_W4',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Productivity 101',
                id: '2GaWvppC1s8',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Estudia sin distracciones',
                id: 'owTBmXymBO8',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '¿Cómo ser más efectivo?',
                id: 'XoDGORofKlU',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '¿Cómo usas tu tiempo?',
                id: 'YOWSVq06sEE',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '5 formas de tener más energía',
                id: 'Zieb2guZIq4',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '¿Quieres tener tu propio coach?',
                id: 'mhKj-9v8Lx8',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '¿No tienes tiempo de nada?',
                id: '3rfkPMw3vIM',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Casi estás en la meta',
                id: 'TDtbc6hlC_Q',
                isSub: false,
                isSubTitle: null
            },

        ],

        campi: ['CDMX']
    },
    /*<------------------------------------------------->
    <!-- Your CV Your Masterpiece 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'cvmp',
        cardLogo: cvmpLogo,
        cardTitle: 'Your CV Your Masterpiece',
        details: [
            { icon: faYoutube, text: 'video' },
            { icon: faClock, text: '30 min' },
            { icon: faHashtag, text: 'profesional' }
        ],
        whatIsIt: (
            <p>
                Una experiencia en donde aprenderás todo lo que necesitas saber para hacer tu CV y la oportunidad de
                tener una asesoría personalizada para resolver tus dudas y en donde un experto podrá revisar tu CV.
            </p>
        ),
        whatToExpect: [
            '7 videos en donde aprenderás todo lo que necesitas saber para diseñar el CV perfecto.',
            'Una asesoría de 30 minutos en donde un experto revisará tu CV y resolverá todas tus dudas.'
        ],
        instructions: [
            'Disfruta cualquiera de los videos que están en la playlist.',
            'Cada vídeo tiene actividades y técnicas, sigue las instrucciones en cada vídeo.'
        ],
        appointmentBool: true,
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSehAnS0gT8E4S_Ow_rvu5hiou2vEnwDfGDI6t4_b-r-LHi_dQ/viewform?usp=sf_link',
        playList: [
            {
                title: 'Bienvenido',
                id: 'bIzNh_hvu_4',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '¿Qué es un CV y para qué sirve?',
                id: '4dDSU4xD_dk',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Enfócate en ti mismo',
                id: '9v5M3k8Of4c',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Enfócate en la empresa',
                id: 'yEMkpaVFCW8',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Enfócate en el puesto',
                id: '3zIARCVgYGM',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Prepara tu CV',
                id: 'XGW_o7tppLA',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '8 musts del CV perfecto',
                id: 'RmNpRqCqiyM',
                isSub: false,
                isSubTitle: null
            }
        ],
        campi: ['CDMX', 'AGS', 'GDL']
    },

    /*<------------------------------------------------->
    <!-- Recreando mi vida 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'recreando',
        cardLogo: recreandoLogo,
        cardTitle: 'Recreando mi vida',
        details: [
            { icon: faYoutube, text: 'video' },
            { icon: faClock, text: '40 min' },
            { icon: faHashtag, text: 'personal' }
        ],
        whatIsIt: (
            <p>
                Esta experiencia te permitirá potenciar tu autoconocimiento y hacer un plan para lograr lo que sea que
                te propongas. Prepárate para aumentar tu autoconocimiento. Este es el inicio de tu viaje por la
                inteligencia emocional.
            </p>
        ),
        whatToExpect: [
            'Videos con material descargable.',
            'Recuerda que siempre puedes descargar el material al final del video.'
        ],
        instructions: [
            'Disfruta cualquiera de los videos que están en la playlist.',
            'Cada vídeo tiene actividades y técnicas, sigue las instrucciones en cada vídeo.',
        ],
        appointmentBool: true,
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeJkQtwSO9zudOs9t31qX0CpIyoGTm0apa_2erFkr2nSkZM-w/viewform',
        playList: [
            {
                title: '¿De qué está hecha mi vida?',
                id: 't0XERxrQcV4',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '¿Cómo veo y vivo mi vida?',
                id: '6LwDe3aRt_g',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '¿Cómo me percibo?',
                id: 'itbs2yaUXJI',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Personalidad',
                id: 'Urc_u6z9T-0',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '¿Cómo me ven los demás?',
                id: 'SEcKa-PaBu4',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Lo que soy',
                id: 'QUvNOrQR7IE',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Mis héroes',
                id: 'Ic_FOAypEb0',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Mis deseos',
                id: 'xkcg3LcC8cA',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '5 años',
                id: '_ILoXZ5qcf0',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Ingredientes de la vida que amo',
                id: 'O1VMyjVfnFE',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Mi visión de éxito',
                id: 'Ukc9euI-mpA',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Mi vida emocional, física e intelectual',
                id: 'eJmhJvOcrRM',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Mi yo futuro',
                id: 'zCSou8SjqMc',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Tu acción inmediata',
                id: 'K3cGYjVE7II',
                isSub: false,
                isSubTitle: null
            },
            {
                title: 'Tu manifiesto y cierre',
                id: 'EdXzjcqjHTw',
                isSub: false,
                isSubTitle: null
            }
        ],
        campi: ['CDMX']
    },
    /*<------------------------------------------------->
    <!-- Mi mejor versión 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'version',
        cardLogo: versionLogo,
        cardTitle: 'Mi mejor versión',
        details: [
            { icon: faYoutube, text: 'video' },
            { icon: faClock, text: '50 min' },
            { icon: faHashtag, text: 'personal' }
        ],
        whatIsIt: (
            <p>
                Una experiencia en línea para que te conozcas mejor, aproveches y aprendas a desarrollar tus cualidades,
                fortalezas y competencias para darte a conocer a los demás y alcanzar tus sueños.
                Aprende a establecer metas realistas que te ayuden a ir construyendo un plan de vida y carrera.
            </p>
        ),
        whatToExpect: [
            '7 videos de menos de 2 minutos con ejercicios.',
            'Conocer tus competencias (opcional) realizando pruebas (60min aprox).',
            'Opción para agendar sesión personalizada de coaching.'
        ],
        instructions: [
            'Disfruta cualquiera de los videos que están en la playlist. Te recomendamos que sigas el orden.',
            'Cada vídeo tiene actividades y técnicas, sigue las instrucciones en cada recurso.',
            'Algunos videos tienen pruebas para conocer tus competencias. Podrás acceder a los resultados.',
            'Recuerda que la plataforma no guardará tu avance, por lo que te recomendamos realizarlo de corrido.'
        ],
        appointmentBool: true,
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSee8YRLA8tfrUsBK0ZxgkKE2xq4QBv4HRRPvrFqykAL5d3xWQ/viewform?usp=sharing',
        playList: [
            {
                title: '1- Nadie mejor que tú',
                id: 'YWQe1LCER1I',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '2- Es momento de distinguirse',
                id: 'v7QYFEiEKtQ',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '3- Es clave ir más allá',
                id: 'xQkAZGwDNj4',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '4- Camino a mi mejor versión',
                id: 'X1bhrDtmZoE',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '5- El mejor aliado',
                id: 'RoZBdyxcoIU',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '5.1- El mejor aliado',
                id: 'sC2l2dSL5jE',
                isSub: true,
                isSubTitle: 'Cuida cómo te hablas'
            },
            {
                title: '5.2- El mejor aliado',
                id: 'S23FSIpTVt4',
                isSub: true,
                isSubTitle: 'Rueda de la vida (opcional)'
            },
            { title: '6- Cierre', id: 'NRMP094E59A', isSub: false, isSubTitle: null }
        ],
        campi: ['CDMX']
    },
    /*<!------------------------------------------------->
    <!--	end Leadership	-->
    <!------------------------------------------------->*/

];

/*<!--------------------------------------------------------------------------->
<!--	end VideoExperiences(Data)	-->
<!--------------------------------------------------------------------------->*/

