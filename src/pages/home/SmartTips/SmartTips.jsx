/*<---------------------------------------------------------------------------->
<!--	SmartTips (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//react
import { useState } from 'react';
//Components
import YoutubeCarousel from '@components/YoutubeCarousel/YoutubeCarousel'
//styles
import styles from './SmartTips.module.css'

//HACK:  esta sección tiene wrap con un div, en lugar de section porque el carrusel de videos necesita salir de la pantalla

export default function SmartTips() {
  const [currentVideoId, setCurrentVideoId] = useState('GDXqbd5khbg'); // initial video ID

  const handleVideoSelect = (videoId) => {
    setCurrentVideoId(videoId);
  };


  return (
    <div id="tips" className={styles.tips}>
      <h1 className={styles.title}>SMART Tips</h1>
      <div className={styles.flexTips}>
        {/* Video Preview Section */}
        <div className={styles.preview}>
          <iframe
            id="previewVideo"
            src={`https://www.youtube.com/embed/${currentVideoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Carousels Section */}
        <div className={styles.carrousels}>
          {/* Example carousel instance */}
          <h3>
            <i className="fa-duotone fa-map-pin"></i> Up Explorer
          </h3>
          <YoutubeCarousel playlistId="PLhMMXwN8RXkz3zpbF_nBQc_WID0ntJGfH" onVideoSelect={handleVideoSelect} />

          {/* Add more Carousel instances for other playlists as needed */}
        </div>
      </div>
    </div>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end SmartTips(Component)	-->
<!--------------------------------------------------------------------------->*/

