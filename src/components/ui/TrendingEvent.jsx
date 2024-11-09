"use client";

import Image from 'next/image';
import React from 'react';
import imgbg from '../../../public/assets/img/tickbit-hero.jpg'
import { IoStarOutline, IoStar, IoTicket  } from "react-icons/io5";
import EventCard from '../elements/EventCard';
import Button from '../elements/Button';

const TrendingEvent = () => {
  return (
    <div className='md:p-20 p-5 flex items-center justify-center'>
        <div className=''>
            <div className='md:text-[30px] text-[20px] font-[700] text-primary'>Trending Events around the World</div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-4'>
                {[1,2,3,4,5,6].map((_,index)=>(
                    <EventCard key={index} />
                ))}
            </div>
            <Button 
                text={"See More"}
                btnStyle={"bg-white rounded-[8px] border-primary border-[1px] m-auto md:w-[457.5px] w-full p-3 md:mt-8 mt-4"}
            />
        </div>
    </div>
  )
}

export default TrendingEvent