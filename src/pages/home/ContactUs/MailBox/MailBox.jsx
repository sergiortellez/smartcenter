/*<---------------------------------------------------------------------------->
<!--	MailBox (Component)	-->
<!----------------------------------------------------------------------------->
* Description: This component is responsible for rendering the mail box section of the contact Us part of the home page. It's campus sensitive so it will render the contact information that match the selected campus.
     
* Parameters:
    - none
* Dependencies:
    - useCampus (context)
    - styles (css)
    - FontAwesome

* Returns/results: Renders the card itself.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//Context
import useCampus from '@hooks/useCampus';
//styles
import styles from './MailBox.module.css'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessages, faTypewriter, faPhone, faEnvelopesBulk } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'


export default function MailBox() {

  // Retrieve the current campus from context
  const { campus } = useCampus();

  const campusConfig = {
    'CDMX': {
      phone: '(55) 5482 1600',
      email: 'mx_smartcenter@up.edu.mx'
    },
    'GDL': {
      phone: '(33) 1368 2200',
      email: 'cesmart@up.edu.mx'
    },
    'AGS': {
      phone: '(449) 910 6200',
      email: 'smartcenterags@up.edu.mx'
    }
  }

  const { phone, email } = campusConfig[campus]

  return (
    <article className={styles.mailBox} >
      <h1><FontAwesomeIcon icon={faMessages} /> ¿Tienes algo que decirnos? </h1>
      <h3>¡Te escuchamos!</h3>
      {/* <p> En SMART tu voz es importante. ¿Tienes dudas respecto a nuestros servicios? ¿Quieres hacernos algún comentario? ¿Alguna sugerencia? ¿Te gustaría formar parte de nuestro equipo?
      </p>
      <p> Sólo llena <a href="https://forms.gle/yVDwtKpG1gDEmdT89" class="boton_becarios" target="_blank">este</a> formulario y nos pondremos en contacto contigo.</p> */}
      {/* <h1><FontAwesomeIcon icon={faTypewriter} /> ¿Prefieres la vieja escuela? </h1> */}
      <p> Comunícate al conmutador <FontAwesomeIcon icon={faPhone} /> <a href={`tel:${phone.replace(/[\s()]/g, '')}`}>{phone}</a> y marca una de nuestras extensiones. </p >
      <p>También puedes simplemente escribir a <FontAwesomeIcon icon={faEnvelopesBulk} /> {email}</p>
    </article >
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end MailBox(Component)	-->
<!--------------------------------------------------------------------------->*/

