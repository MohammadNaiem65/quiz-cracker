import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Option = ({ option }) => {
    console.log(option)
    return (
        <div className='flex items-center bg-gray-200 mb-1 p-2 hover:border-2 hover:rounded-lg hover:bg-[#A66CFF] hover:text-white border-black'>
            <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
            <p className='font-semibold text-xl ml-3'>{option}</p>
        </div>
    );
};

export default Option;