/*<------------------------------------------------->
<!--	NavDropdown	(component)-->
<!-------------------------------------------------->
* Description:  * A reusable dropdown menu component that can accept a FontAwesome icon and custom children content. When the icon is clicked, it toggles the dropdown visibility with a slide-down effect.
    
* Parameters:
    - none

* Props:
    - icon: FontAwesomeIcon prop for specifying the icon.
    - children: Content to display inside the dropdown.
    - position: Placement of dropdown (default: 'bottom-right').

* Dependencies:
 

* Returns/results: The component itself.
<!------------------------------------------------->*/

/*<--	*** imports ***	-->*/
//React
import { useRef, useState } from 'react';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Styles
import styles from './NavDropdown.module.css';
/*<--	*** end imports ***	-->*/


export default function NavDropdown({ icon, children }) {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDialog = () => {
        //if the dropdown is not rendered, return (the dialog should always be rendered)
        if (!dropdownRef.current) return;

        //check if the dialog is open, use the <dialog> api.
        if (dropdownRef.current.hasAttribute('open')) {

            dropdownRef.current.classList.add(styles.closing);
            setTimeout(() => {
                setIsDropdownOpen(false);
                dropdownRef.current.close();
                dropdownRef.current.classList.remove(styles.closing);
            }, 400); // Match animation duration
        } else {
            setIsDropdownOpen(true);
            dropdownRef.current.show();
        }
    };

    return (
        <div className={styles.dropdown}>
            <button
                className={styles.dropdownButton}
                onClick={toggleDialog}
                aria-haspopup="dialog"
                aria-expanded={isDropdownOpen}
            >
                <FontAwesomeIcon icon={icon} />
            </button>
            <dialog ref={dropdownRef} className={styles.dialog}>
                <div className={styles.dialogContent}>{children}</div>
            </dialog>
        </div>
    );
}


/*<!------------------------------------------------->
<!--	end NavDropdown	(component)-->
<!------------------------------------------------->*/