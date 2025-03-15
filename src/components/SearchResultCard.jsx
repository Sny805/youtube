import React from 'react'
import { Link } from 'react-router-dom';
import { formatViews, formatTimeAgo } from '../utills/commonFunctions';

const SearchResultCard = ({ video, channelAvatar, viewCount }) => {

    const { id, snippet } = video;
    const { title, channelTitle, thumbnails, publishedAt, description } = snippet;
    const videoId = id.videoId || id;
    return (
        <Link to={`/watch?v=${videoId}`} className="flex gap-4 p-3">
            <img className="w-[40%] h-100 rounded-lg object-cover" src={thumbnails?.medium?.url} alt="thumbnail" />
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold w-[90%]">{title}</h3>
                <p className="text-gray-600 text-sm">{formatViews(viewCount)} views • {formatTimeAgo(publishedAt)}</p>

                <div className="text-gray-600 text-sm flex items-center gap-2">
                    {channelAvatar && <img className="w-7 h-7 rounded-full" src={channelAvatar} alt="channel" />}.
                    <span>{channelTitle}</span>
                </div>
                <p className="text-gray-600">{description}</p>

            </div>
        </Link>
    );
}

export default SearchResultCard
