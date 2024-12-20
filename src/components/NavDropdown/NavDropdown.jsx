/*<------------------------------------------------->
<!--	NavDropdown	(component)-->
<!-------------------------------------------------->
* Description:   A reusable dropdown menu component that can accept a FontAwesome icon and custom children content. When the icon is clicked, it toggles the dropdown visibility with a slide-down effect.
    
* Parameters:
    - none

* Props:
    - icon: FontAwesomeIcon prop for specifying the icon.
    - children (node tree or function ): If function it can pass the argument (toggleDialog) to give the children a method to close the Dropdown. If it´s a node tree it will just render the children with no argument.
    - position: Placement of dropdown (default: 'bottom-right').

* Dependencies:
 

* Returns/results: The component itself.
<!------------------------------------------------->*/

/*<--	*** imports ***	-->*/
//React
import { useRef, useState, useEffect } from 'react';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Styles
import styles from './NavDropdown.module.css';
/*<--	*** end imports ***	-->*/


export default function NavDropdown({ icon, children, position = 'bottom-right' }) {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    //make sure the position prop is valid
    const validPositions = ['bottom-right', 'bottom-left', 'top-right', 'top-left'];
    const appliedPosition = validPositions.includes(position) ? position : 'bottom-right';


    /*<------------------------------------------------->
    <!--	toggleDialog	-->
    <!-------------------------------------------------->
    * Description: 
        This function toggles the dropdown visibility. It uses the <dialog> api to show and hide the dropdown with a slide-down effect. This function will be passed to the children components to allow them to close the dropdown when needed.
        
    * Parameters:
        - none
    * Dependencies:
        - useRef for dropdownRef
    * Returns/results: if the dropdown is open, it will close it, if it is closed, it will open it.
    <!------------------------------------------------->*/
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
    /*<!------------------------------------------------->
    <!--	end toggleDialog	-->
    <!------------------------------------------------->*/

    /*<------------------------------------------------->
    <!--	closeDropdownOnOutsideClick	-->
    <!-------------------------------------------------->
    * Description: 
        This function closes the dropdown when the user clicks outside of it. It can be passed to the children components to allow them to close the dropdown when needed.
    * Parameters:
        - event: click event
    * Dependencies:
        - isDropdownOpen
        - dropdownRef
        - toggle
    * Returns/results: if the user clicks outside the dropdown, it will close it.
    <!------------------------------------------------->*/
    const closeDropdownOnOutsideClick = (event) => {
        //check the following conditions:
        if (
            //if the dropdown is open
            isDropdownOpen &&
            //if the dropdown reference exists
            dropdownRef.current &&
            //if the click target is not inside the dropdown
            !dropdownRef.current.contains(event.target) &&
            //if the click target is not the dropdown button
            //HACK: we are referencing a dynamic class because we are using a css module
            !event.target.closest(`.${styles.dropdownButton}`)
        ) {
            toggleDialog();
        }
    };
    //check if the dropdown is open, if it is, add an event listener to close it when the user clicks outside of it.
    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener('click', closeDropdownOnOutsideClick);
        } else {
            document.removeEventListener('click', closeDropdownOnOutsideClick);
        }
        //cleanup function
        return () => document.removeEventListener('click', closeDropdownOnOutsideClick);
    }, [isDropdownOpen]);

    /*<!------------------------------------------------->
    <!--	end closeDropdownOnOutsideClick	-->
    <!------------------------------------------------->*/



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
            <dialog ref={dropdownRef} className={`${styles.dropdownDialog} ${styles[position]}`}>
                <div className={styles.dialogContent}>

                    {/* LEARN: The following is a design pattern called:  "Render prop pattern" */}
                    {/* HACK: The children prop can be whatever we want it to be. In this case we are checking if it´s a function and in that case we pass the argument (toggleDialog) to give the children a method to close the Dropdown. But if we pass a node tree it will just render the children with no argument.  */}

                    {typeof children === 'function' ? children({ toggleDialog }) : children}


                </div>
            </dialog>
        </div>
    );
}


/*<!------------------------------------------------->
<!--	end NavDropdown	(component)-->
<!------------------------------------------------->*/