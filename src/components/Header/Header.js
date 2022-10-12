import { faBars, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto mt-6 flex justify-between items-center'>
            <div className='flex items-center'>
                <FontAwesomeIcon className='text-3xl mr-9 mt-1 cursor-pointer hover:text-[#A66CFF]' icon={faBars}></FontAwesomeIcon>
                <div onClick={() => <Link to='/home'></Link>} className='flex  cursor-pointer'>
                    <FontAwesomeIcon className='text-4xl text-[#A66CFF]' icon={faClipboardList}></FontAwesomeIcon>
                    <h1 className='text-3xl font-bold text-[#A66CFF] ml-2'>QuizAdda</h1>
                </div>
            </div>
            <div>
                <button className='text-lg text-[#A66CFF] px-3 py-1 font-bold border-2 rounded-lg border-[#A66CFF] hover:bg-[#A66CFF] hover:text-white'>Take A Quiz</button>
                <Link to='/blogs'>
                    <button className='text-lg ml-5 px-3 py-1 font-bold text-white bg-[#A66CFF] rounded-lg hover:bg-white hover:text-[#A66CFF] hover:border-2 border-[#A66CFF]'>Blogs</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;