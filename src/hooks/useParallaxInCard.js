/*<------------------------------------------------->
<!--	useParallaxInCard	-->
<!-------------------------------------------------->
* Description:
    This hook sets up an Intersection Observer on parallax images inside
    the containerRef, and applies a scroll-based parallax effect only
    for images currently visible in the viewport.
    The parallax logic is a vanilla implementation that uses the scroll event to calculate the position of the images relative to the viewport and apply a transform effect to simulate depth.
    
* Parameters:
    - none
* Dependencies:
    - useRef
    - useState
    - useEffect
* Returns/result:  The hook returns an object with a containerRef that should be attached to the wrapping container.
<!------------------------------------------------->*/

/*<-----------------Imports---------------------->*/
// react
import { useEffect, useRef, useState } from 'react';


export default function useParallaxInCard() {

    // We'll attach this ref to the wrapping container (The card wrapper).
    const containerRef = useRef(null);

    // Keep track of the images currently in the viewport
    const [visibleImages, setVisibleImages] = useState([]);

    useEffect(() => {
        // Make sure the container is mounted
        if (!containerRef.current) return;
        /*<------------------------------------------------->
        <!--	IntersectionObserver Logic	-->
        <!------------------------------------------------->*/
        // 1) Select all images with data-parallax="true" within the container
        const parallaxImages = containerRef.current.querySelectorAll('[data-parallax="true"]');

        // 2) Setup the Intersection Observer
        const observer = new IntersectionObserver(
            //callback function of the observer
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // The image is in (or entering) the viewport
                        setVisibleImages((prev) => [...prev, entry.target]);
                    } else {
                        // The image is out of (or leaving) the viewport
                        setVisibleImages((prev) => prev.filter((img) => img !== entry.target));
                    }
                });
            },
            //options of the observer
            {
                root: null, // Use the viewport as the root
                threshold: 0, // Fire as soon as the element enters/leaves any part of the viewport
            }
        );

        // Observe each parallax image
        parallaxImages.forEach((img) => observer.observe(img));
        /*<!------------------------------------------------->
        <!--	end IntersectionObserver Logic	-->
        <!------------------------------------------------->*/

        /*<------------------------------------------------->
        <!--	Throttled and optimization Logic 	-->
        <!------------------------------------------------->*/
        // 3) Throttled scroll logic using requestAnimationFrame

        //HACK: execute just once, after the first render (imgs are available) and prevent memory leaks by cleaning up the event listener or attaching multiple listeners.

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                // HACK: The ticking variable is used to throttle the scroll event listener to prevent performance issues. It will be set to true when the scroll event is triggered and reset to false after the animation frame is executed. This prevents multiple scroll events from stacking at the same time.

                //LEARN: the .requestAnimationFrame() method schedules a callback to be executed just before the browser repaints the screen. It ensures that updates (e.g., the img.style.transform) happen in sync with the screen's refresh rate.
                window.requestAnimationFrame(() => {
                    visibleImages.forEach((img) => {
                        /*<--	*** actual work ***	-->*/
                        const speed = parseFloat(img.dataset.speed) || 0.5;
                        const offset = parseFloat(img.dataset.offset) || 0;
                        const rect = img.getBoundingClientRect();
                        const yOffset = rect.top * speed + offset;
                        img.style.transform = `translateY(${yOffset}px)`;

                        /*<--	*** end actual work ***	-->*/

                        // Get the image's position relative to the viewport
                        //LEARN: getBoundingClientRect() returns the size of an element and its position relative to the viewport. rect.top is the distance from the top of the viewport to the top of the element. we are calculating the distance the element will move using the translateY property. If the speed is negative, the image will move up, if positive, it will move down. The offset is added to the final position to adjust the starting point of the parallax effect.
                    });
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Attach the scroll event
        window.addEventListener('scroll', handleScroll);

        //HACK: Initial position update to prevent unwanted 'jump' the first time the user scrolls
        handleScroll();
        /*<!------------------------------------------------->
        <!--	end Throttled and optimization Logic 	-->
        <!------------------------------------------------->*/


        /*<------------------------------------------------->
        <!--	Cleanup	-->
        <!------------------------------------------------->*/
        return () => {
            window.removeEventListener('scroll', handleScroll);
            parallaxImages.forEach((img) => observer.unobserve(img));
            observer.disconnect();
        };
        /*<!------------------------------------------------->
        <!--	end Cleanup	-->
        <!------------------------------------------------->*/

    }, [visibleImages]);
    // Using [visibleImages] so that if the set of visible images changes,
    // we re-run the effect and keep the observer in sync.

    // Return the ref so LinkCardParallax can attach it to its root element. Delegating the responsibility of attaching the ref to the component that uses the hook.
    return { containerRef };
}

/*<!------------------------------------------------->
<!--	end useParallaxInCard	-->
<!------------------------------------------------->*/