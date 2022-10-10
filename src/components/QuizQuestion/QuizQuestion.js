import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion.js/SingleQuestion';

const QuizQuestion = () => {
    const quizQuestion = useLoaderData().data;
    console.log(quizQuestion);


    let quizCount = 1;
    const {name,total, questions} = quizQuestion;
    return (
        <div className='quiz-container'>
            <div className="quiz-topic-title">
                <h3>Quiz Topic: {name}</h3>
            </div>
            <p className='total-question'>Total {total} Question</p>
            <div className="questions">
                {
                    questions.map(question => <SingleQuestion
                    key={question.id}
                    questions={question}
                    quizCount={quizCount++}
                    ></SingleQuestion>)
                }
            </div>
        </div>
    );
};

export default QuizQuestion;