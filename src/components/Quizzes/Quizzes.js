import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from './QuizOption';

const Quizzes = () => {
    const quizzesOption = useLoaderData();
    return (
        <div className='grid grid-cols-2 gap-x-3 gap-y-6 bg w-3/5 mx-auto mt-20'>
            {quizzesOption.data.map(quizOption => <QuizOption key={quizOption.id} quizOption={quizOption}></QuizOption>)}
        </div>
    );
};

export default Quizzes;