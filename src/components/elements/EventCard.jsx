"use client";

import Link from 'next/link';
import React from 'react'
import { IoStar, IoStarOutline, IoTicket } from 'react-icons/io5';

const EventCard = ({event}) => {
  return (
    <Link href={`/events/${event?._id}`} className='rounded-[8px] overflow-hidden cursor-pointer'>
        <div className='h-[190.5px] relative w-full bg-cover bg-center' style={{backgroundImage: `url(https://tickbit.onrender.com${event?.image})`}}>
            <IoStarOutline className='bg-white rounded-[100%] p-3 text-[3rem] cursor-pointer absolute right-2 top-2' />
            <span className='md:text-[14px] text-[12px] text-primary font-[500] bg-secondary p-2 rounded-tr-[8px] absolute bottom-0 left-0'>{event?.event_category}</span>
        </div>
        <div className='flex gap-1 mt-2'>
            <div className='flex-[1] text-center'>
                <div className='md:text-[19.5px] text-primary font-[700]'>{new Date(event?.start_date).toLocaleString('default', { month: 'long' }).slice(0,3).toUpperCase()}</div>
                <div className='text-[#4539B4] md:text-[18px] font-[600]'>{new Date(event?.start_date).getDay()}</div>
            </div>
            <div className='flex-[6]'>
                <p className='text-primary md:text-[18px] text-[14px] font-[600]'>{event?.event_title.slice(0,60)}</p>
                <div className='text-[#5A5A5A] text-[13.5px] font-[600]'>Online</div>
                <div className='text-[#5A5A5A] text-[13.5px] font-[400]'>{event?.start_time} PM - {event?.end_time} PM</div>
                <div className='text-[#5A5A5A] text-[13.5px] font-[400] inline-flex items-center gap-2'><IoTicket className='text-[5A5A5A]' /> {event?.running_event == "paid" ? parseFloat(event?.ticket_price).toFixed(10) : "Free"} &#9679; <IoStar className='text-[#4539B4]' />21 Interested</div>
            </div>
        </div>
    </Link>
  )
}

export default EventCard


export function EventCardHorizontal({event}){
    return (
        <Link href={'/events/323'} className='rounded-[8px] flex items-center gap-3 overflow-hidden cursor-pointer'>
            <div className='h-[190.5px] flex-[3] relative w-full bg-cover bg-center rounded-[8px]' style={{backgroundImage: `url(https://tickbit.onrender.com${event?.image})`}}>
                <IoStarOutline className='bg-white rounded-[100%] p-3 text-[3rem] cursor-pointer absolute right-2 top-2' />
                <span className='md:text-[14px] text-[12px] text-primary font-[500] bg-secondary p-2 rounded-tr-[8px] absolute bottom-0 left-0'>{event?.event_category}</span>
            </div>
            <div className='flex-[2]'>
                <p className='text-primary md:text-[18px] text-[14px] font-[600]'>{event.event_title.slice(0,60)}</p>
                <div className='flex flex-col gap-1 mt-2'>
                    <div className='flex-[1] inline-flex gap-2 items-center text-[#5A5A5A]'>
                        <div className='md:text-[15px] font-[600]'>{new Date(event?.start_date).toLocaleString('default', { month: 'long' }).slice(0,3).toUpperCase()} {new Date(event?.start_date).getDay()}{" "}</div>
                        <div className='md:text-[15px] font-[600]'>{"   "} | {event?.location}</div>
                    </div>
                    <div className='flex-[6]'>
                        <div className='text-[#5A5A5A] text-[15px] font-[400]'>{event?.start_time} - {event?.end_time}</div>
                        <div className='text-[#5A5A5A] text-[15px] font-[600] inline-flex items-center gap-2'><IoTicket className='text-[5A5A5A]' /> {event?.running_event == "paid" ? parseFloat(event?.ticket_price).toFixed(10) : "Free"}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}