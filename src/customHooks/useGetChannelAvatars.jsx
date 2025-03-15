import { useEffect, useState } from "react";
import { CHANNEL_API_URL, GOOGLE_API_KEY, VIDEO_DETAILS_API_URL } from "../utills/constants";

const useGetChannelAvatars = (videos) => {
    const [channelData, setChannelData] = useState({});

    useEffect(() => {
        if (videos.length > 0) {
            const channelIds = [...new Set(videos.map((video) => video.snippet.channelId))];
            const videoIds = videos.map((video) => video.id.videoId || video.id);

            fetchChannelAndVideoData(channelIds, videoIds);
        }
    }, [videos]);

    const fetchChannelAndVideoData = async (channelIds, videoIds) => {
        if (channelIds.length === 0 || videoIds.length === 0) return;

        try {

            const channelResponse = await fetch(`${CHANNEL_API_URL}${channelIds.join(",")}&key=${GOOGLE_API_KEY}`);
            const channelData = await channelResponse.json();

            const avatars = {};
            channelData.items?.forEach((channel) => {
                avatars[channel.id] = channel.snippet.thumbnails.default.url
            });


            const videoResponse = await fetch(`${VIDEO_DETAILS_API_URL}${videoIds}`);
            const videoData = await videoResponse.json();

            videoData.items?.forEach((video) => {
                avatars[video.id] = video.statistics.viewCount
            });

            setChannelData(avatars);
        } catch (error) {
            console.error("Error fetching channel avatars or video stats:", error);
        }
    };

    return channelData;
};

export default useGetChannelAvatars;
