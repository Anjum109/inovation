import React from 'react';
import Sidebar from '../common/Sidebar';
import Topbar from '../common/Topbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='xl:flex w-full'>

            <div className='' >

                <Sidebar />

            </div>
            <div className='flex flex-col w-full'>

                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;