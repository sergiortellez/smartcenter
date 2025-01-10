/*<---------------------------------------------------------------------------->
<!--	WhatIsPar (Component)	-->
<!----------------------------------------------------------------------------->
* Description: This component is a card that can be expanded to show more content. Explains what is PAR.
     
* Parameters:
    - className (string): Additional classes for styling on parent. 
* Dependencies:
    - styles: The css module for the component.
    - ExpandableCard: The card that can be expanded to show more content.
    - IconTextTitle: The component that displays an icon and a title.
    - FontAwesomeIcon: The icon component from the react-fontawesome library.
      - faBlockQuestion: The icon for the button content.
      - faMedal: The icon for the expanded content.
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './WhatIsPar.module.css'
//Components
import ExpandableCard from '@components/ExpandableCard/ExpandableCard'
import IconTextTitle from '@components/IconTextTitle/IconTextTitle';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlockQuestion } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'
import { faMedal } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'



/*<------------------------------------------------->
<!--	Export	-->
<!------------------------------------------------->*/
export default function WhatIsPar({ className }) {

  /*<--	*** buttonContent ***	-->*/
  const buttonContent = (
    <div className={styles.buttonContent}>
      <IconTextTitle
        icon={faBlockQuestion}
        title='¿Qué es PAR?'
        titleSize='1.2'
        iconSize='4'
      />
      <i className={styles.explanationText} >Programa académico de alto rendimiento</i>
    </div>

  )
  /*<--	*** end buttonContent ***	-->*/

  /*<--	*** expandedContent ***	-->*/
  const expandedContent = (
    <div className={styles.expandedContent}>
      {/* HACK: <span> son palabras resaltadas  */}
      <p>
        ¿Tienes <span>habilidades excepcionales</span> o una <span>pasión</span> por una disciplina específica? Los programas académicos de alto rendimiento (PAAR) están aquí para <span>desafiarte</span> y ayudarte a potenciar tus talentos.
      </p>
      <p>
        <span>Conoce</span> a personas como tú, <span>alcanza</span> tu máximo potencial y <span>prepárate</span> para los desafíos del futuro.
        Además, podrás obtener una <span><FontAwesomeIcon icon={faMedal} /> insignia digital</span>, avalada por nuestra universidad, que elevará tu perfil profesional y te abrirá nuevas oportunidades.
      </p>
      <p><b>¡Únete y lleva tus habilidades al siguiente nivel!</b></p>
    </div>
  )
  /*<--	*** end expandedContent ***	-->*/


  return (
    < ExpandableCard
      buttonContent={buttonContent}
      expandedContent={expandedContent}
      areaName='WhatIsPar'
      className={className}

    />

  );
}
/*<!------------------------------------------------->
<!--	end Export	-->
<!------------------------------------------------->*/



/*<!--------------------------------------------------------------------------->
<!--	end WhatIsPar(Component)	-->
<!--------------------------------------------------------------------------->*/

