/*<------------------------------------------------->
<!--	Hero(component)	-->
<!-------------------------------------------------->
* Description:
    A React component that displays the hero section of the home page.  
* Parameters:
    - none
* Dependencies: 
    - AnimationFrame (component)
    - VideoFrame (component)
    - CSS Modules for styling
* Returns/results: Renders the hero section of the home page. The dependencies component are campus context sensitive. 
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