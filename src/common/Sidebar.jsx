import React, { useState } from 'react';
import logo from '../assets/logo/download.jpg'
import profile from '../assets/logo/istockphoto-1495088043-612x612.jpg'
import design from '../assets/icons/discussion.png'
import market from '../assets/icons/market.png'
import dev from '../assets/icons/team-leader.png'
import { IoIosAddCircleOutline } from "react-icons/io";
import ProductsAccordian from '../components/ProductsAccordian';
import { Link } from 'react-router-dom';

const Sidebar = () => {



    return (
        <div>
            {/* //desktop screen  */}
            <div className='w-[300px] h-full  p-5 border-2 m-5 rounded-xl' >
                {/* 1st  */}
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={logo} alt='' className='w-[40px] h-[40px]' />
                        </div>
                        <div className=''>
                            <h1 className='text-gray-300'>INC</h1>
                            <p className='text-[12px] mt-[-5px] font-semibold'>InnovationHUB</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={profile} alt='' className='w-[40px] h-[40px] rounded-full' />
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div className='mt-5'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <Link to='designteam'>
                                <div className='flex gap-2 items-center'>
                                    <img src={design} alt='' className='w-[18px] h-[18px]' />
                                    <h1 className='text-[15px] font-semibold'>Design Team</h1>
                                </div></Link>
                            <div>
                                <p className='text-[12px]  text-gray-700 font-semibold border-2 py-1 px-2 rounded-xl'>X + 3</p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <Link to='/markettingteam'>
                                <div className='flex gap-2 items-center'>
                                    <img src={market} alt='' className='w-[18px] h-[18px]' />
                                    <h1 className='text-[15px] font-semibold'>Marketting Team</h1>
                                </div></Link>
                            <div>
                                <p className='text-[12px]  text-gray-700 font-semibold border-2 py-1 px-2 rounded-xl'>X + 3</p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <Link to='/developmentteam'>
                                <div className='flex gap-2 items-center'>
                                    <img src={dev} alt='' className='w-[18px] h-[18px]' />
                                    <h1 className='text-[15px] font-semibold'>Development Team</h1>
                                </div></Link>
                            <div>
                                <p className='text-[12px]  text-gray-700 font-semibold border-2 py-1 px-2 rounded-xl'>X + 3</p>
                            </div>
                        </div>
                    </div>
                    {/* create team  */}
                    <hr className='mt-2' />
                    <div className='flex items-center gap-1 mt-2'>
                        <div className='text-[18px] font-medium text-gray-600'>
                            <IoIosAddCircleOutline />
                        </div>
                        <p className='text-[18px] font-medium text-gray-600'>Create a Team</p>
                    </div>
                    <ProductsAccordian />
                </div>

            </div>
            {/* mobile and tablet  */}
            {/* Menu button */}

        </div>

    );
};

export default Sidebar;