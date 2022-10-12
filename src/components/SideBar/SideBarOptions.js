import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SideBarOptions = ({ icon, text, link }) => {
    return (
        <Link className='flex items-center font-bold text-[#A66CFF] hover:text-[#9C9EFE] my-2 cursor-pointer' to={link}>
            <FontAwesomeIcon className='text-2xl' icon={icon}></FontAwesomeIcon>
            <h3 className='text-2xl ml-3'>{text}</h3>
        </Link>
    );
};

export default SideBarOptions;