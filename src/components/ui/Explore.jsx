"use client";

import Image from 'next/image';
import React from 'react'
import imgbg from '../../../public/assets/img/tickbit-hero.jpg'
import cat1 from '../../../public/assets/img/entertainment.png'
import cat2 from '../../../public/assets/img/education.png'
import cat3 from '../../../public/assets/img/cultural.png'
import cat4 from '../../../public/assets/img/sports.png'
import cat5 from '../../../public/assets/img/technology.png'
import cat6 from '../../../public/assets/img/travel.png'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Explore = () => {
  const router = useRouter();

  const categories = [
    {
      id: 1,
      name: "Entertainment",
      img: cat1
    },
    {
      id: 2,
      name: "Educational & Business",
      img: cat2
    },
    {
      id: 3,
      name: "Cultural & Arts",
      img: cat3
    },
    {
      id: 4,
      name: "Sports & Fitness",
      img: cat4
    },
    {
      id: 5,
      name: "Technology & Innovation",
      img: cat5
    },
    {
      id: 6,
      name: "Travel & Adventure",
      img: cat6
    },
  ]
  return (
    <div className='space-y-5 md:px-14 md:py-8 px-4 py-4'>
        <div className='text-primary md:text-[30px] text-[20px] font-[700]'>Explore Categories</div>
        <div className='flex items-center justify-between gap-y-4 flex-wrap'>
            {categories.map((_, index)=>(
                <div onClick={()=> router.push("/events", {params: { category: _?.name }})}  key={index} className='flex space-y-2 cursor-pointer flex-col items-center'>
                    <Image src={_.img} className='w-[127.5px] h-[127.5px] rounded-[100%]' alt='' />
                    <div className='md:text-[18px] text-[14px] text-primary font-[600]'>{_.name}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Explore