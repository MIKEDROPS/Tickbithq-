"use client";

import React from 'react'
import Button from '../elements/Button';
import { FaArrowRight } from "react-icons/fa";


const SpecialEvent = () => {
  return (
    <div className='p-10 mt-10 flex items-center md:h-[255px] justify-center'>
        <div className='md:w-[85%] p-10 special'>
            <div className='flex flex-col items-center'>
                <div className=''>
                    <div className='text-primary md:text-[30px] text-[20px] font-[500]'>Events specially curated for you!</div>
                    <div className='text-primary md:text-[21px] text-[14px] font-[400]'>Get event suggestions tailored to your interests! Don't let your favorite events slip away.</div>
                </div>
                <Button 
                    text={"Get Started"}
                    iconName={<FaArrowRight className='text-secondary text-2xl' />}
                    btnStyle={"bg-primary mt-4 text-secondary md:text-[15px] flex-row-reverse text-[12px] font-[500] p-3 rounded-[8px] md:w-[230.5px] w-full m-auto"}
                />
            </div>
        </div>
    </div>
  )
}

export default SpecialEvent