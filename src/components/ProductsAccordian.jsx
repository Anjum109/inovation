import React, { useState } from 'react';
import product from '../assets/icons/box.png'
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item mt-4">
            <div className="accordion-header flex justify-between items-center w-full" onClick={toggleAccordion}>
                <div className='text-[17px] font-medium text-gray-500'> {title}</div>
                {/* Conditional rendering based on isOpen state */}
                <div className="accordion-icon cursor-pointer">{isOpen ? '-' : '+'}</div>
            </div>
            {/* Apply Tailwind CSS classes for animation based on isOpen state */}
            <div className={`accordion-content overflow-hidden transition-max-height duration-1000 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                {children} {/* Nested accordion component */}
            </div>
        </div>
    );
};

const ProductsAccordion = () => {
    return (
        <div className="nested-accordion">
            <AccordionItem title="Folders">
                {/* Nested accordion */}
                <div className='flex w-full items-center'>

                    <div className='ms-2 mt-[-10px] w-full'>
                        <Link to='/product'>
                            <AccordionItem title="Products">
                                <div className='border-2 p-2 mt-2 rounded-lg flex flex-col gap-1 text-[15px] font-medium'>
                                    <p>Roadmap</p>
                                    <p>Feedback</p>
                                    <p>Performance</p>
                                    <p>Team</p>
                                    <p>Analytics</p>
                                    <div className='text-gray-500 border-2 p-1 rounded-lg mt-1 flex items-center gap-1'>
                                        <IoIosAddCircleOutline />
                                        <p>Add New Tab</p>
                                    </div>
                                </div>
                            </AccordionItem></Link>
                        <AccordionItem title="Sales">
                            <div className='border-2 p-2 mt-2 rounded-lg flex flex-col gap-1 text-[15px] font-medium'>
                                <p>Roadmap</p>
                                <p>Feedback</p>
                                <p>Performance</p>
                                <p>Team</p>
                                <p>Analytics</p>
                                <div className='text-gray-500 border-2 p-1 rounded-lg mt-1 flex items-center gap-1'>
                                    <IoIosAddCircleOutline />
                                    <p>Add New Tab</p>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem title="Design">
                            <div className='border-2 p-2 mt-2 rounded-lg flex flex-col gap-1 text-[15px] font-medium'>
                                <p>Roadmap</p>
                                <p>Feedback</p>
                                <p>Performance</p>
                                <p>Team</p>
                                <p>Analytics</p>
                                <div className='text-gray-500 border-2 p-1 rounded-lg mt-1 flex items-center gap-1'>
                                    <IoIosAddCircleOutline />
                                    <p>Add New Tab</p>
                                </div>
                            </div>
                        </AccordionItem>
                        <div className='text-[17px] font-medium text-gray-500 mt-2'>
                            <p>Office</p>
                            <p className='mt-2'>Legal</p>
                        </div>
                    </div>
                </div>
            </AccordionItem>
        </div>
    );
};

export default ProductsAccordion;
