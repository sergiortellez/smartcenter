/*<---------------------------------------------------------------------------->
<!--	SmartTips (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     This component is responsible for rendering the Smart Tips section of the home page. It calls the YoutubeCarousel component to display the videos and manages the state of the current video being displayed. It also filters the playlists based on the current campus. It's important to note that the initial video displayed is based on the campus.
* Parameters:
    - none  
* Dependencies:
    - useCampus: custom hook to get the current campus.
    - useScrollTo: custom hook to scroll to a specific element.
    - YoutubeCarousel: component to display the videos.
    - Data/SmartTipsData: data for the playlists.
    - styles: css styles for the component.
* Returns/results: Renders the Smart Tips section of the home page.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//react
import { useState, useEffect } from 'react';
//Context
import useCampus from '@hooks/useCampus';
//Components
import YoutubeCarousel from '@components/YoutubeCarousel/YoutubeCarousel'
import YoutubeEmbed from '@components/YoutubeEmbed/YoutubeEmbed'
//hooks
import useScrollTo from '@hooks/useScrollTo';
import useIsMobile from '@hooks/useIsMobile';
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
  // Define a mapping from campus to initial video ID.
  const campusToVideoId = {
    AGS: 'LUQsIWiWb1s',
    CDMX: 'GDXqbd5khbg',
    GDL: 'q5dfHkuaDf4',
  };
  useEffect(() => {
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
  const isMobile = useIsMobile();
  const offset = isMobile ? 10 : 90;
  const handleVideoSelect = (videoId) => {
    // Scroll to the top of the player (on mobile).
    scrollTo('previewVideo', offset);
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
    setHasError(true);
  };

  // If there's any error from the YouTube API, hide the entire section.
  if (hasError) {
    //return null;
  }
  /*<!------------------------------------------------->
  <!--	end handle error from youtube api	-->
  <!------------------------------------------------->*/

  return (
    <div id="tips" className={styles.tips}>
      <h1 className={styles.title}>SMART Tips</h1>
      <div className={styles.flexTips}>
        {/* Video Preview Section */}

        <YoutubeEmbed
          videoId={currentVideoId}
          iframeId="previewVideo"
          containerClassName={styles.preview}
        />

        {/* Carousels Section */}
        <div className={styles.carousels}>
          {filteredPlaylists.map((playlist) => (
            <div className={styles.carousel} key={playlist.playListId}>
              {playlist.icon && <FontAwesomeIcon icon={playlist.icon} className={styles.carouselIcon} />}

              <div className={styles.carouselTitle}>
                {playlist.title}
              </div>
              <YoutubeCarousel
                playlistId={playlist.playListId}
                onVideoSelect={handleVideoSelect}
                onFail={onFail}
                placeholdersCount={7}
              />
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end SmartTips(Component)	-->
<!--------------------------------------------------------------------------->*/

