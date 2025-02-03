/*<---------------------------------------------------------------------------->
<!--    CounselingData (Data)    -->
<!----------------------------------------------------------------------------->
* Description:
    Data array for the Counseling component. Each object can include:
      - id
      - icon (imported image path or string path)
      - title
      - subtitle
      - description
      - campi (array of campus codes)
<!------------------------------------------------->*/


import holaDiez from '@assets/intercampi/counseling/hola_diez_icon.webp';
import sos from '@assets/intercampi/counseling/sos_icon.webp';
import talent from '@assets/intercampi/counseling/talent_icon.webp';
import simulador from '@assets/intercampi/counseling/simulador_entrevista.webp';
import reencuadre from '@assets/intercampi/counseling/reencuadre_emocional.webp';
import pares from '@assets/intercampi/counseling/pares.webp';
import tutorias from '@assets/intercampi/counseling/tutorias_academicas.webp';
import deportistas from '@assets/intercampi/counseling/deportistas.webp';



export const CounselingData = [
    {
        id: 'holaDiez',
        icon: holaDiez,
        title: '¡Hola Diez! Adiós estrés.',
        subtitle: 'La universidad no tiene que ser estresante',
        questions: ['¿Sientes que la universidad es demasiado estresante?', '¿Te cuesta trabajo concentrarte?', '¿Estudias mucho y rindes poco?', '¿No te da tiempo de nada?',],
        description: 'Identifica lo que haces bien y lo que hace falta para que tengas el mejor rendimiento. Si necesitas un plan personalizado de estrategias y hábitos de estudio para tener éxito en tu carrera, este programa es para ti.',
        campi: ['AGS', 'CDMX', 'GDL']
    },
    {
        id: 'sos',
        // icon: IconTwo,
        icon: sos,
        title: 'SOS Vocacional',
        subtitle: 'Encuentra el sentido de tu camino profesional',
        questions: ['¿Crees que te equivocaste de carrera?', '¿No te gusta lo que haces?', '¿No sabes qué hacer después de la universidad?'],
        description: ' Este programa es para ti. Uno de nuestros expertos hará una evaluación exhaustiva de tus habilidades, intereses y valores para ayudarte a encontrar sentido a la carrera que escogiste, darte claridad del tu futuro profesional o si es el caso ayudarte a escoger la carrera que mejor se adapte a ti.',
        campi: ['AGS', 'CDMX', 'GDL']
    },
    {
        id: 'talent',
        icon: talent,
        title: 'Talent & Career',
        subtitle: 'Descubre tus superpoderes',
        questions: ['¿Tienes mucho potencial dentro de ti?', '¿Quieres aprender a sacarle el máximo provecho?', '¿Sientes que aún no aprovechas todos tus talentos?'],
        description: 'Este programa es para ti. Identifica y desarrolla tus fortalezas, alcanza tus metas y diseña tu plan de vida y carrera.',
        campi: ['AGS', 'CDMX']
    },
    {
        id: 'reencuadre',
        icon: reencuadre,
        title: 'Reencuadre emocional',
        subtitle: 'Trabajemos juntos para que encuentres balance y bienestar',
        questions: ['¿Te cuesta demasiado trabajo sobrellevar algunos aspectos de tu vida?', '¿Tu día a día se ha vuelto poco placentero?', '¿Experimentas angustia o dolor emocional?',],
        description: 'El reencuadre emocional de SMART Center es un servicio 100 % gratuito, diseñado para ayudarte a encontrar nuevas perspectivas y bienestar. Cuidar nuestra salud mental es fundamental, y en ocasiones, contar con el apoyo de un experto puede marcar la diferencia.',
        campi: ['AGS', 'CDMX', 'GDL']
    },
    {
        id: 'simulador',
        icon: simulador,
        title: 'Simulador de entrevista laboral',
        subtitle: 'Prepárate para los retos intelectuales y emocionales que enfrentarás al buscar trabajo',
        questions: ['¿Te aterra enfrentar una entrevista laboral?', '¿Te gustaría saber cómo responder a las preguntas más difíciles?', '¿Quieres mejorar tu comunicación verbal y no verbal?'],
        description: 'Vive un simulador de entrevista laboral para prepararte para el escenario real. ',
        campi: ['CDMX']
    },
    {
        id: 'pares',
        icon: pares,
        title: 'Estudio entre pares',
        subtitle: 'Aprende de alguien como tú, comparte tu conocimiento y así todos aprenden',
        questions: ['¿Te cuesta trabajo entenderle a algún profesor?', '¿Te gustaría enseñar lo que sabes?', '¿Estás teniendo problemas en entender temas específicos?'],
        description: 'Te vamos a contar uno de los secretos mejor guardados del aprendizaje: aprender de tus compañeros tiene un impacto mucho mayor que aprender de tus profesores o estudiar solo. Además, compartir lo que sabes es la mejor manera de reforzarlo.  En SMART te ofrecemos la oportunidad de participar en un grupo de estudio entre pares, donde podrás compartir tus conocimientos y aprender de los demás.',
        campi: ['AGS']
    },
    {
        id: 'spad',
        icon: deportistas,
        title: 'SPAD',
        subtitle: 'Lleva el alto rendimiento de tu vida de atleta a tu vida de estudiante',
        questions: ['¿Sabías que la misma fuerza y disciplina que te hace un gran atleta se pueden aplicar a otros aspectos de tu vida?', '¿Te has resignado a sólo ser bueno en tu deporte?', '¿No sabes cómo equilibrar tu actividad deportiva con los otros aspectos de tu vida?'],
        description: 'EL programa SPAD es para ti. Así como un coach te ha llevado al éxito deportivo uno de nuestros expertos te ayudará a encontrar el equilibrio que estás buscando. Desde ayudarte a hacer un plan personalizado de estudio hasta equilibrar tu vida deportiva con la personal.',
        campi: ['AGS', 'GDL']
    }
];


