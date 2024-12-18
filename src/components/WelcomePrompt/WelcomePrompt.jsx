/*<------------------------------------------------->
<!--	Welcome Prompt	-->
<!-------------------------------------------------->
* Description: Component that prompts the user to select a campus, it will be shown when the user is not logged or it's the first time visiting the site.
    
* Parameters:
    - none  
* Dependencies:
    - hooks/useCampus
    - styles/WelcomePrompt.module.css
* Returns/results: the screen itself with the campus selection buttons that will alter the context state (useCampus).
<!------------------------------------------------->*/

/*<--	*** imports ***	-->*/
//hooks
import useCampus from '../../hooks/useCampus'
//styles
import styles from './WelcomePrompt.module.css'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'
//images
import upHorizontal from '../../assets/intercampi/logos/up_logo_horizontal.webp'
/*<--	*** end imports ***	-->*/


const WelcomePrompt = () => {
    const { dispatch } = useCampus()

    const selectCampus = (campus) => {
        dispatch({ type: 'SET_CAMPUS', payload: campus })
    }

    return (
        <section className={styles.welcomePrompt}>
            <div className={styles.title}>
                <h1>Llegaste a <span>SMART</span></h1>
                <img src={upHorizontal} className={styles.logoUp} alt="Universidad Panamericana" />
            </div>
            <p>¿De qué campus nos visitas?</p>
            <div className={styles.campusPrompt}>
                <button onClick={() => selectCampus('AGS')}><FontAwesomeIcon icon={faLocationDot} />AGS</button>
                <button onClick={() => selectCampus('CDMX')}> <FontAwesomeIcon icon={faLocationDot} />CDMX</button>
                <button onClick={() => selectCampus('GDL')}><FontAwesomeIcon icon={faLocationDot} />GDL</button>
            </div>
        </section>
    )
}

export default WelcomePrompt
/*<!------------------------------------------------->
<!--	end Welcome Prompt	-->
<!------------------------------------------------->*/





