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
import VideoExperienceCard from './components/VideoExperienceCard/VideoExperienceCard'

//context
import useCampus from '@hooks/useCampus'

//data
import { LinkedExperiencesData } from './data/LinkedExperiencesData'
import { VideoExperiencesData } from './data/VideoExperiencesData'

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
    const filteredVideoExperiences = VideoExperiencesData.filter(experience => experience.campi.includes(campus));

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
                        instructions={experience.instructions}
                        certificateBool={experience.certificateBool}
                        certificateUrl={experience.certificateUrl}
                        experienceUrl={experience.experienceUrl}
                    />
                ))}
                {filteredVideoExperiences.map(experience => (
                    <VideoExperienceCard
                        key={experience.cardId}
                        cardId={experience.cardId}
                        cardLogo={experience.cardLogo}
                        cardTitle={experience.cardTitle}
                        details={experience.details}
                        whatIsIt={experience.whatIsIt}
                        whatToExpect={experience.whatToExpect}
                        instructions={experience.instructions}
                        appointmentBool={experience.appointmentBool}
                        certificateBool={experience.certificateBool}
                        certificateUrl={experience.certificateUrl}
                        playList={experience.playList}
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