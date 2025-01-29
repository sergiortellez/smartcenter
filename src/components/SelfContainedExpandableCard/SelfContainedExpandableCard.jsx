/*<---------------------------------------------------------------------------->
<!--	SelfContainedExpandableCard (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
    A card that can expand and collapse within a grid layout.
    In its default (collapsed) state, it behaves like a button.
    When clicked, it occupies the entire row (spanning all columns)
    and reveals additional content. Is meant to be used in a grid layout.
* Parameters:
    - cardId: a unique identifier for each card
    - cardCover: a JSX element to show in the collapsed state
    - cardContent: a JSX element to show in the expanded state
* Dependencies:
    - useState (React)
    - flushSync (React DOM)
    - FontAwesomeIcon
    - CSS modules for styling
      - viewTransition API
* Returns/results: Renders an interactive card that toggles between collapsed/expanded, with optional View Transitions API for smooth animations.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//React
import { useState, useRef, useEffect } from 'react'

//Hooks
import { useViewTransition } from '@hooks/useViewTransition'

//styles
import styles from './SelfContainedExpandableCard.module.css'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'



export default function SelfContainedExpandableCard({
  cardId = '',
  cardCover,
  cardContent
}) {


  const [isOpen, setIsOpen] = useState(false)
  const { startTransition } = useViewTransition();
  // Create a ref to access the <article> DOM node
  const cardRef = useRef(null);

  /*<------------------------------------------------->
  <!--	Toggle open/close with animations 	-->
  <!------------------------------------------------->*/
  /*<--	*** Open the card with animations ***	-->*/
  const handleToggle = () => {
    startTransition(() => {
      setIsOpen((prev) => !prev)
    })

  }
  /*<--	*** end Open the card with animations ***	-->*/

  /*<--	*** Scroll the card to the top of the page after toggling ***	-->*/
  useEffect(() => {
    // Make sure the ref is available
    if (!cardRef.current) return;

    // check if the user is on a mobile device
    const isMobile = window.innerWidth <= 767.98 && /Mobi|Android/i.test(navigator.userAgent);

    // Adjust the scroll offset based on the device
    const offsetAdjustment = isMobile ? 10 : 90;

    // Get the height of the nav bar
    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--navHeight'), 10);
    // Get the position object of the card  
    const rect = cardRef.current.getBoundingClientRect();
    // Calculate the absolute top position of the card
    const absoluteTop = rect.top + window.pageYOffset - navHeight - offsetAdjustment;

    //Do the scrolling after 0.9 seconds
    const timer = setTimeout(() => {
      window.scrollTo({ top: absoluteTop, behavior: 'smooth' });
    }, 900);

    //cleanup
    return () => clearTimeout(timer);

  }, [isOpen]);
  /*<--	*** end Scroll to the top of the page after toggling ***	-->*/

  /*<!------------------------------------------------->
  <!--	end Toggle open/close	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	naming	-->
  <!------------------------------------------------->*/
  //Unique names for each card (needed for ViewTransition API)
  const cardName = `cardContainer-${cardId}`;
  const contentName = `cardContent-${cardId}`;
  /*<!------------------------------------------------->
  <!--	end naming	-->
  <!------------------------------------------------->*/


  return (
    <article
      ref={cardRef}
      onClick={!isOpen ? handleToggle : undefined}
      className={`${styles.cardBase}  ${isOpen ? styles.expandedState : styles.buttonState}`}
      aria-expanded={isOpen}
      aria-label="Open expanded content"
      role={`${isOpen ? 'region' : 'button'}`}
      style={{ viewTransitionName: cardName }}


    >
      {!isOpen && (
        <div style={{ viewTransitionName: contentName }}>
          {cardCover}
        </div>
      )}

      {
        isOpen && (
          <div style={{ viewTransitionName: contentName }}>
            {/* Close button  */}
            <header>
              <button onClick={handleToggle}>
                <FontAwesomeIcon icon={faRectangleXmark} />
              </button>
            </header>
            {/* Content of the card */}
            <section>
              {cardContent}
            </section>

          </div>
        )}

    </article >
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end SelfContainedExpandableCard(Component)	-->
<!--------------------------------------------------------------------------->*/

