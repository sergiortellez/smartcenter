/*<---------------------------------------------------------------------------->
<!--	VideoCardContent (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//reactDom
import { Link, NavLink, useLocation } from 'react-router-dom'

//styles
import styles from './VideoCardContent.module.css'
//components
import Pill from '@components/Pill/Pill'

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//from sharp collection
import { faSignsPost, faDiploma, faFileCertificate, faCirclePlay, faCalendars } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'
//from duotone collection
import { faBlockQuestion, faRectanglePro } from '@awesome.me/kit-c09e05c963/icons/duotone/solid'

export default function VideoCardContent({
  cardId,
  cardLogo,
  cardTitle,
  details = [],
  whatIsIt,
  whatToExpect = [],
  instructions = [],
  appointmentBool = false,
  certificateBool = false,
  certificateUrl,
  playList = [{
    id: '',
    title: '',
    isSub: false,
    isSubTitle: null
  }],
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
          {/* What is it? */}
          <div className={styles.whatIsIt} >
            <header> <FontAwesomeIcon icon={faBlockQuestion} /> ¿Qué es?</header>
            {whatIsIt}
          </div>
          {/* What to expect */}
          <div className={styles.whatToExpect} >
            <header><FontAwesomeIcon icon={faBlockQuestion} /> ¿Qué puedo esperar?</header>
            <ul>
              {whatToExpect.map((expectation, index) => (
                <li key={index}>{expectation}</li>
              ))}
            </ul>
          </div>
          {/* Instructions */}
          <div className={styles.instructions} >
            <header><FontAwesomeIcon icon={faSignsPost} /> Instrucciones</header>
            <ul>
              {instructions.map((instruction, index) => (
                <li key={index}>
                  <span>{instruction}</span>
                  <div className={styles.instructionsNumber}> {index + 1} </div>
                </li>
              ))}
              {appointmentBool && (
                <>
                  <li>
                    <span>Si lo crees necesario agenda una sesión individual 121 (uno a uno) con uno de nuestros expertos.</span>
                    <div className={styles.wrapAppointmentIcons} >
                      <div className={styles.button}>
                        <NavLink to='/citas' className={styles.appointmentButton}  >
                          <FontAwesomeIcon icon={faCalendars} /> Cita
                        </NavLink>
                      </div>
                      <div className={styles.appointmentIcon}>  <FontAwesomeIcon icon={faRectanglePro} /> </div>
                    </div>

                  </li>
                </>
              )}
              {certificateBool && (
                <>
                  <li>
                    <span>Haz valer tu esfuerzo y obtén un certificado.</span>
                    <div className={styles.instructionsNumber}>  <FontAwesomeIcon icon={faDiploma} /> </div>
                  </li>

                  <div className={styles.button}>
                    <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFileCertificate} /> Obtén un diploma
                    </a>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className={styles.playlist}>
          {playList.map((video, index) => (
            <NavLink to={`/experiencias/${video.id}`} key={video.id} className={`${styles.videoCard} ${video.isSub ? styles.subVid : ''}`}  >
              <img src={`https://img.youtube.com/vi/${video.id}/0.jpg`} alt={`${video.title} preview photo`} />
              <div>
                <h4> <FontAwesomeIcon icon={faCirclePlay} /> {video.title}</h4>
                {video.isSub && <i> {video.isSubTitle} </i>}
              </div>

            </NavLink>
          ))}

        </div>
      </div>


    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end VideoCardContent(Component)	-->
<!--------------------------------------------------------------------------->*/

