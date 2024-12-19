/*<------------------------------------------------->
<!--	Footer (component)	-->
<!-------------------------------------------------->
* Description: Footer component for the application, is one of the persistent components.
    
* Parameters:
    - none
* Dependencies:
    - styles: Footer.module.css
    - images: upLogo
    - fontawesome: FontAwesomeIcon, faBuilding, faPhoneVolume, faYoutube, faFacebook, faInstagram|
* Returns/results: Renders the footer component itself.
<!------------------------------------------------->*/

/*<--	*** imports ***	-->*/
//styles
import styles from './Footer.module.css';
//images
import upLogo from '../../assets/intercampi/logos/up.webp';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'
import { faPhoneVolume } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'
import { faYoutube } from '@awesome.me/kit-c09e05c963/icons/classic/brands';
import { faFacebook } from '@awesome.me/kit-c09e05c963/icons/classic/brands';
import { faInstagram } from '@awesome.me/kit-c09e05c963/icons/classic/brands';

/*<--	*** end imports ***	-->*/


export default function Footer() {
    return (
        <footer data-type="persistent" >
            <img src={upLogo} alt="Universidad Panamericana" className={styles.footer_logo} />
            <section className={styles.footer_derechos}>
                <span>Derechos Reservados </span>
                <span>© CENTROS CULTURALES DE MÉXICO A.C</span>
                <a href="https://www.up.edu.mx/legales-politicas/" target="_blank">Aviso de privacidad</a>
                <a href="https://smartcenter.up.edu.mx">SMART Center</a>
                <div className={styles.footer_redes}>
                    <a href="https://www.youtube.com/channel/UCMAOisJbM69nBTLbCK_b4LQ?view_as=subscriber" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://www.facebook.com/SuccessCenterUP/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/smartcenterup/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </section>
            <section className={styles.footer_contacto}>
                <span> <FontAwesomeIcon icon={faBuilding} /> Campus CDMX </span>
                <span> Augusto Rodin No. 498 </span>
                <span>Col. Insurgentes Mixcoac CP 03920</span>
                <span>Del. Benito Juárez, CDMX</span>
                <span><FontAwesomeIcon icon={faPhoneVolume} />  Conmutador</span>
                <span>55 5482 1600 | 55 5482 1700</span>
                <span>01 800 627 22 87</span>
            </section>
        </footer>
    )
}



/*<!------------------------------------------------->
<!--	end Footer (component)	-->
<!------------------------------------------------->*/







