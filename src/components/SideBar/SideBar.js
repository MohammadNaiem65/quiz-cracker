import { faChartColumn, faClipboardList, faHouse, faQuestion } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import SideBarOptions from './SideBarOptions';

const SideBar = () => {
    return (
        <div className=' bg-gray-100 md:w-80 h-[42rem] pl-10 pt-8 absolute md:sticky top-0 left-[-50rem]'>
            <div>
                <SideBarOptions icon={faHouse} text='Home' link='/home'></SideBarOptions>
                <SideBarOptions icon={faClipboardList} text='Take Quiz' link='/quizzes'></SideBarOptions>
                <SideBarOptions icon={faChartColumn} text='Statistics' link='/statistics'></SideBarOptions>
                <SideBarOptions icon={faQuestion} text='QnA' link='/blogs'></SideBarOptions>
            </div>
            <div className='flex justify-center items-center position absolute bottom-6 left-4'>
                <img className='w-12 mr-3' src={require('../images/avatar.png')} alt="" />
                <div>
                    <h3 className='font-semibold text-lg'>Jhankar Mahbub Jr.</h3>
                    <h4 className='font-semibold'>Jr. Frontend Developer</h4>
                </div>
            </div>
        </div>
    );
};

export default SideBar;