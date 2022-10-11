import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <FontAwesomeIcon className='text-9xl text-[#A66CFF]' icon={faFaceFrownOpen}></FontAwesomeIcon>
            <h1 className='text-6xl font-bold text-red-500 mt-10'>{error.status}</h1>
            <h3 className='text-2xl font-semibold'>Oops an error occurred!</h3>
            <p className='text-lg font-semibold'>Data {error.statusText}</p>
            <Link className='text-lg mt-5 px-3 py-1 font-bold text-white bg-[#A66CFF] rounded-lg hover:bg-white hover:text-[#A66CFF] hover:border-2 border-[#A66CFF]' to='/home'>Back To Home</Link>
        </div>
    );
};

export default ErrorPage;