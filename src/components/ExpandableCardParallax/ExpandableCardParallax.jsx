/*<---------------------------------------------------------------------------->
<!--	ExpandableCardParallax (Component)	-->
<!----------------------------------------------------------------------------->
* Description: This component is a card that can be expanded to show more content.
The way it works is that the buttonContent is always visible and when clicked, the expandedContent is shown. It renders two articles, one for the buttonContent and one for the expandedContent. It's meant to be used in a grid layout using grid-template-areas. The  number of rows and columns can be specified by the dev in the area template in the css. Also the space where the expanded content will be displayed. 

The difference between this component and the ExpandableCard component is that this one has a parallax effect. The parallax effect is achieved by using the useParallaxInCard hook. This hook provides a containerRef that is used to create the parallax effect. The parallax effect is achieved by using the data-parallax attribute in the images that are passed as props. The data-speed and data-offset attributes are used to control the speed and offset of the parallax effect.
     
* Parameters:
    - buttonContent (JSX): The content that will be displayed in the button part of the card.
    - expandedContent (JSX): The content that will be displayed in the expanded part of the card.
    - animateDuration (number): The duration of the animation when the card is expanded. (default: 0.4)
    - areaName (string): The name of the grid area where the card will be placed.
    - className (string): Additional classes for styling on parent. (can pass through several parent components)
     - images (array): An array of objects for parallax configuration containing: 
      - `src`(string): The image source.
      - `speed` (number +-): The speed of the parallax effect.
      - `offset`(number +-): The offset of the parallax effect. It will translate to px

* Dependencies:
    - FontAwesomeIcon: The icon component from the react-fontawesome library.
    - styles: The css module for the component.
    - useState: The hook that allows the component to have a state.
    - useRef: The hook that allows the component to have a reference to an element.
    - useEffect: The hook that allows the component to have side effects.
    - useParallaxInCard: The hook that provides the containerRef for the parallax effect.

* Returns/results: Renders the ExpandableCard component.
<!------------------------------------------------->*/

//--------------------imports-----------------------

//styles
import styles from './ExpandableCardParallax.module.css'
import { useState, useRef, useLayoutEffect } from 'react'

//hooks
import useParallaxInCard from '../../hooks/useParallaxInCard';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'

export default function ExpandableCard({
  buttonContent,
  expandedContent,
  animateDuration = 0.4,
  areaName = '',
  className = '',
  images = [],
}) {

  //use hook to get the containerRef, handle the parallax effect, intersection observer and performance optimization
  const { containerRef } = useParallaxInCard();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState(0);
  //for tracking the height of the content
  const contentRef = useRef(null);

  /*<------------------------------------------------->
  <!--	Toggle open/close	-->
  <!------------------------------------------------->*/
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  /*<!------------------------------------------------->
  <!--	end Toggle open/close	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
     <!--	ResizeObserver logic	-->
     <!------------------------------------------------->*/
  // We'll attach a resize observer to the expanded content container.

  //LEARN: Using useLayoutEffect instead of useEffect for the observer setup ensures we measure the DOM before the browser repaints, reducing flickers.

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    let resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentBoxSize) {
          // measure new height
          // We add a bit of extra space (like 50 or 100px) if needed
          // but you can tweak or remove this if you want a tighter fit.
          const newHeight = entry.contentRect.height + 50;
          setExpandedHeight(newHeight);
        }
      }
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    // Cleanup the observer on unmount
    return () => {
      if (resizeObserver && contentRef.current) {
        resizeObserver.unobserve(contentRef.current);
      }
      resizeObserver = null;
    };
  }, [isOpen]);
  /*<!------------------------------------------------->
  <!--	end ResizeObserver logic	-->
  <!------------------------------------------------->*/


  /*<------------------------------------------------->
  <!--	apply styles	-->
  <!------------------------------------------------->*/
  //styles to be applied
  let collapsedGridStyles = null

  //make sure areaName is not empty
  if (areaName) {
    //apply to the button part
    collapsedGridStyles = {
      gridArea: areaName
    }
  }
  /*<!------------------------------------------------->
  <!--	end apply styles	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	Render Logic	-->
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
  /*<!------------------------------------------------->
  <!--	end Render Logic	-->
  <!------------------------------------------------->*/



  return (

    <>
      {/* button part, must attach the ref of the container from the hook */}
      <article ref={containerRef} className={`${styles.cardBase} ${styles.button} ${className} ${isOpen ? styles.openedButton : ''} `} style={collapsedGridStyles || {}} onClick={handleToggle} aria-expanded={isOpen} aria-label="Open expanded content" data-name={areaName}>
        {renderImages()}
        {buttonContent}
      </article>
      {/* end button part */}

      {/* Expanded card */}
      {isOpen && (
        <article
          className={`${styles.cardBase} ${styles.cardExpanded} $ `}
          style={{
            // animation styles
            maxHeight: isOpen ? expandedHeight : 0,
            transition: `max-height ${animateDuration}s ease`,
            // grid area name assignment 
            gridArea: areaName ? `${areaName}Expanded` : ''
          }}>

          <div ref={contentRef}>
            {/* Close button  */}
            <header>
              <button onClick={handleToggle}>
                <FontAwesomeIcon icon={faRectangleXmark} />
              </button>
            </header>
            {/* Content of the card */}
            <section>
              {expandedContent}
            </section>

          </div>
        </article>
      )}
      {/* end expanded card */}
    </>

  )
}
/*<!--------------------------------------------------------------------------->
<!--	end ExpandableCardParallax(Component)	-->
<!--------------------------------------------------------------------------->*/

