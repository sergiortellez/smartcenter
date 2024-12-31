/*<---------------------------------------------------------------------------->
<!--	VideoFrame(Component)	-->
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
import styles from './VideoFrame.module.css';

//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'



export default function VideoFrame() {


    return (
        <div className={styles.videoFrame} >
            <video playsInline autoPlay muted loop>
                {/* add source here */}
            </video>
            <div className={styles.videoHeader} >
                <p>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    Construye tu mejor versión
                    <FontAwesomeIcon icon={faQuoteRight} />
                </p>
            </div>
        </div>
    );
}

/*<!--------------------------------------------------------------------------->
<!--	end VideoFrame(Component)	-->
<!--------------------------------------------------------------------------->*/