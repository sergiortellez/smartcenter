//react
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
//hooks
import useCampus from '../../hooks/useCampus'
//components
import NavDropdown from '../NavDropdown/NavDropdown';
//for smooth scrolling
import { HashLink } from "react-router-hash-link";
//app logo
import minSmartLogo from '../../assets/intercampi/logos/smart_min.webp'
import largeSmartLogo from '../../assets/intercampi/logos/logo_smart_original.svg'
import upHorizontalLogo from '../../assets/intercampi/logos/up_logo_horizontal.webp'
//styles
import styles from './NavBar.module.css'
import dropdownContentStyles from '../NavDropdown/NavDropdownContentsCampus.module.css'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendars, faLocationDot, faHouse } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'



export default function NavBar() {

    const { campus, dispatch } = useCampus()

    const selectCampus = (campus) => {
        dispatch({ type: 'SET_CAMPUS', payload: campus })
    }

    /*<------------------------------------------------->
    <!--	Auto contracción de la barra de navegación	-->
    <!-------------------------------------------------->
    * Descripción:
        Esta función se encarga de contraer la barra de navegación cuando el usuario hace scroll hacia abajo. Escondiendo Los logos grandes y sustituyéndoos por un logo contraído. Sólo se ejecuta una vez por cada renderizado de la página. Esta función también añade una clase al body que redefine la variable --navHeight a 6.5vh para que el contenido no se mueva hacia arriba cuando la barra de navegación se contrae.
    * Parámetros:
        - ninguno
    * Dependencias:
        - useState
        - useEffect
    * Devuelve/resultado:
        - la barra de navegación se contraerá. 
    <!------------------------------------------------->*/
    const [isContracted, setIsContracted] = useState(false)
    useEffect(() => {
        if (!isContracted) {
            //remove the class in the body and keep using the root value for navHeight
            document.body.classList.remove('navIsContracted');


            //we need a function to pass to the event listener
            const handleScroll = () => {
                //scroll threshold is the limit where the navbar will contract
                const scrollThreshold = window.innerHeight * 0.5;
                //check if user has scrolled to the threshold
                if (window.scrollY > scrollThreshold) {
                    setIsContracted(true);
                    //remove event listener
                    window.removeEventListener('scroll', handleScroll);
                }
            }

            //add event listener
            window.addEventListener('scroll', handleScroll, { passive: true });

            //Cleanup function
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        } else {
            //add the class to the body that will apply the  --navHight value of 6.5vh (overwriting the root value)
            document.body.classList.add('navIsContracted');
        }
    }, [isContracted]);

    /*<!------------------------------------------------->
    <!--	end Auto contracción de la barra de navegación	-->
    <!------------------------------------------------->*/

    /*<------------------------------------------------->
    <!--	IntersectionObserver for Spyscroll	-->
    <!-------------------------------------------------->
    * Descripción:
        Esta función se encarga de resaltar el enlace de la barra de navegación que corresponde a la sección que el usuario está viendo en ese momento. Agregando la clase "active" al enlace correspondiente.
    * Parámetros:
        - ninguno
    * Dependencias:
        - useLocation
        - useState
        - useEffect
        - IntersectionObserver
    * Devuelve/resultado: El enlace de la barra de navegación que corresponde a la sección que el usuario está viendo en ese momento se resaltará.
    <!------------------------------------------------->*/
    // Get the current location. (url from the router)
    const location = useLocation();
    // State to keep track of the active section
    const [activeSection, setActiveSection] = useState('');

    //run when the location changes
    useEffect(() => {
        // Only run in the home page
        if (location.pathname === '/') {
            //INSTRUCTIONS: Track this sections (order matters, should be the same as in the page)
            const sectionsArray = ['experiencias', 'somos', 'news', 'tips', 'contacto'];
            //Remove the ones that are not in the page
            //HACK: .filter(Boolean) removes the null values from the array
            const sectionsExistingElementsArray = sectionsArray
                .map(id => document.getElementById(id))
                .filter(Boolean);

            if (sectionsExistingElementsArray.length === 0) return;
            //To track the id's of visible sections
            const visibleSectionsSet = new Set();

            // Options for the IntersectionObserver
            //HACK: rootMargin as used combined with threshold to make the observer trigger when the element is 500px from the top of the viewport
            const observerOptions = {
                root: null,
                rootMargin: '-500px 0px 0px 0px',
                threshold: 0,
            };


            //This is the callback function when the observer detects a change. 'entries' is an array of elements that have changed intersection state.
            const observerCallback = entriesArray => {
                entriesArray.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add the visible section
                        visibleSectionsSet.add(entry.target.id);
                    } else {
                        // Remove the section that is no longer visible
                        visibleSectionsSet.delete(entry.target.id);
                    }
                });

                // After processing all entries, decide which section should be active
                if (visibleSectionsSet.size === 0) {
                    // If no sections are visible, clear the activeSection
                    setActiveSection('');
                } else {
                    // If multiple are visible, choose one. Typically, the one closest to the top.
                    // For simplicity, pick the first in the set or sort them by order on the page:
                    // Since sections are in a known order, you might pick the top-most visible one:
                    const sortedSections = sectionsArray.filter(id => visibleSectionsSet.has(id));
                    setActiveSection(sortedSections[0]);
                }
            };

            //declare the observer
            const observer = new IntersectionObserver(observerCallback, observerOptions);
            //observe the sections that exist in the page
            sectionsExistingElementsArray.forEach(element => observer.observe(element));

            // Cleanup function
            return () => {
                //stop observing all the elements
                sectionsExistingElementsArray.forEach(element => observer.unobserve(element));
            };
        }
    }, [location.pathname]);

    /*<!------------------------------------------------->
    <!--	end IntersectionObserver for Spyscroll	-->
    <!------------------------------------------------->*/



    return (
        <nav data-type="desktop" className={`${isContracted ? styles.contracted : ''}`}>
            {/* icons */}
            <section className={styles.navIcons}>
                <Link to="/" className={styles.brand}>
                    {/* render just the right images */}
                    {isContracted ? (
                        //render contracted
                        // <img src={minSmartLogo} alt="SMART" className={styles.navSmartLogoMin} />
                        <><FontAwesomeIcon icon={faHouse} className={styles.homeButton} /> </>
                    ) : (
                        //render expanded logo
                        <>
                            <img src={upHorizontalLogo} alt="UP" className={styles.navUpLogo} />
                            <img src={largeSmartLogo} alt="SMART" className={styles.navSmartLogo} />
                        </>
                    )}


                </Link>
            </section>
            {/* links */}
            <section className={styles.navContents}>
                <HashLink smooth to="/#experiencias" className={activeSection === 'experiencias' ? styles.active : ''}> Experiencias</HashLink>
                <HashLink smooth to="/#somos" className={activeSection === 'somos' ? styles.active : ''}> ¿Quiénes somos?</HashLink>
                <HashLink smooth to="/#news" className={activeSection === 'news' ? styles.active : ''}> Noticias</HashLink>
                <HashLink smooth to="/#tips" className={activeSection === 'tips' ? styles.active : ''}> SMART Tips</HashLink>
                <HashLink smooth to="/#contacto" className={activeSection === 'contacto' ? styles.active : ''}> Contacto</HashLink>

                <span>|</span>

                {/* HACK: since using "modules.css" we need to reference the class name with this boolean because the modules invent classes like NavBar_active_123 so the "active" class was not directly working */}

                {/* Semantic action group */}
                <div className={styles.actionGroup}>
                    <NavLink to="/citas" className={({ isActive }) => (isActive ? styles.active : '')} > <FontAwesomeIcon icon={faCalendars} className={styles.logoCitas} /> Citas </NavLink>

                    <NavDropdown icon={faLocationDot} title={campus} position='bottom-left'>
                        {/* LEARN: The following is a design pattern called:  "Render prop pattern" */}
                        {/* HACK: By passing the children of the NavDropdown as a function we can pass an argument which was declared in the component as the method that closes de dropdown. */}

                        {/* Only show the options for the campus that are not currently selected. (Conditional rendering) */}
                        {({ toggleDialog }) => (
                            <div className={dropdownContentStyles.buttonsContainer}>
                                {campus === 'AGS' ? '' : <button
                                    className={campus === 'AGS' ? dropdownContentStyles.selected : ''}
                                    onClick={() => { selectCampus('AGS'); toggleDialog(); }}>
                                    <FontAwesomeIcon icon={faLocationDot} /> AGS
                                </button>}
                                {campus === 'CDMX' ? '' : <button
                                    className={campus === 'CDMX' ? dropdownContentStyles.selected : ''}
                                    onClick={() => { selectCampus('CDMX'); toggleDialog(); }}>
                                    <FontAwesomeIcon icon={faLocationDot} /> CDMX
                                </button>}
                                {campus === 'GDL' ? '' : <button
                                    className={campus === 'GDL' ? dropdownContentStyles.selected : ''}
                                    onClick={() => { selectCampus('GDL'); toggleDialog(); }}>
                                    <FontAwesomeIcon icon={faLocationDot} /> GDL
                                </button>}
                            </div>
                        )}
                    </NavDropdown>
                </div>

                {/* End Semantic Lateral */}



            </section>
        </nav>

    )
}
