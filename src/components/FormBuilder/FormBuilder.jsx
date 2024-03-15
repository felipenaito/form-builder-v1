import React, { useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Question from '../Question/Question';
import { v4 as uuidv4 } from 'uuid';

const FormBuilder = () => {
    const [questions, setQuestions] = useState([]);

    // Function to add a question with specific content based on the type
    const addQuestion = (type) => {
        const newQuestionContent = {
            text: 'Please enter your text here',
            likeDislike: { statement: 'Do you like our product?', likes: 0, dislikes: 0 },
            scale: { statement: 'Rate your experience from 1 to 10', scaleValue: null },
        };

        const newQuestion = {
            id: uuidv4(), // Unique identifier for each question
            type: type,
            content: newQuestionContent[type],
        };

        setQuestions([...questions, newQuestion]);
    };

    // Function to remove a question
    const removeQuestion = (id) => {
        setQuestions(questions.filter((question) => question.id !== id));
    };

    // Function to handle drag end from react-beautiful-dnd
    const onDragEnd = useCallback((result) => {
        if (!result.destination) return; // Dropped outside the list

        const items = Array.from(questions);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setQuestions(items);
    }, [questions]);

    // Function to update question content
    const updateQuestion = (id, content) => {
        setQuestions(questions.map((q) => (q.id === id ? { ...q, content } : q)));
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="formBuilderDroppable">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {questions.map((question, index) => (
                            <Draggable key={question.id} draggableId={question.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Question
                                            key={question.id}
                                            question={question}
                                            index={index}
                                            removeQuestion={() => removeQuestion(question.id)}
                                            updateQuestion={(content) => updateQuestion(question.id, content)}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <button onClick={() => addQuestion('text')}>Add Free Text</button>
            <button onClick={() => addQuestion('likeDislike')}>Add Like/Dislike</button>
            <button onClick={() => addQuestion('scale')}>Add Scale 1 to 10</button>
        </DragDropContext>
    );
};

export default FormBuilder;