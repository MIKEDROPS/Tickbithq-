"use client";

import { EventCardHorizontal } from '@/components/elements/EventCard';
import React from 'react'
import { IoSearch } from 'react-icons/io5';
import { SlArrowDown } from 'react-icons/sl';

const Events = () => {
  return (
    <div className='mt-[4rem]'>
        <div className='grid place-items-center md:pt-[4rem] md:h-[433.5px] h-[500px] bg-gradient-to-tr to-primary from-[rgba(45,44,60,0.8)]'>
            <div className='space-y-8 md:px-0 px-5'>
                <div className='text-white md:text-[36px] text-center md:p-5 text-[23px] font-[700]'>Explore a world of events. Find what excites you!</div>
                <div className=''>
                    <div className='flex bg-white justify-between rounded-[12px] overflow-hidden'>
                        <div className='flex bg-white items-center p-2'>
                            <IoSearch className='md:text-3xl text-2xl text-gray-400' />
                            <input type="text" className="focus:outline-none w-full p-4" placeholder="Search Events, Categories, Location,..." />
                        </div>
                        <div className='border-l-[2px] border-gray-400 grid place-items-center px-3'>
                            <div className='flex items-center gap-6 cursor-pointer'>
                                <div className='md:text-[15px] text-[12px]'>Select Location</div>
                                <SlArrowDown className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        <div className='md:px-8 px-4 my-8 flex gap-5'>
            <div className='flex-[1] md:block hidden space-y-10'>
                <div className='text-black md:text-[27px] text-[18px] font-bold'>Filters</div>
                
                <div className='mt-4'>
                    <div className='md:text-[18px] text-[14px] text-primary'>Price</div>
                    <div className='flex flex-col gap-3 mt-2'>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Free
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Paid
                        </div>
                    </div>
                </div>


                <div className='mt-4'>
                    <div className='md:text-[18px] text-[14px] text-primary'>Date</div>
                    <div className='flex flex-col gap-3 mt-2'>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Today
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Tomorrow
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            This Week
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            This Weekend
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Pick a Date
                        </div>
                        <div className='text-[#4539B4]'>More</div>
                    </div>
                </div>


                <div className='mt-4'>
                    <div className='md:text-[18px] text-[14px] text-primary'>Category</div>
                    <div className='flex flex-col gap-3 mt-2'>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Adventure Time
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Art Exhibitions
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Auctions & Fundraisers
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Beer Festivals
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Benefit Concerts
                        </div>
                        <div className='text-[#4539B4]'>More</div>
                    </div>
                </div>


                <div className='mt-4'>
                    <div className='md:text-[18px] text-[14px] text-primary'>Format</div>
                    <div className='flex flex-col gap-3 mt-2'>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Community Engagement
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Concerts & Performance
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Conferences
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Experiential Events
                        </div>
                        <div className='inline-flex items-center gap-1'>
                            <input type='checkbox' className='w-[18px] h-[18px]' />
                            Festivals & Fairs
                        </div>
                        <div className='text-[#4539B4]'>More</div>
                    </div>
                </div>
            </div>
            <div className='2xl:flex-[3] md:pl-4 md:flex-[4.5] md:border-l-[1.3px]'>
                <div className='flex justify-end items-center gap-2'>
                    <div className=''>Sort by:</div>
                    <select className='bg-white p-3 rounded-[8px] border-[1px] md:w-[200px]'>
                        <option>-- Select option</option>
                        <option>Relevance</option>
                        <option>Relevance</option>
                        <option>Relevance</option>
                        <option>Relevance</option>
                    </select>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 md:mt-16 mt-5 md:gap-8 gap-4'>
                    {[1,2,3,4,5,6,7,8,9,10].map((_, index)=>(
                        <EventCardHorizontal key={index} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events