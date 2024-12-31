/*<------------------------------------------------->
<!--	Hero(component)	-->
<!-------------------------------------------------->
* Description:
    
* Parameters:
    -
* Dependencies:
* Returns/results:
<!------------------------------------------------->*/
//imports

//page components
import AnimationFrame from '../Animation/Animation';
import VideoFrame from '../VideoFrame/VideoFrame';
//styles
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <AnimationFrame />
            <VideoFrame />
        </div>
    )
}

/*<!------------------------------------------------->
<!--	end Hero(component)	-->
<!------------------------------------------------->*/