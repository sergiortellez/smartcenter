/*<---------------------------------------------------------------------------->
<!--	IconTextTitle (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     This component is a placeholder for the title of a button card. It displays an icon and a title. The icon can be placed on top of the title or to the left of it. The size of the icon and the title can be adjusted. For using it the fontawesome icon must be imported in the parent component.
* Parameters:
    - icon (JSX): The fontawesome icon to be displayed.
    - title (string): The title to be displayed.
    - flow (string): The direction of the icon and the title. (default: 'column')
    - titleSize (string): The size in 'rem' of the title. (default: '1.2')
    - iconSize (string): The size in 'rem' of the icon. (default: '2')
* Dependencies:
    - FontAwesomeIcon from '@fortawesome/react-fontawesome'
    - styles: The css module for the component.
* Returns/results: Renders the IconTextTitle component.
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './IconTextTitle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function IconTextTitle({ icon, title, flow = 'column', titleSize = '1.2', iconSize = '2' }) {
  return (
    <div className={styles.iconTextTitle} style={{ flexDirection: flow }}>

      <FontAwesomeIcon
        icon={icon}
        className={`${flow === 'column' ? styles.iconColumn : styles.iconRow} `}
        style={{ fontSize: `${iconSize}rem` }} />

      <span style={{ fontSize: `${titleSize}rem` }} >{title}</span>
    </div >
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end IconTextTitle(Component)	-->
<!--------------------------------------------------------------------------->*/

