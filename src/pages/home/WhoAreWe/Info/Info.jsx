/*<---------------------------------------------------------------------------->
<!--	Info (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     Simple component that displays a card with paragraph with a message.
* Parameters:
    - none
* Dependencies:
    - styles: Info.module.css
* Returns/results: Displays the card itself.
<!------------------------------------------------->*/



//styles
import styles from './Info.module.css'


export default function Info() {
  return (
    <article className={styles.info} style={{ gridArea: 'Info' }}>
      <p>Te ayudamos a ser un <span className={styles.highlight} >profesionista</span> que cumple las demandas sociales, impulsándote como <span className={styles.highlightBold} >líder</span> que <span className={styles.highlightRed} >contribuye</span> a la mejora de México y el mundo.
      </p>
    </article >
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Info(Component)	-->
<!--------------------------------------------------------------------------->*/

