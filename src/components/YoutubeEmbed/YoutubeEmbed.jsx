/*<---------------------------------------------------------------------------->
<!--	YoutubeEmbed (Component)	-->
<!----------------------------------------------------------------------------->
* Description: This component 
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//libraries
import YouTube from 'react-youtube';



const YoutubeEmbed = ({
  videoId,
  opts = {},
  containerClassName = 'videoContainer',
  className = '',
  onReady,
  onPlay,
  onPause,
  onEnd,
  onError,
  onStateChange,
}) => {
  // Default options that you can override via the `opts` prop.
  // Setting width and height to "100%" allows the CSS container to manage responsiveness.
  const defaultOpts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      loop: 0, // Set to 1 if you want to loop; note that you'll need to provide a `playlist`
      // If looping a single video, the playlist must be set to the same video ID:
      playlist: videoId,
      modestbranding: 1,
      rel: 0,
      enablejsapi: 1,
      // Add any additional default parameters here
    },
  };

  // Merge the default options with any user-supplied overrides.
  // This deep merge ensures that playerVars can be extended or overridden.
  const mergedOpts = {
    ...defaultOpts,
    ...opts,
    playerVars: {
      ...defaultOpts.playerVars,
      ...(opts.playerVars || {}),
    },
  };

  return (
    <div className={containerClassName}>
      <YouTube
        videoId={videoId}
        opts={mergedOpts}
        className={className}
        onReady={onReady}
        onPlay={onPlay}
        onPause={onPause}
        onEnd={onEnd}
        onError={onError}
        onStateChange={onStateChange}
      />
    </div>
  );
};

export default YoutubeEmbed;
/*<!--------------------------------------------------------------------------->
<!--	end YoutubeEmbed(Component)	-->
<!--------------------------------------------------------------------------->*/

