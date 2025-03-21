/*<---------------------------------------------------------------------------->
<!--	MediaGallery (Component)	-->
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
import React, { useState, useRef, useEffect } from 'react';
//helpers
import LazyImage from './helpers/LazyImages';
//components
import YoutubeEmbed from '@components/YoutubeEmbed/YoutubeEmbed';
//styles
import styles from './MediaGallery.module.css'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark, faSquareCaretLeft, faSquareCaretRight } from '@awesome.me/kit-c09e05c963/icons/duotone/solid'


const MediaGallery = ({
  mediaItems, // Array of media objects
  galleryClassName = '',
  thumbnailClassName = '',
  modalClassName = '',
  thumbnailSize = 200, // Thumbnail square size in pixels
}) => {


  // Current media index for modal; null = closed
  const [modalIndex, setModalIndex] = useState(null);
  const modalRef = useRef(null);

  /*<------------------------------------------------->
  <!--	display Modal	-->
  <!------------------------------------------------->*/
  //Open modal when a thumbnail is clicked
  const handleThumbnailClick = (index) => {
    setModalIndex(index);
  };
  // Close modal
  const closeModal = () => {
    setModalIndex(null);
  };
  /*<!------------------------------------------------->
  <!--	end display Modal	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	Navigate Modal	-->
  <!------------------------------------------------->*/
  // Navigation: Next 
  const goNext = () => {
    if (modalIndex !== null && modalIndex < mediaItems.length - 1) {
      setModalIndex(modalIndex + 1);
    }
  };
  // Navigation: Previous
  const goPrev = () => {
    if (modalIndex !== null && modalIndex > 0) {
      setModalIndex(modalIndex - 1);
    }
  };
  // Listen for key events (ESC to close, Arrow keys for navigation)
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
    if (e.key === 'ArrowRight') {
      goNext();
    }
    if (e.key === 'ArrowLeft') {
      goPrev();
    }
  };
  // Add/remove key event listener when modalIndex changes
  useEffect(() => {
    if (modalIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      // Cleanup: Remove event listener when component unmounts
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalIndex]);

  // Use the dialog API: call showModal() when modalIndex is set, and close() when not.
  useEffect(() => {
    if (modalRef.current) {
      if (modalIndex !== null && !modalRef.current.open) {
        modalRef.current.showModal();
      } else if (modalIndex === null && modalRef.current.open) {
        modalRef.current.close();
      }
    }
  }, [modalIndex]);

  /*<!------------------------------------------------->
  <!--	end Navigate Modal	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	Render Thumbnails	-->
  <!------------------------------------------------->*/

  const renderThumbnail = (item, index) => {
    /*<--	*** type === youtube ***	-->*/
    if (item.type === 'youtube') {
      //endpoint for the thumbnail
      const thumbnailUrl = `https://img.youtube.com/vi/${item.id}/0.jpg`;
      //render logic
      return (
        //thumbnail container
        <div
          key={index}
          className={`media-thumbnail ${thumbnailClassName}`}
          onClick={() => handleThumbnailClick(index)}
          style={{
            cursor: 'pointer',
            width: thumbnailSize,
            height: thumbnailSize,
            overflow: 'hidden',
          }}
        >
          <LazyImage
            src={thumbnailUrl}
            alt={item.caption || 'YouTube video'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      );
      /*<--	*** end type === youtube ***	-->*/

      /*<--	*** type image ***	-->*/
    } else {
      // HACK: Recommended to use a thumbnail image for better performance
      //if there is no thumbnail, the full image will be used
      const thumbSrc = item.thumbnail || item.src;
      //render logic
      return (
        //thumbnail container
        <div
          key={index}
          className={`media-thumbnail ${thumbnailClassName}`}
          onClick={() => handleThumbnailClick(index)}
          style={{
            cursor: 'pointer',
            width: thumbnailSize,
            height: thumbnailSize,
            overflow: 'hidden',
          }}
        >
          <LazyImage
            src={thumbSrc}
            alt={item.caption || 'Image'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      );
    }

    /*<--	*** end type image ***	-->*/
  };

  /*<!------------------------------------------------->
  <!--	end Render Thumbnails	-->
  <!------------------------------------------------->*/

  /*<------------------------------------------------->
  <!--	Render modal's content (media)	-->
  <!------------------------------------------------->*/
  const renderModalContent = () => {
    //if there's no media, don't open
    if (modalIndex === null) return null;
    //Take the element of the media array that has been pressed
    const item = mediaItems[modalIndex];
    /*<--	*** if media === youtube ***	-->*/
    if (item.type === 'youtube') {
      //use the YoutubeEmbed component for displaying the video. 
      return (
        <YoutubeEmbed
          videoId={item.id}
          containerClassName={styles.youtubeEmbedContainer}
          className={styles.youtubeEmbedPlayer}
        />
      );
      /*<--	*** end if media === youtube ***	-->*/
      /*<--	*** if media === image ***	-->*/
    } else {
      //just display the image as large as you can
      return (
        <img
          src={item.src}
          alt={item.caption || 'Image'}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      );
    }
    /*<--	*** end if media === image ***	-->*/
  };

  /*<!------------------------------------------------->
  <!--	end Render modal's content (media)	-->
  <!------------------------------------------------->*/



  return (
    <div className={`media-gallery ${galleryClassName}`}>
      {/* Thumbnails grid */}
      <div className="media-thumbnails-container"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
      >
        {mediaItems.map((item, index) => renderThumbnail(item, index))}
      </div>

      {/* Modal Overlay */}
      {modalIndex !== null && (
        <dialog
          ref={modalRef}
          className={`${styles.dialog} ${modalClassName}`}
          onClick={(e) => {
            // If clicking on the backdrop (outside the modal content), close the modal.
            if (e.target === modalRef.current) {
              closeModal();
            }
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className={styles.closeButton}
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faRectangleXmark} />
          </button>

          {/* Navigation Arrows */}
          {modalIndex > 0 && (
            <button
              onClick={goPrev}
              className={styles.prevButton}
              aria-label="Previous"
            >
              <FontAwesomeIcon icon={faSquareCaretLeft} />
            </button>
          )}
          {modalIndex < mediaItems.length - 1 && (
            <button
              onClick={goNext}
              className={styles.nextButton}
              aria-label="Next"
            >
              <FontAwesomeIcon icon={faSquareCaretRight} />
            </button>
          )}


          <div className={styles.modalContent}>
            {/* Media Content Container */}
            <div
              className="modal-media"
              style={{
                width: '80vw',
                height: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {renderModalContent()}
            </div>

            {/* Caption */}
            {mediaItems[modalIndex].caption && (
              <div
                className="modal-caption"
                style={{ marginTop: '8px', textAlign: 'center', color: '#000' }}
              >
                {mediaItems[modalIndex].caption}
              </div>
            )}
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MediaGallery;

/*<!--------------------------------------------------------------------------->
<!--	end MediaGallery(Component)	-->
<!--------------------------------------------------------------------------->*/

