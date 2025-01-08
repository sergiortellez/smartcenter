/*<---------------------------------------------------------------------------->
<!--	DigitalExperiences (Component)	-->
<!----------------------------------------------------------------------------->
* Description: Simple component that uses LinkCardParallax to display a link card with a parallax effect. It is used in the Experiences component.
     
* Parameters:
    - className (string): Additional class for styling on parent. (can pass through several parent components)
* Dependencies:
    - LinkCardParallax
* Returns/results: Renders a button that links to the experiences page.
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './DigitalExperiences.module.css'

//Components
import LinkCardParallax from '../../../../../components/LinkCardParallax/LinkCardParallax'


export default function DigitalExperiences({ className = '' }) {

  const title = <span> Experiencias Digitales </span>

  return (
    <>
      <LinkCardParallax
        route="/experiencias"
        contents={title}
        areaName="DigitalExperiences"
        className={className}
        images={[
          { src: '/images/parallax/experiencias_parallax_up.webp', speed: -0.3, offset: 0 },
          { src: '/images/parallax/experiencias_parallax_down.webp', speed: 0.3, offset: -100 }

        ]}
      />
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end DigitalExperiences(Component)	-->
<!--------------------------------------------------------------------------->*/

