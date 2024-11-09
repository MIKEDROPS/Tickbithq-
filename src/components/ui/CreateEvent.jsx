"use client";


import React from 'react'
import Button from '../elements/Button';
import { FaRegCalendarPlus } from "react-icons/fa";

const CreateEvent = () => {
  return (
    <div className='bg-primary event p-10 mb-10 md:h-[236.25px] grid place-items-center'>
        <div className='flex md:flex-row flex-col items-center justify-between md:w-[80%]'>
            <div className=''>
                <div className='text-secondary md:text-[30px] text-[20px] font-[500]'>Create an event with TickBit</div>
                <div className='text-secondary md:text-[21px] text-[14px] font-[400]'>Got a show, event, activity or a great experience? Partner with us & get listed on Eventify</div>
            </div>
            <div className=''>
                <Button 
                    text={"Create Event"}
                    iconName={<FaRegCalendarPlus className='text-2xl text-primary' />}
                    btnStyle={"bg-secondary text-primary rounded-[12px] font-[500] md:text-[18px] text-[12px] p-3 md:w-[245.5px]"}
                />
            </div>
        </div>
    </div>
  )
}

export default CreateEvent