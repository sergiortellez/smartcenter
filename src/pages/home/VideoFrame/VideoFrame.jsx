/*<---------------------------------------------------------------------------->
<!--	VideoFrame(Component)	-->
<!----------------------------------------------------------------------------->
* Description:
    A React component that displays a random video from a JSON-based list,
    ensuring the same random video is displayed for each browser session.
* Parameters:
    - none
* Dependencies:
    - React (useState, useEffect)
    - FontAwesome (icons)
    - CSS Modules for styling
* Returns/results:
    - A responsive <video> element with a randomly selected source from config.
<!---------------------------------------------------------------------------->*/

//--------------------- imports ---------------------
//react
import { useState, useEffect } from 'react';
//styles
import styles from './VideoFrame.module.css';
// import the JSON video Library
import videoLibrary from './videoLibrary.json';
//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid';

export default function VideoFrame() {

    // We'll keep track of which video was chosen
    const [videoSrc, setVideoSrc] = useState('')

    // On mount, determine if we already have a selected video in sessionStorage, no dependency array so it only runs once
    useEffect(() => {
        // 1) Attempt to read an existing video selection from sessionStorage
        const storedVideo = sessionStorage.getItem('selectedVideoSrc')

        if (storedVideo) {
            // If found, use that
            setVideoSrc(storedVideo);
        } else {
            // Otherwise, pick a random video
            const randomIndex = Math.floor(Math.random() * videoLibrary.length)
            const randomVideo = videoLibrary[randomIndex]

            // randomVideo.src might be something like
            // "videos/girl_math.mp4"

            // 2) store this video path in sessionStorage
            sessionStorage.setItem('selectedVideoSrc', randomVideo.src)

            // 3) set our local state so the video is displayed
            setVideoSrc(randomVideo.src)
        }
    }, []);

    // Render
    return (
        <div className={styles.videoFrame} >
            <video playsInline autoPlay muted loop>
                {videoSrc && <source src={videoSrc} type="video/mp4" />}
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
<!--------------------------------------------------------------------------->
*/
