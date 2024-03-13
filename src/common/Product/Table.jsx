import React from 'react';
import { tableData } from '../Tabledata';

const Table = () => {

    const rows = tableData.map((element) => (
        <tr key={element.id} className={`${element.id % 2 === 0 ? 'even:bg-white' : 'odd:bg-white'}`}>

            <td className='border-[1px]'>
                <p className='p-2  mt-[-2px] flex items-center'>
                    <input type='checkbox' className='me-2' />
                    <img src={element.image} alt={element.title} className="w-5 h-5 object-cover rounded-full mr-2" />

                    {element.title}
                </p>
            </td>
            <td className='border-[1px]'>
                <p className='p-2  mt-[-2px] ml-[-1px] truncate'>
                    {element.description}
                </p>
            </td>
            <td className='border-[1px]'>
                <p className='p-2  flex'>
                    <img src={element.member1} alt={element.title} className="w-5 h-5 object-cover rounded-full ms-[-5px] border-2 border-gray-500" />
                    <img src={element.member2} alt={element.title} className="w-5 h-5 object-cover rounded-full ms-[-5px] border-2 border-gray-500" />
                    <img src={element.member3} alt={element.title} className="w-5 h-5 object-cover rounded-full ms-[-5px] border-2 border-gray-500" />
                    <img src={element.member4} alt={element.title} className="w-5 h-5 object-cover rounded-full ms-[-5px] border-2 border-gray-500" />
                    <img src={element.member5} alt={element.title} className="w-5 h-5 object-cover rounded-full ms-[-5px] border-2 border-gray-500" />

                </p>
            </td>
            <td className='border-[1px]'>
                <p className='p-2 text-[12px] '> <span className='border-[2px] bg-blue-100 rounded-md border-blue-900 py-[1px] px-1'>{element.categories}</span> </p>

            </td>
            <td className='border-[1px]'>
                <p className='p-2 text-[12px] '> <span className='border-[1px] bg-gray-100 rounded-md border-gray-400 py-[1px] px-1'>{element.tags}</span> </p>

            </td>
            <td className='border-[1px]'>
                <p className='p-2 text-[12px] '> <span className='border-[2px] bg-red-100 rounded-md border-red-900 py-[1px] px-1'>{element.meeting}</span> </p>

            </td>
            <td className='border-[1px]'>


            </td>

        </tr>
    ));

    return (
        <div className='w-full mt-2 overflow-auto max-h-[500px]'>
            <thead className=''>
                <tr className='border-[1px]'>
                    <th className='flex xl:w-[200px] justify-between items-center border-[1px]' >
                        <div className=' p-2 flex items-center justify-center gap-2'>
                            <input type='checkbox' />
                            <span>Brand</span>
                        </div>
                        <div>+</div>
                    </th>
                    <th className='xl:w-[200px] p-2 border-[1px] '>Description</th>
                    <th className='xl:w-[200px] p-2 border-[1px] '>Members</th>
                    <th className='xl:w-[200px] p-2 border-[1px] '>Catagories </th>
                    <th className='xl:w-[200px] p-2 border-[1px] '>Tags </th>
                    <th className='xl:w-[200px] p-2 border-[1px] '>Next Meeting </th>
                    <th className='w-[100px] p-2 border-[1px] '>+ </th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </div>
    );
};

export default Table;
