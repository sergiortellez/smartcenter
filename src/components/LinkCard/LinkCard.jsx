/*<---------------------------------------------------------------------------->
<!--	LinkCard (Component)	-->
<!----------------------------------------------------------------------------->
* Description: LinkCard is a component that renders a card that behaves as a link. It visually warns the user that's about to click a link with an icon(top left of the card). It can be used to link to internal or external pages. It's meant to be used in a grid layout and the dev can control the position of the card in the grid by passing an areaName prop, then just use grid-template-areas to place the card in the desired position.
     
* Parameters:
    - route (string): The path to the page the card will link to.
    - contents (JSX): The content of the card.
    - areaName (string): The name of the area in the grid layout where the card will be placed.
    - isExternal (boolean): If true, the card will link to an external page.

* Dependencies:
    - FontAwesomeIcon from '@fortawesome/react-fontawesome'

* Returns/results: Renders the card that behaves as a link.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//react
import { Link } from 'react-router-dom';
//styles
import styles from './LinkCard.module.css'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'


export default function LinkCard(
  {
    route = '',
    contents,
    areaName = '',
    isExternal = false }) {

  /*<------------------------------------------------->
   <!--	apply styles	-->
   <!------------------------------------------------->*/
  //styles to be applied
  let linkCardStyles = null

  //make sure areaName is not empty
  if (areaName) {
    //apply to the button part
    linkCardStyles = {
      gridArea: areaName
    }
  }
  /*<!------------------------------------------------->
  <!--	end apply styles	-->
  <!------------------------------------------------->*/


  // If the link is external, we use an anchor tag
  if (isExternal) {
    return (
      <a href={route} target="_blank" rel="noopener noreferrer"
        className={`${styles.cardBase} ${styles.linkCard}`} style={linkCardStyles || {}} data-name={areaName}>
        <FontAwesomeIcon icon={faLink} className={styles.linkIcon} />
        {contents}
      </a>
    );
  }

  // For internal links, we use React Router's Link component
  return (
    <Link to={route} className={`${styles.cardBase} ${styles.linkCard}`} style={linkCardStyles || {}} data-name={areaName} >
      <FontAwesomeIcon icon={faLink} className={styles.linkIcon} />
      {contents}
    </Link>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end LinkCard(Component)	-->
<!--------------------------------------------------------------------------->*/

