/*<---------------------------------------------------------------------------->
<!--	CardContent (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
This is part of a set of components that make up a card that can expand and collapse within a grid layout. This component is responsable for the content that is displayed when the card is expanded.
It's been designed to be used in conjunction with the CardCover component and the SelfContainedExpandableCard component. Also It's ready to be used with the ViewTransition API for smooth animations.
     
* Parameters:
    - cardId: a unique identifier for each card.
    - cardLogo: requires an imported image.
    - cardTitle: a string.
    - details: an array of objects with two properties: icon and text.
    - whatIsIt: a string or JSX.
    - whatToExpect: an array of strings.
    - certificateBool: a boolean.
    - certificateUrl: a string.
    - experienceUrl: a string.

* Dependencies:
    - Pill(Component)
    - FontAwesomeIcon
    - CSS modules for styling
      - ViewTransition API
    
* Returns/results: The JSX needed to display the content of a card that can expand and collapse within a grid layout.
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './CardContent.module.css'

//components
import Pill from '@components/Pill/Pill'

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//from sharp collection
import { faSignsPost, faSquare1, faSquare2, faSquare3, faMedal } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'
//from duotone collection
import { faBlockQuestion } from '@awesome.me/kit-c09e05c963/icons/duotone/solid'

export default function CardContent({
  cardId,
  cardLogo,
  cardTitle,
  details = [],
  whatIsIt,
  whatToExpect = [],
  certificateBool = false,
  certificateUrl,
  experienceUrl
}) {


  /*<------------------------------------------------->
  <!--	naming	-->
  <!------------------------------------------------->*/
  //Unique names for each card (needed for ViewTransition API)
  const cardImgName = `cardLogo-${cardId}`;
  const cardTitleName = `cardTitle-${cardId}`;
  /*<!------------------------------------------------->
  <!--	end naming	-->
  <!------------------------------------------------->*/

  return (
    <>

      <header>
        <img src={cardLogo} alt={cardTitle} style={{ viewTransitionName: cardImgName }} />
        <div className={styles.details} >
          <span className={styles.cardTitle} style={{ viewTransitionName: cardTitleName }} >{cardTitle}</span>
          <div className={styles.pills}>
            {details.map((detail, index) => (
              <Pill key={index} icon={detail.icon} text={detail.text} transitionName={`${detail.text.replace(/[^a-zA-Z0-9]/g, '')}${cardId}`} />
            ))}
          </div>

        </div>
      </header>
      <div className={styles.contentLayout}>
        <div className={styles.descriptions} >
          <div className={styles.whatIsIt} >
            <header> <FontAwesomeIcon icon={faBlockQuestion} /> ¿Qué es?</header>
            {whatIsIt}
          </div>
          <div className={styles.whatToExpect} >
            <header><FontAwesomeIcon icon={faBlockQuestion} /> ¿Qué puedo esperar?</header>
            <ul>
              {whatToExpect.map((expectation, index) => (
                <li key={index}>{expectation}</li>
              ))}
            </ul>

          </div>

        </div>
        <div className={styles.descriptions}>
          <div className={`${styles.instructions} ${styles.interactive}`} >
            <header><FontAwesomeIcon icon={faSignsPost} /> Instrucciones</header>
            <ul>
              <FontAwesomeIcon icon={faSquare1} />
              <hr />
              <li> Aprieta el botón de abajo que dice "¡Empieza ya!"</li>

              <FontAwesomeIcon icon={faSquare2} />
              <hr />
              <li> Sigue las instrucciones de la experiencia.</li>

              {certificateBool && (
                <>
                  <FontAwesomeIcon icon={faSquare3} />
                  <hr />
                  <li>Haz valer tu esfuerzo y obtén un certificado.</li>
                  <div className={styles.button}>
                    <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faMedal} /> Obtén un diploma
                    </a>
                  </div>
                </>
              )}
            </ul>
          </div>

        </div>
      </div>
      <div className={styles.startExperience} >
        <div className={styles.buttonOut} >
          <a href={experienceUrl} target="_blank">¡Empieza ya!</a>
        </div>
      </div>
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end CardContent(Component)	-->
<!--------------------------------------------------------------------------->*/

