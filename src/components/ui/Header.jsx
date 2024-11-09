"use client";

import Image from 'next/image';
import React from 'react'
import logo from '../../../public/assets/svg/tickbit-logo.svg'
import Link from 'next/link';
import Button from '../elements/Button';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter()
  return (
    <div className='flex items-center bg-primary md:p-3 p-5 fixed z-10 top-0 w-full md:text-[15px] text-[12px] text-white md:justify-around'>
        <div className=''>
            <Image src={logo} alt='' />
        </div>
        <div className='md:flex hidden items-center gap-10'>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Events</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Wallet</Link>
            <Link href={"#"}>Contact</Link>
        </div>
        <div className='md:flex hidden items-center gap-10'>
            <Link href={"#"}>Create Event</Link>
            <Link href={"/auth/login"}>Login</Link>
            <Button 
                text={"Sign Up"}
                onBtnClick={()=> router.push('/auth/register') }
                btnStyle={"bg-secondary md:w-[91px] w-full text-primary p-3 rounded-[7.5px]"}
            />
        </div>
    </div>
  )
}

export default Header