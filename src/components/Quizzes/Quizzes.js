import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Quizzes = () => {
    const quizDetails = useLoaderData();
    const { logo, name, total, questions } = quizDetails.data;
    return (
        <div className='w-full'>
            <div className='w-full flex flex-col items-center justify-center'>
                <img className='w-36 bg-blue-100 p-3 rounded-lg mt-5' src={logo} alt="" />
                <h2 className='text-2xl font-semibold'>Quiz on <span className='font-bold text-[#A66CFF]'>{name}</span></h2>
                <h1 className='text-xl font-semibold'>Total <span className='font-bold text-[#A66CFF]'>{total}</span> questions to answer.</h1>
                <hr className='border-2 border-[#A66CFF] bg-[#A66CFF] h-1 w-3/5 mt-3 rounded-lg' />
            </div>
            <div className='w-4/5 mx-auto mt-20'>
                {
                    questions.map(question => <Quiz key={question.id} question={question}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizzes;