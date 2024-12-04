"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import imgbg from '../../../public/assets/img/tickbit-hero.jpg'
import { IoStarOutline, IoStar, IoTicket  } from "react-icons/io5";
import EventCard from '../elements/EventCard';
import Button from '../elements/Button';
import { authPublicRequest } from '@/utils/requestMethods';
import { toast } from 'react-toastify';
import Loader from '../elements/Loader';

const OnlineEvent = () => {
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

  return (
    <div className='md:p-20 p-5 flex items-center justify-center'>
        <div className=''>
            <div className='md:text-[30px] text-[20px] font-[700] text-primary'>Discover Best of Online Events</div>
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

export default OnlineEvent