/*<---------------------------------------------------------------------------->
<!--	AUFaq (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
This component is a button that when clicked expands to show a list of FAQ for an advisory session.
     
* Parameters:
    - className (string): CSS class name to be added from the parent.
* Dependencies:
    - ExpandableCard
    - IconTextTitle
    - FontAwesomeIcon
    - styles
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//components
import ExpandableCard from '@components/ExpandableCard/ExpandableCard'
import IconTextTitle from '@components/IconTextTitle/IconTextTitle'
import SimpleAccordion from '@components/SimpleAccordion/SimpleAccordion'
//styles
import styles from './AUFaq.module.css'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faWhatsapp } from '@awesome.me/kit-c09e05c963/icons/classic/brands';
import { faDoorOpen } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faEnvelopes } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';




export default function AUFaq({ className }) {
  /*<------------------------------------------------->
  <!--	button content	-->
  <!------------------------------------------------->*/

  // Title and icon
  const buttonContent = (
    <div>
      <IconTextTitle
        icon={faCircleQuestion}
        title='FAQ AU'
        titleSize='1.2'
        iconSize='2'
      />
    </div>

  )
  /*<!------------------------------------------------->
  <!--	end button content	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	expanded Content	-->
  <!------------------------------------------------->*/

  /*<--	*** Question 1 ***	-->*/

  const question1 = (
    <div className={styles.question}>
      <FontAwesomeIcon icon={faCircleQuestion} />
      <span>¿Cuántas veces tengo que ver a mi asesor?</span>
    </div>
  )
  const answer1 = (
    <ul>
      <li>Búscalo a principio de semestre para que te ayude a organizar tu semestre.</li>
      <li>Búscalo al final de semestre para cerrar mejor tu semestre.</li>
      <li>Lo puedes buscar las veces que necesitas a lo largo del semestre.</li>
    </ul>
  )

  /*<--	*** end Question 1 ***	-->*/

  /*<--	*** Question 2 ***	-->*/

  const question2 = (
    <div className={styles.question}>
      <FontAwesomeIcon icon={faCircleQuestion} />
      <span>¿Cómo contacto a mi asesor?</span>
    </div>
  )
  const answer2 = (
    <ul>
      <li>Utiliza distintos medios, wa <FontAwesomeIcon icon={faWhatsapp} />, mail <FontAwesomeIcon icon={faEnvelopes} /> </li>
      <li>Localízalo en su oficina. <FontAwesomeIcon icon={faDoorOpen} /></li>
    </ul>
  )

  /*<--	*** end Question 2 ***	-->*/


  const expandedContent = (
    <>
      <SimpleAccordion
        title={question1}
        content={answer1}
      />
      <SimpleAccordion
        title={question2}
        content={answer2} />

    </>

  )
  /*<!------------------------------------------------->
  <!--	end expanded Content	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	return	-->
  <!------------------------------------------------->*/
  return (
    <ExpandableCard
      buttonContent={buttonContent}
      expandedContent={expandedContent}
      areaName='AUFaq'
      className={className}
    />
  );
  /*<!------------------------------------------------->
  <!--	end return	-->
  <!------------------------------------------------->*/

}

/*<!--------------------------------------------------------------------------->
<!--	end AUFaq(Component)	-->
<!--------------------------------------------------------------------------->*/

