/*<---------------------------------------------------------------------------->
<!--	InPerson (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     This component is a button that links to the InPerson page. It is only displayed if the campus is CDMX. Uses the LinkCardParallax component to display a card with a parallax effect.
* Parameters:
    - className: string. Additional classes for styling in parent component.
* Dependencies:
    - useCampus: custom hook that returns the campus context.
    - LinkCardParallax: component that displays a card with a parallax effect.
    - IconTextTitle: component that displays an icon and a title.
    - faStreetView: FontAwesome icon.

* Returns/results: Returns the InPerson component if the campus is CDMX, otherwise returns null.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//context
import useCampus from '../../../../../hooks/useCampus';
//Components
import LinkCardParallax from '../../../../../components/LinkCardParallax/LinkCardParallax'
import IconTextTitle from '../../../../../components/IconTextTitle/IconTextTitle';
//styles
import styles from './InPerson.module.css'
//FontAwesome
import { faStreetView } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid';


export default function InPerson({ className = '' }) {

  const { campus } = useCampus()
  const title = <IconTextTitle icon={faStreetView} title='Experiencias Presenciales' iconSize='3' titleSize='1.7' flow='row' />

  if (campus === 'CDMX') {
    return (
      <>
        <LinkCardParallax
          route="/presenciales"
          contents={title}
          areaName="InPerson"
          className={className}
          images={[
            { src: '/images/parallax/map_parallax.webp', speed: -0.6, offset: 0 },
          ]}
        />
      </>
    );
  } else {
    return null
  }


}

/*<!--------------------------------------------------------------------------->
<!--	end InPerson(Component)	-->
<!--------------------------------------------------------------------------->*/

