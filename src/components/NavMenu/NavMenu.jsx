//react
import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
//for smooth scrolling
import { HashLink } from "react-router-hash-link";
//logos
import smartIcon from '../../assets/intercampi/logos/smart_icon.svg'
//styles
import styles from './NavMenu.module.css'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrid2, faCalendar } from '@awesome.me/kit-c09e05c963/icons/classic/solid'




const NavMenu = () => {

    const dialogRef = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    /*<------------------------------------------------->
    <!--	toggleMenu	-->
    <!-------------------------------------------------->
    * Description: This function manages the opening and closing of the mobile menu. It's built using the <dialog> api.
        
    * Parameters:
        - none
    * Dependencies:
        - useRef
        - useState
        - styles.closing
        - styles.navMenuDialogOpen
        - styles.hamburger
        - styles.open
        - styles.line1
        - styles.line2
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
            <dialog ref={dialogRef} className={styles.dialog} >
                <section>
                    <HashLink smooth to="/#somos"> ¿Quiénes somos?</HashLink>
                    <HashLink smooth to="/#news"> Noticias</HashLink>
                    <HashLink smooth to="/#tips"> SMART Tips</HashLink>
                    <HashLink smooth to="/#contacto"> Contacto</HashLink>
                </section>
            </dialog>
        </>
    );
};

export default NavMenu;

//TODO: check periodically if mobile browsers support of animating the display property has been implemented to change all the code inside toggleMenu for a ternary operator that just opens or closes the dialog managing animations with css
