/*<---------------------------------------------------------------------------->
<!--	YoutubeCarousel (Component)	-->
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
import { useRef, useState, useEffect } from 'react';
//Hooks
import useYouTubePlaylist from '@hooks/useYouTubePlaylist';
//styles
import styles from './YoutubeCarousel.module.css'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareLeft, faSquareRight } from '@awesome.me/kit-c09e05c963/icons/duotone/solid'


export default function YoutubeCarousel({
  playlistId,
  onVideoSelect,
  placeholdersCount = 5,
  onFail,
}) {
  //Using the hook useYouTubePlaylist for fetching the videos
  const { videos, loading, error } = useYouTubePlaylist(playlistId);
  const carouselRef = useRef(null);

  // State to control visibility of prev/next buttons.
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  /*<------------------------------------------------->
  <!--	buttons visibility	-->
  <!------------------------------------------------->*/
  // Update arrow button visibility on scroll.
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateButtons = () => {
      setShowPrev(carousel.scrollLeft > 0);
      setShowNext(carousel.scrollLeft + carousel.offsetWidth < carousel.scrollWidth);
    };

    // Initialize button state.
    updateButtons();
    carousel.addEventListener('scroll', updateButtons);
    return () => carousel.removeEventListener('scroll', updateButtons);
  }, [videos, loading]);
  /*<!------------------------------------------------->
  <!--	end buttons visibility	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	Notify Parent if err	-->
  <!------------------------------------------------->*/
  useEffect(() => {
    if (error && onFail) {
      onFail(error);
    }
  }, [error, onFail]);
  /*<!------------------------------------------------->
  <!--	end Notify Parent if err	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	handle Buttons	-->
  <!------------------------------------------------->*/
  //handle Prev button
  const handlePrev = () => {
    const carousel = carouselRef.current;
    if (carousel && carousel.firstChild) {
      const itemWidth = carousel.firstChild.offsetWidth * 2;
      carousel.scrollLeft -= itemWidth;
    }
  };
  //handle Next button
  const handleNext = () => {
    const carousel = carouselRef.current;
    if (carousel && carousel.firstChild) {
      const itemWidth = carousel.firstChild.offsetWidth * 2;
      carousel.scrollLeft += itemWidth;
    }
  };
  /*<!------------------------------------------------->
  <!--	end handle Buttons	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	Handle click of the video (notify parent)	-->
  <!------------------------------------------------->*/
  const handleVideoClick = (videoId) => {
    if (onVideoSelect) {
      onVideoSelect(videoId);
    }
  };
  /*<!------------------------------------------------->
  <!--	end Handle click of the video	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	Render Placeholder while loading	-->
  <!------------------------------------------------->*/

  const renderPlaceholders = () => {
    const phs = [];
    for (let i = 0; i < placeholdersCount; i++) {
      phs.push(
        <div key={`placeholder-${i}`} className={styles.carouselPlaceHolder}>
          <div className={styles.PlaceHolderPreview}></div>
          <div className={styles.PlaceHolderTitle}></div>
          <div className={styles.PlaceHolderTitleShort}></div>
        </div>
      );
    }
    return phs;
  };

  /*<!------------------------------------------------->
  <!--	end Render Placeholder while loading	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	render Logic	-->
  <!------------------------------------------------->*/
  return (
    <div className={styles.container} data-id={playlistId}>
      {!error && (
        <>
          <button
            type="button"
            className={`${styles.prevButton} ${showPrev ? styles.showButton : styles.hideButton}`}
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faSquareLeft} />
          </button>

          <div className={`${styles.carousel} ${styles.landscape}`} ref={carouselRef}>
            {loading && renderPlaceholders()}
            {!loading &&
              videos.map((video) => (
                <button
                  key={video.id}
                  type="button"
                  className={styles.carouselItem}
                  onClick={() => handleVideoClick(video.id)}
                >
                  <img src={video.thumbnail} alt="video thumbnail" loading="lazy" />
                  <figcaption>
                    {video.title.length > 45 ? video.title.substring(0, 45) + '...' : video.title}
                  </figcaption>
                </button>
              ))}
          </div>

          <button
            type="button"
            className={`${styles.nextButton} ${showNext ? styles.showButton : styles.hideButton}`}
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faSquareRight} />
          </button>
        </>
      )}
    </div>
  );
  /*<!------------------------------------------------->
  <!--	end render Logic	-->
  <!------------------------------------------------->*/
}

/*<!--------------------------------------------------------------------------->
<!--	end YoutubeCarousel(Component)	-->
<!--------------------------------------------------------------------------->*/

