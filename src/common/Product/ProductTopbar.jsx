import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";

export default function ProductTopbar() {
    return (
        <div className='border-2 p-3 rounded-lg'>
            <div className='flex justify-between items-center'>
                <div><p className='font-medium text-[18px]'>Product</p></div>
                <div className='flex gap-2'>
                    <div className='flex gap-1 items-center text-gray-600 text-[13px] border-2 px-2 py-1 rounded-lg w-[250px]'>
                        <CiSearch />
                        <p>Search For..</p>
                    </div>
                    <div className='text-gray-600 p-2 border-2 rounded-lg'>
                        <FaRegCopy />
                    </div>
                    <div className='text-gray-600 p-2 border-2 rounded-lg'>
                        <IoIosSettings />
                    </div>
                </div>
            </div>
        </div>
    )
}
