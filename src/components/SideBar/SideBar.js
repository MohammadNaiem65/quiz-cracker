import { faChartColumn, faClipboardList, faHouse, faQuestion } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import SideBarOptions from './SideBarOptions';

const SideBar = () => {
    return (
        <div className=' bg-[#B1E1FF] w-80 h-[42rem] pl-10 pt-8 sticky'>
            <div>
                <SideBarOptions icon={faHouse} text='Home' link='/home'></SideBarOptions>
                <SideBarOptions icon={faClipboardList} text='Take Quiz' link='/quizSection'></SideBarOptions>
                <SideBarOptions icon={faChartColumn} text='Statistics' link='/statistics'></SideBarOptions>
                <SideBarOptions icon={faQuestion} text='QnA' link='/blogs'></SideBarOptions>
            </div>
            <div className='flex justify-center items-center position absolute bottom-5'>
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