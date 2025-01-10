/*<---------------------------------------------------------------------------->
<!--    PrepareAU (Data)    -->
<!----------------------------------------------------------------------------->
* Description:
    Data array for the PrepareAU component. Each object can include:
      - 
<!------------------------------------------------->*/


//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faAddressCard } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faFilePen } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faWatchSmart } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faUser } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faCommentQuestion } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faCalendarHeart } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faFire } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faCheckToSlot } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid';
import { faUserSecret } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';





//numbers
import { faCircle1 } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faCircle2 } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faCircle3 } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faCircle4 } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faCircle5 } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faCircle6 } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faCircle7 } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faCircle8 } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faCircle9 } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';




export const PrepareAUData = [
    {
        id: 'uno',
        icon: faComments,
        title: 'Contacta a tu asesor',
        number: faCircle1,
        description: (
            <>
                Pídele una cita.Tu coordinador te debe mandar su contacto <FontAwesomeIcon icon={faAddressCard} /> al iniciar la licenciatura, ¡si no lo has recibido pídeselo!
            </>
        )
    },
    {
        id: 'dos',
        icon: faFilePen,
        title: 'Prepárate',
        number: faCircle2,
        description: (
            <>
                Prepara preguntas o temas sobre los cuales tengas duda. Anota todo para no olvidar ningún punto cuando estés con tu asesor.
            </>
        )
    },
    {
        id: 'tres',
        icon: faWatchSmart,
        title: 'Sé puntual',
        number: faCircle3,
        description: (
            <>
                Asiste a tu sesión puntualmente, respeta el tiempo de los demás.
            </>
        )
    },
    {
        id: 'cuatro',
        icon: faUser,
        title: 'Habla sobre ti',
        number: faCircle4,
        description: (
            <>
                Preséntate con tu asesor, cuéntale de ti y de tus intereses. Él también lo hará, para así propiciar un ambiente de confianza y respeto.
            </>
        )
    },
    {
        id: 'cinco',
        icon: faCommentQuestion,
        title: 'Haz preguntas',
        number: faCircle5,
        description: (
            <>
                Hazle a tu asesor todas las preguntas que tengas, él te ayudará a contestarlas o te dirá a dónde puedes acudir.
            </>
        )
    },
    {
        id: 'seis',
        icon: faCalendarHeart,
        title: 'Agenda la siguientes',
        number: faCircle6,
        description: (
            <>
                No te vayas de la sesión sin agendar la siguiente. La continuidad es muy importante.
            </>
        )
    },
    {
        id: 'siete',
        icon: faFire,
        title: 'Para emergencias',
        number: faCircle7,
        description: (
            <>
                Si tienes algún problema o urgencia, a pesar de no tener cita, puedes contactar a tu asesor para saber si puede hacerte un espacio.
            </>
        )
    },
    {
        id: 'ocho',
        icon: faCheckToSlot,
        title: 'Evalúa a tu asesor',
        number: faCircle8,
        description: (
            <>
                Al finalizar el semestre no olvides evaluar a tu asesor.
            </>
        )
    },
    {
        id: 'nueve',
        icon: faUserSecret,
        title: 'Confidencialidad',
        number: faCircle9,
        description: (
            <>
                Recuerda que los temas tratados en tu sesión serán confidenciales, por lo que puedes contarle a tu asesor o hacerle preguntas sobre lo que sea.
            </>
        )
    },



];

