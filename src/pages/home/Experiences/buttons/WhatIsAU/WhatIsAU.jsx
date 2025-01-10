/*<---------------------------------------------------------------------------->
<!--	WhatIsAU (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     This component is a card that contains the information about what is the AU.
* Parameters:
    - className 'string': optional, to pass styles from the parent.
* Dependencies:
    - ExpandableCard
    - IconTextTitle
    - styles
    - advisory(image)
    - faComments(icon)
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//components
import ExpandableCard from '@components/ExpandableCard/ExpandableCard'
import IconTextTitle from '@components/IconTextTitle/IconTextTitle'
//styles
import styles from './WhatIsAU.module.css'
//Font Awesome
import { faComments } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid';
//images
import advisory from '@assets/intercampi/home/advisory.webp'

export default function WhatIsAU({ className }) {

  /*<------------------------------------------------->
  <!--	button content	-->
  <!------------------------------------------------->*/
  // Title and icon
  const buttonContent = (
    <div>
      <IconTextTitle
        icon={faComments}
        title='¿Qué es la AU?'
        flow='row'
        titleSize='1.2'
        iconSize='2'
      />
      <span className={styles.subtitle} >(asesoría universitaria)</span>
    </div>

  )
  /*<!------------------------------------------------->
  <!--	end button content	-->
  <!------------------------------------------------->*/
  /*<------------------------------------------------->
  <!--	expanded content	-->
  <!------------------------------------------------->*/

  const expandedContent = (
    <>
      <div className={styles.title}>
        <span>Contigo en cada paso.</span>
      </div>
      <div className={styles.container}>
        <div className={styles.definition}>
          <p>Sólo por ser <span>alumno</span> de la comunidad UP se te ha asignado un
            <span>asesor</span>. El trabajo de un asesor es <span >acompañarte</span> mientras construyes tu <span>mejor versión</span>. Puede ayudarte en temas <span>personales</span>, <span>académicos</span> y <span>profesionales</span>. </p>
          <p>Todos nuestros asesores son <b>miembros de la comunidad UP</b> que conocen a todo lo que te enfrentas como estudiante y te pueden dar solución o recomendación al respecto. Cada semestre <b>se capacitan</b> para poderte acompañar de la mejor manera, y lo más importante es
            que
            todo lo que platiques con ellos es <span >100% confidencial</span>.</p>
        </div>
        <div className={styles.image}>
          <img
            src={advisory}
            alt="Advisor and student"
          />
        </div>
      </div>
    </>
  )
  /*<!------------------------------------------------->
  <!--	end expanded content	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	return	-->
  <!------------------------------------------------->*/
  return (
    <ExpandableCard
      buttonContent={buttonContent}
      expandedContent={expandedContent}
      areaName='WhatIsAU'
      className={className}
    />
  );
  /*<!------------------------------------------------->
  <!--	end return	-->
  <!------------------------------------------------->*/

}

/*<!--------------------------------------------------------------------------->
<!--	end WhatIsAU(Component)	-->
<!--------------------------------------------------------------------------->*/

