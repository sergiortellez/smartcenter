
/*<---------------------------------------------------------------------------->
<!--	Data aux (object)	-->
<!----------------------------------------------------------------------------->
* Description:
     This is an auxiliary file that contains the data for the component WhatIsCounseling. 
     It's structured as an object that contains the data for each campus.
     Contains the logic to display the content for each campus considering repetitive content.
* Parameters:
    - none
* Dependencies:
    - styles: WhatIsCounseling.module.css
    - assets: images for each campus
    - FontAwesome: faHouseLaptop
    - FontAwesome: FontAwesomeIcon
* Returns/results: An object with the data for each campus.
<!------------------------------------------------->*/

//---------------------imports----------------------

//Styles
import styles from './WhatIsCounseling.module.css'

// Images 

import counselingAGS from '@assets/intercampi/home/counseling_ags.webp'
import counselingCDMX from '@assets/intercampi/home/counseling_cdmx.webp'
import counselingGDL from '@assets/intercampi/home/counseling_gdl.webp'


// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseLaptop } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid';



// The repetitive content for AGS & CDMX:
const oneToOneText = (
    <>


        <p>¿Quieres tener
            <span className={styles.resaltado}> mejores calificaciones</span>? ¿Quieres<span className={styles.resaltado}> tener tiempo</span>  para ti, para estudiar, para tu familia, pareja y amigos?
            <br />¡Uno de nuestros <b>expertos</b> puede ayudarte a
            crear un <span className={styles.resaltado}>plan personalizado</span> de <b>estrategias y hábitos de estudio</b>!
        </p>
        <p>Si vives lejos o prefieres el contacto remoto <FontAwesomeIcon icon={faHouseLaptop} /> nuestra <span className={styles.resaltado}>opción online</span> es para ti.
        </p>
        {/* <hr />
        <h3>Metodología</h3>
        <p>¿Conoces el Counseling de la Universidad Panamericana? Es una metodología que te ayuda a <span className={styles.resaltado} >mejorar en situaciones complicadas</span> o desarrollar habilidades específicas. Básicamente, te ayuda a <span className={styles.resaltado}> construir tu
            mejor versión</span>. </p>
        <p>Fue desarrollada en el SMART Center y ha ayudado a muchos estudiantes como tú a salir adelante.</p> */}
    </>
)

const oneToOneTextGdl = (
    <>
        <p>¿Quieres tener
            <span className={styles.resaltado}> mejores calificaciones</span>? ¿Quieres<span className={styles.resaltado}> tener tiempo</span> para ti, para estudiar, para tu familia, pareja y amigos?
            <br /> ¡Uno de nuestros <b>expertos</b> puede ayudarte a
            crear un <span className={styles.resaltado}>plan personalizado</span> de <b>estrategias y hábitos de estudio</b>!
        </p>
        {/* <p>Si vives lejos o prefieres el contacto remoto <FontAwesomeIcon icon={faHouseLaptop} /> nuestra <span className={styles.resaltado}>opción online</span> es para ti.
        </p> */}

        {/* <h3>Metodología</h3>
        <p>¿Conoces el Coaching de la Universidad Panamericana? Es una metodología que te ofrece <span className={styles.resaltado} >acompañamiento personalizado</span> si estás en los últimos años de la carrera. Uno de nuestros coaches, con entrenamiento especial, te puede ayudar a <span className={styles.resaltado}> lograr tus objetivos</span> personales y profesionales. </p>

        <p>Fue desarrollada en el SMART Center Guadalajara y ha ayudado a muchos estudiantes como tú a triunfar.</p> */}
    </>
)

const cardTitle = (
    <>
        <p className={styles.cardTitle} >¿Qué es 121?</p>
        <p className={styles.cardSubtitle} >Atención uno a uno</p>
    </>
)

/*<------------------------------------------------->
<!--	Exporting	-->
<!------------------------------------------------->*/
export const WhatIsCounselingData = {
    AGS: {
        title: cardTitle,
        img: counselingAGS,
        content: oneToOneText
    },
    CDMX: {
        title: cardTitle,
        img: counselingCDMX,
        content: oneToOneText
    },
    GDL: {
        title: cardTitle,
        img: counselingGDL,
        content: oneToOneTextGdl
    },
    FALLBACK: {
        title: 'No campus selected',
        img: null,
        content: null
    }
}
/*<!------------------------------------------------->
<!--	end Exporting	-->
<!------------------------------------------------->*/


/*<!--------------------------------------------------------------------------->
<!--	end Data aux (Component)	-->
<!--------------------------------------------------------------------------->*/
