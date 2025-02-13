/*<------------------------------------------------->
<!--	Citas(page)	-->
<!-------------------------------------------------->
* Description: This page displays the booking widget for the SimplyBookMe service.
It works with the useCampus hook to get the current campus and display the corresponding locations.
I also have a loader that shows while the iframe is loading.
The iframe is loaded in the SimplyBookMe hook, witch uses the BookingWidget component given by SimplyBookMe. It can accept a location prop to display the corresponding location.
This component handles the location state and passes it to the BookingWidget component., the location is updated by the buttons in the modalitySelector.
    
* Parameters:
    - none
* Dependencies:
    - styles: Citas.module.css
    - components: SimplyBookMe, Loader
    - hooks: useCampus
    - Context: CampusContext
    - FontAwesome: faMobileButton, faLocationDot
    - React: { useState, useEffect }

* Returns/results:
<!------------------------------------------------->*/

// -------------------imports----------------------->
//react
import { useState, useEffect } from 'react';
//Context
import useCampus from '@hooks/useCampus';
//components
import SimplyBookMe from '@components/SimplyBookMe/SimplyBookMe';
import Loader from './LoaderSimplyBookMe/LoaderSimplyBookMe';
//styles
import styles from './Citas.module.css';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileButton, faLocationDot } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'

export default function Citas() {

    // Get the current campus
    const { campus } = useCampus();


    /*<------------------------------------------------->
    <!--	Array of possible locations	-->
    <!------------------------------------------------->*/
    const campiLocations = {
        CDMX: [
            { name: 'En línea', location: '1', icon: faMobileButton },
            { name: 'Presencial Mixcoac', location: '2', icon: faLocationDot },
            { name: 'Presencial Ciudad Up', location: '3', icon: faLocationDot }
        ],
        GDL: [
            { name: 'Presencial', location: '4', icon: faLocationDot }
        ],
        AGS: [
            { name: 'En línea', location: '5', icon: faMobileButton },
            { name: 'Presencial', location: '6', icon: faLocationDot }
        ],
    }

    /*<!------------------------------------------------->
    <!--	end Array of possible locations	-->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!--	get the initial location per campus	-->
    <!------------------------------------------------->*/

    const initialLocation = campiLocations[campus]?.[0]?.location || '1'
    const [location, setLocation] = useState(initialLocation);


    useEffect(() => {
        setLocation(initialLocation)
    }, [campus])

    /*<!------------------------------------------------->
    <!--	end get the initial location per campus	-->
    <!------------------------------------------------->*/

    /*<------------------------------------------------->
   <!--	Loader	-->
   <!------------------------------------------------->*/
    const [isLoading, setIsLoading] = useState(true);

    // Reset loader when location changes
    useEffect(() => {
        setIsLoading(true);
    }, [location]);

    // Poll for the iframe within the BookingWidget container until it loads
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Get the container by its fixed id
            const widgetContainer = document.getElementById("sbw_406w10");
            if (widgetContainer) {
                const iframe = widgetContainer.querySelector("iframe");
                // Check that an iframe exists and that it shows content (non-zero height)
                if (iframe && iframe.offsetHeight > 0) {

                    // Delay hiding the loader by 2 seconds
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 3000);
                    clearInterval(intervalId);
                }
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [location]);
    /*<!------------------------------------------------->
    <!--	end Loader	-->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!--	rendering logic	-->
    <!------------------------------------------------->*/
    return (
        <section className={styles.citas}>
            <h1 className={styles.title}>Agenda de servicios 121</h1>
            <div className={styles.message}>
                <p>Para  SMART lo más importante eres tú 💟. Recuerda que si estás en <span className={styles.crisis}>crisis</span> o tienes una <span className={styles.crisis}>emergencia</span> puedes buscarnos en el campus y te recibiremos <span className={styles.sinCita}>sin cita</span>. </p>
            </div>

            <nav className={styles.modalitySelector}>
                {campiLocations[campus]?.map(({ name, location: loc, icon }) => (
                    <button
                        key={loc}
                        className={`${styles.locationButton} ${location === loc ? styles.active : ''}`}
                        onClick={() => setLocation(loc)}
                    >
                        <FontAwesomeIcon icon={icon} className={styles.icon} />
                        {name}
                    </button>
                ))}
            </nav>
            {/* Show loader while iframe is loading */}
            {isLoading && <Loader />}
            <SimplyBookMe
                location={location}
            />
        </section>

    )

    /*<!------------------------------------------------->
    <!--	end rendering logic	-->
    <!------------------------------------------------->*/

}



/*<!------------------------------------------------->
<!--	end Citas(page)	-->
<!------------------------------------------------->*/


