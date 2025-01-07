/*<---------------------------------------------------------------------------->
<!--	LinkCardParallax (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     LinkCardParallax is a reusable card component with a parallax effect for background images. It shares the same API as LinkCard and integrates seamlessly into the grid layout.
     It uses the useParallaxInCard hook to create the parallax effect. The hook observes the card's images and updates their position based on the user's scroll behavior.

* Parameters:
    - route (string): The path to the page the card will link to.
    - contents (JSX): The content of the card.
    - areaName (string): The name of the area in the grid layout where the card will be placed.
    - isExternal (boolean): If true, the card will link to an external page.
    - images (array): An array of objects for parallax configuration containing: 
      - `src`(string): The image source.
      - `speed` (number +-): The speed of the parallax effect.
      - `offset`(number +-): The offset of the parallax effect. It will translate to px

* Dependencies:
    - React Router
      - Link
    - FontAwesome
    - CSS Modules
    - useParallaxInCard (hook)

* Returns/results: Renders a card with background parallax images and clickable functionality.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//react
import { Link } from 'react-router-dom';

//hooks
import useParallaxInCard from '../../hooks/useParallaxInCard';

//styles
import styles from './LinkCardParallax.module.css'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid';

export default function LinkCardParallax({
  route = '',
  contents,
  areaName = '',
  isExternal = false,
  images = [],
}) {

  const { containerRef } = useParallaxInCard();


  /*<------------------------------------------------->
  <!--   apply styles   -->
  <!------------------------------------------------->*/

  const linkCardStyles = areaName ? { gridArea: areaName } : {};




  /*<!------------------------------------------------->
  <!--   render logic   -->
  <!------------------------------------------------->*/
  const renderImages = () =>
    images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt="decorative image"
        className={styles.parallaxImg}
        data-parallax="true" // Standard identifier
        data-speed={image.speed}
        data-offset={image.offset}
        style={{ transform: 'translateY(0)' }} // Initial position
      />
    ));

  const contentWrapper = (
    <>
      <FontAwesomeIcon icon={faLink} className={styles.linkIcon} />
      {renderImages()}
      {contents}
    </>
  );

  if (isExternal) {
    return (
      <a
        ref={containerRef}
        href={route}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.cardBase} ${styles.linkCard}`}
        style={linkCardStyles}
        data-name={areaName}
      >
        <FontAwesomeIcon icon={faLink} className={styles.linkIcon} />
        {renderImages()}
        {contents}
      </a>
    );
  }

  return (
    <Link
      ref={containerRef}
      to={route}
      className={`${styles.cardBase} ${styles.linkCard}`}
      style={linkCardStyles}
      data-name={areaName}
    >
      <FontAwesomeIcon icon={faLink} className={styles.linkIcon} />
      {renderImages()}
      {contents}
    </Link>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end LinkCardParallax(Component)	-->
<!--------------------------------------------------------------------------->*/

