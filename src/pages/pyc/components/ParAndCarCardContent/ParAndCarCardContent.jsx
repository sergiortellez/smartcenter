/*<---------------------------------------------------------------------------->
<!--	ParAndCarCardContent (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//styles
import styles from './ParAndCarCardContent.module.css'
//components
import Pill from '@components/Pill/Pill'

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//from sharp collection
import { faDiploma, faFileCertificate } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'
//from duotone collection
import { faBlockQuestion, faFlaskVial, faEnvelopeCircleCheck } from '@awesome.me/kit-c09e05c963/icons/duotone/solid'
import { faInstagram } from '@awesome.me/kit-c09e05c963/icons/classic/brands';


export default function ParAndCarCardContent({
  cardId,
  cardLogo,
  cardTitle,
  details = [],
  whatIsIt,
  whatToExpect = [],
  hasInstagramBool = false,
  instagramUser = '',
  contactEmail = ''
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

  /*<------------------------------------------------->
  <!--	HandlerEmailClick	-->
  <!------------------------------------------------->*/
  // Handler for "Quiero participar" button click, it will compose and send an email.
  const handleParticipateClick = () => {
    if (!contactEmail) {
      console.error('No contact email provided');
      return;
    }
    const subject = encodeURIComponent(`Alguien quiere participar en ${cardTitle}`);
    const body = encodeURIComponent(`Me interesa participar participar en ${cardTitle}. Favor de tomarme en cuenta.`);
    // Open the default email client with the specified subject and body
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  /*<!------------------------------------------------->
  <!--	end HandlerEmailClick	-->
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
          {/* What is it? */}
          <div className={styles.whatIsIt} >
            <header> <FontAwesomeIcon icon={faBlockQuestion} /> ¿De qué se trata?</header>
            {whatIsIt}
          </div>
          {/* What to expect */}
          <div className={styles.whatToExpect} >
            <header><FontAwesomeIcon icon={faFlaskVial} /> Lab académico</header>
            <p>Nuestro lab académico sigue la filosofía "Learning by doing". Adquirirás las habilidades mientras practicas lo que este programa ofrece para ti. Menos teoría, más práctica, más conexiones, más diversión y más retos. En este lab académico espera: </p>
            <ul>
              {whatToExpect.map((expectation, index) => (
                <li key={index}>{expectation}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.gallery}>


        </div>


      </div>
      <div className={styles.buttons} >
        {hasInstagramBool && <a className={styles.button} href={`https://instagram.com/${instagramUser}`} target="_blank" >  <FontAwesomeIcon icon={faInstagram} /> @{instagramUser} </a>}
        <button
          className={`${styles.button} ${styles.justMobile}`}
          onClick={handleParticipateClick}
        >
          <FontAwesomeIcon icon={faEnvelopeCircleCheck} /> Quiero participar
        </button>
      </div>


    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end ParAndCarCardContent(Component)	-->
<!--------------------------------------------------------------------------->*/

