//hooks
import useCampus from '../../hooks/useCampus'
//styles
import './WelcomePrompt.module.css'

const WelcomePrompt = () => {
    const { dispatch } = useCampus()

    const selectCampus = (campus) => {
        dispatch({ type: 'SET_CAMPUS', payload: campus })
    }

    return (
        <div className="campus-prompt">
            <h1>Select Your Campus</h1>
            <div>
                <button onClick={() => selectCampus('CDMX')}>CDMX</button>
                <button onClick={() => selectCampus('AGS')}>AGS</button>
                <button onClick={() => selectCampus('GDL')}>GDL</button>
            </div>
        </div>
    )
}

export default WelcomePrompt
