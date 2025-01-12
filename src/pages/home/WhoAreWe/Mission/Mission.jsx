/*<---------------------------------------------------------------------------->
<!--	Mission (Component)	-->
<!----------------------------------------------------------------------------->
* Description: Component that renders a card with a title, an icon and a button that when clicked, expands to show the mission and vision of the organization.
     
* Parameters:
    - className: string, optional, used to add styling from the parent component.
* Dependencies:
    - ExpandableCardWithButton: custom component that renders a card with a button that when clicked, expands to show more content.
    - IconTextTitle: custom component that renders a title with an icon.
    - FontAwesome: library that provides icons.
    - styles: object, contains the classes names.
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './Mission.module.css'
//components
import ExpandableCardWithButton from '@components/ExpandableCardWithButton/ExpandableCardWithButton'
import IconTextTitle from '@components/IconTextTitle/IconTextTitle'
//FontAwesome
import { faFlagCheckered } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'




export default function Mission({ className }) {

  //card content
  const cardContent = (
    <div className={styles.cardContent}>
      <header>
        <IconTextTitle
          icon={faFlagCheckered}
          title='Misión y Visión'
          flow='row'
          titleSize='1.2'
          iconSize='1.2'
        />
      </header>
      <div>
        <p>¿Por qué existe SMART y a dónde quiere llegar?</p>
      </div>


    </div>

  )
  //expanded content
  const expandedContent = (
    <>
      <h3>Misión SMART</h3>
      <p>Complementar el desarrollo académico de los estudiantes y fortalecer las competencias que necesitarán para ser profesionistas que cumplan las demandas sociales, impulsando líderes que contribuyan a la mejora de México y el mundo.</p>

      <h3>Visión SMART</h3>
      <p>Ser un referente nacional en el desarrollo integral del alumnado para una vida universitaria plena.</p>
    </>
  )

  return (
    <ExpandableCardWithButton
      cardContent={cardContent}
      buttonText='Consulta'
      expandedContent={expandedContent}
      areaName='Mission'
      className={className}
      buttonStyles={styles.buttonStyles}
    />


  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Mission(Component)	-->
<!--------------------------------------------------------------------------->*/

