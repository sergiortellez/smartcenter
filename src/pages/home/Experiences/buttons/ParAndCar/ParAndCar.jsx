/*<---------------------------------------------------------------------------->
<!--	ParAndCar (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
  The component ParAndCar is a LinkCardParallax component that is used to display a card with a title and a link to the /pyc/catalogo page.
     
* Parameters:
    - className: string, used to apply css styles from the parent component.
* Dependencies:
    - LinkCardParallax
    - styles
* Returns/results: Renders the button itself.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//Components
import LinkCardParallax from '@components/LinkCardParallax/LinkCardParallax'
//styles
import styles from './ParAndCar.module.css'





export default function DigitalExperiences({ className }) {

  const title = <span className={styles.title}> Programas y concursos de alto rendimiento </span>

  return (
    <>
      <LinkCardParallax
        route="/pyc/catalogo"
        contents={title}
        areaName="ParAndCar"
        className={className}
        images={[
          { src: '/images/parallax/parallax_geas_up.webp', speed: -0.3, offset: 0 },
          { src: '/images/parallax/parallax_geas_down.webp', speed: 0.3, offset: -100 }

        ]}
      />
    </>
  );
}


/*<!--------------------------------------------------------------------------->
<!--	end ParAndCar(Component)	-->
<!--------------------------------------------------------------------------->*/

