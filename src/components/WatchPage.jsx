import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utills/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import VideoList from "./VideoList";
import useVideoDetails from "../customHooks/useVideoDetails";
import { formatViews, formatTimeAgo } from "../utills/commonFunctions";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

    const { videoDetails, channelDetails, comments, loading, error } = useVideoDetails(videoId);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        dispatch(closeSideBar());
    }, [dispatch]);

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="flex w-full justify-center p-4 gap-10">
            {/* Video Section */}
            <div className="flex w-[65%] flex-col gap-4">
                <div className="w-full">
                    {/* Video Player */}
                    <iframe
                        className="rounded-xl w-full h-[450px]"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>

                    {/* Video Title */}
                    <h1 className="text-xl font-semibold mt-3">{videoDetails?.snippet?.title}</h1>

                    {/* Channel Info */}
                    {channelDetails && (
                        <div className="flex items-center gap-4 mt-3">
                            <img
                                className="w-12 h-12 rounded-full"
                                src={channelDetails?.snippet?.thumbnails?.default?.url}
                                alt="Channel Logo"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">{videoDetails?.snippet?.channelTitle}</h3>
                                <p className="text-gray-800 text-sm">
                                    {formatViews(parseInt(channelDetails?.statistics?.subscriberCount))} subscribers
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Video Description */}
                    <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                        <p>
                            {formatViews(videoDetails?.statistics?.viewCount)} views • {formatTimeAgo(videoDetails?.snippet?.publishedAt)}
                        </p>
                        <p className="text-md text-gray-800">
                            {showFullDescription
                                ? videoDetails?.snippet?.description
                                : videoDetails?.snippet?.description?.slice(0, 250) + " ..."}
                            {videoDetails?.snippet?.description?.length > 150 && (
                                <button
                                    className="text-gray-700 mt-1 text-sm font-semibold"
                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                >
                                    {showFullDescription ? "less" : "more"}
                                </button>
                            )}
                        </p>
                    </div>
                </div>

                {/* Comments Section */}
                <div>
                    <Comments comments={comments} />
                </div>
            </div>

            {/* Related Videos Section */}
            <div className="w-[30%]">
                <VideoList />
            </div>
        </div>
    );
};

export default WatchPage;
