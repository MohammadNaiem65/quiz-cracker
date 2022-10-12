import React from 'react';

const Home = () => {
    return (
        <div className='w-full flex items-center relative'>
            <div className='lg:h-full'>
                <img className='w-[38rem]' src={require('../images/banner-background-image.png')} alt="" />
                <div className='absolute top-[14rem] left-[8.4rem]'>
                    <h1 className='text-2xl text-white font-bold '>Welcome to <span className='text-3xl'>QuizAdda</span></h1>
                    <h1 className='text-2xl text-white font-bold '>Answer the Questions</h1>
                    <h1 className='text-2xl text-white font-bold '>Show Your Skill</h1>
                </div>
            </div>
            <img className='30rem xl:w-[38rem] hidden lg:block' src={require('../images/banner.jpg')} alt="" />
        </div>
    );
};

export default Home;