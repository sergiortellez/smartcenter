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

//cards
import WelcomeToSmart from './buttons/WelcomeToSmart/WelcomeToSmart';
import DigitalExperiences from './buttons/DigitalExperiences/DigitalExperiences';
import InPerson from './buttons/InPerson/InPerson';
import WhatIsCounseling from './buttons/WhatIsCounseling/WhatIsCounseling';




export default function Experiences() {



    return (
        <section id="experiencias">
            <h1 className={styles.title} >Nuestras experiencias</h1>

            <div className={styles.experiencesGrid} >
                <WelcomeToSmart />

                <DigitalExperiences className={styles.DigitalExperiences} />

                <InPerson className={styles.InPerson} />

                <WhatIsCounseling className={styles.WhatIsCounseling} />


            </div>
        </section>
    )
}

/*<!--------------------------------------------------------------------------->
<!--	end Experiences(Component)	-->
<!--------------------------------------------------------------------------->*/