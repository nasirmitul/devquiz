import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import Statistics from '../Statistics/Statistics';
import QuizTopic from './QuizTopic';

const Home = () => {
    const quizAllData = useLoaderData().data;
    return (
        <div className='container'>
            <HeroSection></HeroSection>
            <div className="quizzes">
                <h2 className='quiz-title'>
                    Choose any topic and Start Quiz
                </h2>
                <div className="quiz-topic">
                    {
                        quizAllData.map(quizData => <QuizTopic
                            key={quizData.id}
                            quizData={quizData}
                        ></QuizTopic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;