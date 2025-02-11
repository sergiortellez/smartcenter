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
import bcup from '@assets/intercampi/par_car/icons/bcup.webp'
import cia from '@assets/intercampi/par_car/icons/cia.webp'
import consultingClub from '@assets/intercampi/par_car/icons/consulting_club.webp'
import conversAcciones from '@assets/intercampi/par_car/icons/convers_acciones.webp'
import coparTank from '@assets/intercampi/par_car/icons/copar_tank.webp'
import financialTimes from '@assets/intercampi/par_car/icons/financial_times.webp'
import hultPrice from '@assets/intercampi/par_car/icons/hult_price.webp'
import iise from '@assets/intercampi/par_car/icons/iise.webp'
import tedx from '@assets/intercampi/par_car/icons/tedx.webp'
import womenUp from '@assets/intercampi/par_car/icons/women_up.webp'

//icons
import { faMedal } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'


export const ParAndCarData = [

    /*<------------------------------------------------->
    <!-- Programas de Alto rendimiento 	-->
    <!------------------------------------------------->*/

    // Be Consultant
    {
        cardId: 'beConsultant',
        cardLogo: bcup,
        cardTitle: 'Be Consultant',
        details: [
            { icon: null, text: 'Programa de alto rendimiento' },
            { icon: faMedal, text: 'Insignia Digital' },
        ],
        whatIsIt: (
            <>
                <p>Programa exclusivo para exmiembros de Consulting Club diseñado para estudiantes universitarios que aspiran a convertirse en consultores altamente competentes y éticos. A través de experiencias prácticas, este programa te brinda la oportunidad de desarrollar habilidades clave, trabajar en proyectos desafiantes y fortalecer tu perfil profesional.</p>
                <p>Si buscas diferenciarte en el mundo de la consultoría, aquí encontrarás herramientas y experiencias únicas para potenciar tu crecimiento. Únete a nosotros y prepárate para convertirte en un consultor de alto nivel, con las competencias necesarias para enfrentar los retos del mercado laboral. ¡Las oportunidades te esperan!
                </p>
            </>),
        whatToExpect: [
            'Case Competition Arizona',
            'Hackathon Deloitte',
            'Proyecto interno de mejora continua Up'
        ],
        hasInstagramBool: false,
        instagramUser: null,
        contactEmail: 'dpino@up.edu.mx',
        campi: ['CDMX']
    },
    // CIA Club de Investigación de Alumnos
    {
        cardId: 'cia',
        cardLogo: cia,
        cardTitle: 'CIA Club de Investigación de Alumnos',
        details: [
            { icon: null, text: 'Programa de alto rendimiento' }
        ],
        whatIsIt: (
            <>
                <p>
                    Investigación con propósito. En el club de investigación de la UP, tus ideas
                    pueden generar un impacto positivo en la sociedad y contribuir al desarrollo
                    económico. Sumérgete en proyectos de investigación que impulsarán tu carrera
                    y te convertirán en un agente de cambio. ¡Únete a nosotros y marca la diferencia!
                </p>
            </>
        ),
        whatToExpect: [
            'Sesiones con investigadores',
            'Publicación de un paper o artículo sobre un tema de interés',
            'Podcast y documental'
        ],
        hasInstagramBool: false,
        instagramUser: null,
        contactEmail: 'dpino@up.edu.mx',
        campi: ['CDMX']
    },

    // A-Player
    {
        cardId: 'aPlayer',
        cardLogo: aPlayer,
        cardTitle: 'A-Player',
        details: [
            { icon: null, text: 'Programa de alto rendimiento' }
        ],
        whatIsIt: (
            <>
                <p>
                    ¡Impulsa tu liderazgo y alcanza tu máximo potencial! Nuestro programa anual
                    está diseñado para universitarios que desean desarrollar competencias clave
                    como liderazgo, trabajo en equipo, inteligencia emocional, negociación,
                    networking y autogestión. A través de sesiones dinámicas con expertos,
                    fortalecerás tus habilidades y te prepararás para destacar en el mundo
                    académico y profesional.
                </p>
                <p>
                    Si buscas crecer como líder, conectar con otros estudiantes y potenciar tu
                    desarrollo personal y profesional, esta es tu oportunidad. ¡Únete y lleva
                    tu futuro al siguiente nivel!
                </p>
            </>
        ),
        whatToExpect: [
            'Sesiones con expertos: directivos y académicos UP',
            'Diagnóstico de competencias'
        ],
        hasInstagramBool: false,
        instagramUser: null,
        contactEmail: 'dpino@up.edu.mx',
        campi: ['CDMX']
    },

    // Women UP
    {
        cardId: 'womenUp',
        cardLogo: womenUp,
        cardTitle: 'Women UP',
        details: [
            { icon: null, text: 'Programa de alto rendimiento' }
        ],
        whatIsIt: (
            <>
                <p>
                    ¡Impulsa tu futuro en STEM! Únete a nuestro programa y desarrolla habilidades
                    esenciales para triunfar en la industria tecnológica. A través de talleres,
                    conferencias y mentorías diseñadas especialmente para universitarias,
                    fortalecerás tu liderazgo y construirás una carrera exitosa. ¡Inscríbete y
                    alcanza tu máximo potencial!
                </p>
            </>
        ),
        whatToExpect: [
            'Sesiones con expertos: directivos y académicos UP',
            'Diagnóstico de competencias'
        ],
        hasInstagramBool: false,
        instagramUser: null,
        contactEmail: 'dpino@up.edu.mx',
        campi: ['CDMX']
    },

    /*<------------------------------------------------->
    <!-- Concursos de Alto Rendimiento 	-->
    <!------------------------------------------------->*/

    // COPARMEX UP
    {
        cardId: 'coparmexUp',
        cardLogo: coparTank,
        cardTitle: 'COPARMEX UP',
        details: [
            { icon: null, text: 'Concurso de alto rendimiento' },
            { icon: faMedal, text: 'Insignia Digital' }
        ],
        whatIsIt: (
            <>
                <p>
                    ¿Te apasiona el mundo de los negocios y el liderazgo? En la #COPARMEX, tendrás
                    la oportunidad de conectar con jóvenes como tú, aprender de expertos y desarrollar
                    habilidades esenciales para destacar en el ámbito empresarial. Únete a nuestra
                    comunidad, participa en eventos exclusivos y empieza a construir el futuro que
                    deseas. ¡Es tu momento para brillar!
                </p>
            </>
        ),
        whatToExpect: [
            'Copartank: Diseño de experiencia por el SMART Center'
        ],
        hasInstagramBool: true,
        instagramUser: 'coparmexup',
        contactEmail: 'dpino@up.edu.mx',
        campi: ['CDMX']
    },

    // Hult Prize
    {
        cardId: 'hultPrize',
        cardLogo: hultPrice,
        cardTitle: 'Hult Prize',
        details: [
            { icon: null, text: 'Concurso de alto rendimiento' },
            { icon: faMedal, text: 'Insignia Digital' }
        ],
        whatIsIt: (
            <>
                <p>
                    ¡El Nobel de los estudiantes te espera! Esta competencia global está diseñada
                    para universitarios con ideas innovadoras que puedan resolver los desafíos sociales
                    más urgentes a través del emprendimiento. Cada año se presenta un nuevo reto en el
                    que podrás demostrar tu creatividad y capacidad de impacto. Participa y haz que tu
                    visión transforme vidas mientras desarrollas habilidades clave para el mundo de los
                    negocios.
                </p>
            </>
        ),
        whatToExpect: [
            'OnCampus y posibilidad de competir por 1M de USD.',
            'Insignia digital'
        ],
        hasInstagramBool: true,
        instagramUser: 'hultprizeatupmx',
        contactEmail: 'dpino@up.edu.mx',
        campi: ['AGS', 'CDMX']
    },

    // Panteras - IISE 921
    {
        cardId: 'panterasIise',
        cardLogo: iise,
        cardTitle: 'Panteras - IISE 921',
        details: [
            { icon: null, text: 'Concurso de alto rendimiento' }
        ],
        whatIsIt: (
            <>
                <p>
                    Si te apasionan la sustentabilidad, la cadena de suministros, la ciencia de datos,
                    la optimización y la logística, este concurso es para ti. Únete a nuestro equipo y
                    trabaja en proyectos que generan un impacto real, participando en competencias
                    internacionales con universidades de prestigio como MIT y Harvard. ¡Desarrolla tu
                    potencial y marca la diferencia en el mundo académico y profesional!
                </p>
            </>
        ),
        whatToExpect: [
            'Programa de entrenamiento al concurso con materias y talleres'
        ],
        hasInstagramBool: false,
        instagramUser: null,
        contactEmail: 'dpino@up.edu.mx',
        campi: ['CDMX']
    },

    // TEDx
    {
        cardId: 'tedx',
        cardLogo: tedx,
        cardTitle: 'TEDx',
        details: [
            { icon: null, text: 'Concurso de alto rendimiento' },
            { icon: faMedal, text: 'Insignia Digital' }
        ],
        whatIsIt: (
            <>
                <p>
                    TED creó el programa TEDx con el objetivo de compartir ideas que valen la pena
                    difundir, otorgando licencias para recrear experiencias TED en distintas comunidades.
                    Como parte de TEDx, podrás organizar eventos que inspiren y motiven a la audiencia
                    a emprender acciones poderosas a partir de ideas innovadoras. Sé parte de este
                    movimiento global y ayuda a transformar el mundo con el poder de la comunicación
                    y el conocimiento.
                </p>
            </>
        ),
        whatToExpect: [
            'Taller de storytelling y comunicación efectiva',
            'Formación en metodología TED',
            'Insignia digital'
        ],
        hasInstagramBool: true,
        instagramUser: 'ted_x_up',
        contactEmail: 'dpino@up.edu.mx',
        campi: ['AGS', 'CDMX']
    },

    // ConversAcciones
    {
        cardId: 'conversAcciones',
        cardLogo: conversAcciones,
        cardTitle: 'ConversAcciones',
        details: [
            { icon: null, text: 'Concurso de alto rendimiento' },
            { icon: faMedal, text: 'Insignia Digital' }
        ],
        whatIsIt: (
            <>
                <p>
                    ¡Sé un agente de cambio y transforma ideas en acción! En ConversAcciones, no solo
                    debatimos sobre la corrupción, sino que te desafiamos a desarrollar un plan estratégico
                    para combatirla. Diseña estrategias, moviliza a tu comunidad y conviértete en un
                    promotor de la transparencia y la justicia. ¡Tu participación puede marcar la diferencia
                    en la construcción de un México más íntegro!
                </p>
            </>
        ),
        whatToExpect: [
            'Obtención de insignia digital'
        ],
        hasInstagramBool: false,
        instagramUser: null,
        contactEmail: 'dpino@up.edu.mx',
        campi: ['CDMX']
    },

    // Financial Times
    {
        cardId: 'financialTimes',
        cardLogo: financialTimes,
        cardTitle: 'Financial Times',
        details: [
            { icon: null, text: 'Concurso de alto rendimiento' },
            { icon: faMedal, text: 'Insignia Digital' }
        ],
        whatIsIt: (
            <>
                <p>
                    ¿Te apasionan las finanzas y quieres demostrar tu talento? Participa en esta
                    competencia por equipos de 4 personas donde pondrás a prueba tu conocimiento sobre
                    economía global, tecnología y políticas de bancos centrales a partir del análisis
                    del Financial Times. No solo se trata de teoría, sino de tomar decisiones bajo
                    presión, trabajar en equipo y aplicar estrategias a situaciones del mundo real.
                    ¡Forma tu equipo, compite y demuestra que puedes destacar en el ámbito financiero!
                </p>
            </>
        ),
        whatToExpect: [
            'Obtención de insignia digital',
            'Suscripción premium al Financial Times'
        ],
        hasInstagramBool: false,
        instagramUser: null,
        contactEmail: 'dpino@up.edu.mx',
        campi: ['CDMX']
    },

];

/*<!--------------------------------------------------------------------------->
<!--	end ParAndCar(Data)	-->
<!--------------------------------------------------------------------------->*/

