// src/components/Question/LikeDislikeQuestion.jsx
import React from 'react';

const LikeDislikeQuestion = ({ content, handleUpdate }) => {
    // Function to handle like or dislike
    const handleClick = (choice) => {
        // Assuming content has a shape of { statement: 'Do you like our product?', likes: 0, dislikes: 0 }
        const newContent = {
            ...content,
            likes: choice === 'like' ? content.likes + 1 : content.likes,
            dislikes: choice === 'dislike' ? content.dislikes + 1 : content.dislikes,
        };
        handleUpdate(newContent);
    };

    return (
        <div className="like-dislike-question">
            <p>{content.statement}</p>
            <button onClick={() => handleClick('like')}>
                Like ({content.likes})
            </button>
            <button onClick={() => handleClick('dislike')}>
                Dislike ({content.dislikes})
            </button>
        </div>
    );
};

export default LikeDislikeQuestion;
