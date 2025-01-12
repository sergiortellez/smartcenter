/*<---------------------------------------------------------------------------->
<!--	History (Component)	-->
<!----------------------------------------------------------------------------->
* Description: Component that renders a card with a title, an icon and a button that when clicked, expands to show the history of the organization.
     
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
import styles from './History.module.css'
//components
import ExpandableCardWithButton from '@components/ExpandableCardWithButton/ExpandableCardWithButton'
import IconTextTitle from '@components/IconTextTitle/IconTextTitle'
//FontAwesome
import { faBooks } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'




export default function History({ className }) {

  //card content
  const cardContent = (
    <div className={styles.cardContent}>
      <header>
        <IconTextTitle
          icon={faBooks}
          title='Historia'
          flow='row'
          titleSize='1.2'
          iconSize='1.2'
        />
      </header>
      <div>
        <p>¿Te interesa enterarte cómo fue creado SMART?</p>
      </div>


    </div>

  )
  //expanded content
  const expandedContent = (
    <>
      <p>En la planeación estratégica 2016-2022 de Campus México se encarga a la Vicerrectora Académica y de Innovación Educativa Dra. Teresa Nicolas, crear y desarrollar un centro de alumnos con el fin de fortalecer la formación integral del alumno y dotarlo de más y mejores
        competencias (soft skills). <br />
        En el proceso de diseño del centro se visitaron diferentes centros de atención a alumnos en universidades británicas y norteamericanas de prestigio con el fin de identificar buenas prácticas. Con base en las visitas antes mencionadas y al estudio de documentos sobre el futuro
        de la educación y las prácticas de innovación se desarrolló un documento base.</p>
      <p>
        Tras un periodo de planeación -bajo la metodología Lean Startup- se presentó en el Consejo de Dirección del Campus el plan para la creación de un centro que ofreciera experiencias académicas extracurriculares para los alumnos. El plan para el nuevo centro incluía y potenciaba
        algunas de las áreas existentes así como el desarrollo de nuevas áreas y servicios a alumnos.
      </p>

      <p>El SMART Center® es un acrónimo de las áreas que lo integran y que ofrecen distintas experiencias académicas extracurriculares:</p>

      <p><b>S</b> Success <br />
        <b>M</b> Meeting Point<br />
        <b>A</b> Advisory<br />
        <b>RT</b> Reload and Talent
      </p>

      <p>
        El lema del centro <b>-Empower your ideas-</b> refleja el fin del mismo: empoderar al alumno y la alumna para que ellos sean los protagonistas de su experiencia educativa.
        El lanzamiento oficial del SMART Center® se llevó a cabo durante la conmemoración de los 50 años de la universidad, el 26 de octubre del 2017. Desde entonces se ha convertido en un agente clave del ecosistema de Innovación Educativa de la Universidad.
      </p>
    </>
  )

  return (
    <ExpandableCardWithButton
      cardContent={cardContent}
      buttonText='Consulta'
      expandedContent={expandedContent}
      areaName='History'
      className={className}
      buttonStyles={styles.buttonStyles}
    />


  );
}

/*<!--------------------------------------------------------------------------->
<!--	end History(Component)	-->
<!--------------------------------------------------------------------------->*/

