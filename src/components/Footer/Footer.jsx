/*<------------------------------------------------->
<!--	Footer (component)	-->
<!-------------------------------------------------->
* Description: Footer component for the application, is one of the persistent components. It renders the footer of the page with the logo of the university, the rights reserved, the privacy notice, the smart center link, the social media links, the campus name, the campus address and the campus phone number.
It's sensible to the campus context, so it will render the information of the campus that is currently selected. And it works with a data file that contains the information of all the campuses. The data file is imported and stored in "footerData" and the information of the current campus is extracted from it.
    
* Parameters:
    - none
* Dependencies:
    - context: useCampus
    - data: footerData
    - styles: Footer.module.css
    - images: upLogo
    - fontawesome: FontAwesomeIcon, faBuilding, faPhoneVolume, faYoutube, faFacebook, faInstagram|
* Returns/results: Renders the footer component itself.
<!------------------------------------------------->*/

/*<--	*** imports ***	-->*/
//context
import useCampus from '../../hooks/useCampus';
//data
import campiTextData from '../../data/campiTextData.json';
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
    //Get the current campus from the context
    const { campus } = useCampus();
    //Get the data of the current campus from the data file
    const currentCampus = campiTextData[campus] ?? campiTextData['CDMX'];



    return (
        <footer data-type="persistent" >
            <img src={upLogo} alt="Universidad Panamericana" className={styles.footer_logo} />
            <section className={styles.footer_derechos}>
                <span>Derechos Reservados </span>
                <span>© CENTROS CULTURALES DE MÉXICO A.C</span>
                <a href="https://www.up.edu.mx/legales-politicas/" target="_blank" rel="noopener noreferrer">Aviso de privacidad</a>
                <a href="https://smartcenter.up.edu.mx">SMART Center</a>
                <div className={styles.footer_redes}>
                    <a href="https://www.youtube.com/channel/UCMAOisJbM69nBTLbCK_b4LQ?view_as=subscriber" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://www.facebook.com/SuccessCenterUP/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/smartcenterup/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </section>
            <section className={styles.footer_contacto}>
                <b className={styles.title}> <FontAwesomeIcon icon={faBuilding} /> {currentCampus.name} </b>
                <div>
                    {/* Get all the adress lines and render them in the page into span tags. */}
                    {currentCampus.addressLines.map((line, index) => (<span key={index}>{line}</span>))}
                </div>
                <div>
                    <span className={styles.title}><FontAwesomeIcon icon={faPhoneVolume} />  Conmutador</span>
                    <span>{currentCampus.phone[0]} {currentCampus.phone[1] ? '|' : ''} {currentCampus.phone[1]}</span>
                    <span>{currentCampus.phone[2]}</span>
                </div>

            </section>
        </footer>
    )
}



/*<!------------------------------------------------->
<!--	end Footer (component)	-->
<!------------------------------------------------->*/







