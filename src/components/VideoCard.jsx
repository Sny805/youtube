import React from "react";
import { formatViews, formatTimeAgo, formatDuration } from "../utills/commonFunctions";

const VideoCard = ({ info, channelAvatar }) => {
    if (!info) return null;

    const { snippet, statistics, contentDetails } = info;
    const { duration } = contentDetails
    const { channelTitle, title, thumbnails, publishedAt } = snippet;
    const viewCount = statistics?.viewCount ? formatViews(statistics.viewCount) : "N/A";
    const timeAgo = formatTimeAgo(publishedAt);
    const videoDuration = formatDuration(duration);

    return (
        <div className="p-2 m-2 w-[26rem] transition-transform duration-200 ease-in-out transform hover:scale-105">
            <div className="border relative">
                <img className="rounded-lg w-full" alt="thumbnail" src={thumbnails?.medium?.url} />
                {videoDuration && (
                    <span className="absolute bottom-2 right-2 bg-black text-white font-bold text-xs px-1 py-0.5 rounded-md">
                        {videoDuration}
                    </span>
                )}
            </div>


            <div className="flex">
                {channelAvatar && <img className="w-8 h-8 rounded-full mr-2 mt-3" src={channelAvatar} alt="channel avatar" />}
                <ul className="mt-2">
                    <li className="font-bold">{title}</li>
                    <li className="text-gray-600">{channelTitle}</li>
                    <li className="text-sm text-gray-500">{viewCount} views • {timeAgo}</li>
                </ul>
            </div>

        </div>
    );
};

export default VideoCard;
