"use client";

import Link from 'next/link';
import React from 'react'
import { IoStar, IoStarOutline, IoTicket } from 'react-icons/io5';

const EventCard = () => {
  return (
    <Link href={'/events/323'} className='rounded-[8px] overflow-hidden cursor-pointer'>
        <div className='h-[190.5px] relative w-full bg-cover bg-center' style={{backgroundImage: `url("https://res.cloudinary.com/samueladexcloudinary/image/upload/v1731154303/tickbit-hero_nq4mia.jpg")`}}>
            <IoStarOutline className='bg-white rounded-[100%] p-3 text-[3rem] cursor-pointer absolute right-2 top-2' />
            <span className='md:text-[14px] text-[12px] text-primary font-[500] bg-secondary p-2 rounded-tr-[8px] absolute bottom-0 left-0'>Educational & Business</span>
        </div>
        <div className='flex gap-1 mt-2'>
            <div className='flex-[1] text-center'>
                <div className='text-[#4539B4] md:text-[18px] font-[600]'>JAN</div>
                <div className='md:text-[19.5px] text-primary font-[700]'>13</div>
            </div>
            <div className='flex-[6]'>
                <p className='text-primary md:text-[18px] text-[14px] font-[600]'>{`The Road to Jobs and Internships: Starting with LinkedIn Webinar`.slice(0,60)}</p>
                <div className='text-[#5A5A5A] text-[13.5px] font-[600]'>Online</div>
                <div className='text-[#5A5A5A] text-[13.5px] font-[400]'>6 PM - 7:30 PM</div>
                <div className='text-[#5A5A5A] text-[13.5px] font-[400] inline-flex items-center gap-2'><IoTicket className='text-[5A5A5A]' /> Free 21 &#9679; <IoStar className='text-[#4539B4]' /> Interested</div>
            </div>
        </div>
    </Link>
  )
}

export default EventCard


export function EventCardHorizontal(){
    return (
        <Link href={'/events/323'} className='rounded-[8px] flex items-center gap-3 overflow-hidden cursor-pointer'>
            <div className='h-[190.5px] relative w-full bg-cover bg-center' style={{backgroundImage: `url("https://res.cloudinary.com/samueladexcloudinary/image/upload/v1731154303/tickbit-hero_nq4mia.jpg")`}}>
                <IoStarOutline className='bg-white rounded-[100%] p-3 text-[3rem] cursor-pointer absolute right-2 top-2' />
                <span className='md:text-[14px] text-[12px] text-primary font-[500] bg-secondary p-2 rounded-tr-[8px] absolute bottom-0 left-0'>Educational & Business</span>
            </div>
            <div className='flex gap-1 mt-2'>
                <div className='flex-[1] text-center'>
                    <div className='text-[#4539B4] md:text-[18px] font-[600]'>JAN</div>
                    <div className='md:text-[19.5px] text-primary font-[700]'>13</div>
                </div>
                <div className='flex-[6]'>
                    <p className='text-primary md:text-[18px] text-[14px] font-[600]'>{`The Road to Jobs and Internships: Starting with LinkedIn Webinar`.slice(0,60)}</p>
                    <div className='text-[#5A5A5A] text-[13.5px] font-[600]'>Online</div>
                    <div className='text-[#5A5A5A] text-[13.5px] font-[400]'>6 PM - 7:30 PM</div>
                    <div className='text-[#5A5A5A] text-[13.5px] font-[400] inline-flex items-center gap-2'><IoTicket className='text-[5A5A5A]' /> Free 21 &#9679; <IoStar className='text-[#4539B4]' /> Interested</div>
                </div>
            </div>
        </Link>
    )
}