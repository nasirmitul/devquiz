import React from 'react';

const QuizTopic = ({quizData}) => {
    return (
        <div>
            <div className="quiz">
                <div className="image">
                    <img src={quizData.logo} alt="" />
                </div>
                <div className="title">
                    <h4>{quizData.name}</h4>
                </div>
                <div className="count-button">
                    <p className='total'>{quizData.total} question</p>
                    <button>Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;