import React from 'react';
import FreeTextQuestion from './FreeTextQuestion';
import LikeDislikeQuestion from './LikeDislikeQuestion';
import ScaleQuestion from './ScaleQuestion';

const Question = ({ question, index, removeQuestion, updateQuestion }) => {
    // Function to handle the content update for the question
    const handleUpdate = (content) => {
        updateQuestion(question.id, content);
    };

    // Decide which question type to render
    const renderQuestionType = (type) => {
        switch (type) {
            case 'text':
                return <FreeTextQuestion content={question.content} handleUpdate={handleUpdate} />;
            case 'likeDislike':
                return <LikeDislikeQuestion content={question.content} handleUpdate={handleUpdate} />;
            case 'scale':
                return <ScaleQuestion content={question.content} handleUpdate={handleUpdate} />;
            default:
                return <p>Unsupported question type</p>;
        }
    };

    return (
        <div className="question-container">
            {renderQuestionType(question.type)}
            <button onClick={() => removeQuestion(question.id)}>Remove</button>
        </div>
    );
};

export default Question;
