/*<------------------------------------------------->
<!--	useScrollTo(hook)	-->
<!-------------------------------------------------->
* Descripción: This is a custom hook that scrolls to an element by its id.
    
* Parámetros:
    - elementId: The id of the element to scroll to.
* Dependencias:
    - useCallback: A hook that returns a memoized callback.
* Devuelve/resultado: It will execute the scroll to the desired element.
<!------------------------------------------------->*/

// ----------------imports----------------------
import { useCallback } from 'react';


const useScrollTo = () => {
    //LEARN: useCallback ensures the returned function is memoized, which is good for performance.
    const scrollTo = useCallback((elementId, offset = 0) => {
        // Attempt to find the element by its id
        const element = document.getElementById(elementId);
        if (element) {
            // Calculate the element's position relative to the document
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            // Scroll to the element minus the offset
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        } else {
            // Warn in development if the element isn't found.
            console.warn(`useScrollTo: No element found with id '${elementId}'.`);
        }
    }, []);

    return scrollTo;
};

export default useScrollTo;
/*<!------------------------------------------------->
<!--	end useScrollTo(hook)	-->
<!------------------------------------------------->*/