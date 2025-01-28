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
import { useState } from 'react'

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

  /*<------------------------------------------------->
  <!--	Toggle open/close with animations 	-->
  <!------------------------------------------------->*/
  const handleToggle = () => {
    startTransition(() => {
      setIsOpen((prev) => !prev)
    })

  };
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

