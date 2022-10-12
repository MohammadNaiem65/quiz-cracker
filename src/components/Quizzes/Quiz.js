import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Option from './Option';

const Quiz = ({ question }) => {
    const { question: questionQ, correctAnswer, options } = question;
    console.log(options)
    return (
        <div className='bg-gray-100 mb-4 p-4 border-2 rounded-lg'>
            <h1 className='text-2xl font-bold mb-2 text-[#A66CFF]'><FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon> {questionQ.replace('</p>', '')}</h1>
            <hr className='w-3/4 mb-3' />
            <div className='grid grid-cols-2 gap-2'>
                {
                    options.map(option => <Option key={option} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default Quiz;