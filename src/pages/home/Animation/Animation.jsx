/*<---------------------------------------------------------------------------->
<!--	Animation Frame(Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/
//imports

//styles
import styles from './Animation.module.css';

//hooks
import campus from '../../../hooks/useCampus';
import useCampus from '../../../hooks/useCampus';


export default function AnimationFrame() {

    const { campus } = useCampus();
    const renderContent = () => {
        switch (campus) {
            case 'AGS':
                return <div>Contenido para AGS</div>;
            case 'CDMX':
                return <iframe src="../../../assets/intercampi/animations/cdmx/smart_cover_animation.html" ></iframe>;
            case 'GDL':
                return <div>Contenido para GDL</div>;
            default:
                return <div>Contenido por defecto</div>;
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