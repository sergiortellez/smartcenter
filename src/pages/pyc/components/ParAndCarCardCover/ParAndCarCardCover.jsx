/*<---------------------------------------------------------------------------->
<!--	ParAndCarCardCover (Component)	-->
<!----------------------------------------------------------------------------->
* Description: This component is part of an assembly of components that make up a card that can expand and collapse within a grid layout. It is used to display the cover of the card. The cover consists of an image, a title, and a list of details. It's meant to be used in conjunction with the CardContent component and the SelfContainedExpandableCard component. It's sensible to the use of the ViewTransition API for smooth animations generating unique names using the cardId prop.
* Parameters:
    - cardId: a unique identifier for each card.
    - cardLogo: requires an imported image.
    - cardTitle: a string.
    - details: an array of objects with two properties: icon and text.
     
* Dependencies:
    - Pill(Component)
    - CSS modules for styling
      - viewTransition API
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './ParAndCarCardCover.module.css'

//components
import Pill from '@components/Pill/Pill'





export default function ParAndCarCardCover({ cardId, cardLogo, cardTitle, details = [] }) {


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

    <div className={styles.ParAndCarCardCover}>

      <img src={cardLogo} className={styles.coveImage} alt="experience icon" style={{ viewTransitionName: cardImgName }} />
      <span className={styles.cardTitle} style={{ viewTransitionName: cardTitleName }} >{cardTitle}</span>
      <div className={styles.details}>

        {details.map((detail, index) => (
          <Pill key={index} icon={detail.icon} text={detail.text} transitionName={`${detail.text.replace(/[^a-zA-Z0-9]/g, '')}${cardId}`} />
        ))}
      </div>
    </div>

  )
}

/*<!--------------------------------------------------------------------------->
<!--	end ParAndCarCardCover(Component)	-->
<!--------------------------------------------------------------------------->*/

