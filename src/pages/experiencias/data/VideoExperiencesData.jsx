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

export const VideoExperiencesData = [

    /*<------------------------------------------------->
    <!-- Leadership 	-->
    <!------------------------------------------------->*/
    {
        cardId: 'testcard',
        cardLogo: leaderLogo,
        cardTitle: 'This is a test',
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
        appointmentBool: true,
        certificateBool: true,
        certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScHmIpT0RODx95qMmIz0hoELK159VQUCJvn3YYUqwJ0IDfXgQ/viewform?usp=sf_link',
        playList: [
            {
                title: 'Descubre el líder en ti',
                id: 'YWQe1LCER1I',
                isSub: false,
                isSubTitle: null
            },
            {
                title: '5.1- El mejor aliado',
                id: 'sC2l2dSL5jE',
                isSub: true,
                isSubTitle: 'Cuida cómo te hablas'
            }
        ],

        campi: ['CDMX', 'GDL', 'AGS']
    }
    /*<!------------------------------------------------->
    <!--	end Leadership	-->
    <!------------------------------------------------->*/

];

/*<!--------------------------------------------------------------------------->
<!--	end VideoExperiences(Data)	-->
<!--------------------------------------------------------------------------->*/

