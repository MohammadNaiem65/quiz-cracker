import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Quiz from './Quizzes';

const QuizOption = ({ quizOption }) => {
    const { id, logo, name, total } = quizOption;
    return (
        <div className='bg-[#9C9EFE] flex rounded-lg'>
            <img className='w-[15rem] h-[15rem] m-4 bg-blue-100 rounded-lg' src={logo} alt="" />
            <div className='flex flex-col justify-center items-start'>
                <h3 className='text-xl font-bold'>{name}</h3>
                <p className='text-lg font-semibold'>Total Questions: {total}</p>
                <Link to={`/quiz/${id}`} className='bg-[#A66CFF] w-full py-2 mt-4 font-bold text-white rounded-lg hover:bg-[#AFB4FF] flex justify-center items-center'>Start<FontAwesomeIcon className='ml-3' icon={faArrowRight}></FontAwesomeIcon></Link>
            </div>
        </div>
    );
};

export default QuizOption;