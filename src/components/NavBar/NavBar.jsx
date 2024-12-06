//react
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
//for smooth scrolling
import { HashLink } from "react-router-hash-link";
//app logo
import minSmartLogo from '../../assets/intercampi/logos/smart_min.webp'
import largeSmartLogo from '../../assets/intercampi/logos/logo_smart.svg'
import upHorizontalLogo from '../../assets/intercampi/logos/up_logo_horizontal.webp'
//styles
import styles from './NavBar.module.css'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendars } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'



export default function NavBar() {

    /*<------------------------------------------------->
    <!--	Auto contracción de la barra de navegación	-->
    <!-------------------------------------------------->
    * Descripción:
        Esta función se encarga de contraer la barra de navegación cuando el usuario hace scroll hacia abajo. Escondiendo Los logos grandes y sustituyéndoos por un logo contraído. Sólo se ejecuta una vez por cada renderizado de la página.
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
            };

            //add event listener
            window.addEventListener('scroll', handleScroll, { passive: true });

            //Cleanup function
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isContracted]);

    /*<!------------------------------------------------->
    <!--	end Auto contracción de la barra de navegación	-->
    <!------------------------------------------------->*/



    return (
        <nav data-type="desktop" className={`${isContracted ? styles.contracted : ''}`}>
            {/* icons */}
            <section className={styles.navIcons}>
                <Link to="/" className={styles.brand}>
                    {/* render just the right images */}
                    {isContracted ? (
                        //render contracted
                        <img src={minSmartLogo} alt="SMART" className={styles.navSmartLogoMin} />) : (
                        //render expanded logo
                        <>
                            <img src={largeSmartLogo} alt="SMART" className={styles.navSmartLogo} />
                            <img src={upHorizontalLogo} alt="UP" className={styles.navUpLogo} />
                        </>
                    )}


                </Link>
            </section>
            {/* links */}
            <section className={styles.navContents}>
                <HashLink smooth to="/#experiencias"> Experiencias</HashLink>
                <HashLink smooth to="/#somos"> ¿Quiénes somos?</HashLink>
                <HashLink smooth to="/#news"> Noticias</HashLink>
                <HashLink smooth to="/#tips"> SMART Tips</HashLink>
                <HashLink smooth to="/#contacto"> Contacto</HashLink>
                <span>|</span>
                {/* HACK: since using "modules.css" we need to reference the class name with this boolean because the modules invent classes like NavBar_active_123 so the "active" class was not directly working */}
                <NavLink to="/citas" className={({ isActive }) => (isActive ? styles.active : '')} > <FontAwesomeIcon icon={faCalendars} className={styles.logoCitas} /> Citas </NavLink>
            </section>
        </nav>

    )
}
