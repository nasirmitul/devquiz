import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopic = ({ quizData }) => {
    const { name, logo, total, id } = quizData;
    return (
        <div>
            <div className="quiz">
                <div className="image">
                    <img src={logo} alt="" />
                </div>
                <div className="title">
                    <h4>{name}</h4>
                </div>
                <div className="count-button">
                    <p className='total'>{total} question</p>
                    <Link to={`quiz/${id}`}>
                        <button>Start Quiz</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;