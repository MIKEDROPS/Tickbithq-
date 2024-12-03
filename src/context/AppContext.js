"use client";

import { authPublicRequest, authUserRequest, publicRequest, userRequest } from "@/utils/requestMethods";
import axios from "axios";
import { parsePagesSegmentConfig } from "next/dist/build/segment-config/pages/pages-segment-config";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const AppContext = createContext();

export const AppProvider = ({children})=>{
    const [isLoading, setIsLoading] = useState(false);
    const [ticketQuantity, setTicketQuantity] = useState(0);
    const [wallet, setWallet] = useState({})
    const [isPaymentLoading, setIsPaymentLoading] = useState(false)

    const [userInfo, setUserInfo] = useState(() => {
        // Lazy initialization
        const storedData = typeof window !== "undefined" && localStorage.getItem("userInfo");
        return storedData ? JSON.parse(storedData) : {};
    });
    const router = useRouter();
    const [userData, setUserData] = useState({});
    const BASE_URL_MAIN = 'https://tickbit.onrender.com/api';


    // Save userInfo to localStorage only when explicitly set
    const saveUserInfo = (data) => {
        setUserInfo(data);
        typeof window !== "undefined" && localStorage.setItem("userInfo", JSON.stringify(data));
    };

    const removeUserInfo = () => {
        setUserInfo({});
        typeof window !== "undefined" && localStorage.removeItem("userInfo");
    };


    userRequest.interceptors.request.use(
        (config) => {
          const token = userInfo?.token;
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => Promise.reject(error)
    );


    const register = async (fullName, email, password)=>{
        if(!fullName || !email || !password){
            toast("Fields can't be empty")
        }else{
            setIsLoading(true);
            try {
                const {data} = await authPublicRequest.post('/auth/signup', {fullName, email, password})
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




    const login = async (email, password)=>{
        if(!email || !password){
            toast("Fields can't be empty")
        }else{
            setIsLoading(true)
            try {
                const {data} = await authPublicRequest.post('/auth/login', {email, password})
                setIsLoading(false);
                if(data.success == true){
                    setUserInfo(data)
                    console.log(data, data.token)
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

    const authUserRequest = axios.create({
        baseURL: BASE_URL_MAIN,
        headers: {
            "Content-Type": "application/json",
        }
    });

    authUserRequest.interceptors.request.use(
        (config) => {
          const token = userInfo?.token;
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => Promise.reject(error)
    );

    const getUserData = async ()=>{
        if (!userInfo?.token) {
            toast("No token found, please login again");
            return;
        }
        console.log("getUserData normal: ", userInfo?.token);
        setIsLoading(true)
        try {
            const {data} = await authUserRequest.get('/auth/user')
            setIsLoading(false);
            console.log(data)
            if(data.success == true){
                setUserData(data.data)
                console.log("getUserData: ", data);
                // toast(data?.message);
            }
        } catch (error) {
            const err = error.response?.data;
            setIsLoading(false);
            toast(`${err?.message} - ${userInfo?.token}`)
            console.log("getUserData error: ", err + userInfo?.token)
        }
    }


    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    const createNewWallet = async ()=>{
        if (!userInfo?.token) {
            toast("No token found, please login again");
            return;
        }
        setIsLoading(true)
        let newToken = parseJwt(userInfo.token)
        try {
            console.log("This is createWallet Token: ", userInfo.token);
            const {data} = await userRequest.post(`/wallet/${userData?._id}/create-wallet`, 
                {userId: userData?._id, type: 'blockchain'}
            )

            if(data?.success == true){
                console.log(data)
                setIsLoading(false);
                toast(data?.message)
            }
        } catch (error) {
            const err = error.response?.data;
            setIsLoading(false);
            toast(err?.message)
        }
    }

    const connectWallet = async ()=>{
        return;
    }

    const getWalletById = async ()=>{
        try {
            const {data} = await userRequest.get(`/wallet/${userData?.wallets[0]}`)
            if(data.success == true){
                setWallet(data.wallet);
                console.log(data);
            }
        } catch (error) {
            const err = error.response?.data;
            // setIsLoading(false);
            toast(err?.message)
        }
    }


    const handleTicketWalletPayment = async (
        eventId,
        fullName,
        email,
        quantity,
        phoneNumber,
        paymentStatus)=>{

        if(!eventId || !fullName || !email || !quantity || !phoneNumber || !paymentStatus){
            toast("Fields cannot be empty");
            return;
        }
        setIsPaymentLoading(true);
        try {
            const {data} = await userRequest.get(`/wallet/${userData?.wallets[0]}/transactions`);
            if(data.success == true){
                console.log(data.transacted);
                setIsPaymentLoading(false)
                toast(data.message);
                buyTickethandler(
                    eventId,
                    fullName,
                    email,
                    quantity,
                    phoneNumber,
                    paymentStatus)
            }
        } catch (error) {
            const err = error.response?.data;
            setIsPaymentLoading(false)
            toast(err?.message)
        }
    }


    const buyTickethandler = async (
        eventId,
        fullName,
        email,
        quantity,
        phoneNumber,
        paymentStatus
    )=>{
        if(!eventId || !fullName || !email || !quantity || !phoneNumber || !paymentStatus){
            toast("Fields cannot be empty");
            return;
        }
        setIsLoading(true)
        try {
            const {data} = await authUserRequest.post(`/events/${eventId}/create-ticket`, {eventId, fullName, email, quantity, phoneNumber, userId: userData?._id, paymentStatus});
            if(data.success == true){
                setIsLoading(false)
                toast(data?.message)
                // handleTicketWalletPayment()
            }
        } catch (error) {
            const err = error.response?.data;
            setIsLoading(false)
            toast(err?.message)
        }
    }


    const convertTo12HourFormat = (time) => {
        if (!time) return "Invalid time";

        const [hours, minutes] = time.split(":");
        const hour = parseInt(hours, 10);
        const suffix = hour >= 12 ? "PM" : "AM";
        const adjustedHour = hour % 12 || 12; // 12-hour format
        return `${adjustedHour}:${minutes} ${suffix}`;
    };

    

    // Fetch user data on app load if token is present
  useEffect(() => {
    if (userInfo?.token) {
      getUserData();
    }
  }, [userInfo?.token]);



    return (
        <AppContext.Provider value={{
            isLoading,
            userInfo,
            register,
            login,
            getUserData,
            userData,
            convertTo12HourFormat,
            logout,

            /* Create Wallet */
            createNewWallet,
            connectWallet,

            /* Buy Ticket */
            buyTickethandler,
            ticketQuantity,
            setTicketQuantity,

            /* Wallet */
            wallet,
            getWalletById,
            handleTicketWalletPayment,
            isPaymentLoading
        }}>
            {children}
        </AppContext.Provider>
    )
}