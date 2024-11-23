"use client";

import Image from 'next/image';
import React, { useContext, useState } from 'react'
import logo from '../../../public/assets/svg/tickbit-logo.svg'
import Link from 'next/link';
import Button from '../elements/Button';
import { useRouter } from 'next/navigation';
import { AppContext } from '@/context/AppContext';
import { IoTicketOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BiSolidDownArrow } from "react-icons/bi";

const Header = () => {
    const router = useRouter();
    const [isProfile, setIsProfile] = useState(false);
    const {userInfo, logout} = useContext(AppContext);

  return (
    <div className='flex items-center bg-primary md:p-3 p-5 fixed z-10 top-0 w-full md:text-[15px] text-[12px] text-white md:justify-around'>
        <div className=''>
            <Link href={"/"}>
                <Image src={logo} alt='' />
            </Link>
        </div>
        <div className='md:flex hidden items-center gap-10'>
            <Link href={"/"}>Home</Link>
            <Link href={"/events"}>Events</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Wallet</Link>
            <Link href={"#"}>Contact</Link>
        </div>
        
        <div className='md:flex hidden items-center gap-10'>
            <Link href={"#"}>Create Event</Link>
            {userInfo?.token ? (
                <>
                    <Link href={"#"} className='flex flex-col font-[600] items-center text-white'>
                        <IoTicketOutline className='text-2xl' />
                        <span className='md:text-[10.5px]'>Tickets</span>
                    </Link>
                    <Link href={"#"} className='flex flex-col font-[600] items-center text-white'>
                        <IoIosStarOutline className='text-2xl' />
                        <span className='md:text-[10.5px]'>Interested</span>
                    </Link>
                    <div className='flex items-center font-[600] cursor-pointer relative'>
                        <div className='text-white flex flex-col' onClick={()=> setIsProfile(!isProfile)}>
                            <CgProfile className='text-2xl' />
                            <span className='md:text-[10.5px]'>Profile</span>
                        </div>
                        <BiSolidDownArrow className='text-[10px]' onClick={()=> setIsProfile(!isProfile)} />

                        {isProfile && <div className='bg-white w-[100px] top-[2.5rem] absolute rounded-[5px]'>
                            <span className='cursor-pointer text-primary font-[600] text-[10.9px] py-3 px-3' onClick={()=>{
                                logout();
                                setIsProfile(false);
                            }}>Logout</span>
                        </div>}
                    </div>
                </>
            ) : (
                <>
                    <Link href={"/auth/login"}>Login</Link>
                    <Button 
                        text={"Sign Up"}
                        onBtnClick={()=> router.push('/auth/register') }
                        btnStyle={"bg-secondary md:w-[91px] w-full text-primary p-3 rounded-[7.5px]"}
                    />
                </>
            )}
        </div>
    </div>
  )
}

export default Header