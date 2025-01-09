/*<---------------------------------------------------------------------------->
<!--	ExpandableCard(Component)	-->
<!----------------------------------------------------------------------------->
* Description: This component is a card that can be expanded to show more content.
The way it works is that the buttonContent is always visible and when clicked, 
the expandedContent is shown. It renders two articles, one for the buttonContent 
and one for the expandedContent. It's meant to be used in a grid layout using 
grid-template-areas. The  number of rows and columns can be specified by the dev 
in the area template in the css. Also the space where the expanded content will 
be displayed. 
     
* Parameters:
    - buttonContent (JSX): The content that will be displayed in the button part 
      of the card.
    - expandedContent (JSX): The content that will be displayed in the expanded 
      part of the card.
    - animateDuration (number): The duration of the animation when the card is expanded. (default: 0.4)
    - areaName (string): The name of the grid area where the card will be placed.
    - className (string): Additional classes for styling on parent. (can pass through several parent components)

* Dependencies:
    - FontAwesomeIcon: The icon component from the react-fontawesome library.
    - styles: The css module for the component.
    - useState: The hook that allows the component to have a state.
    - useRef: The hook that allows the component to have a reference to an element.
    - useEffect, useLayoutEffect: Hooks for side effects and DOM measurements.
    - ResizeObserver: Observes changes to element’s content size.

* Returns/results: Renders the ExpandableCard component.
    
<!------------------------------------------------->*/

//--------------------imports-----------------------

//styles
import styles from './ExpandableCard.module.css'
import { useState, useRef, useEffect, useLayoutEffect } from 'react'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'

export default function ExpandableCard({
    buttonContent,
    expandedContent,
    animateDuration = 0.4,
    areaName = '',
    className = ''
}) {

    const [isOpen, setIsOpen] = useState(false);
    const [expandedHeight, setExpandedHeight] = useState(0);

    // for tracking the height of the content
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


    // Use a small effect to reset height to 0 when closing
    useEffect(() => {
        if (!isOpen) {
            setExpandedHeight(0);
        }
    }, [isOpen]);


    return (
        <>
            {/* button part */}
            <article
                className={`${styles.cardBase} ${styles.button} ${className} ${isOpen ? styles.openedButton : ''}`}
                style={collapsedGridStyles || {}}
                onClick={handleToggle}
                aria-expanded={isOpen}
                aria-label="Open expanded content"
            >
                {buttonContent}
            </article>
            {/* end button part */}

            {/* Expanded card */}
            {isOpen && (
                <article
                    className={`${styles.cardBase} ${styles.cardExpanded}`}
                    style={{
                        // animation styles
                        maxHeight: isOpen ? expandedHeight : 0,
                        transition: `max-height ${animateDuration}s ease`,
                        // grid area name assignment 
                        gridArea: areaName ? `${areaName}Expanded` : ''
                    }}
                >
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
<!--	end ExpandableCard(Component)	-->
<!--------------------------------------------------------------------------->*/
