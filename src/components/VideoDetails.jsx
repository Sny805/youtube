import React from 'react';
import { formatDuration, formatTimeAgo, formatViews } from '../utills/commonFunctions';
import { useNavigate } from 'react-router-dom';

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const VideoDetails = ({ info }) => {
    if (!info) return null;
    const { snippet, statistics, contentDetails } = info;
    const { duration } = contentDetails;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;
    const viewCount = statistics?.viewCount ? formatViews(statistics.viewCount) : "N/A";
    const timeAgo = formatTimeAgo(publishedAt);
    const videoDuration = formatDuration(duration);


    const handleVideoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div onClick={handleVideoClick} className=" flex p-2 w-[100%] transition-transform duration-200 ease-in-out transform hover:scale-105">
            <div className="relative w-2/5">
                <img className="rounded-lg w-full h-[110px] object-cover" alt="thumbnail" src={thumbnails?.medium?.url} />
                {videoDuration && (
                    <span className="absolute bottom-2 right-2 bg-black text-white font-bold text-xs px-1 py-0.5 rounded-md">
                        {videoDuration}
                    </span>
                )}
            </div>

            <div className="w-3/5 pl-3 flex flex-col gap-2">
                <h3 className="font-semibold text-sm">{truncateText(title, 50)}</h3>
                <p className="text-gray-600 text-xs">{channelTitle}</p>
                <p className="text-gray-500 text-xs">{viewCount} views • {timeAgo}</p>
            </div>
        </div>
    );
};

export default VideoDetails;
