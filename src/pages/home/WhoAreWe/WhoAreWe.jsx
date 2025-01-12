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
import Ciie from './Ciie/Ciie';
import Objectives from './Objectives/Objectives';
import Mission from './Mission/Mission';
import History from './History/History';


export default function WhoAreWe() {
  return (
    <section id="somos" className={styles.whoAreWe}>
      <h1 className={styles.title} >¿Quiénes somos?</h1>
      <div className={styles.grid}>
        <Cover />
        <Info />
        <Ciie />
        <Objectives />
        <Mission />
        <History />

      </div>
    </section >
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end WhoAreWe(Component)	-->
<!--------------------------------------------------------------------------->*/

