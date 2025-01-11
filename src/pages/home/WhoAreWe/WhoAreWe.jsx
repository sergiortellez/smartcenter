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
import Info from './Info/Info';


export default function WhoAreWe() {
  return (
    <section id="somos" className={styles.whoAreWe}>
      <h1 className={styles.title} >¿Quiénes somos?</h1>
      <div className={styles.grid}>
        <Cover />
        <Info />
      </div>
    </section >
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end WhoAreWe(Component)	-->
<!--------------------------------------------------------------------------->*/

