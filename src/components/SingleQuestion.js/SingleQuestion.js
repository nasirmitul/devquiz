import React from 'react';

const SingleQuestion = ({questions, quizCount}) => {
    const {question, correctAnswer, options} = questions;
    return (
        <div className='single-quiz'>
            <div className="question">
                <h3>Quiz {quizCount}: {question}</h3>
            </div>
            <div className="options">
                {
                    options.map(option => <p>{option}</p>)
                }
            </div>
        </div>
    );
};

export default SingleQuestion;