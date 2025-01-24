/*<------------------------------------------------->
<!--	useViewTransition	-->
<!-------------------------------------------------->
* Description:
    Custom hook that returns a safe `startTransition` function. If the browser supports View Transitions, uses document.startViewTransition, otherwise, performs a fallback update.
* Parameters:
    - none
* Dependencies:
    - flushSync from 'react-dom'
    - view transitions API
* Returns/result:  Returns an object with a `startTransition` function and a boolean `isSupported` indicating whether the browser supports View Transitions API or not.
<!------------------------------------------------->*/

//---------------------imports----------------------

//react-dom
import { flushSync } from 'react-dom';


export function useViewTransition() {

    // Is the API supported in this browser?
    const isSupported = typeof document.startViewTransition === 'function';

    /*<------------------------------------------------->
    <!--	exported function	-->
    <!------------------------------------------------->
    Accepts a callback to update a state (or do anything), and runs it within a view transition if supported.
    <!------------------------------------------------->*/

    function startTransition(cb) {
        if (isSupported) {
            document.startViewTransition(() => {
                // LEARN: flushSync(): Forces React to apply the state update immediately, ensuring the “after” DOM state is captured correctly by the View Transitions API.
                flushSync(() => {
                    // LEARN: this pattern is a short-circuit check in JavaScript if cb is defined, it will run the function cb(), this way the callback is optional.
                    cb && cb();
                });
            });
        } else {
            // Fallback: just run the callback
            cb && cb();
        }
    }
    /*<!------------------------------------------------->
    <!--	end exported function	-->
    <!------------------------------------------------->*/


    return { startTransition, isSupported };
}
/*<!------------------------------------------------->
<!--	end useViewTransition	-->
<!------------------------------------------------->*/