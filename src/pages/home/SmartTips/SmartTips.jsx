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
import React, { useState, useEffect } from 'react';
//Context
import useCampus from '@hooks/useCampus';
//Components
import YoutubeCarousel from '@components/YoutubeCarousel/YoutubeCarousel'
//hooks
import useScrollTo from '@hooks/useScrollTo';
//Data
import { Playlists } from './Data/SmartTipsData'
//styles
import styles from './SmartTips.module.css'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//HACK:  esta sección tiene wrap con un div, en lugar de section porque el carrusel de videos necesita salir de la pantalla

export default function SmartTips() {
  const { campus } = useCampus();
  const [currentVideoId, setCurrentVideoId] = useState('');
  //for tracking errors in the youtube api
  const [hasError, setHasError] = useState(false);
  //for scrolling to the top of the player (on mobile)
  const scrollTo = useScrollTo();
  // Filter the playlists based on the current campus.
  const filteredPlaylists = Playlists.filter((playlist) => playlist.campi.includes(campus));

  /*<------------------------------------------------->
  <!--	Set initial video on player	-->
  <!------------------------------------------------->*/
  useEffect(() => {
    // Define a mapping from campus to initial video ID.
    const campusToVideoId = {
      AGS: '',             // TODO: Provide AGS video ID when available
      CDMX: 'GDXqbd5khbg',
      GDL: '',             // TODO: Provide GDL video ID when available
    };

    // Update the video ID based on the current campus.
    setCurrentVideoId(campusToVideoId[campus] || '');
    // LEARN: No cleanup is needed in this effect since there are no subscriptions,event listeners, or timers that require cleanup.
  }, [campus]);

  /*<!------------------------------------------------->
  <!--	end Set initial video on player	-->
  <!------------------------------------------------->*/


  /*<------------------------------------------------->
  <!--	handleVideoSelect	-->
  <!------------------------------------------------->*/
  const handleVideoSelect = (videoId) => {
    // Scroll to the top of the player (on mobile).
    scrollTo('previewVideo');
    // Update the video ID in the player.
    setCurrentVideoId(videoId);
  };
  /*<!------------------------------------------------->
  <!--	end handleVideoSelect	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	handle error from youtube api	-->
  <!------------------------------------------------->*/
  const onFail = (error) => {
    console.error('Failed to fetch YouTube playlist:', error);
    setHasError(true);
  };

  // If there's any error from the YouTube API, hide the entire section.
  if (hasError) {
    // return null;
  }
  /*<!------------------------------------------------->
  <!--	end handle error from youtube api	-->
  <!------------------------------------------------->*/



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
        <div className={styles.carousels}>
          {filteredPlaylists.map((playlist) => (
            <React.Fragment key={playlist.playListId}>
              <h3>
                <FontAwesomeIcon icon={playlist.icon} /> {playlist.title}
              </h3>
              <YoutubeCarousel
                playlistId={playlist.playListId}
                onVideoSelect={handleVideoSelect}
                onFail={onFail}
                placeholdersCount={7} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div >
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end SmartTips(Component)	-->
<!--------------------------------------------------------------------------->*/

