// src/components/Question/FreeTextQuestion.jsx
import React from 'react';

const FreeTextQuestion = ({ content, handleUpdate }) => {
    return (
        <div className="free-text-question">
            <label htmlFor="free-text">Your Question:</label>
            <input
                type="text"
                id="free-text"
                value={content}
                onChange={(e) => handleUpdate(e.target.value)}
                placeholder="Type your answer here..."
            />
        </div>
    );
};

export default FreeTextQuestion;
