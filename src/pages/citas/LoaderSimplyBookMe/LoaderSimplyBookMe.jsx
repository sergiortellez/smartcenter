/*<---------------------------------------------------------------------------->
<!--	LoaderSimplyBookMe (Component)	-->
<!----------------------------------------------------------------------------->
* Description: Loader for the SimplyBookMe component, creates some phantom elements to simulate the loading of the component
     
* Parameters:
    - none
* Dependencies:
    - styles: LoaderSimplyBookMe.module.css
* Returns/results: Loads the component with a loading animation
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './LoaderSimplyBookMe.module.css'


const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.loaderMenu}>
      <div className={styles.phantomTitle}></div>
      <div className={styles.phantomTitle}></div>
      <div className={styles.phantomTitle}></div>
    </div>
    <hr />
    <div className={styles.loaderCards}>
      <div className={styles.loaderPhantom}>
        <div className={styles.phantomImage}></div>
        <div className={styles.phantomTxt}></div>
        <div className={styles.phantomButton}></div>
      </div>
      <div className={styles.loaderPhantom}>
        <div className={styles.phantomImage}></div>
        <div className={styles.phantomTxt}></div>
        <div className={styles.phantomButton}></div>
      </div>
      <div className={styles.loaderPhantom}>
        <div className={styles.phantomImage}></div>
        <div className={styles.phantomTxt}></div>
        <div className={styles.phantomButton}></div>
      </div>
    </div>
    <div className={styles.loaderCards}>
      <div className={styles.loaderPhantom}>
        <div className={styles.phantomImage}></div>
        <div className={styles.phantomTxt}></div>
        <div className={styles.phantomButton}></div>
      </div>
      <div className={styles.loaderPhantom}>
        <div className={styles.phantomImage}></div>
        <div className={styles.phantomTxt}></div>
        <div className={styles.phantomButton}></div>
      </div>
      <div className={styles.loaderPhantom}>
        <div className={styles.phantomImage}></div>
        <div className={styles.phantomTxt}></div>
        <div className={styles.phantomButton}></div>
      </div>
    </div>
  </div>
);

export default Loader;


/*<!--------------------------------------------------------------------------->
<!--	end LoaderSimplyBookMe(Component)	-->
<!--------------------------------------------------------------------------->*/

