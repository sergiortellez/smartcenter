/*<------------------------------------------------->
<!--	useIsMobile(hook)	-->
<!-------------------------------------------------->
* Descripción: This is a custom hook that checks if the user is on a mobile device.
    
* Parámetros:
    - none  
* Dependencias:
    - useState 
    - useEffect
* Devuelve/resultado: It will return a boolean value indicating if the user is on a mobile device.

<!------------------------------------------------->*/

//------------------ imports  ------------------------

import { useState, useEffect } from 'react';


function useIsMobile() {

    // Initialize state; ensure it doesn't break SSR by checking for window
    const [isMobile, setIsMobile] = useState(() => {
        //LEARN: typeof window !== 'undefined' is a common pattern to check if a SSR is not running.
        if (typeof window !== 'undefined') {
            return window.matchMedia('(max-width: 768px)').matches;
        }
        //if window is not available, return false
        return false; // default for SSR
    });

    useEffect(() => {
        // Ensure window is available
        if (typeof window !== 'undefined') {
            // Create a media query for mobile devices
            const mediaQuery = window.matchMedia('(max-width: 768px)');

            // Handler to update the state based on media query change
            const handleChange = (event) => setIsMobile(event.matches);

            // Add event listener with fallback for older browsers
            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener('change', handleChange);
            } else {
                mediaQuery.addListener(handleChange);
            }

            // Cleanup event listener on unmount
            return () => {
                if (mediaQuery.removeEventListener) {
                    mediaQuery.removeEventListener('change', handleChange);
                } else {
                    mediaQuery.removeListener(handleChange);
                }
            };
        }
    }, []);

    return isMobile;
}

export default useIsMobile;
/*<!------------------------------------------------->
<!--	end useIsMobile(hook)	-->
<!------------------------------------------------->*/
