import React from "react";
import { useSelector } from "react-redux";
import SearchResultCard from "./SearchResultCard";
import useGetChannelAvatars from "../customHooks/useGetChannelAvatars";

const SearchResults = () => {
    const results = useSelector((state) => state.search.searchSate);
    const channelDetails = useGetChannelAvatars(results);

    return (
        <div className="p-4 w-full">
            {results?.length === 0 ? (
                <p className="text-gray-500 text-lg">No results found.</p>
            ) : (
                results.map((video) => (
                    <SearchResultCard
                        key={video.id.videoId || video.id}
                        video={video}
                        channelAvatar={channelDetails[video.snippet.channelId]} // ✅ Pass avatar
                        viewCount={channelDetails[video.id.videoId]} // ✅ Pass view count
                    />
                ))
            )}
        </div>
    );
};

export default SearchResults;
