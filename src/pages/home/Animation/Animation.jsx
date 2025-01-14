/*<---------------------------------------------------------------------------->
<!--	Animation Frame(Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     This component is in charge of rendering the animation of the selected campus. It's sensitive to the campus context.
* Parameters:
    - none
* Dependencies:
    - useCampus (hook)
    - styles
* Returns/results: Renders the animation of the selected campus.
    
<!------------------------------------------------->*/
//imports

//styles
import styles from './Animation.module.css';

//hooks
import useCampus from '../../../hooks/useCampus';


export default function AnimationFrame() {

    const { campus } = useCampus();
    //TODO: when the animations for AGS and GDL are ready, replace function with a data structure approach.
    const renderContent = () => {
        switch (campus) {
            case 'AGS':
                return null;
            case 'CDMX':
                return <iframe src="animations/cdmx/smart_cover_animation.html"
                    scrolling="no"
                    loading="lazy"
                    frameBorder="0"
                ></iframe>;
            case 'GDL':
                return null;
            default:
                return <span>No se encontró la animación...</span>;
        }
    };


    return (
        <div className={styles.animationFrame} >
            {renderContent()}
        </div>
    );
}

/*<!--------------------------------------------------------------------------->
<!--	end Animation Frame(Component)	-->
<!--------------------------------------------------------------------------->*/