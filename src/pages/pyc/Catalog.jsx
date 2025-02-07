/*<------------------------------------------------->
<!--	Catalog(page)	-->
<!-------------------------------------------------->
* Description: This page displays the programs and contests available for high performance.
It's a grid containing cards with the information of each program/contest. This component renders the cards with the information of each program/contest using the ParAndCarCard component and the ParAndCarData data.

* Parameters:
    - none
* Dependencies:
    - ParAndCarCard component
    - ParAndCarData data
    - useCampus context
    - styles modules.
* Returns/results: the page with the grid of cards with the information of each program/contest and a title. 
<!------------------------------------------------->*/

//-----------------------imports---------------------

//components
import ParAndCarCard from './components/ParAndCarCard/ParAndCarCard'

//context
import useCampus from '@hooks/useCampus'

//data
import { ParAndCarData } from './data/ParAndCarData'

//styles
import styles from './Catalog.module.css'






export default function Catalog() {

    /*<------------------------------------------------->
    <!--	Context filtering	-->
    <!------------------------------------------------->*/
    // Retrieve the current campus from context
    const { campus } = useCampus();

    // Filter the team members that match the selected campus
    const filteredVideoExperiences = ParAndCarData.filter(experience => experience.campi.includes(campus));

    /*<!------------------------------------------------->
    <!--	end Context filtering	-->
    <!------------------------------------------------->*/

    /*<------------------------------------------------->
    <!--	render logic	-->
    <!------------------------------------------------->*/
    return (
        <section className={styles.parAndCar} >

            <h1 className={styles.title} >Programas y concursos de alto rendimiento</h1>

            <div className={styles.grid} >

                {filteredVideoExperiences.map(experience => (
                    <ParAndCarCard
                        key={experience.cardId}
                        cardId={experience.cardId}
                        cardLogo={experience.cardLogo}
                        cardTitle={experience.cardTitle}
                        details={experience.details}
                        whatIsIt={experience.whatIsIt}
                        whatToExpect={experience.whatToExpect}
                        hasInstagramBool={experience.hasInstagramBool}
                        instagramUser={experience.instagramUser}
                        contactEmail={experience.contactEmail}
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
<!--	end Catalog(page)	-->
<!------------------------------------------------->*/