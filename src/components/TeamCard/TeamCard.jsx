/*<---------------------------------------------------------------------------->
<!--	TeamCard (Component)	-->
<!----------------------------------------------------------------------------->
* Description: This component is a card that displays the information of a team member. It will display the photo, the name and the position, with the rest of the information hidden until the user hovers over the card, or touch it on mobile (CSS mechanism).
     
* Parameters:
    - name: string, name of the team member
    - position: string, position of the team member
    - email: string, email of the team member
    - secondaryEmail: string, secondary email of the team member
    - phoneExtension: number, phone extension of the team member
    - profilePicture: file, imported image of the team member

* Dependencies:
    - FontAwesomeIcon: to display icons
    - styles: to style the component
* Returns/results: The card itself.
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './TeamCard.module.css'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTag, faEnvelopes, faUser, faPhoneArrowDownLeft } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'




export default function TeamCard(
  {
    name = "",
    position = "",
    email = "",
    secondaryEmail = null,
    phoneExtension = null,
    profilePicture = null
  }
) {
  return (
    <article className={styles.person} >
      {/* Profile picture */}
      <div className={styles.profilePicture} >
        {profilePicture ? <img src={profilePicture} alt={name} /> : ""}
      </div>
      {/* Profile data */}
      <div className={styles.cardContent} >
        <div className={styles.name} >{name}</div>
        <div className={styles.position} ><FontAwesomeIcon icon={faUserTag} /> {position}</div>
        <div className={styles.details} ><FontAwesomeIcon icon={faEnvelopes} /> {email}</div>
        {secondaryEmail ? <div className={styles.details}><FontAwesomeIcon icon={faUser} /> {secondaryEmail} </div> : ''}
        {phoneExtension ? <div className={styles.details}><FontAwesomeIcon icon={faPhoneArrowDownLeft} /> ext.{phoneExtension}</div> : ''}
      </div>
    </article>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end TeamCard(Component)	-->
<!--------------------------------------------------------------------------->*/

