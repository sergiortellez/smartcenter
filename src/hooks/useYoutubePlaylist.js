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

export default function useYouTubePlaylist(playlistId, maxResults = 12) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Get the API key from the Vite environment variable.
        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
        const endpoint = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=${maxResults}&playlistId=${playlistId}&key=${API_KEY}`;

        fetch(endpoint)
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    // Map the response to a simpler video object.
                    const vids = data.items.map((item) => ({
                        id: item.snippet.resourceId.videoId,
                        title: item.snippet.title,
                        thumbnail: item.snippet.thumbnails.default.url,
                    }));
                    setVideos(vids);
                }
            })
            //handle errors
            .catch((err) => setError(err))
            //LEARN: .finally() is a method that is called after the promise is settled (either resolved or rejected).
            .finally(() => setLoading(false));
    }, [playlistId, maxResults]);

    return { videos, loading, error };
}

/*<!------------------------------------------------->
<!--	end useYoutubePlaylist (hook)	-->
<!------------------------------------------------->*/