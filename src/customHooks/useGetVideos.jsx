import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_APIS } from "../utills/constants";

const useGetVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const response = await fetch(YOUTUBE_VIDEOS_APIS);
            const json = await response.json();
            setVideos(json.items);
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    return videos;
};

export default useGetVideos;

