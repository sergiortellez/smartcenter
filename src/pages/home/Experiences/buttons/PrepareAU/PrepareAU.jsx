/*<---------------------------------------------------------------------------->
<!--	PrepareAU (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
This component is a button that when clicked expands to show a list of steps to prepare for an advisory session.
     
* Parameters:
    - className (string): CSS class name to be added from the parent.
* Dependencies:
    - ExpandableCard
    - IconTextTitle
    - PrepareAUData (dataFile)
    - FontAwesomeIcon
    - faShoePrints
    - styles
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//components
import ExpandableCard from '@components/ExpandableCard/ExpandableCard'
import IconTextTitle from '@components/IconTextTitle/IconTextTitle'
//styles
import styles from './PrepareAU.module.css'
//Data
import { PrepareAUData } from './PrepareAUData'
//Font Awesome
import { faShoePrints } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function PrepareAU({ className }) {
  /*<------------------------------------------------->
  <!--	button content	-->
  <!------------------------------------------------->*/

  // Title and icon
  const buttonContent = (
    <div>
      <IconTextTitle
        icon={faShoePrints}
        title='Prepara tu asesoría'
        titleSize='1.2'
        iconSize='2'
      />
    </div>

  )
  /*<!------------------------------------------------->
  <!--	end button content	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	expanded Content	-->
  <!------------------------------------------------->*/
  const expandedContent = (
    <>
      <h3>Toma en cuenta estos sencillos pasos:</h3>
      <div className={styles.steps}>
        {PrepareAUData.map((item) => (
          <div key={item.id} className={styles.advisoryPill}>
            <div className={styles.pillNum}> <FontAwesomeIcon icon={item.number} /> </div>
            <div className={styles.pillFirst}> <FontAwesomeIcon icon={item.icon} /> <b>{item.title}</b></div>
            <hr />
            <div className={styles.pillLast}> {item.description} </div>
          </div>
        ))}
      </div>
    </>

  )
  /*<!------------------------------------------------->
  <!--	end expanded Content	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	return	-->
  <!------------------------------------------------->*/
  return (
    <ExpandableCard
      buttonContent={buttonContent}
      expandedContent={expandedContent}
      areaName='PrepareAU'
      className={className}
    />
  );
  /*<!------------------------------------------------->
  <!--	end return	-->
  <!------------------------------------------------->*/

}

/*<!--------------------------------------------------------------------------->
<!--	end PrepareAU(Component)	-->
<!--------------------------------------------------------------------------->*/

