/*<---------------------------------------------------------------------------->
<!--    MapCardData (Exported Campus Config)    -->
<!----------------------------------------------------------------------------->
* Description:
    Exports an object with campus-specific data for the MapCard component.
* Parameters:
    - None
* Dependencies:
    - campusPictureCDMX from assets
    - FontAwesome icons
    - styles from MapCard.module.css
* Returns/results:
    - A configuration object (campusConfig) with campus-related info
<!------------------------------------------------->*/

//---------------------imports----------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faVrCardboard } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'

// campus images
import campusPictureCDMX from '@assets/intercampi/home/campus_cdmx.webp'
// import campusPictureGDL from '@assets/intercampi/home/campus_gdl.webp'
// import campusPictureAGS from '@assets/intercampi/home/campus_ags.webp'

//campus map
import campusMapCDMX from '@assets/cdmx/map_cdmx.webp'
import campusMapGDL from '@assets/gdl/map_gdl.webp'
import campusMapAGS from '@assets/ags/map_ags.webp'

// styles (for address blocks, newTag, etc.)
import styles from './MapCard.module.css'

//-----------------------------------
// campusConfig object
//-----------------------------------
const campusConfig = {
    CDMX: {
        campusImage: campusPictureCDMX,
        mapImage: campusMapCDMX,
        mapURL: 'https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=UP+Mixcoac,CDMX&travelmode=driving',
        address: (
            <>
                <div className={styles.adress} >
                    <span>
                        <FontAwesomeIcon icon={faBuildingColumns} /> Campus CDMX
                    </span>
                    <span>Busca la puerta de Augusto Rodin No. 498</span>
                    <span>Casco antiguo.</span>
                </div>
                <div className={styles.adress} >
                    <span>
                        <FontAwesomeIcon icon={faBuildingColumns} /> Campus Ciudad UP
                    </span>
                    <span>Busca la oficina de vida universitaria.</span>
                    <span>Todos los martes en la mañana.</span>
                </div>
                <div className={styles.adress}>
                    <div>
                        <span>
                            <FontAwesomeIcon icon={faVrCardboard} /> Campus Virtual
                            <span className={styles.newTag}>¡nuevo!</span>
                        </span>
                    </div>
                    <span>Encuéntranos en el metaverso y accede a nuestros servicios de forma virtual.</span>
                    <a
                        className={styles.button}
                        href="https://spotvirtual.com/invite/smart-center-eb42618dd1212b0a-enmMJMj8nb/sign-up"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Visítanos
                    </a>
                </div>
            </>
        ),
    },

    GDL: {
        // image: campusPictureGDL, // if available
        campusImage: null,
        mapImage: campusMapGDL,
        mapURL: 'https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=UP+Guadalajara,Guadalajara&travelmode=driving',
        address: (
            <>
                <div className={styles.adress} >
                    <span>
                        <FontAwesomeIcon icon={faBuildingColumns} /> Campus GDL
                    </span>
                    <span>Busca la puerta de Augusto Rodin No. 498</span>
                    <span>Casco antiguo.</span>
                </div>
            </>
        ),
    },

    AGS: {
        // image: campusPictureAGS, // if available
        campusImage: null,
        mapImage: campusMapAGS,
        mapURL: 'https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=UP+Aguascalientes,Aguascalientes&travelmode=driving',
        address: (
            <>
                <div className={styles.adress} >
                    <span>
                        <FontAwesomeIcon icon={faBuildingColumns} /> Campus AGS
                    </span>
                    <span>Busca la puerta de Augusto Rodin No. 498</span>
                    <span>Casco antiguo.</span>
                </div>
            </>
        ),
    },
};

export default campusConfig;

/*<!--------------------------------------------------------------------------->
<!--    end MapCardData (Exported Campus Config)    -->
<!--------------------------------------------------------------------------->*/
