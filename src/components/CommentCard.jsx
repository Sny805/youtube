import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { formatTimeAgo } from '../utills/commonFunctions';

const CommentCard = ({ comment }) => {
    if (!comment || !comment.snippet) return null;

    const { authorDisplayName, authorProfileImageUrl, textDisplay, publishedAt, likeCount } =
        comment.snippet.topLevelComment.snippet;
    const { totalReplyCount } = comment.snippet;

    return (
        <div className="flex items-start space-x-4  pb-4">

            <img src={authorProfileImageUrl} alt="Avatar" className="w-10 h-10 rounded-full" />


            <div className="w-full">
                <p className="font-semibold">
                    {authorDisplayName}{' '}
                    <span className="text-gray-500 text-sm">{formatTimeAgo(publishedAt)}</span>
                </p>
                <p className="text-gray-700">{textDisplay}</p>


                <div className="flex items-center space-x-4 mt-2 text-gray-600">
                    <div className="flex items-center space-x-1">
                        <AiOutlineLike className="text-lg" />
                        <span>{likeCount || 0}</span>
                    </div>

                    {totalReplyCount > 0 && (
                        <p className="text-blue-600 cursor-pointer">
                            {totalReplyCount} {totalReplyCount === 1 ? 'Reply' : 'Replies'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommentCard;
