/*<---------------------------------------------------------------------------->
<!--	Values (Component)	-->
<!----------------------------------------------------------------------------->
* Description: Component that renders a card with a title, an icon and a button that when clicked, expands to show the values of the organization.
     
* Parameters:
    - className: string, optional, used to add styling from the parent component.
* Dependencies:
    - ExpandableCardWithButton: custom component that renders a card with a button that when clicked, expands to show more content.
    - IconTextTitle: custom component that renders a title with an icon.
    - FontAwesome: library that provides icons.
    - styles: object, contains the classes names.
* Returns/results: Renders the card itself
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './Values.module.css'
//components
import ExpandableCardWithButton from '@components/ExpandableCardWithButton/ExpandableCardWithButton'
import IconTextTitle from '@components/IconTextTitle/IconTextTitle'
//FontAwesome
import { faScaleBalanced } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'




export default function Values({ className }) {

  //card content
  const cardContent = (
    <div className={styles.cardContent}>
      <header>
        <IconTextTitle
          icon={faScaleBalanced}
          title='Valores'
          flow='row'
          titleSize='1.2'
          iconSize='1.2'
        />
      </header>
      <div>
        <p>En cada experiencia de SMART se funda en estos principios.</p>
      </div>


    </div>

  )
  //expanded content
  const expandedContent = (
    <>
      <ul className={styles.valuesList} >
        <li>Liderazgo</li>
        <li>Innovación</li>
        <li>Flexibilidad</li>
        <li>Sinergia</li>
        <li>Integridad</li>
        <li>Trascendencia</li>
      </ul>
    </>
  )

  return (
    <ExpandableCardWithButton
      cardContent={cardContent}
      buttonText='Consulta'
      expandedContent={expandedContent}
      areaName='Values'
      className={className}
      buttonStyles={styles.buttonStyles}
    />


  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Values(Component)	-->
<!--------------------------------------------------------------------------->*/

