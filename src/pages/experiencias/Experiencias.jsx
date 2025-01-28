/*<------------------------------------------------->
<!--	Experiencias(page)	-->
<!-------------------------------------------------->
* Description:

* Parameters:
    -
* Dependencies:
* Returns/results:
<!------------------------------------------------->*/

//-----------------------imports---------------------

//components
import LinkedExperienceCard from './components/LinkedExperienceCard/LinkedExperienceCard'

//context
import useCampus from '@hooks/useCampus'

//data
import { LinkedExperiencesData } from './data/LinkedExperiencesData'

//styles
import styles from './Experiencias.module.css'




export default function Experiencias() {

    /*<------------------------------------------------->
    <!--	Context filtering	-->
    <!------------------------------------------------->*/
    // Retrieve the current campus from context
    const { campus } = useCampus();

    // Filter the team members that match the selected campus
    const filteredExperiences = LinkedExperiencesData.filter(experience => experience.campi.includes(campus));

    /*<!------------------------------------------------->
    <!--	end Context filtering	-->
    <!------------------------------------------------->*/

    /*<------------------------------------------------->
    <!--	render logic	-->
    <!------------------------------------------------->*/
    return (
        <section className={styles.experiences} >

            <h1 className={styles.title} >Nuestras experiencias</h1>

            <div className={styles.grid} >
                {filteredExperiences.map(experience => (
                    <LinkedExperienceCard
                        key={experience.cardId}
                        cardId={experience.cardId}
                        cardLogo={experience.cardLogo}
                        cardTitle={experience.cardTitle}
                        details={experience.details}
                        whatIsIt={experience.whatIsIt}
                        whatToExpect={experience.whatToExpect}
                        certificateBool={experience.certificateBool}
                        certificateUrl={experience.certificateUrl}
                        experienceUrl={experience.experienceUrl}
                    />
                ))}

            </div>
        </section>
    )
    /*<!------------------------------------------------->
    <!--	end render logic	-->
    <!------------------------------------------------->*/

}


/*<!------------------------------------------------->
<!--	end Experiencias(page)	-->
<!------------------------------------------------->*/