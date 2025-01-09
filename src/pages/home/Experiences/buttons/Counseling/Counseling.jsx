/*<---------------------------------------------------------------------------->
<!--    Counseling (Component)    -->
<!----------------------------------------------------------------------------->
* Description:
    Displays counseling services available at the user's selected campus.
* Parameters:
    @param {string} className - for custom styling or layout.
* Dependencies:
    - useCampus (context hook to retrieve current campus)
    - ExpandableCardParallax (layout component)
    - CounselingData (data array or JSON of counseling services)
* Returns/results:
    Renders an expandable card with a subgrid of service options.
<!------------------------------------------------->*/

//---------------------imports----------------------
//React Dom
import { Link } from 'react-router-dom'
//styles
import styles from './Counseling.module.css';
//Context
import useCampus from '@hooks/useCampus';
//Components
import ExpandableCardParallax from '@components/ExpandableCardParallax/ExpandableCardParallax';
//Data
import { CounselingData } from './CounselingData';


/*<------------------------------------------------->
<!--	Export	-->
<!------------------------------------------------->*/
export default function Counseling({ className }) {


  // Retrieve the current campus from context
  const { campus } = useCampus();

  // Filter the services that match the selected campus
  const filteredServices = CounselingData.filter(service =>
    service.campi.includes(campus)
  );


  // Build the expanded content if there are any matching services
  let expandedContent = null;
  if (filteredServices.length > 0) {
    expandedContent = (
      <>
        <div className={styles.title}>¿Qué pueden hacer nuestros expertos por ti?</div>

        {/* Subgrid containing the filtered counseling services */}
        <div className={styles.subGrid}>
          {filteredServices.map(service => (
            <div key={service.id} className={styles.serviceCard}>

              <div className={styles.serviceHeader}>
                <img src={service.icon} alt={service.title} className={styles.icon} />
                <div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <i className={styles.serviceSubtitle}>{service.subtitle}</i>
                </div>

              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.citasButton} >
          <Link to="/citas">Pide una cita</Link>
        </div>
      </>
    );
  }

  // Render the expandable card
  return (
    <>
      <ExpandableCardParallax
        buttonContent="Atención uno a uno"
        expandedContent={expandedContent}
        areaName="Counseling"
        className={className}
        images={[
          {
            src: '/images/parallax/parallax_atencion_personalizada.webp',
            speed: -0.6,
            offset: 40,
          },
        ]}
      />
    </>
  );
}
/*<!------------------------------------------------->
<!--	end Export	-->
<!------------------------------------------------->*/



/*<!--------------------------------------------------------------------------->
<!--    end Counseling (Component)    -->
<!--------------------------------------------------------------------------->
*/
