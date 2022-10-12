import { faCircleQuestion, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from './Option';

const Quiz = ({ question }) => {
    const { question: questionQ, correctAnswer, options } = question;
    const [correctlyAnswered, setCorrectlyAnswered] = useState(0);
    const judgeAnswer = chosenAnswer => {
        if (chosenAnswer === correctAnswer) {
            console.log(chosenAnswer, correctAnswer)
            const rightAnswer = correctlyAnswered + 1;
            setCorrectlyAnswered(rightAnswer);
            toast.success('Your Answer is correct!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            console.log(chosenAnswer, correctAnswer)
            toast.error(`Your Answer is correct! The Right answer is- ${correctAnswer}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    const showAnswer = () => {
        toast.info(`The answer is- ${correctAnswer}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
        <div className='bg-gray-100 mb-4 p-4 border-2 rounded-lg'>
            <h1 className='text-2xl font-bold mb-2 text-[#A66CFF]'><FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon> {questionQ.replace('</p>', '')}</h1>
            <hr className='w-3/4 mb-3' />
            <div className='grid grid-cols-2 gap-2'>
                {
                    options.map(option => <Option key={option} option={option} judgeAnswer={judgeAnswer}></Option>)
                }
            </div>
            <div className='flex justify-center mt-5'>
                <button onClick={showAnswer} className='text-lg text-[#A66CFF] px-3 py-1 font-bold border-2 rounded-lg border-[#A66CFF] hover:bg-[#A66CFF] hover:text-white'>Show Answer <FontAwesomeIcon className='ml-2' icon={faEye}></FontAwesomeIcon></button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Quiz;