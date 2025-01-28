/*<---------------------------------------------------------------------------->
<!--	Pill (Component)	-->
<!----------------------------------------------------------------------------->
* Description: A pill component to display details in a card. It will display an icon and a text.
     
* Parameters:
    - icon: icon to display in the pill (fontAwesome is expected)
    - text: text to display in the pill
* Dependencies:
    - none
* Returns/results: A pill component with an icon and a text.
    
<!------------------------------------------------->*/

//---------------------imports----------------------


//styles
import styles from './Pill.module.css'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Pill({ icon, text, transitionName = '' }) {


  return (
    <div className={styles.pill} style={{ viewTransitionName: transitionName }}>
      <FontAwesomeIcon icon={icon} />
      <span className={styles.text} >{text}</span>
    </div>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Pill(Component)	-->
<!--------------------------------------------------------------------------->*/

