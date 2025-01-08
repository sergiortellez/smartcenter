/*<---------------------------------------------------------------------------->
<!--	Experiences(Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//....................imports........................
//styles
import styles from './Experiences.module.css';
//Components
import ExpandableCard from '../../../components/ExpandableCard/ExpandableCard';
import ExpandableCardParallax from '../../../components/ExpandableCardParallax/ExpandableCardParallax';
import LinkCard from '../../../components/LinkCard/LinkCard';
import IconTextTitle from '../../../components/IconTextTitle/IconTextTitle';
import LinkCardParallax from '../../../components/LinkCardParallax/LinkCardParallax';
import InPerson from './buttons/InPerson/InPerson';
//FontAwesome
import { faCoffee } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid';
//cards
import WelcomeToSmart from './buttons/WelcomeToSmart/WelcomeToSmart';
import DigitalExperiences from './buttons/DigitalExperiences/DigitalExperiences';



export default function Experiences() {

    const sampleIcon = (<IconTextTitle icon={faCoffee} title='Coffee 4 u' iconSize='3' titleSize='0.6' />)
    const secondIcon = (<IconTextTitle icon={faCoffee} title='Coffee 4 u' flow='row' />)

    return (
        <section id="experiencias">
            <h1 className={styles.title} >Nuestras experiencias</h1>

            <div className={styles.experiencesGrid} >
                <WelcomeToSmart />

                <DigitalExperiences className={styles.DigitalExperiences} />

                <InPerson className={styles.InPerson} />


            </div>
        </section>
    )
}

/*<!--------------------------------------------------------------------------->
<!--	end Experiences(Component)	-->
<!--------------------------------------------------------------------------->*/