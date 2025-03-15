import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useGetChannelAvatars from "../customHooks/useGetChannelAvatars";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../utills/videoSlice";



const VideosContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories(0))
    }, [])

    // const videos = useGetVideos();
    const { categoriesVidoes, status } = useSelector(state => state.videos)

    const channelAvatars = useGetChannelAvatars(categoriesVidoes);



    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap w-full">
                {categoriesVidoes?.map((video) => (
                    <Link to={`watch?v=${video.id}`} key={video.id}>
                        <VideoCard info={video} channelAvatar={channelAvatars[video.snippet.channelId]?.avatar} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default VideosContainer;
