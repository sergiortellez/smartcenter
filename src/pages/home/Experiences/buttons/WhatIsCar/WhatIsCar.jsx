/*<---------------------------------------------------------------------------->
<!--	WhatIsCar (Component)	-->
<!----------------------------------------------------------------------------->
* Description: This component is a card that can be expanded to show more content. Explains what is a CAR.
     
* Parameters:
    - className (string): Additional classes for styling on parent. 
* Dependencies:
    - styles: The css module for the component.
    - ExpandableCard: The card that can be expanded to show more content.
    - IconTextTitle: The component that displays an icon and a title.
    - FontAwesomeIcon: The icon component from the react-fontawesome library.
      - faBlockQuestion: The icon for the button content.

* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './WhatIsCar.module.css'
//Components
import ExpandableCard from '@components/ExpandableCard/ExpandableCard'
import IconTextTitle from '@components/IconTextTitle/IconTextTitle';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlockQuestion } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'




/*<------------------------------------------------->
<!--	Export	-->
<!------------------------------------------------->*/
export default function WhatIsCar({ className }) {

  /*<--	*** buttonContent ***	-->*/
  const buttonContent = (
    <div className={styles.buttonContent}>
      <IconTextTitle
        icon={faBlockQuestion}
        title='¿Qué es CAR?'
        titleSize='1.2'
        iconSize='4'
      />
      <i className={styles.explanationText}>Concurso académico de alto rendimiento</i>
    </div>

  )
  /*<--	*** end buttonContent ***	-->*/

  /*<--	*** expandedContent ***	-->*/
  const expandedContent = (
    <div className={styles.expandedContent}>
      {/* HACK: <span> son palabras resaltadas  */}
      <p>
        ¿Te gustan los <span>retos</span> y quieres <span>demostrar tus conocimientos</span>? Participa en nuestros concursos académicos y muéstranos tus <span>habilidades</span>. Aprovecha las excelentes plataformas que hemos encontrado y deja que el mundo te vea brillar.
      </p>
      <p>
        SMART está aquí para ayudarte a alcanzar un <span>rendimiento de alto nivel</span>, brindándote el <span>entrenamiento</span> necesario para que destaques y alcances los más altos estándares de evaluación.
      </p>
      <p>
        <b>¡Participa y eleva tu talento al máximo!</b>
      </p>
    </div>
  )
  /*<--	*** end expandedContent ***	-->*/


  return (
    < ExpandableCard
      buttonContent={buttonContent}
      expandedContent={expandedContent}
      areaName='WhatIsCar'
      className={className}

    />

  );
}
/*<!------------------------------------------------->
<!--	end Export	-->
<!------------------------------------------------->*/



/*<!--------------------------------------------------------------------------->
<!--	end WhatIsCar(Component)	-->
<!--------------------------------------------------------------------------->*/

