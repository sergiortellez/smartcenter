import { useState, useRef } from 'react'
import styles from './NavMenu.module.css'

const NavMenu = () => {

    const dialogRef = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //function to toggle the menu
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

    return (
        <>
            {/* nav bar */}
            <nav data-type="mobile" className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuDialogOpen : ''}`}>
                <div className={styles.item}>Home</div>
                <div className={styles.item}>Search</div>
                <div className={styles.item}>Profile</div>
                {/* hamburger menu */}
                <div className={`${styles.hamburger}  ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                    <div className={`${styles.line1}`}></div>
                    <div className={`${styles.line2}`}></div>
                </div>
            </nav>

            {/* sliding menu */}
            <dialog ref={dialogRef} className={styles.dialog} >
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </dialog>
        </>
    );
};

export default NavMenu;

//TODO: check periodically if mobile browsers support of animating the display property has been implemented to change all the code inside toggleMenu for a ternary operator that just opens or closes the dialog managing animations with css
