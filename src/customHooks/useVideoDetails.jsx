import { useEffect, useState, useCallback } from "react";
import { VIDEO_DETAILS_API_URL, CHANNEL_API_URL, GOOGLE_API_KEY, COMMENTS_URL } from "../utills/constants";

const useVideoDetails = (videoId) => {
    const [videoDetails, setVideoDetails] = useState(null);
    const [channelDetails, setChannelDetails] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchVideoAndChannelDetails = useCallback(async () => {
        if (!videoId) return;

        try {
            setLoading(true);
            setError(null);

            // Fetch Video Details
            const videoResponse = await fetch(`${VIDEO_DETAILS_API_URL}${videoId}`);
            const videoJson = await videoResponse.json();
            if (!videoJson.items || videoJson.items.length === 0) throw new Error("No video data found.");

            const videoDetail = videoJson.items[0];
            setVideoDetails(videoDetail);

            // Fetch Channel Details
            const channelId = videoDetail.snippet.channelId;
            const channelResponse = await fetch(`${CHANNEL_API_URL}${channelId}&key=${GOOGLE_API_KEY}`);
            const channelJson = await channelResponse.json();
            if (!channelJson.items || channelJson.items.length === 0) throw new Error("No channel data found.");

            setChannelDetails(channelJson.items[0]);

            // Fetch Comments
            const commentsResponse = await fetch(`${COMMENTS_URL}${videoId}&maxResults=50&key=${GOOGLE_API_KEY}`);
            const commentsJson = await commentsResponse.json();
            setComments(commentsJson.items || []);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [videoId]);

    useEffect(() => {
        fetchVideoAndChannelDetails();
    }, [fetchVideoAndChannelDetails]);

    return { videoDetails, channelDetails, comments, loading, error };
};

export default useVideoDetails;
