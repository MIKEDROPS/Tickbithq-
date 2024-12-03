"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import imgbg from '../../../public/assets/img/tickbit-hero.jpg'
import { IoStarOutline, IoStar, IoTicket  } from "react-icons/io5";
import EventCard from '../elements/EventCard';
import Button from '../elements/Button';
import { authPublicRequest } from '@/utils/requestMethods';

const PopularEvent = () => {
    const [popularEvent, setPopularEvent] = useState([])

    useEffect(()=>{
        const fetchAllPopular = async ()=>{
            try {
                const {data} = await authPublicRequest.get("/events/all-popular-event")
                if(data.success == true){
                    setPopularEvent(data.events)
                }
            } catch (error) {
                const err = error.response?.data;
                toast(err.message)
            }
        }

        fetchAllPopular()
    }, []);


  return (
    <div className='md:p-20 p-5 flex items-center justify-center'>
        <div className=''>
            <div className='md:text-[30px] text-[20px] font-[700] text-primary'>Popular Events in Nigeria</div>
            <div className='flex items-center gap-3 my-3'>
                {["All", "Today", "Tomorrow", "This Weekend", "Free"].map((_, index)=>(
                    <Button text={_} key={index} type={'outline'} btnStyle='cursor-pointer px-[21px] py-[9px] md:text-[14px] text-[12px] border-[#6F6F6F] text-[#6F6F6F] rounded-[18px] border-[1px] text-center'/>
                ))}
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-4'>
                {popularEvent?.map((evt, index)=>(
                    <EventCard event={evt} key={index} />
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

export default PopularEvent