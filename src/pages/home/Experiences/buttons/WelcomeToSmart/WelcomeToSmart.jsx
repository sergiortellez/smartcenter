/*<---------------------------------------------------------------------------->
<!--	WelcomeToSmart (Component)	-->
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
import styles from './WelcomeToSmart.module.css'
//data
import campiTextData from '../../../../../data/campiTextData'
//context
import useCampus from '../../../../../hooks/useCampus'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairsSimple, faGraduationCap } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'


export default function WelcomeToSmart() {

  //Get the current campus from the context
  const { campus } = useCampus();
  //Get the data of the current campus from the data file
  const currentCampus = campiTextData[campus] ?? campiTextData['CDMX'];

  return (
    <article className={styles.welcomeCard} style={{ gridArea: "WelcomeToSmart" }} >
      <p>
        <FontAwesomeIcon icon={faCrosshairsSimple} />
        <span style={{ marginLeft: '0.3rem' }} >Llegaste a </span> <b style={{ color: 'var(--primary)' }}>SMART</b>
      </p>
      <hr />
      {currentCampus.welcomeMessage.map((line, index) => <p key={index}>{line}</p>)}
      <FontAwesomeIcon icon={faGraduationCap} />
    </article >
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end WelcomeToSmart(Component)	-->
<!--------------------------------------------------------------------------->*/

