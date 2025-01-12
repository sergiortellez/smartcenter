/*<---------------------------------------------------------------------------->
<!--	Ciie (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './Ciie.module.css'
//images
import ciie from '@assets/intercampi/logos/cie_ecosistema.webp'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'



export default function Ciie() {
  return (
    <article className={styles.ciie} >

      <p>SMART forma parte del CIIE:<br /> <a href="https://ciie.up.edu.mx" target='blank' rel='noreferrer'>Centro Institucional de Innovación Educativa<FontAwesomeIcon icon={faLink} /> </a>.</p>

      <img src={ciie} alt="CIIE" />
    </article>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Ciie(Component)	-->
<!--------------------------------------------------------------------------->*/

