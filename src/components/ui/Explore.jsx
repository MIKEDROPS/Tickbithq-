"use client";

import Image from 'next/image';
import React from 'react'
import imgbg from '../../../public/assets/img/tickbit-hero.jpg'

const Explore = () => {
  return (
    <div className='space-y-5 md:px-14 md:py-8 px-4 py-4'>
        <div className='text-primary md:text-[30px] text-[20px] font-[700]'>Explore Categories</div>
        <div className='flex items-center justify-between gap-8 flex-wrap'>
            {[1,2,3,4,5,6].map((_, index)=>(
                <div key={index} className='flex space-y-2 flex-col items-center'>
                    <Image src={imgbg} className='w-[127.5px] h-[127.5px] rounded-[100%]' alt='' />
                    <div className='md:text-[18px] text-[14px] text-primary font-[600]'>Entertainment</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Explore