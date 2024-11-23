'use client';

import { publicRequest } from "@/utils/requestMethods";
import { parsePagesSegmentConfig } from "next/dist/build/segment-config/pages/pages-segment-config";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const AppContext = createContext();

export const AppProvider = ({children})=>{
    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({})
    const router = useRouter();

    const register = async (phoneNumber, password)=>{
        if(!phoneNumber || !password){
            toast("Fields can't be empty")
        }else{
            setIsLoading(true);
            try {
                const {data} = await publicRequest.post('/auth/signup', {phoneNumber, password})
                setIsLoading(false);
                if(data.success == true){
                    setUserInfo(data)
                    localStorage.setItem('userInfo', JSON.stringify(data));
                    toast(data?.message);
                    router.push('/')
                }
            } catch (error) {
                const err = error.response?.data;
                setIsLoading(false);
                toast(err?.message)
                return err;
            }
        }
    }


    const login = async (phoneNumber, password)=>{
        if(!phoneNumber || !password){
            toast("Fields can't be empty")
        }else{
            setIsLoading(true)
            try {
                const {data} = await publicRequest.post('/auth/login', {phoneNumber, password})
                setIsLoading(false);
                if(data.success == true){
                    setUserInfo(data)
                    localStorage.setItem('userInfo', JSON.stringify(data));
                    toast(data?.message);
                    router.push('/')
                }
            } catch (error) {
                const err = error.response?.data;
                setIsLoading(false);
                toast(err?.message)
                return err;
            }
        }
    }

    const logout = ()=>{
        localStorage.removeItem('userInfo')
        setUserInfo({})
        toast("Logged out Successfully")
        router.push("/auth/login");
    }

    const isLoggedIn = async ()=>{
        try{

            let userInfo = localStorage.getItem('userInfo')
            userInfo = JSON.parse(userInfo)

            if(userInfo){
                setUserInfo(userInfo)
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        isLoggedIn()
    },[]);



    return (
        <AppContext.Provider value={{
            isLoading,
            userInfo,
            register,
            login,
            logout,
        }}>
            {children}
        </AppContext.Provider>
    )
}