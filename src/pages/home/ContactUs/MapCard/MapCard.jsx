/*<---------------------------------------------------------------------------->
<!--    MapCard (Component)    -->
<!----------------------------------------------------------------------------->
* Description:
    Renders a card showing a campus image, a Google Maps iframe,
    and address info. Data is imported from MapCardData.jsx 
* Parameters:
    - None
* Dependencies:
    - useCampus (context)
    - campusConfig (from MapCardData)
    - FontAwesome icons
    - styles from MapCard.module.css
    
* Returns/results:
    - The MapCard UI
<!------------------------------------------------->*/

//---------------------imports----------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'

// local context
import useCampus from '@hooks/useCampus'

// styles
import styles from './MapCard.module.css'

// campus data config
import campusConfig from './MapCardData'

//---------------------component----------------------
export default function MapCard() {

  // Retrieve campus from context
  const { campus } = useCampus();

  // Deconstruct from our campusConfig
  const {
    campusImage = null,
    mapImage = null,
    mapURL = null,
    address = null,
  } = campusConfig[campus] || {};

  return (
    <article className={styles.map}>
      <h5 className={styles.mapTitle}>
        <FontAwesomeIcon icon={faLocationDot} /> ¿Dónde nos encuentras?
      </h5>

      <div>
        {/* If a campus image is defined, display it */}
        {campusImage && (
          <img
            src={campusImage}
            alt={`Universidad Panamericana - Campus ${campus}`}
          />
        )}

        {/*  Map  */}
        <div className={styles.googleMaps}>
          {/* If a map image is defined, display it */}
          {mapImage && (
            <>
              <img
                src={mapImage}
                alt={`Mapa Universidad Panamericana - Campus ${campus}`}
              />
              <a href={mapURL} target="_blank" rel="noopener noreferrer" className={styles.overlay} >¿Cómo llegar?</a>
            </>

          )}
        </div>
      </div>


      {/* Campus address details */}
      <div>
        {address}
      </div>

    </article>
  );
}

/*<!--------------------------------------------------------------------------->
<!--    end MapCard(Component)    -->
<!--------------------------------------------------------------------------->*/
