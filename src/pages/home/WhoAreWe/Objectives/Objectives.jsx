/*<---------------------------------------------------------------------------->
<!--	Objectives (Component)	-->
<!----------------------------------------------------------------------------->
* Description: Component that renders a card with a title, an icon and a button that when clicked, expands to show the objectives of the organization.
     
* Parameters:
    - className: string, optional, used to add styling from the parent component.
* Dependencies:
    - ExpandableCardWithButton: custom component that renders a card with a button that when clicked, expands to show more content.
    - IconTextTitle: custom component that renders a title with an icon.
    - FontAwesome: library that provides icons.
    - styles: object, contains the classes names.

* Returns/results: Renders the card itself.
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './Objectives.module.css'
//components
import ExpandableCardWithButton from '@components/ExpandableCardWithButton/ExpandableCardWithButton'
import IconTextTitle from '@components/IconTextTitle/IconTextTitle'
//FontAwesome
import { faBullseyeArrow } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'




export default function Objectives({ className }) {

  //card content
  const cardContent = (
    <div className={styles.cardContent}>
      <header>
        <IconTextTitle
          icon={faBullseyeArrow}
          title='Objetivos'
          flow='row'
          titleSize='1.2'
          iconSize='1.2'
        />
      </header>
      <div>
        <p>¿Para qué fue creado SMART?</p>
      </div>


    </div>

  )
  //expanded content
  const expandedContent = (
    <ul className={styles.objectivesList}>
      <li>Brindar un servicio de excelencia para el mejoramiento constante de las competencias académicas, personales y profesionales de los estudiantes de la Universidad Panamericana.</li>
      <li>Potenciar el talento del alumnado durante su experiencia universitaria, brindando formación, apoyo y orientación en su labor educativa.</li>

      <li>Potenciar la atención personalizada, a través de la asesoría universitaria, el coaching, mentoring u otro recurso de ayuda individual, tanto para los estudiantes como para los profesores.</li>
      <li> Promover y apoyar actividades e iniciativas estudiantiles académicas que contribuyan a la formación integral de los alumnos de la UP.</li>
    </ul>
  )

  return (
    <ExpandableCardWithButton
      cardContent={cardContent}
      buttonText='Consulta'
      expandedContent={expandedContent}
      areaName='Objectives'
      className={className}
      buttonStyles={styles.buttonStyles}
    />


  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Objectives(Component)	-->
<!--------------------------------------------------------------------------->*/

