/*<------------------------------------------------->
<!--	Accordion (component)	-->
<!-------------------------------------------------->
* Description:
    - This component creates an accordion that can be expanded or contracted by the user.
    
* Parameters:
    - title(text): the title of the accordion.
    - children(jsx): the content of the accordion.
    - defaultExpanded(boolean): determines if the accordion is expanded by default.
* Dependencies:
    - useState
    - styles
* Returns/results: The component returns an accordion that can be expanded or contracted by the user.
<!------------------------------------------------->*/

/*<--	*** imports ***	-->*/

//react
import { useState } from 'react';
//styles
import styles from './Accordion.module.css';

/*<--	*** end imports ***	-->*/

export default function Accordion({ title, children, defaultExpanded = false }) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    /*<--	*** toggle the state ***	-->*/
    const toggleAccordionContent = () => {
        setIsExpanded(!isExpanded);
    };
    /*<--	*** end toggle the state ***	-->*/


    return (
        <div className={styles.accordionContainer}>
            <button
                className={styles.accordionHeader}
                onClick={toggleAccordionContent}
            >
                {title}
            </button>
            <div
                className={`${styles.accordionContainer} ${isExpanded ? styles.expanded : styles.contracted}`}

            >
                <div className={styles.innerContent}>
                    {/* LEARN: The following is a design pattern called:  "Render prop pattern" */}
                    {/* HACK: The children prop can be whatever we want it to be. In this case we are checking if it´s a function and in that case we pass the argument (toggleDialog) to give the children a method to close the Dropdown. But if we pass a node tree it will just render the children with no argument.  */}

                    {typeof children === 'function' ? children({ toggleAccordionContent }) : children}
                </div>
            </div>
        </div>
    );
}

/*<!------------------------------------------------->
<!--	end Accordion (component)	-->
<!------------------------------------------------->*/







//TODO: The animation that displays the content of the accordion depends on a CSS property called interpolate-size: allow-keywords; that is not supported by all browsers.  Check in 6 months if the property is now supported in all browsers. If not, work on the animation with a timer strategy.  The component works fine, just no animation in Safari for now. 