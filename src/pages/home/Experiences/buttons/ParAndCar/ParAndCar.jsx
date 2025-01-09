/*<---------------------------------------------------------------------------->
<!--	ParAndCar (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//Components
import LinkCardParallax from '@components/LinkCardParallax/LinkCardParallax'
//styles
import styles from './ParAndCar.module.css'





export default function DigitalExperiences({ className }) {

  const title = <span> Programas y concursos de alto rendimiento </span>

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

