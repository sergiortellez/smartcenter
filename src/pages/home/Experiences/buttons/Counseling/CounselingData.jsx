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
import tutorias from '@assets/intercampi/counseling/tutorias_academicas.webp';
import deportistas from '@assets/intercampi/counseling/deportistas.webp';



export const CounselingData = [
    {
        id: 'holaDiez',
        icon: holaDiez,
        title: '¡Hola Diez! Adiós estrés.',
        subtitle: 'La universidad no tiene que ser estresante',
        description: 'Identifica lo que haces bien y lo que hace falta para que tengas el mejor rendimiento. Si necesitas un plan personalizado de estrategias y hábitos de estudio para tener éxito en tu carrera, este programa es para ti.',
        campi: ['AGS', 'CDMX']
    },
    {
        id: 'sos',
        // icon: IconTwo,
        icon: sos,
        title: 'SOS Vocacional',
        subtitle: 'Encuentra tu camino profesional',
        description: '¿Crees que te equivocaste de carrera? ¿No sabes qué hacer después de la universidad? Este programa es para ti.',
        campi: ['AGS', 'CDMX', 'GDL']
    },
    {
        id: 'talent',
        icon: talent,
        title: 'Talent & Career',
        subtitle: 'Descubre tus superpoderes',
        description: '¿Tienes mucho potencial dentro de ti? ¿Quieres aprender a sacarle el máximo provecho? Este programa es para ti. Identifica y desarrolla tus fortalezas, alcanza tus metas y diseña tu plan de vida y carrera.',
        campi: ['AGS', 'CDMX']
    },
    {
        id: 'simulador',
        icon: simulador,
        title: 'Simulador de entrevista laboral',
        subtitle: 'Prepárate para los retos intelectuales y emocionales que enfrentarás al buscar trabajo',
        description: 'Vive un simulador de entrevista laboral para prepararte para el escenario real. ',
        campi: ['AGS', 'CDMX']
    },
];

