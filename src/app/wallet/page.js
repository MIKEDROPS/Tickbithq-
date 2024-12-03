"use client";

import Button, { Loader } from '@/components/elements/Button';
import { AppContext } from '@/context/AppContext';
import React, { useContext, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { toast } from 'react-toastify';
import { LuUpload } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { IoCardOutline, IoCopyOutline } from "react-icons/io5";
import { TbExchange } from "react-icons/tb";
import { IoMdCopy } from 'react-icons/io';



function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

const Wallet = () => {
    const {getUserData, userData, userInfo, isLoading, createNewWallet, connectWallet, wallet,
        getWalletById} = useContext(AppContext);
    const [walletType, setWalletType] = useState("")
    console.log("jwt token: ", parseJwt(userInfo?.token)?.id, userData.wallets);

    useEffect(()=>{
        getUserData();
    }, [])


    useEffect(()=>{
        getWalletById();
    }, []);
    
    let data = localStorage.getItem('userInfo');
    console.log("userData token: ", userInfo?.token);

    const handleWalletType = (val) =>{
        setWalletType(val)
    }


  return (
    <div className='grid place-items-center p-3 py-[6rem]'>
        {isLoading && <Loader />}
        {userData?.wallets?.length > 0 ? (
            <div className='md:w-[884px] w-full rounded-[32px] py-10 px-14 md:space-y-8 border-[2px] border-primary bg-gradient-to-tr to-primary from-[rgba(45,44,60,0.8)] grid place-items-center'>
                <div className=''>
                    {/* {userData?.wallets[0]} */}
                    <select className='p-3 rounded-[12px] border-[1px] bg-primary'>
                        <option>-- Switch Wallet --</option>
                        {userData.wallets?.map((wallet, index) =>(
                            <option key={index} value={wallet}>{`Wallet ${index === 0 ? "" : index}`}</option>
                        ))}
                    </select>
                </div>

                <div className='flex items-center justify-center'>
                    <div className='text-gray-300 text-2xl cursor-pointer'>{wallet?.address && wallet?.address.slice(0,10)+"..."+wallet.address.slice(wallet?.address.length - 10, wallet?.address.length)}</div>
                    <IoCopyOutline className='text-3xl text-white cursor-pointer' />
                </div>

                <div className='md:w-[343px] md:space-y-6 space-y-3'>    
                    <div className='w-full rounded-[16px] bg-[#212246] shadow-md p-6 md:space-y-5 '>
                        <div className='text-white'>
                            <div className='md:text-[12px] text-[10px] font-[400]'>My Assets</div>
                            <div className='md:text-[32px] text-[23px] font-[700]'>{parseFloat(wallet?.balance).toFixed(10) || "0.00"} BTC</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className=''>
                                <div className='text-white text-[12px]'>Monthly profit</div>
                                <div className='md:text-[12px] text-[10px] text-[#07A962]'>+ $ 3,212.5</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='text-[#07A962] bg-[rgba(123,255,178,0.2)] w-[56px] md:text-[10px] text-[8px] font-[600] py-[3px] px-[6px] h-[21px] rounded-[4px]'>+34%</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col gap-1 items-center cursor-pointer'>
                            <div className='bg-secondary w-[60.79px] h-[48.13px] rounded-[16px] grid place-items-center'>
                                <LuUpload className='text-3xl' />
                            </div>
                            <div className='text-white text-[13px] font-[400]'>Send</div>
                        </div>
                        <div className='flex flex-col gap-1 items-center cursor-pointer'>
                            <div className='bg-secondary w-[60.79px] h-[48.13px] rounded-[16px] grid place-items-center'>
                                <FiDownload className='text-3xl' />
                            </div>
                            <div className='text-white text-[13px] font-[400]'>Receive</div>
                        </div>
                        <div className='flex flex-col gap-1 items-center cursor-pointer'>
                            <div className='bg-secondary w-[60.79px] h-[48.13px] rounded-[16px] grid place-items-center'>
                                <IoCardOutline className='text-3xl' />
                            </div>
                            <div className='text-white text-[13px] font-[400]'>Buy</div>
                        </div>
                        <div className='flex flex-col gap-1 items-center cursor-pointer'>
                            <div className='bg-secondary w-[60.79px] h-[48.13px] rounded-[16px] grid place-items-center'>
                                <TbExchange className='text-3xl' />
                            </div>
                            <div className='text-white text-[13px] font-[400]'>Exchange</div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex justify-between text-white font-[600] md:text-[16px] text-[13px] items-center'>
                            <span className='cursor-pointer flex-[1] text-center'>Token</span>
                            <span className='cursor-pointer flex-[1] text-center'>NFTs</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className=''>
                            <div className=''>
                                
                            </div>
                        </div>
                        <div className=''></div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='md:w-[884px] w-full rounded-[32px] py-10 px-14 md:space-y-8 border-[2px] border-primary bg-gradient-to-tr to-primary from-[rgba(45,44,60,0.8)]'>

                <div className='text-white text-center'>
                    <div className='md:font-[700] font-[600] md:text-[30px] text-[22px]'>Welcome to Tickbit Wallet</div>
                    <div className='md:text-[13px] text-[10px] font-[500]'>Hold crypto assets in your custody. Track your portfolio performance, and interact with web 3 Dapps</div>
                </div>

                <div className='md:space-y-8 space-y-4'>
                    <div onClick={()=> handleWalletType("0")} className={`md:flex items-center rounded-[32px] cursor-pointer py-14 px-8 border-[2px] ${walletType == '0' ? 'border-white' : 'border-transparent'} hover:border-white bg-[#212246] text-white`}>
                        <div className='flex-[1]'></div>
                        <div className='flex-[4]'>
                            <div className='md:font-[700] font-[600] md:text-[20px] text-[16px]'>Create a new wallet</div>
                            <div className='md:text-[12px] text-[10px] font-[500]'>Get started with Crypto by creating a new wallet address to hold, trade and exchange assets.</div>
                        </div>
                    </div>
                    <div onClick={()=> handleWalletType("1")} className={`md:flex items-center rounded-[32px] cursor-pointer px-8 py-14 border-[2px] ${walletType == '1' ? 'border-primary' : 'border-transparent'}  hover:border-primary bg-[#fff] text-primary`}>
                        <div className='flex-[1]'></div>
                        <div className='flex-[4]'>
                            <div className='md:font-[700] font-[600] md:text-[20px] text-[16px]'>I already have an account</div>
                            <div className='md:text-[12px] text-[10px] font-[500]'>Import your seed phrase from an already existing account and hold, trade and exchange crypto asset.</div>
                        </div>
                    </div>
                </div>


                <Button 
                    text={"Create Wallet"}
                    loading={isLoading}
                    onBtnClick={()=>{
                        if(walletType === "0"){
                            createNewWallet();
                        }else if(walletType == "1"){
                            connectWallet()
                        }else{
                            toast("Please Select a Wallet Option")
                        }
                    }}
                    btnStyle={"text-secondary bg-primary m-auto p-3 rounded-[20px] font-[600] md:w-[230px]"}
                />
            </div>
        )}
    </div>
  )
}

export default Wallet