/*<---------------------------------------------------------------------------->
<!--	WhoAreWe (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './WhoAreWe.module.css'

//cards
import Cover from './Cover/Cover';


export default function WhoAreWe() {
  return (
    <section id="somos">
      <h1 className={styles.title} >¿Quiénes somos?</h1>
      <div className={styles.grid}>
        <Cover />

      </div>
    </section >
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end WhoAreWe(Component)	-->
<!--------------------------------------------------------------------------->*/

