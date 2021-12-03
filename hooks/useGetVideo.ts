import {useState, useEffect} from 'react';
import { getVideo } from '../services/videoService';

const useGetVideo = (videoId) => {
    const [loading, setLoading] = useState(true);
    const [video, setVideo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (videoId) {
            getVideo(videoId)
                .then(res => setVideo(res.data))
                .catch(setError)
                .finally(() => setLoading(false));
        }
    }, [videoId])

    return {
        loading,
        error,
        video
    }
}

export default useGetVideo;