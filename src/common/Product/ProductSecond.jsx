import React from 'react'
import { FaVectorSquare } from "react-icons/fa";
import { BiSort } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import { SiGotomeeting } from "react-icons/si";
import { LuImport } from "react-icons/lu";

export default function ProductSecond() {
    return (
        <div className='mt-5 p-3'>
            <div className='xl:flex justify-between items-center'>
                <div className='flex xl:flex-row flex-col gap-3'>
                    <div className='flex gap-3 items-center border-2 w-[160px] justify-center py-1 rounded-lg font-medium text-gray-600'>
                        <FaVectorSquare />
                        <p>All Brandes</p>
                        <p>+</p>
                    </div>
                    <div className='flex gap-3 items-center border-2 w-[90px] justify-center py-1 rounded-lg font-medium text-gray-600'>
                        <p>Desk</p>
                        <p>+</p>
                    </div>
                    <div className='flex gap-3 items-center border-2 w-[90px] justify-center py-1 rounded-lg font-medium text-gray-600'>
                        <p>Tag</p>
                        <p>+</p>
                    </div>
                    <div className='flex gap-3 items-center border-2 w-[90px] justify-center py-1 rounded-lg font-medium text-gray-600'>
                        <BiSort />
                        <p>Sort</p>
                    </div>
                    <div className='flex gap-3 items-center border-2 w-[90px] justify-center py-1 rounded-lg font-medium text-gray-600'>
                        <CiFilter />
                        <p>Filter</p>
                    </div>

                </div>
                <div className='flex xl:flex-row flex-col gap-2 mt-2 xl:mt-0'>
                    <div className='flex gap-3 items-center border-2 w-[110px] justify-center py-1 rounded-lg font-medium text-gray-600'>
                        <SiGotomeeting />
                        <p>Meeting</p>
                    </div>
                    <div className='flex gap-3 items-center border-2 w-[150px] justify-center py-1 rounded-lg font-medium text-gray-600'>
                        <LuImport />
                        <p>Import/Export</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
