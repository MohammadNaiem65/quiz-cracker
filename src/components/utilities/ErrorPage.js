import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='text-6xl font-bold text-red-500'>{error.status}</h1>
            <h3 className='text-2xl font-semibold'>Oops an error occurred!</h3>
            <p className='text-lg font-semibold'>Data {error.statusText}</p>
        </div>
    );
};

export default ErrorPage;