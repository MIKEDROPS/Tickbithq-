"use client";

import Button from '@/components/elements/Button';
import Image from 'next/image';
import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { LuShare2 } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { IoTicketSharp } from "react-icons/io5";
import { BiBitcoin } from "react-icons/bi";
import EventCard from '@/components/elements/EventCard';
import { LuMapPin } from "react-icons/lu";
import Map from '../../../../public/assets/img/Map.png';
import { useRouter } from 'next/navigation';


const EventDetails = () => {

    const router = useRouter();

  return (
    <div className='mt-[6rem] flex md:flex-row gap-8 md:px-6 px-3'>
        <div className='md:flex hidden'>
            <FaArrowLeft onClick={()=> router.back()} className='text-3xl cursor-pointer' />
        </div>
        <div className='w-full'>
            <div className='w-full'>
                <div className=''>
                    <Image src={'https://res.cloudinary.com/samueladexcloudinary/image/upload/v1731154303/tickbit-hero_nq4mia.jpg'} className='rounded-[15px] object-cover w-full h-[450px]' alt='' width={1000} height={300} />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='md:text-[51px] text-[25px] text-[#2D2C3C] font-[800]'>Sound Of Christmas 2024</div>

                    <div className='flex items-center gap-4'>
                        <IoIosStar className='text-3xl cursor-pointer' />
                        <LuShare2 className='text-3xl cursor-pointer' />
                    </div>
                </div>
                <div className='md:mt-4 mt-2 flex md:flex-row flex-col justify-between'>
                    <div className='flex flex-col gap-y-2'>
                        <div className='md:text-[27px] text-[14px] font-[700] text-primary'>Date and Time</div>
                        <div className='md:text-[18px] text-[14px] text-primary inline-flex items-center gap-2 font-[400]'>
                            <LuCalendarDays className='text-2xl' />
                            Saturday, 24 December 2024
                        </div>
                        <div className='md:text-[18px] text-[14px] text-primary inline-flex items-center gap-2 font-[400]'>
                            <IoMdTime className='text-2xl' />
                            6:30 PM - 9:30 PM
                        </div>
                        <div className='md:text-[16px] text-[13px] text-[#4539B4]'>
                            + Add to Calendar
                        </div>
                    </div>
                    <div className=''>
                        <Button
                            text={"Buy Tickets"}
                            iconName={<IoTicketSharp className='text-2xl text-primary' />}
                            btnStyle={"bg-secondary text-primary font-semibold md:text-[24px] p-3 md:w-[264px] rounded-[8px]"}
                        />
                        <div className='md:text-[27px] md:mt-4 text-[18px] font-[700] text-primary'>Ticket Information</div>
                        <div className='inline-flex items-center gap-[2px]'><IoTicketSharp /> Standard Ticket: <BiBitcoin className='text-[#F7931A] rotate-[30deg]' /> 0.0015 BTC</div>
                    </div>
                </div>
            </div>

            <div className='my-8'>
                <div className='md:text-[30px] text-[20px] font-[700] text-primary mb-3'>Location</div>
                <div className='flex gap-2'>
                    <LuMapPin className='text-2xl' />
                    <p className='md:w-[500px]'>30/31 OTIGBA STREET, IKEJA LAGOS. SUIT 52 POWA PLAZA, COMPUTER VILLAGE IKEJA, Lagos, Nigeria.</p>
                </div>
                <div className='mt-4'>
                    <Image src={Map} alt='' className='md:w-[543px]' />
                </div>
            </div>

            <div className=''>
                <div className='md:text-[30px] text-[20px] font-[700] text-primary mb-3'>Hosted by</div>
                <div className='flex items-center gap-2'>
                    <Image src={'https://res.cloudinary.com/samueladexcloudinary/image/upload/v1731154303/tickbit-hero_nq4mia.jpg'} width={50} height={50} className='w-[100px] h-[100px] rounded-[100%]' alt='' />
                    <div className='space-y-2'>
                        <div className='text-primary md:text-[21px] text-[16px] font-bold'>Sinach</div>
                        <div className='flex items-center gap-3'>
                            <Button 
                                text={"Contact"}
                                btnStyle={"text-primary w-[95px] p-2 border-[1.3px] border-primary rounded-[5px] font-semibold bg-white"}
                            />
                            <Button 
                                text={"+ Follow"}
                                btnStyle={"text-white w-[95px] p-2 border-[1.3px] border-primary rounded-[5px] font-semibold bg-primary"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:mt-8'>
                <div className='md:text-[30px] text-[20px] font-[700] text-primary mb-3'>Event Description</div>
                <div className='md:text-[18px] text-[14px] text-[#5A5A5A] md:space-y-6 space-y-2'>
                    <p className=''>Get ready to kick off the Christmas season in Lagos with <b>SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!</b></p>

                    <p className='italic'>City Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!</p>

                    <p className=''>Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Victoria Island, Lagos. Book your tickets now!</p>

                    <div className=''>
                        <div className='font-bold'>3 Reasons to attend the event:</div>
                        <ol type='1' className='mt-4 space-y-2'>
                            <li>The FIRST Christmas concert of Lagos!</li>
                            <li>A special Christmas Choir!</li>
                            <li>Special Dance performances and many more surprises!</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className='md:mt-8 mt-4'>
                <div className='md:text-[30px] text-[20px] font-[700] text-primary'>Tags</div>
                <div className='flex items-center gap-3 mt-3'>
                    {["Holiday Concert","Live Performance","Seasonal Event","Family Friendly","#Christmas","#Christmas_Carols"].map((_, index)=>(
                        <Button
                            key={index}
                            text={_}
                            btnStyle={"bg-[#F8F7FA] px-[21px] py-[9px] rounded-[37.5px]"}
                        />
                    ))}
                </div>
            </div>

            <hr className='my-12' />

            <div className='md:mt-8 md:mb-20 my-4'>
                <div className='md:text-[30px] text-[20px] mb-6 font-[700] text-primary'>Other events you may like</div>
                <div className='grid md:grid-cols-3 gap-4 grid-cols-1'>
                    {[1,2,3].map((_, index)=>(
                        <EventCard key={index} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventDetails;