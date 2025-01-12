/*<---------------------------------------------------------------------------->
<!--	Cover (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
  This component is part of the WhoAreWe section. It displays a cover with a background image and a text. It's context sensible and will display different images depending on the campus.
     
* Parameters:
    - className: CSS class name to be added to the component from the parent
* Dependencies:
    - useCampus: custom hook to get the campus
    - styles: CSS module
    - cdmxImage: image
    - agsImage: image
    - gdlImage: image

* Returns/results: Renders the card itself.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//Context
import useCampus from '@hooks/useCampus';

//styles
import styles from './Cover.module.css'

//images
import cdmxImage from '@assets/intercampi/home/alumnos_cdmx.webp';
import agsImage from '@assets/intercampi/home/alumnos_cdmx.webp';
import gdlImage from '@assets/intercampi/home/alumnos_cdmx.webp';

//Data object:
const campusBackgrounds = {
  CDMX: cdmxImage,
  AGS: agsImage,
  GDL: gdlImage,
};




export default function Cover({ className }) {
  const { campus } = useCampus();

  // Compute dynamic styles
  const coverStyle = {
    backgroundImage: `url(${campusBackgrounds[campus]})`,
    backgroundSize: 'cover', // Ensure the image covers the area
    backgroundPosition: 'center', // Center the image
    gridArea: 'Cover',

  };


  return (
    <article className={`${className} ${styles.Cover}`} style={coverStyle} >
      <p>Bienvenidos a SMART, el centro que ofrece la universidad para fortalecer las competencias que necesitas para triunfar como profesionista.</p>
    </article>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Cover(Component)	-->
<!--------------------------------------------------------------------------->*/

