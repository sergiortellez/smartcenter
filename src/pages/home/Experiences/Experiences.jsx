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

//context
import useCampus from '@hooks/useCampus';

//cards
import WelcomeToSmart from './buttons/WelcomeToSmart/WelcomeToSmart'
import DigitalExperiences from './buttons/DigitalExperiences/DigitalExperiences'
import InPerson from './buttons/InPerson/InPerson'
import WhatIsCounseling from './buttons/WhatIsCounseling/WhatIsCounseling'
import Counseling from './buttons/Counseling/Counseling'
import Dpi from './buttons/Dpi/Dpi'
import ParAndCar from './buttons/ParAndCar/ParAndCar'
import WhatIsAU from './buttons/WhatIsAU/WhatIsAU';
import PrepareAU from './buttons/PrepareAU/PrepareAU';
import AUTopics from './buttons/AUTopics/AUTopics';
import AUFaq from './buttons/AUFaq/AUFaq';





export default function Experiences() {

    const { campus } = useCampus();

    return (
        <section id="experiencias" className={styles.experiences} >
            <h1 className={styles.title} >Nuestras experiencias</h1>

            <div className={`${styles.experiencesGrid} ${styles[`template${campus}`] || ''}`} >

                {['AGS', 'CDMX', 'GDL'].includes(campus) && <WelcomeToSmart />}
                {['AGS', 'CDMX', 'GDL'].includes(campus) && <DigitalExperiences className={styles.DigitalExperiences} />}
                {['CDMX'].includes(campus) && <InPerson className={styles.InPerson} />}
                {['AGS', 'CDMX', 'GDL'].includes(campus) && <WhatIsCounseling className={styles.WhatIsCounseling} />}
                {['AGS', 'CDMX', 'GDL'].includes(campus) && <Counseling className={styles.Counseling} />}
                {['AGS', 'CDMX', 'GDL'].includes(campus) && <Dpi className={styles.Dpi} />}
                {['AGS', 'CDMX'].includes(campus) && <ParAndCar className={styles.ParAndCar} />}
                {['AGS', 'CDMX', 'GDL'].includes(campus) && <WhatIsAU className={styles.WhatIsAU} />}
                {['AGS', 'CDMX', 'GDL'].includes(campus) && <PrepareAU className={styles.PrepareAU} />}
                {['AGS', 'CDMX', 'GDL'].includes(campus) && <AUTopics className={styles.AUTopics} />}
                {['AGS', 'CDMX', 'GDL'].includes(campus) && <AUFaq className={styles.AUFaq} />}

            </div>
        </section >
    )
}

/*<!--------------------------------------------------------------------------->
<!--	end Experiences(Component)	-->
<!--------------------------------------------------------------------------->*/