"use client";

import React from 'react'
import logo from '../../../../public/assets/svg/tickbit-logo.svg'
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import {MdClose} from 'react-icons/md'
import Button from '@/components/elements/Button';
import google from '../../../../public/assets/svg/tickbit-google.svg'
import facebook from '../../../../public/assets/svg/tickbit-facebook.svg'
import Input from '@/components/elements/Input';
import Link from 'next/link';

const Auth = () => {
  const params = useParams();
  
  
  return (
    <div className='flex'>
        <div className='bg-primary p-10 flex-[1] md:flex hidden'>
          <Image src={logo} className='w-[161.66px] h-[36px]' alt='' />
          <p className='md:text-[36px] text-[23px] font-[700] md:w-[387px] text-white mt-20'>
            Buy tickets with Bitcoin, explore top events, and enjoy secure transactions—all in one place!
          </p>
        </div>
        <div className='flex-[1] bg-white rounded-tl-[52.5px] rounded-bl-[52.5px] relative z-10'>
          {params.opt == "register" && <Register />}
          {params.opt == "login" && <Login />}
        </div>
    </div>
  )
}

export default Auth


function Register(){
  const router = useRouter()
  return (
    <div className='md:p-10 p-6'>
        <div className='flex justify-end'>
          <MdClose onClick={()=> router.push('/')} className="cursor-pointer text-2xl text-[#A3A3A3]" />
        </div>
        <div className='md:text-[36px] text-[25px] font-[700] text-primary'>Create Account</div>
        <div className='flex md:flex-row flex-col items-center md:gap-6 gap-3 mt-10'>
          <Button
            text={"Sign up with Google"}
            imgPath={google}
            btnStyle={'border-[1px] border-[#A3A3A3] p-3 rounded-[8px] text-primary md:text-[15px] text-[12px] w-full'}
          />
          <Button 
            text={"Sign up with Facebook"}
            imgPath={facebook}
            btnStyle={'border-[1px] border-[#A3A3A3] p-3 rounded-[8px] text-primary md:text-[15px] text-[12px] w-full'}
          />
        </div>
        <div className='flex items-center gap-2 mt-8'>
          <div className='bg-[#bcbbbb] w-full p-[0.34px]'></div>
          <div className='text-[#bcbbbb]'>OR</div>
          <div className='bg-[#bcbbbb] w-full p-[0.34px]'></div>
        </div>

        <div className='flex flex-col gap-6 mt-8'>
          <Input placeholder={"Enter your full name"} inputStyle={"rounded-[8px]"} type={"text"} labelName={"Full Name"} />
          <Input placeholder={"Enter your e-mail"} inputStyle={"rounded-[8px]"} type={"email"} labelName={"E-mail Address"} />
          <Input placeholder={"Enter password"} inputStyle={"rounded-[8px]"} type={"password"} labelName={"Password"} />
          <Button 
            text={"Create Account"}
            btnStyle={"bg-primary text-white font-[600] md:text-[15px] text-[12px] p-4 rounded-[8px] w-full"}
          />
        </div>
        <div className='md:text-[15px] mt-6 text-[12px] text-[#636363]'>Already have an account? <Link href={"/auth/login"} className="text-primary">Log In</Link></div>
    </div>
  );
}


function Login(){
  const router = useRouter()
  return (
    <div className='md:p-10 p-6'>
        <div className='flex justify-end'>
          <MdClose onClick={()=> router.push('/')} className="cursor-pointer text-2xl text-[#A3A3A3]" />
        </div>
        <div className='md:text-[36px] text-[25px] font-[700] text-primary'>Login</div>
        <div className='flex md:flex-row flex-col items-center md:gap-6 gap-3 mt-10'>
          <Button 
            text={"Sign up with Google"}
            imgPath={google}
            btnStyle={'border-[1px] border-[#A3A3A3] p-3 rounded-[8px] text-primary md:text-[15px] text-[12px] w-full'}
          />
          <Button 
            text={"Sign up with Facebook"}
            imgPath={facebook}
            btnStyle={'border-[1px] border-[#A3A3A3] p-3 rounded-[8px] text-primary md:text-[15px] text-[12px] w-full'}
          />
        </div>
        <div className='flex items-center gap-2 mt-8'>
          <div className='bg-[#bcbbbb] w-full p-[0.34px]'></div>
          <div className='text-[#bcbbbb]'>OR</div>
          <div className='bg-[#bcbbbb] w-full p-[0.34px]'></div>
        </div>

        <div className='flex flex-col gap-6 mt-8'>
          <Input placeholder={"Enter your e-mail"} inputStyle={"rounded-[8px]"} type={"email"} labelName={"E-mail Address"} />
          <Input placeholder={"Enter password"} inputStyle={"rounded-[8px]"} type={"password"} labelName={"Password"} />
          <Button 
            text={"Login"}
            btnStyle={"bg-primary text-white font-[600] md:text-[15px] text-[12px] p-4 rounded-[8px] w-full"}
          />
        </div>
        <div className='md:text-[15px] mt-6 text-[12px] text-[#636363]'>{"Don't have an account"}? <Link href={"/auth/register"} className="text-primary">Sign Up</Link></div>
    </div>
  );
}