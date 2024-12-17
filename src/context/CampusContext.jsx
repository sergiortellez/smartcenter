
/*<------------------------------------------------->
<!--	Campus Context, campus provider	-->
<!-------------------------------------------------->
* Description: 
    - This file contains the CampusContext and CampusProvider components. 
    - The CampusContext is created with an initial value of an empty string. 
    - The CampusProvider component is created to manage the state of the campus context using a reducer. 
    - The reducer is used to control the action of changing the campus. 
    - The initial state of the campus context is set to the value of the campus in local storage. 
    - An effect is used to keep local storage synchronized with the reducer state when it changes.
    
* Parameters:
    - none
* Dependencies:
    - React: { createContext, useReducer, useEffect }
* Returns/results: It returns the CampusContext and CampusProvider components. But also manages the state of the campus context using a reducer.
<!------------------------------------------------->*/

//React
import { createContext, useReducer, useEffect } from 'react';

//Create and export the campus context with an initial value of an empty string
export const CampusContext = createContext({ campus: '' });

//check if there is a campus in local storage, if not, set it to an empty string 
// This object will be used as the initial state of the campus context reducer
const initialStateObject = {
    campus: localStorage.getItem('campus') || '',
};

//declaration of the campus context reducer
const campusReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CAMPUS':
            return { ...state, campus: action.payload };
        default:
            return state;
    }
};


//Create and export the CampusProvider component
export const CampusProvider = ({ children }) => {
    //the state of the campus context is managed by the reducer so we can control multiple actions. The initial state takes in account the value of the campus in local storage. 
    const [state, dispatch] = useReducer(campusReducer, initialStateObject);


    //this effect keeps localStorage synchronized with the reducer state when it changes.
    useEffect(() => {
        if (state.campus) {
            localStorage.setItem('campus', state.campus);
        }
    }, [state.campus]);


    return (
        <CampusContext.Provider value={{ campus: state.campus, dispatch }}>
            {children}
        </CampusContext.Provider>
    );
};
/*<!------------------------------------------------->
<!--	end Campus Context, campus provider	-->
<!------------------------------------------------->*/


