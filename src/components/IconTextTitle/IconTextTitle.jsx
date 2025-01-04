/*<---------------------------------------------------------------------------->
<!--	IconTextTitle (Component)	-->
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
import styles from './IconTextTitle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function IconTextTitle({ icon, title, flow = 'column' }) {
  return (
    <div className={styles.iconTextTitle} style={{ flexDirection: flow }}>
      <FontAwesomeIcon icon={icon} className={`${flow === 'column' ? styles.iconColumn : styles.iconRow} `} />
      <span className={styles.title} >{title}</span>
    </div>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end IconTextTitle(Component)	-->
<!--------------------------------------------------------------------------->*/

