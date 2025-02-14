/*<------------------------------------------------->
<!--	useYoutubePlaylist (hook)	-->
<!-------------------------------------------------->
* Descripción: This is a custom hook that fetches a YouTube playlist and returns the video data.
    
* Parámetros:
    - playlistId: The ID of the YouTube playlist.
    - maxResults: The maximum number of videos to fetch.
* Dependencias:
    - useState
    - useEffect
* Devuelve/resultado: An object with the video data {id, title, thumbnail}, loading state, and error state.

<!------------------------------------------------->*/

import { useState, useEffect } from 'react';

export default function useYouTubePlaylist(playlistId, maxResults = 30) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
        const endpoint = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=${maxResults}&playlistId=${playlistId}&key=${API_KEY}`;

        fetch(endpoint)
            .then((res) => res.json())
            .then((data) => {
                // If the API returns a critical error, handle it here.
                if (data.error) {
                    setError(data.error);
                    return;
                }

                // Filter out items without a valid snippet or video ID.
                //HACK: we will filter the items that do not have a snippet or videoId or thumbnails or other required data, this way if a video  doesn't complaies with the required data it will be filtered out and the hook wont pass an err for everything.
                const vids = (data.items || [])
                    .filter(item =>
                        item.snippet &&
                        item.snippet.resourceId &&
                        item.snippet.resourceId.videoId &&
                        item.snippet.thumbnails &&
                        item.snippet.thumbnails.default
                    )
                    .map(item => ({
                        id: item.snippet.resourceId.videoId,
                        title: item.snippet.title,
                        thumbnail: item.snippet.thumbnails.default.url,
                    }));

                setVideos(vids);
            })
            .catch((err) => setError(err))
            //LEARN: .finally() is a method that is called after the promise is settled (either resolved or rejected).
            .finally(() => setLoading(false));
    }, [playlistId, maxResults]);

    return { videos, loading, error };
}


/*<!------------------------------------------------->
<!--	end useYoutubePlaylist (hook)	-->
<!------------------------------------------------->*/