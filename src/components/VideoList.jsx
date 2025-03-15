import React from 'react'
import useGetVideos from '../customHooks/useGetVideos';
import useGetChannelAvatars from '../customHooks/useGetChannelAvatars';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import VideoDetails from './VideoDetails';




const VideoList = () => {
    const videos = useGetVideos();
    return (
        <div className="flex flex-wrap w-full justify-start flex-col">
            {videos?.map((video) => (
                <Link to={`/watch?v=${video.id}`} key={video.id}>
                    <VideoDetails info={video} />
                </Link>
            ))}
        </div>
    );
};


export default VideoList
