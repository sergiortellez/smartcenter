/*<---------------------------------------------------------------------------->
<!--	LinkedExperiences(Data)	-->
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
import leaderLogo from '@assets/intercampi/experiencias/leader.webp'
import communicateLogo from '@assets/intercampi/experiencias/communicate.webp'
import resilienciaLogo from '@assets/intercampi/experiencias/resiliencia.webp'
import negotiateLogo from '@assets/intercampi/experiencias/negotiate.webp'
import selfLogo from '@assets/intercampi/experiencias/self.webp'
import manageLogo from '@assets/intercampi/experiencias/manage.webp'
import masterLogo from '@assets/intercampi/experiencias/master.webp'
import gestionLogo from '@assets/intercampi/experiencias/gestion.webp'
import powerUpLogo from '@assets/intercampi/experiencias/power_up.webp'
//import cvmpLogo from '@assets/intercampi/experiencias/cvmp.webp';
//import oylbLogo from '@assets/intercampi/experiencias/oylb.webp';
//import recreandoLogo from '@assets/intercampi/experiencias/recreando.webp';
//import versionLogo from '@assets/intercampi/experiencias/version.webp';





// Logos origin GDL
import conflictoOportunidadLogo from '@assets/intercampi/experiencias/conflicto_oportunidad.webp';
import inaccionAccionLogo from '@assets/intercampi/experiencias/inaccion_accion.webp';
//import lecturaInteligenteLogo from '@assets/intercampi/experiencias/lectura_inteligente.webp';
import masteringTimeLogo from '@assets/intercampi/experiencias/mastering_time.webp';
import menteExitoLogo from '@assets/intercampi/experiencias/mente_exito.webp';
import reinventaFormaEstudiarLogo from '@assets/intercampi/experiencias/reinventa_forma_estudiar.webp';





//icons
import { faFingerprint, faClock, faHashtag } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'

export const LinkedExperiencesData = [

    /*<------------------------------------------------->
    <!-- Leadership 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'leadership',
        cardLogo: leaderLogo,
        cardTitle: 'Discovering the leader in you',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '10 min' },
            { icon: faHashtag, text: 'profesional' }
        ],
        whatIsIt: (<p>Esta experiencia te permitirá descubrir tu estilo de liderazgo y conocer en qué situaciones lo puedes aplicar.</p>),
        whatToExpect: [
            'Un taller en línea pensado en ti y en tus necesidades.',
            'Corto, entendible, fácil y rápido de hacer.',
            'Recuerda que la plataforma no guardará tu avance, por lo que te recomendamos realizarlo de corrido.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScHmIpT0RODx95qMmIz0hoELK159VQUCJvn3YYUqwJ0IDfXgQ/viewform?usp=sf_link',
        experienceUrl: '/experiences/liderazgo/experience/story.html',
        campi: ['CDMX', 'GDL', 'AGS']
    },
    /*<!------------------------------------------------->
    <!--	end Leadership	-->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!-- Communicate Better 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'communicate',
        cardLogo: communicateLogo,
        cardTitle: 'Communicate Better',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '12 min' },
            { icon: faHashtag, text: 'personal' }
        ],
        whatIsIt: (<p>Esta experiencia te ayudará a encontrar cuál es tu estilo de comunicación, conocerás sus ventajas y desventajas para relacionarte más efectivamente con personas que tengan un estilo distinto al tuyo.</p>),
        whatToExpect: [
            'Un pequeño test para identificar tu estilo de comunicación.',
            'Un ejercicio para mejorar tu manera de interactuar con otros.',
            '¡Es la manera más concisa y fácil de conocerte a ti mismo en menos de 20 minutos!'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf8sK14NUaUih6LySoKMmIShZfgW7143CynrgGS6vpDm4-evw/viewform?usp=sf_link',
        experienceUrl: '/experiences/communicate/experience/story.html',
        campi: ['CDMX', 'GDL', 'AGS']
    },
    /*<!------------------------------------------------->
    <!--	end Communicate Better	-->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!-- Resiliencia 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'resiliencia',
        cardLogo: resilienciaLogo,
        cardTitle: 'Enfrenta tus problemas con mayor facilidad',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '10 min' },
            { icon: faHashtag, text: 'personal' }
        ],
        whatIsIt: (<p>Esta experiencia te llevará a proponer una solución a una situación que te estrese.</p>),
        whatToExpect: [
            'Encontrarás una estrategia concreta para aplicar a cualquier problema que tengas.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSck7psffX6KxSTrVb_NnuJTH_tFuhQhPZs1wnAod57O9ZEnZw/viewform?usp=sf_link',
        experienceUrl: '/experiences/resiliencia/experiencia/story.html',
        campi: ['CDMX', 'GDL', 'AGS']
    },
    /*<!------------------------------------------------->
    <!--	end Resiliencia	-->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!-- Negociación 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'negotiate',
        cardLogo: negotiateLogo,
        cardTitle: 'Negociación',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '22 min' },
            { icon: faHashtag, text: 'profesional' }
        ],
        whatIsIt: (<p>Esta experiencia te permitirá saber cuál es tu estilo de negociación.</p>),
        whatToExpect: [
            'Un taller en línea pensado en ti y en tus necesidades.',
            'Corto, entendible, fácil y rápido de hacer. ¡No tardarás más de 30 minutos!',
            'Recuerda que la plataforma no guardará tu avance, por lo que te recomendamos realizarlo de corrido.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfD8eNsDupfcJDFnqd3Hw3kgBTlV3azjXkDOmLRTS9FbeXv6Q/viewform?usp=sf_link',
        experienceUrl: '/experiences/negotiate/experience/story.html',
        campi: ['CDMX', 'GDL', 'AGS']
    },
    /*<!------------------------------------------------->
    <!--	end Negociación	-->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!-- Live Smarter (Self-awareness) 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'self',
        cardLogo: selfLogo,
        cardTitle: 'Live Smarter (Self-awareness)',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '15 min' },
            { icon: faHashtag, text: 'personal' }
        ],
        whatIsIt: (<p>Esta experiencia se enfoca en el desarrollo de tu inteligencia emocional, ayudándote a reconocer tus propias emociones y reacciones.</p>),
        whatToExpect: [
            'Identificar tu estilo emocional.',
            'Aplicar una estrategia concreta para conocerte a profundidad.',
            'Recuerda que la plataforma no guardará tu avance, por lo que te recomendamos realizarlo de corrido.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf6yLTyR0TwLb9NgyC66Ha1EmIHO0Pp1k403siux-VLEBe7PA/viewform?usp=sf_link',
        experienceUrl: '/experiences/self/story.html',
        campi: ['CDMX', 'GDL', 'AGS']
    },
    /*<!------------------------------------------------->
    <!--	end Self-awareness	-->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!-- Live Smarter (Manage yourself) 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'manage',
        cardLogo: manageLogo,
        cardTitle: 'Live Smarter (Manage yourself)',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '16 min' },
            { icon: faHashtag, text: 'personal' }
        ],
        whatIsIt: (<p>Esta experiencia forma parte de tu desarrollo de inteligencia emocional y se enfoca en la autogestión.</p>),
        whatToExpect: [
            'Ejercicios cortos, entendibles y fáciles de aplicar.',
            'No tardarás más de 30 minutos en completarlo.',
            'Recuerda que la plataforma no guardará tu avance.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScyfLZi287NFjhMSg1LSzmDNbRQ__X9pEDz7HJ2pm3PYAIKJw/viewform?usp=sf_link',
        experienceUrl: '/experiences/manage/story.html',
        campi: ['CDMX', 'GDL', 'AGS']
    },
    /*<!------------------------------------------------->
    <!--	end Manage yourself	-->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!-- Atrévete a ser un master 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'master',
        cardLogo: masterLogo,
        cardTitle: 'Atrévete a-ser un master',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '30 min' },
            { icon: faHashtag, text: 'profesional' }
        ],
        whatIsIt: (<p>Mapa interactivo que te orientará en los requisitos de admisión para estudiar un posgrado en el extranjero.</p>),
        whatToExpect: [
            'Requisitos de las universidades TOP del mundo.',
            'Distintos programas de preparación que tenemos para ti.',
            'Información sobre becas y financiamiento.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: false,
        certificateUrl: '',
        experienceUrl: '/experiences/master/index.html',
        campi: ['CDMX']
    },
    /*<!------------------------------------------------->
    <!--	end Atrévete a-ser un master	-->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!-- Gestión del cambio 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'gestion',
        cardLogo: gestionLogo,
        cardTitle: 'Gestión del cambio',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '60 min' },
            { icon: faHashtag, text: 'personal' }
        ],
        whatIsIt: (<p>Una experiencia en línea para que conozcas cómo abrazar y gestionar el cambio para alcanzar tus objetivos.</p>),
        whatToExpect: [
            'Interactivo, entendible y fácil de hacer.',
            'Te llevará máximo una hora.',
            'Aprenderás qué es el cambio, el ciclo emocional del cambio y cómo liderar ante cambios inesperados.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: true,
        certificateUrl: 'https://forms.gle/TgmH8qoj1XouprW39',
        experienceUrl: '/experiences/gestion/index.html',
        campi: ['CDMX', 'GDL', 'AGS']
    },
    /*<!------------------------------------------------->
    <!--	end Gestión del cambio	-->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!-- Power UP 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'powerup',
        cardLogo: powerUpLogo,
        cardTitle: 'Power UP',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '35 min' },
            { icon: faHashtag, text: 'académica' }
        ],
        whatIsIt: (<p>Un programa que impulsa tu crecimiento personal, académico y profesional para que construyas un perfil que te diferencie en cualquier entorno laboral.</p>),
        whatToExpect: [
            'Talleres transformadores para desarrollar habilidades reales.',
            'Proyectos innovadores y aplicables a tu futuro profesional.',
            'Mentoring de impacto y desarrollo de soft skills críticas.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: false,
        certificateUrl: '',
        experienceUrl: 'https://view.genial.ly/64b945c308d2fa0012d25104/dossier-power-up',
        campi: ['CDMX']
    },
    /*<!------------------------------------------------->
    <!--	end Power UP	-->
    <!------------------------------------------------->*/
    /*<------------------------------------------------->
    <!-- Mastering time, trucos para el éxito universitario-->
    <!------------------------------------------------->*/
    {
        cardId: 'masteringTime',
        cardLogo: masteringTimeLogo,
        cardTitle: 'Mastering time, trucos para el éxito universitario',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '2 hrs' },
            { icon: faHashtag, text: 'académica' }
        ],
        whatIsIt: (<p>Un curso que te permitirá saber como organizar tu tiempo para detectar en qué áreas puedes mejorar, con el fin de aumentar tu productividad y hacer más en menos tiempo.</p>),
        whatToExpect: [
            'Obtener constancia y dedicación para lograr resultados firmes y perdurables.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: false,
        certificateUrl: '',
        experienceUrl: 'https://blackboard.up.edu.mx/ultra/courses/_8900_1/outline',
        campi: ['GDL']
    },
    /*<!------------------------------------------------->
    <!--	end Mastering time, trucos para el éxito universitario	-->
    <!------------------------------------------------->*/
    /*<------------------------------------------------->
<!-- Conflicto: Oportunidad para el crecimiento y aprendizaje -->
<!------------------------------------------------->*/
    {
        cardId: 'conflictoOportunidad',
        cardLogo: conflictoOportunidadLogo,
        cardTitle: 'Conflicto: Oportunidad para el Crecimiento y Aprendizaje',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '2 hrs' },
            { icon: faHashtag, text: 'académica' }
        ],
        whatIsIt: (<p>Un curso que te permite identificar qué es un conflicto, cómo se detona y los factores que intervienen en él.</p>),
        whatToExpect: [
            'Desarrollar la habilidad para afrontar los conflictos y solucionarlos de manera satisfactoria.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: false,
        certificateUrl: '',
        experienceUrl: 'https://blackboard.up.edu.mx/ultra/courses/_8903_1/outline',
        campi: ['GDL']
    },
    /*<!------------------------------------------------->
    <!--	end Conflicto: Oportunidad para el crecimiento y aprendizaje -->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!-- De la intención a la acción: cómo superar la procrastinación -->
    <!------------------------------------------------->*/
    {
        cardId: 'inaccionAccion',
        cardLogo: inaccionAccionLogo,
        cardTitle: 'De la intención a la acción: Cómo superar la procrastinación',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '2 hrs' },
            { icon: faHashtag, text: 'académica' }
        ],
        whatIsIt: (<p>Un curso que te ayudará a evitar la procrastinación y mejorar tu rendimiento académico, tu bienestar emocional y tu futuro profesional.</p>),
        whatToExpect: [
            'Identificar qué te lleva a procrastinar, aprender a gestionar mejor tu tiempo y descubrir estrategias prácticas para dejar de posponer lo importante.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: false,
        certificateUrl: '',
        experienceUrl: 'https://blackboard.up.edu.mx/ultra/courses/_8901_1/outline',
        campi: ['GDL']
    },
    /*<!------------------------------------------------->
    <!--	end De la intención a la acción: cómo superar la procrastinación -->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!-- Mente clara, éxito seguro: técnicas para superar el estrés académico -->
    <!------------------------------------------------->*/
    {
        cardId: 'menteExito',
        cardLogo: menteExitoLogo,
        cardTitle: 'Mente clara, éxito seguro: Técnicas para superar el estrés académico',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '2 hrs' },
            { icon: faHashtag, text: 'académica' }
        ],
        whatIsIt: (<p>Es un curso para identificar y desarrollar la capacidad de manejar el estrés en las demandas del entorno universitario, con la finalidad de equilibrar tu vida personal y académica.</p>),
        whatToExpect: [
            'Manejar el estrés y potencializar mi motivación, personal, académica y profesional.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: false,
        certificateUrl: '',
        experienceUrl: 'https://blackboard.up.edu.mx/ultra/courses/_8902_1/outline',
        campi: ['GDL']
    },
    /*<!------------------------------------------------->
    <!--	end Mente clara, éxito seguro: técnicas para superar el estrés académico -->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!-- Reinventa tu forma de estudiar: El toolkit del estudiante -->
    <!------------------------------------------------->*/
    {
        cardId: 'reinventaFormaEstudiar',
        cardLogo: reinventaFormaEstudiarLogo,
        cardTitle: 'Reinventa tu forma de estudiar: El toolkit del estudiante',
        details: [
            { icon: faFingerprint, text: 'interactiva' },
            { icon: faClock, text: '2 hrs' },
            { icon: faHashtag, text: 'académica' }
        ],
        whatIsIt: (<p>Es un curso para adquirir métodos y técnicas de estudio para enfrentar con éxito las demandas de tu aprendizaje de manera autónoma y eficaz.</p>),
        whatToExpect: [
            'Descubrir el método y las técnicas de estudio que se adapten mejor a tu estilo de aprendizaje.'
        ],
        instructions: ['Aprieta el botón de abajo que dice "¡Empieza ya!"', 'Sigue las instrucciones de la experiencia'],
        certificateBool: false,
        certificateUrl: '',
        experienceUrl: 'https://blackboard.up.edu.mx/ultra/courses/_8904_1/outline',
        campi: ['GDL']
    }
    /*<!------------------------------------------------->
    <!--	end Reinventa tu forma de estudiar: El toolkit del estudiante -->
    <!------------------------------------------------->*/


];

/*<!--------------------------------------------------------------------------->
<!--	end LinkedExperiences(Data)	-->
<!--------------------------------------------------------------------------->*/

