import React, { useState } from 'react';
import Options from '../Options/Options';

const SingleQuestion = ({questions, quizCount}) => {
    const {question, correctAnswer, options} = questions;
    const [correct, setCorrect] = useState(false)


    let uniqueIDValue = 1;
    const uniqueID = () =>{
        uniqueIDValue++;
        return uniqueIDValue;
    }
    return (
        <div className='single-quiz'>
            <div className="question">
                <h3>Quiz {quizCount}: {question}</h3>

                <div className="check-correct" onClick={() => setCorrect(!correct)}>
                    {
                        correct ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>
                    }
                </div>
            </div>
            <div className="all-options">
                {
                    options.map(option => <Options
                    option={option}
                    key={uniqueID()}
                    ></Options>)
                }
            </div>
            <div className="correct-answer">
                <h5> <span>Correct Answer:</span>{correct ? correctAnswer:''} </h5>
            </div>
        </div>
    );
};

export default SingleQuestion;