/*<------------------------------------------------->
<!--	NavMenu (component)	-->
<!-------------------------------------------------->
* Description: This component is the navigation menu for the website. It's a mobile-first design, so it's optimized for mobile devices. It has a hamburger menu that opens a sliding menu with the navigation links. The links are hashlinks that scroll to the corresponding section of the page. The menu is built using the <dialog> api, and the opening and closing of the menu are managed with the toggleMenu function. The menu has a logo, and the links are styled with icons from fontawesome. The menu is responsive and adapts to the screen size. The menu is built using react and react-router-dom.
   
* Parameters:
   - none
* Dependencies:
    - useRef
    - useState
    - useCampus
    - react-router-dom
    - HashLink
    - smartIcon
    - Accordion(component)
    - styles
        - dropdownContentStyles
    - FontAwesomeIcon
        - faGrid2
        - faCalendar
        - faLocationDot
   

* Returns/results: The component returns a navigation menu itself. 
<!------------------------------------------------->*/

/*<--	*** imports ***	-->*/
//react
import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
//for smooth scrolling
import { HashLink } from "react-router-hash-link";
//components
import Accordion from '../Accordion/Accordion';
//context
import useCampus from '../../hooks/useCampus';
//logos
import smartIcon from '../../assets/intercampi/logos/smart_icon.svg'
//styles
import styles from './NavMenu.module.css'
import dropdownContentStyles from '../NavDropdown/NavDropdownContentsCampus.module.css'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrid2, faCalendar, faLocationDot } from '@awesome.me/kit-c09e05c963/icons/classic/solid'
/*<--	*** end imports ***	-->*/


const NavMenu = () => {

    const dialogRef = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // context and it´s functions.
    const { campus, dispatch } = useCampus();

    const selectCampus = (campus) => {
        dispatch({ type: 'SET_CAMPUS', payload: campus })
    }

    /*<------------------------------------------------->
    <!--	toggleMenu	-->
    <!-------------------------------------------------->
    * Description: This function manages the opening and closing of the mobile menu. It's built using the <dialog> api.
        
    * Parameters:
        - none
    * Dependencies:
        - useRef
        - useState
        - styles
    * Returns/result: when invoked, it opens or closes the mobile menu.
    <!------------------------------------------------->*/
    const toggleMenu = () => {
        //if the dialog is not rendered, return (the dialog should always be rendered)
        if (!dialogRef.current) {
            return
        }
        //check if the dialog is open, use the <dialog> api.
        if (dialogRef.current.hasAttribute('open')) {

            //add the class 'closing' the dialog, this adds an animation effect
            dialogRef.current.classList.add(styles.closing)

            //wait .4 seconds so I can see the result of the class being added and the animation running
            setTimeout(() => {
                //manage react state
                setIsMenuOpen(false)
                //close the dialog
                dialogRef.current.close()
                //remove the class 'closing' from the dialog
                dialogRef.current.classList.remove(styles.closing)

            }, 400)

        } else {
            //manage react state
            setIsMenuOpen(true)
            //if the dialog is not open, open it
            dialogRef.current.show()

        }

    };
    /*<!------------------------------------------------->
    <!--	end toggleMenu	-->
    <!------------------------------------------------->*/



    return (
        <>
            {/* nav bar */}
            <nav data-type="mobile" className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuDialogOpen : ''}`}>
                <HashLink smooth to="/" className={styles.item} > <img src={smartIcon} alt="SC" className={styles.icon} /> SMART </HashLink>

                <HashLink smooth to="/#experiencias" className={styles.item} > <FontAwesomeIcon icon={faGrid2} className={styles.icon} /> Experiencias </HashLink>

                <NavLink to="/citas" className={styles.item} > <FontAwesomeIcon icon={faCalendar} className={styles.icon} /> Citas </NavLink>
                {/* hamburger menu */}
                <div className={`${styles.hamburger}  ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                    <div className={`${styles.line1}`}></div>
                    <div className={`${styles.line2}`}></div>
                </div>
            </nav>

            {/* sliding menu */}
            <dialog ref={dialogRef} className={styles.slideMenu} >
                <section>
                    <HashLink smooth to="/#somos"> ¿Quiénes somos?</HashLink>
                    <HashLink smooth to="/#news"> Noticias</HashLink>
                    <HashLink smooth to="/#tips"> SMART Tips</HashLink>
                    <HashLink smooth to="/#contacto"> Contacto</HashLink>
                    <Accordion title="Campus" defaultExpanded="true">
                        {/* LEARN: The following is a design pattern called:  "Render prop pattern" */}
                        {/* HACK: By passing the children of the NavDropdown as a function we can pass an argument which was declared in the component as the method that closes de dropdown. */}
                        {({ toggleAccordionContent }) => (
                            <div data-type='mobile' className={dropdownContentStyles.buttonsContainer}>
                                <button
                                    className={campus === 'AGS' ? dropdownContentStyles.selected : ''}
                                    onClick={() => { selectCampus('AGS'); toggleAccordionContent(); }}>
                                    <FontAwesomeIcon icon={faLocationDot} /> AGS
                                </button>
                                <button
                                    className={campus === 'CDMX' ? dropdownContentStyles.selected : ''}
                                    onClick={() => { selectCampus('CDMX'); toggleAccordionContent(); }}>
                                    <FontAwesomeIcon icon={faLocationDot} /> CDMX
                                </button>
                                <button
                                    className={campus === 'GDL' ? dropdownContentStyles.selected : ''}
                                    onClick={() => { selectCampus('GDL'); toggleAccordionContent(); }}>
                                    <FontAwesomeIcon icon={faLocationDot} /> GDL
                                </button>
                            </div>
                        )}
                    </Accordion>
                </section>
            </dialog>
        </>
    );
};

export default NavMenu;

//TODO: check periodically if mobile browsers support of animating the display property has been implemented to change all the code inside toggleMenu for a ternary operator that just opens or closes the dialog managing animations with css



/*<!------------------------------------------------->
<!--	end NavMenu (component)	-->
<!------------------------------------------------->*/








