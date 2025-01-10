/*<---------------------------------------------------------------------------->
  SimpleAccordion (Component)
  ------------------------------------------------------------------------------>
  Description:
    A simple Accordion element that toggles open/close on title click.

  Parameters:
    - title (string | ReactNode): The text/JSX to display as the accordion title.
    - content (ReactNode): The content (text, list, etc.) shown when the accordion is open.

  Dependencies:
    - React (useState)
    - SimpleAccordion.module.css

  Returns/results:
    - Renders a collapsible section with a clickable title. 
      When clicked, toggles the display of the content.
<!-----------------------------------------------------------------------------*/

//---------------------imports----------------------
import { useState } from "react";
import styles from "./SimpleAccordion.module.css";

function SimpleAccordion({ title, content }) {

  // Keep track of whether the accordion is open or closed
  const [isOpen, setIsOpen] = useState(false);

  /*<------------------------------------------------->
  <!--	handleToggle	-->
  <!------------------------------------------------->*/
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  /*<!------------------------------------------------->
  <!--	end handleToggle	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	return	-->
  <!------------------------------------------------->*/
  return (
    <div className={styles.accordionFaqItem}>
      <div className={styles.accordionFaqItemTitle} onClick={handleToggle}>
        {title}
      </div>
      <div className={`${styles.accordionFaqItemContent} ${isOpen ? styles.show : ""}`}>
        {content}
      </div>
    </div>
  );
  /*<!------------------------------------------------->
  <!--	end return	-->
  <!------------------------------------------------->*/


}

export default SimpleAccordion;

/*<!---------------------------------------------------------------------------
  end SimpleAccordion(Component)
<!--------------------------------------------------------------------------->*/
