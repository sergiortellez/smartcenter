/*<---------------------------------------------------------------------------->
<!--	ParAndCar(Data)	-->
<!----------------------------------------------------------------------------->
* Description: Data for the existing ParAndCarCard in the Catalog component, It should be imported in the Catalog component for creating the cards.

* Parameters:
    - none
* Dependencies:
    - none
* Returns/results: Exported array with the objects containing the data of each Par or Car.
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//Logos origin CDMX
import aPlayer from '@assets/intercampi/par_car/icons/a_player.webp'

//icons
import { faMedal } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'


export const ParAndCarData = [

    /*<------------------------------------------------->
    <!--  	-->
    <!------------------------------------------------->*/
    {
        cardId: 'aPlayer',
        cardLogo: aPlayer,
        cardTitle: 'A-Player',
        details: [
            { icon: null, text: 'Programa de alto rendimiento' },
            { icon: faMedal, text: 'Insignia Digital' },
        ],
        whatIsIt: (<p>Programa anual dónde desarrollarás competencias de liderazgo, trabajo en equipo, inteligencia emocional, negociación, networking, y selfmanagement, a través de distintas sesiones.</p>),
        whatToExpect: [
            'Sesiones con expertos: directivos y académicos UP',
            'Diagnóstico de competencias',
        ],
        hasInstagramBool: true,
        instagramUser: 'sergiortellez',
        contactEmail: 'sergiortellez@gmail.com',
        campi: ['CDMX']
    },

];

/*<!--------------------------------------------------------------------------->
<!--	end ParAndCar(Data)	-->
<!--------------------------------------------------------------------------->*/

