import React from 'react';
import CommentCard from './CommentCard';

const Comments = ({ comments }) => {
    if (!comments || comments.length == 0) {
        return <p className='text-gray-500'>No comments available</p>
    }

    console.log(comments)
    return (
        <div>
            {
                comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} />
                ))
            }

        </div>
    )
}

export default Comments
