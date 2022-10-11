import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;