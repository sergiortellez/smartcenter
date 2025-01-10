/*<---------------------------------------------------------------------------->
<!--	AUTopics (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
This component is a button that when clicked expands to show a list of topics a student can bring for an advisory session.
     
* Parameters:
    - className (string): CSS class name to be added from the parent.
* Dependencies:
    - ExpandableCard
    - IconTextTitle
    - AUTopicsData (dataFile)
    - FontAwesomeIcon
    - styles
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//components
import ExpandableCard from '@components/ExpandableCard/ExpandableCard'
import IconTextTitle from '@components/IconTextTitle/IconTextTitle'
//styles
import styles from './AUTopics.module.css'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faImagePolaroidUser } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faMedal } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faTriangleExclamation } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faSignsPost } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faMoneyCheckDollarPen } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faGavel } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';
import { faScaleBalanced } from '@awesome.me/kit-c09e05c963/icons/duotone/solid';



export default function AUTopics({ className }) {
  /*<------------------------------------------------->
  <!--	button content	-->
  <!------------------------------------------------->*/

  // Title and icon
  const buttonContent = (
    <div>
      <IconTextTitle
        icon={faComments}
        title='Temas en la AU'
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
      <div className={styles.title} >¿No sabes de qué hablar con tu asesor? Inspírate con esta guía...</div>

      <div className={styles.topics}>
        <div className={styles.duringCareer}>
          <h4>Durante la carrera</h4>
          <hr />
          <ul>
            <li><FontAwesomeIcon icon={faImagePolaroidUser} /> <b>Autoconocimiento</b>.</li>
            <li><FontAwesomeIcon icon={faMedal} />  Definición de <b>metas</b> y desarrollo de <b>proyecto de vida</b>.</li>
            <li><FontAwesomeIcon icon={faTriangleExclamation} />  <b>Problemas</b> y situaciones personales.</li>
            <li><FontAwesomeIcon icon={faSignsPost} />  Información sobre: <b>Servicios</b> que brinda la universidad, actividades <b>extracurriculares</b>, <b>talleres</b> que puedan ser de tu interés.</li>
            <li><FontAwesomeIcon icon={faMoneyCheckDollarPen} />
              <b>Financiamiento</b> y <b>becas</b> que ofrece la Universidad.
            </li>
            <li><FontAwesomeIcon icon={faGavel} />  Normativa de la Universidad y tu Escuela o Facultad.</li>
            <li><FontAwesomeIcon icon={faScaleBalanced} />  <b>Equilibrio</b> vida trabajo.</li>
          </ul>
        </div>
        <div>
          <div className={styles.firstSemesters}>
            <h4>Primeros semestres</h4>
            <hr />
            <ul>
              <li>Consejos para adaptarte al ambiente universitario.</li>
              <li>DPI (entender los resultados).</li>
              <li>Técnicas de estudio e investigación.</li>
              <li>Organización del tiempo.</li>
              <li>Aspectos específicos de la Escuela o Facultad a la que perteneces.</li>
              <li>Dudas si esa carrera es para ti.</li>
              <li>Desarrollo de plan académico y personal.</li>
            </ul>
          </div>

          <div className={styles.lastSemesters}>
            <h4>Últimos semestres</h4>
            <hr />
            <ul>
              <li>Preparación para el ambiente laboral.</li>
              <li>Personal branding y CV.</li>
              <li>Desarrollo de plan profesional.</li>
            </ul>
          </div>
        </div>

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
      areaName='AUTopics'
      className={className}
    />
  );
  /*<!------------------------------------------------->
  <!--	end return	-->
  <!------------------------------------------------->*/

}

/*<!--------------------------------------------------------------------------->
<!--	end AUTopics(Component)	-->
<!--------------------------------------------------------------------------->*/

