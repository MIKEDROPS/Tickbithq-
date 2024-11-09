"use client";

import React from 'react'
import Input from '../elements/Input';
import { IoSearch } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";

const Hero = () => {
  return (
    <div className='grid place-items-center pt-[4rem] md:h-[433.5px] hero'>
        <div className='space-y-8'>
            <div className='text-white md:text-[36px] p-5 text-[23px] font-[700]'>Don’t miss out!<br />
            Buy Tickets, Pay with Bitcoin, Enjoy Events.</div>
            <div className=''>
                <div className='flex bg-white justify-between rounded-[12px] overflow-hidden'>
                    <div className='flex bg-white items-center p-2'>
                        <IoSearch className='text-3xl text-gray-400' />
                        <input type="text" className="focus:outline-none w-full p-4" placeholder="Search Events, Categories, Location,..." />
                    </div>
                    <div className='border-l-[2px] border-gray-400 grid place-items-center px-3'>
                        <div className='flex items-center gap-6 cursor-pointer'>
                            <div className=''>Select Location</div>
                            <SlArrowDown className='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero