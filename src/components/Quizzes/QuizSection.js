import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from './QuizOption';

const QuizSection = () => {
    const quizzesOption = useLoaderData();
    return (
        <div className='grid grid-cols-2 gap-x-3 gap-y-6 bg w-3/5 mx-auto mt-16 mb-6'>
            {quizzesOption.data.map(quizOption => <QuizOption key={quizOption.id} quizOption={quizOption}></QuizOption>)}
        </div>
    );
};

export default QuizSection;