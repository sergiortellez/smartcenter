/*<---------------------------------------------------------------------------->
<!--	YoutubeEmbed (Component)	-->
<!----------------------------------------------------------------------------->
* Description: This component is a wrapper for the react-youtube library. It allows to embed a youtube video in a react component.
     
* Parameters:
    - videoId: The id of the video to embed.
    - opts: The options for the video player.
    - containerClassName: The class name for the container div.
    - className: The class name for the player div.
    - onReady: The callback function for when the video is ready.
    - onPlay: The callback function for when the video is played.
    - onPause: The callback function for when the video is paused.
    - onEnd: The callback function for when the video ends.
    - onError: The callback function for when there is an error.
    - onStateChange: The callback function for when the state of the video changes.

* Dependencies:
    - YouTube from react-youtube library.

* Returns/results: A react component that embeds a youtube video.
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//libraries
import YouTube from 'react-youtube';



const YoutubeEmbed = ({
  videoId,
  opts = {},
  containerClassName = '',
  className = '',
  onReady,
  onPlay,
  onPause,
  onEnd,
  onError,
  onStateChange,
}) => {
  // Default options that can override via the `opts` prop.
  // Setting width and height to "100%" allows the CSS container to manage responsiveness.
  const defaultOpts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      loop: 0, // Set to 1 for loop
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

