/*<---------------------------------------------------------------------------->
<!--	Dpi (Component)	-->
<!----------------------------------------------------------------------------->
* Description: This component is a card that contains a button with a title and an icon. When the button is clicked, the card expands to show a description of the DPI test and a video. At the end of the description, there is a link to the DPI test.
     
* Parameters:
    - className (string): For styling in parent component.
* Dependencies:
    - ExpandableCard
    - IconTextTitle
    - FontAwesomeIcon
    - faMagnifyingGlass
    - faCalendarClock
    - faLink
* Returns/results: Renders the card and its content.
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//components
import ExpandableCard from '@components/ExpandableCard/ExpandableCard';
import IconTextTitle from '@components/IconTextTitle/IconTextTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'
import { faCalendarClock } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'
import { faLink } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'


//styles
import styles from './Dpi.module.css'


export default function Dpi({ className }) {


  const buttonContent = (
    <IconTextTitle
      icon={faMagnifyingGlass}
      title='Conócete con DPI'
      flow='column'
      titleSize='1.2'
      iconSize='2'
    />
  )

  const expandedContent = (

    <>
      <div className={styles.flexContainerDpi} >
        <div className={styles.descriptionDpi}>
          <p>En <b>SMART</b> sabemos que eres una persona
            <span className={styles.resaltado}>única</span> y <span className={styles.resaltado}>especial</span>, tienes <b>talentos</b> y <b>necesidades</b> que tal vez ni siquiera tú conoces. Por eso hemos desarrollado una <span className={styles.resaltado}>prueba</span> para ayudarnos a
            <span className={styles.resaltado}>entenderte</span>.
          </p>
          <span className={styles.pill}>¿Qué tipo de caracter tengo y cómo le saco provecho?</span><span className={styles.pill}>¿Qué es lo que realmente me importa en la vida?</span> <span className={styles.pill}>¿Cuál es mi estilo para aprender?</span>
          <span className={styles.pill}>¿Tengo el nivel de lectura
            necesario para tener éxito en mi carrera?</span>
          <span className={styles.pill}>¿Me voy a tardar demasiado leyendo los textos que me dejen?</span>
          <span className={styles.pill}>¿Qué inquietudes tengo y en qué necesito ayuda?</span>
          <p>¡Imagínate darle toda esa información desde el primer día a tu asesor!</p>
        </div>
        <div className={styles.videoDpi}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3IJLkO2MA04"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div >
      <p><FontAwesomeIcon icon={faCalendarClock} /> Si hiciste la prueba hace tiempo y quieres ver como has cambiado hazla nuevamente aquí: </p>
      <a href="https://forms.gle/6ZJP266qozR1ch5Q8" target="_blank" className={styles.btnDpi}>Aplica DPI <FontAwesomeIcon icon={faLink} /></a>
      <span className={styles.resultados} >(resultados en 24 horas, revisa tu correo)</span>
    </>
  )

  return (
    <>
      <ExpandableCard
        buttonContent={buttonContent}
        expandedContent={expandedContent}
        areaName='Dpi'
        className={className}
      />
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Dpi(Component)	-->
<!--------------------------------------------------------------------------->*/

