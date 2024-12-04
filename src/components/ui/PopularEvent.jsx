"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import imgbg from '../../../public/assets/img/tickbit-hero.jpg'
import { IoStarOutline, IoStar, IoTicket  } from "react-icons/io5";
import EventCard from '../elements/EventCard';
import Button from '../elements/Button';
import { authPublicRequest } from '@/utils/requestMethods';
import Loader from '../elements/Loader';

const PopularEvent = () => {
    const [popularEvent, setPopularEvent] = useState([])
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        const fetchAllPopular = async ()=>{
            setIsLoading(true)
            try {
                const {data} = await authPublicRequest.get(`/events/all-popular-event?filter=${query ? query : ''}`)
                if(data.success == true){
                    setPopularEvent(data.events);
                    setIsLoading(false)
                }
            } catch (error) {
                const err = error.response?.data;
                setIsLoading(false)
                toast(err.message)
            }
        }

        fetchAllPopular()
    }, [query]);

    const tags = [
        {
            name: "All",
            val: "all"
        },
        {
            name: "Yesterday",
            val: "yesterday"
        },
        {
            name: "Today",
            val: "today"
        },
        {
            name: "Tomorrow",
            val: "tomorrow"
        },
        {
            name: "This Weekend",
            val: "this_weekend"
        },
        {
            name: "Free",
            val: "free"
        },
    ]


  return (
    <div className='md:p-20 p-5 flex items-center justify-center'>
        <div className=''>
            <div className='md:text-[30px] text-[20px] font-[700] text-primary'>Popular Events in Nigeria</div>
            <div className='flex items-center gap-3 my-3 flex-wrap'>
                {tags.map((_, index)=>(
                    <Button text={_.name} onBtnClick={()=> setQuery(_.val)} key={index} type={'outline'} btnStyle={`cursor-pointer px-[21px] md:py-[9px] md:text-[14px] text-[12px] border-[#6F6F6F] ${_?.val == query && 'bg-primary text-white'} text-[#6F6F6F] rounded-[18px] border-[1px] text-center`}/>
                ))}
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-4'>
                {isLoading ? (
                    <div className='grid place-items-center'>
                        <Loader />
                    </div>
                ) : (
                    <>
                        {popularEvent.length > 0 ? (
                            <>
                                {popularEvent?.map((evt, index)=>(
                                    <EventCard event={evt} key={index} />
                                ))}
                            </>
                        ) : (
                            <h1 className='text-[32px] text-center text-gray-300'>Nothing to see Here!!!</h1>
                        )}
                    </>
                )}
            </div>
            {popularEvent.length > 0 && <Button 
                text={"See More"}
                btnStyle={"bg-white rounded-[8px] border-primary border-[1px] m-auto md:w-[457.5px] w-full p-3 md:mt-8 mt-4"}
            />}
        </div>
    </div>
  )
}

export default PopularEvent