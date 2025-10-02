import React, { use } from 'react';

const CommentDetails = ({commentPromise}) => {
    const {email, body} = use(commentPromise);
    return (
        <div>
            <p className='text-lg font-semibold'>{email}</p>
            <p className='text-sm pt-3'>Description: {body}</p>
        </div>
    );
};

export default CommentDetails;