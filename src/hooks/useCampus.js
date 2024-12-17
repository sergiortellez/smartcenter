/*<------------------------------------------------->
<!--	useCampus	-->
<!-------------------------------------------------->
* Description: This is a simple custom hook that returns the campus context. It is used to access the campus context in any component in a more convenient way.
    
* Parameters:
    - none
* Dependencies: 
    - React: { useContext }
    - CampusContext: { CampusContext }
* Returns/results: It returns the campus context.
<!------------------------------------------------->*/

/*<--	*** imports ***	-->*/
import { useContext } from 'react';
import { CampusContext } from '../context/CampusContext';
/*<--	*** end imports ***	-->*/

const useCampus = () => useContext(CampusContext);

export default useCampus;
/*<!------------------------------------------------->
<!--	end useCampus	-->
<!------------------------------------------------->*/



