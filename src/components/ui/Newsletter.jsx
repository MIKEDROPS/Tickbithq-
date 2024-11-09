"use client";

import React from 'react'
import Input from '../elements/Input';
import Button from '../elements/Button';

const Newsletter = () => {
  return (
    <div className='bg-secondary md:p-14 p-6 flex md:flex-row flex-col items-center justify-between'>
        <div className=''>
            <div className='md:text-[27px] text-[18px] text-primary font-[500]'>Subscribe to our Newsletter</div>
            <div className='md:text-[18px] md:w-[520px] text-[12px] text-primary font-[400]'>Receive our weekly newsletter & updates with new events from your favourite organizers & venues.</div>
        </div>
        <div className='flex items-center'>
            <Input inputStyle="rounded-tl-[8px] w-full rounded-bl-[8px]" placeholder={"Enter your email"} className={"rounded-none"} />
            <Button 
                text={"Subscribe"}
                btnStyle={"md:text-[18px] text-[12px] text-secondary bg-primary p-3.5 mt-1 rounded-tr-[8px] rounded-br-[8px]"}
            />
        </div>
    </div>
  )
}

export default Newsletter