"use client";

import React from 'react'

const Input = ({labelName, placeholder, type, value, onChange, className}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
        <label className='md:text-[15px] text-[12px] font-[400]'>{labelName && labelName}</label>
        <input className='p-4 rounded-[16px] border-[1px] border-[#bdbdbd]' value={value} onChange={onChange} placeholder={placeholder && placeholder} type={type ? type : "text"} />
    </div>
  )
}

export default Input