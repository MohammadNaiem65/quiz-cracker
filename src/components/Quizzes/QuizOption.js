import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const QuizOption = ({ quizOption }) => {
    const { logo, name, total } = quizOption;
    console.log(quizOption)
    return (
        <div className='bg-[#9C9EFE] flex rounded-lg'>
            <img className='w-[15rem] h-[15rem] m-4 bg-gray-300 rounded-lg' src={logo} alt="" />
            <div className='flex flex-col justify-center items-start'>
                <h3 className='text-xl font-bold'>{name}</h3>
                <p className='text-lg font-semibold'>Total Questions: {total}</p>
                <button className='bg-[#A66CFF] w-full py-2 mt-4 font-bold text-white rounded-lg hover:bg-[#AFB4FF]'>Start  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default QuizOption;