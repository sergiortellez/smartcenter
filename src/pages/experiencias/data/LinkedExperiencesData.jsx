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

//Logos
import leaderLogo from '@assets/intercampi/experiencias/leader.webp'
import communicateLogo from '@assets/intercampi/experiencias/communicate.webp'
import resilienciaLogo from '@assets/intercampi/experiencias/resiliencia.webp'
import negotiateLogo from '@assets/intercampi/experiencias/negotiate.webp'
import selfLogo from '@assets/intercampi/experiencias/self.webp'
import manageLogo from '@assets/intercampi/experiencias/manage.webp'
import masterLogo from '@assets/intercampi/experiencias/master.webp'
import gestionLogo from '@assets/intercampi/experiencias/gestion.webp'
import powerUpLogo from '@assets/intercampi/experiencias/power_up.webp'

//icons
import { faFingerprint, faClock, faHashtag } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'

export const LinkedExperiencesData = [

    /*<------------------------------------------------->
    <!-- Leadership (example) 	-->
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
        whatIsIt: 'Esta experiencia te permitirá descubrir tu estilo de liderazgo y conocer en qué situaciones lo puedes aplicar.',
        whatToExpect: [
            'Un taller en línea pensado en ti y en tus necesidades.',
            'Corto, entendible, fácil y rápido de hacer.',
            'Recuerda que la plataforma no guardará tu avance, por lo que te recomendamos realizarlo de corrido.'
        ],
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScHmIpT0RODx95qMmIz0hoELK159VQUCJvn3YYUqwJ0IDfXgQ/viewform?usp=sf_link',
        experienceUrl: '/experiencias/liderazgo/experience/story.html',
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
        whatIsIt: 'Esta experiencia te ayudará a encontrar cuál es tu estilo de comunicación, conocerás sus ventajas y desventajas para relacionarte más efectivamente con personas que tengan un estilo distinto al tuyo.',
        whatToExpect: [
            'Un pequeño test para identificar tu estilo de comunicación.',
            'Un ejercicio para mejorar tu manera de interactuar con otros.',
            '¡Es la manera más concisa y fácil de conocerte a ti mismo en menos de 20 minutos!'
        ],
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf8sK14NUaUih6LySoKMmIShZfgW7143CynrgGS6vpDm4-evw/viewform?usp=sf_link',
        experienceUrl: '/experiencias/communicate/experience/story.html',
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
        whatIsIt: 'Esta experiencia te llevará a proponer una solución a una situación que te estrese.',
        whatToExpect: [
            'Encontrarás una estrategia concreta para aplicar a cualquier problema que tengas.'
        ],
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSck7psffX6KxSTrVb_NnuJTH_tFuhQhPZs1wnAod57O9ZEnZw/viewform?usp=sf_link',
        experienceUrl: '/experiencias/resiliencia/experiencia/story.html',
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
        whatIsIt: 'Esta experiencia te permitirá saber cuál es tu estilo de negociación.',
        whatToExpect: [
            'Un taller en línea pensado en ti y en tus necesidades.',
            'Corto, entendible, fácil y rápido de hacer. ¡No tardarás más de 30 minutos!',
            'Recuerda que la plataforma no guardará tu avance, por lo que te recomendamos realizarlo de corrido.'
        ],
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfD8eNsDupfcJDFnqd3Hw3kgBTlV3azjXkDOmLRTS9FbeXv6Q/viewform?usp=sf_link',
        experienceUrl: '/experiencias/negotiate/experience/story.html',
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
        whatIsIt: 'Esta experiencia se enfoca en el desarrollo de tu inteligencia emocional, ayudándote a reconocer tus propias emociones y reacciones.',
        whatToExpect: [
            'Identificar tu estilo emocional.',
            'Aplicar una estrategia concreta para conocerte a profundidad.',
            'Recuerda que la plataforma no guardará tu avance, por lo que te recomendamos realizarlo de corrido.'
        ],
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf6yLTyR0TwLb9NgyC66Ha1EmIHO0Pp1k403siux-VLEBe7PA/viewform?usp=sf_link',
        experienceUrl: '/experiencias/self/story.html',
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
        whatIsIt: 'Esta experiencia forma parte de tu desarrollo de inteligencia emocional y se enfoca en la autogestión.',
        whatToExpect: [
            'Ejercicios cortos, entendibles y fáciles de aplicar.',
            'No tardarás más de 30 minutos en completarlo.',
            'Recuerda que la plataforma no guardará tu avance.'
        ],
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScyfLZi287NFjhMSg1LSzmDNbRQ__X9pEDz7HJ2pm3PYAIKJw/viewform?usp=sf_link',
        experienceUrl: '/experiencias/manage/story.html',
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
        whatIsIt: 'Mapa interactivo que te orientará en los requisitos de admisión para estudiar un posgrado en el extranjero.',
        whatToExpect: [
            'Requisitos de las universidades TOP del mundo.',
            'Distintos programas de preparación que tenemos para ti.',
            'Información sobre becas y financiamiento.'
        ],
        certificateBool: false,
        certificateUrl: '',
        experienceUrl: '/experiencias/master/index.html',
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
        whatIsIt: 'Una experiencia en línea para que conozcas cómo abrazar y gestionar el cambio para alcanzar tus objetivos.',
        whatToExpect: [
            'Interactivo, entendible y fácil de hacer.',
            'Te llevará máximo una hora.',
            'Aprenderás qué es el cambio, el ciclo emocional del cambio y cómo liderar ante cambios inesperados.'
        ],
        certificateBool: true,
        certificateUrl: 'https://forms.gle/TgmH8qoj1XouprW39',
        experienceUrl: '/experiencias/gestion/index.html',
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
        whatIsIt: 'Un programa que impulsa tu crecimiento personal, académico y profesional para que construyas un perfil que te diferencie en cualquier entorno laboral.',
        whatToExpect: [
            'Talleres transformadores para desarrollar habilidades reales.',
            'Proyectos innovadores y aplicables a tu futuro profesional.',
            'Mentoring de impacto y desarrollo de soft skills críticas.'
        ],
        certificateBool: false,
        certificateUrl: '',
        experienceUrl: 'https://view.genial.ly/64b945c308d2fa0012d25104/dossier-power-up',
        campi: ['CDMX']
    }
    /*<!------------------------------------------------->
    <!--	end Power UP	-->
    <!------------------------------------------------->*/

];

/*<!--------------------------------------------------------------------------->
<!--	end LinkedExperiences(Data)	-->
<!--------------------------------------------------------------------------->*/

