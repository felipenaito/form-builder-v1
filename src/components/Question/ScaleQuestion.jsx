// src/components/Question/ScaleQuestion.jsx
import React from 'react';

const ScaleQuestion = ({ content, handleUpdate }) => {
    return (
        <div className="scale-question">
            <p>{content.statement}</p>
            <div className="scale-options">
                {Array.from({ length: 10 }, (_, i) => (
                    <button
                        key={i}
                        className={content.scaleValue === i + 1 ? 'selected' : ''}
                        onClick={() => handleUpdate({ ...content, scaleValue: i + 1 })}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ScaleQuestion;
