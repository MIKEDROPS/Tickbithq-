"use client";

import React from 'react'
import playstore from '../../../public/assets/svg/tickbit-playstore.svg';
import appstore from '../../../public/assets/svg/tickbit-appstore.svg';
import imgbg from '../../../public/assets/img/tickbit-hero.jpg'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex items-center p-8 bg-primary justify-center'>
        <div className='md:w-[95%] w-full'>
            <div className='flex justify-between flex-wrap gap-5'>
                <div className='flex flex-col gap-1'>
                    <div className='md:text-[18px] text-[14px] text-white font-[600]'>Company Info</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>About Us</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Contact Us</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Careers</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>FAQs</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Terms of Service</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Privacy Policy</div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='md:text-[18px] text-[14px] text-white font-[600]'>Help</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Account Support</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Listing Events</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Event Tracking</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Ticket Purchase Terms & Conditions</div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='md:text-[18px] text-[14px] text-white font-[600]'>Categories</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Concerts & Gigs</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Festivals & Lifestyle</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Business & Networking</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Food & Drinks</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Performing Arts</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Sports & Outdoors</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Exhibitions</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Workshops, Conferences & Classes</div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='md:text-[18px] text-[14px] text-white font-[600]'>Follow Us</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Facebook</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Instagram</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Twitter</div>
                    <div className='md:text-[14px] text-[12px] text-[#A9A9A9] font-[400]'>Youtube</div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='md:text-[18px] text-[14px] text-white font-[600]'>Download The App</div>
                    <Image src={playstore} alt='' />
                    <Image src={appstore} alt='' />
                </div>
            </div>
            <div className='border-t-[1px] mt-8 border-[#A9A9A9] text-center p-2 pt-5'>
                <div className='text-[#A9A9A9] md:text-[14px] text-[12px] font-[400]'>2024 Tickbit. All rights reserved.</div>
            </div>
        </div>
    </div>
  )
}

export default Footer