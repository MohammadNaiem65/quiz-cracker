import { faBars, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto mt-6 flex justify-between items-center'>
            <div className='flex items-center'>
                <div onClick={() => <Link to='/home'></Link>} className='flex  cursor-pointer'>
                    <FontAwesomeIcon className='text-4xl text-[#A66CFF]' icon={faClipboardList}></FontAwesomeIcon>
                    <h1 className='text-3xl font-bold text-[#A66CFF] ml-2'>QuizAdda</h1>
                </div>
            </div>
            <div>
                <Link to='/quizzes'>
                    <button className='text-lg text-[#A66CFF] px-3 py-1 font-bold border-2 hidden md:inline rounded-lg border-[#A66CFF] hover:bg-[#A66CFF] hover:text-white'>Take A Quiz</button>
                </Link>
                <Link to='/blogs'>
                    <button className='text-lg ml-5 px-3 py-1 font-bold text-white bg-[#A66CFF] rounded-lg hidden md:inline hover:bg-white hover:text-[#A66CFF] hover:border-2 border-[#A66CFF]'>Blogs</button>
                </Link>
                <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn m-1"><FontAwesomeIcon className='text-3xl mr-9 mt-1 md:hidden cursor-pointer hover:text-[#A66CFF]' icon={faBars}></FontAwesomeIcon></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/quizzes'>Take Quiz</Link></li>
                        <li><Link to='/statistics'>Statistics</Link></li>
                        <li><Link to='/blogs'>QnA</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;