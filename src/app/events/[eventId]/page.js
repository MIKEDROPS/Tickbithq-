"use client";

import Button from '@/components/elements/Button';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
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
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { authPublicRequest } from '@/utils/requestMethods';
import { AppContext } from '@/context/AppContext';
import Modal from '@/components/elements/Modal';
import { SlArrowRight } from "react-icons/sl";
import Input from '@/components/elements/Input';
import { FaLock } from 'react-icons/fa';
import { initScriptLoader } from 'next/script';


const EventDetails = ({params}) => {
    const {userData, ticketQuantity, setTicketQuantity, convertTo12HourFormat, buyTickethandler, handleTicketWalletPayment, getWalletById, wallet, isWalletLoading, isLoading, getUserData, isPaymentLoading} = useContext(AppContext);
    const router = useRouter();
    const [event, setEvent] = useState({});
    // const [eventId, setEventId] = useState("")
    const [isEvent, setIsEvent] = useState(false)
    const {eventId} = useParams()
    const [ticketModal, setTicketModal] = useState({
        selectTicketModal: false,
        ticketDetailsModal: false,
        ticketSummaryModal: false
    })


    useEffect(()=>{
        getUserData();
        setTicketData({
            ...ticketData,
            fullName: userData?.fullName,
            email: userData?.email
        })
    }, []);


    useEffect(()=>{
        getWalletById();
    }, []);

    const [ticketData, setTicketData] = useState({
        eventId: eventId,
        fullName: userData?.fullName,
        email: userData?.email,
        phoneNumber: "",
        userId: userData?._id,
        paymentStatus: "paid"
    });
    // const {eventId} = params;


    useEffect(()=>{
        if (!eventId) return;

        const fetchEventById = async ()=>{
            // let paramId = await params.eventId;
            // setEventId(paramId)
            setIsEvent(true)
            try {
                const {data} = await authPublicRequest.get(`/events/${eventId}`);
                if(data.success == true){
                    setEvent(data.event);
                    setIsEvent(false)
                    console.log(data.event)
                }
            } catch (error) {
                const err = error.response?.data;
                setIsEvent(false)
                toast(err.message);
            }
        }

        fetchEventById();

    }, [eventId]);


    function handleQuantity(opt){
        if(opt == "increment"){
            setTicketQuantity((prev)=> prev + 1);
        }else{
            setTicketQuantity((prev)=> prev == 1 ? prev = 1 : prev - 1);
        }
    }

  return (
    <div className='mt-[6rem] flex md:flex-row gap-8 md:px-6 px-3'>
        <div className='md:flex hidden'>
            <FaArrowLeft onClick={()=> router.back()} className='text-3xl cursor-pointer' />
        </div>
        <div className='w-full'>
            <div className='w-full'>
                <div className='rounded-[15px] object-cover w-full h-[450px]' style={{backgroundImage: `url(https://tickbit.onrender.com${event?.image})`}}>
                    {/* <Image src={`https://tickbit.onrender.com/` + event?.image?.replace("/uploads", "uploads")} className='rounded-[15px] object-cover w-full h-[450px]' alt='' width={1000} height={300} /> */}
                </div>
                <div className='flex items-center justify-between'>
                    <div className='md:text-[51px] text-[25px] text-[#2D2C3C] font-[800]'>{event?.event_title}</div>

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
                            {event?.start_date}
                        </div>
                        <div className='md:text-[18px] text-[14px] text-primary inline-flex items-center gap-2 font-[400]'>
                            <IoMdTime className='text-2xl' />
                            {convertTo12HourFormat(event?.start_time)} - {convertTo12HourFormat(event?.end_time)}
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
                            onBtnClick={()=> {
                                setTicketQuantity(1);
                                setTicketModal({...ticketModal, selectTicketModal: true})
                            }}
                        />
                        <div className='md:text-[27px] md:mt-4 text-[18px] font-[700] text-primary'>Ticket Information</div>
                        <div className='inline-flex items-center gap-[2px]'><IoTicketSharp /> {event?.ticket_name} Ticket: <BiBitcoin className='text-[#F7931A] rotate-[30deg]' /> {isNaN(event?.ticket_price) ? "0.00" : parseFloat(event?.ticket_price).toFixed(10)} BTC</div>
                    </div>
                </div>
            </div>

            <div className='my-8'>
                <div className='md:text-[30px] text-[20px] font-[700] text-primary mb-3'>Location</div>
                <div className='flex gap-2'>
                    <LuMapPin className='text-2xl' />
                    <p className='md:w-[500px]'>{event?.location}</p>
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
                        <div className='text-primary md:text-[21px] text-[16px] font-bold'>{userData?.fullName}</div>
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
                    <p className=''>{event?.event_description}</p>
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

        {ticketModal.selectTicketModal == true && (
            <>
                {ticketModal.ticketDetailsModal == true ? (
                    <>
                        {ticketModal.ticketSummaryModal == true ? (
                            <Modal isOpen={ticketModal.ticketSummaryModal} style={""} onCloseModal={()=> setTicketModal({...ticketModal, ticketSummaryModal: false, ticketDetailsModal: false, selectTicketModal: false}) }>
                                <div className='md:w-[842px] w-full bg-[#F1F3F6] absolute'>
                                    <div className='bg-white p-4 shadow-lg flex items-center gap-2'>
                                    <FaArrowLeft onClick={()=> setTicketModal({...ticketModal, ticketDetailsModal: true, ticketSummaryModal: false})} className='text-xl cursor-pointer' />
                                        <div className='text-primary font-[400] md:text-[32px] text-[25px]'>Order Summary</div>
                                    </div>
                                    <div className='mt-8'>
                                        <div className="h-[250px] overflow-auto">
                                            <div className='bg-white md:w-[603px] m-auto relative'>
                                                <div className='m-auto md:w-[550px] border-t-[5px] border-[#4872C6]'>
                                                    <div className='md:text-[30px] text-[20px] font-[500] text-[#4872C6] text-center'>{event?.ticket_name} Ticket</div>
                                                    <div className='py-6'>
                                                        <div className='mt-2'>
                                                            <div className='text-black md:text-[22px] text-[14px]'>{ticketData.fullName}</div>
                                                            <div className='text-black md:text-[22px] text-[14px]'>{ticketData.email}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='inline-flex items-center justify-between absolute right-0 bottom-3 p-1 bg-[#4872C6]'><BiBitcoin className='text-[#F7931A] rotate-[30deg]' /> <span className='text-white'>{parseFloat(event?.ticket_price * ticketQuantity).toFixed(10)} BTC</span></div>
                                            </div>
                                        </div>

                                        <div className='shadow-lg p-8 md:text-[25px] text-[15px] bg-white'>
                                            <div className='flex flex-col items-center md:w-[497.78px] m-auto'>
                                                <div className='flex items-center justify-between w-full text-[#5A5A5A] md:text-[28px] text-[18px]'>
                                                    <div className=''>Sub Total:</div>
                                                    <div className=''>{parseFloat(event?.ticket_price * ticketQuantity).toFixed(10)}</div>
                                                </div>
                                                <div className='flex items-center justify-between w-full text-[#5A5A5A] md:text-[18px] text-[18px]'>
                                                    <div className='text-right'>Tax:</div>
                                                    <div className=''>{parseFloat(event?.ticket_price * 0.1).toFixed(10)}</div>
                                                </div>
                                            </div>
                                            <div className='flex justify-between items-center font-[600] border-t-[1px] pt-4 md:w-[497.78px] m-auto'>
                                                <div className='inline-flex items-center justify-between'>Order Total: </div>
                                                <div className='inline-flex items-center justify-between'><BiBitcoin className='text-[#F7931A] rotate-[30deg]' /> <span className='text-green-700'>{parseFloat(event?.ticket_price * ticketQuantity).toFixed(10)} BTC</span></div>
                                            </div>
                                            {isWalletLoading ? (
                                                <Button text={"fetching Wallet data..."} btnStyle={'bg-gray-400 text-primary w-full m-auto p-4 md:text-[30px]'} />
                                            ) : (
                                                <Button 
                                                    text={isPaymentLoading ? "wait a minute, Payment is Being Made..." : "Pay Now"}
                                                    iconName={<FaLock className='md:text-3xl text-white' />}
                                                    btnStyle={"text-white mt-4 font-[600] gap-4 md:text-[32px] text-[25px] w-full bg-[#287921] p-4"}
                                                    loading={isLoading}
                                                    onBtnClick={()=> {
                                                        console.log(ticketData)
                                                        handleTicketWalletPayment(ticketData.eventId, ticketData.fullName, ticketData.email, ticketQuantity, ticketData.phoneNumber, "paid", "BTC", "blockchain", wallet?.address,  parseFloat(event?.ticket_price * ticketQuantity).toFixed(10))
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        ) : (
                            <Modal isOpen={ticketModal.ticketDetailsModal} style={""} onCloseModal={()=> setTicketModal({...ticketModal, ticketDetailsModal: false, ticketSummaryModal: false, selectTicketModal: false}) }>
                                <div className='md:w-[842px] w-full bg-[#F1F3F6] absolute'>
                                    <div className='bg-white p-4 shadow-lg flex items-center gap-2'>
                                        <FaArrowLeft onClick={()=> setTicketModal({...ticketModal, selectTicketModal: true, ticketDetailsModal: false})} className='text-xl cursor-pointer' />
                                        <div className='text-primary font-[400] md:text-[32px] text-[25px]'>Attendee Details</div>
                                    </div>
                                    <div className=''>
                                        <div className="h-[280px] overflow-auto p-6">
                                           <div className='flex items-center justify-between'>
                                                <div className='md:text-[25px] font-[400] text-[#5A5A5A]'>{event?.event_title}</div>
                                                <div className='md:text-[25px] font-[400] text-[#5A5A5A] inline-flex items-center'><LuCalendarDays className='text-xl' />{new Date(event?.start_date).toLocaleDateString()}</div>
                                           </div>

                                           <div className='p-3'>
                                                <div className='md:text-[20px] font-[500]'>{event?.ticket_name} Ticket: Ticket #1</div>
                                                <div className='space-y-6 bg-white p-3 border-t-[3px] border-primary'>
                                                    <Input labelName={"Full Name"} type={"text"} value={ticketData.fullName} onChange={(e)=> setTicketData({...ticketData, fullName: e.target.value})} placeholder={"Enter Attendee’s full name"} />
                                                    <Input labelName={"E-mail"} type={"email"} value={ticketData.email} onChange={(e)=> setTicketData({...ticketData, email: e.target.value})} placeholder={"Enter your e-mail"} />
                                                    <div className='flex flex-col'>
                                                        <label>Phone</label>
                                                        <div className='border-[1px] p-4'>
                                                            <input className='w-full' value={ticketData.phoneNumber} onChange={(e)=> setTicketData({...ticketData, phoneNumber: e.target.value})} type="text" placeholder="Enter Attendee's Phone Number" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='text-[20px] text-[#5A5A5A] mt-10 text-center'>
                                                    <div className=''>I accept the <span className='text-[#006198] font-[400]'>Terms of Service</span> and have read the <span className=''>Privacy Policy</span></div>
                                                </div>
                                           </div>
                                        </div>

                                        <div className='shadow-lg p-8 md:text-[25px] text-[15px] bg-white'>
                                            <div className='flex justify-center items-center gap-8'>
                                                <div className=''>Qty: <span className='text-green-700'>{ticketQuantity}</span></div>
                                                <div className='inline-flex items-center'>Total: <BiBitcoin className='text-[#F7931A] rotate-[30deg]' /> <span className='text-green-700'>{parseFloat(event?.ticket_price * ticketQuantity).toFixed(10)} BTC</span></div>
                                            </div>
                                            <Button 
                                                text={"Continue to Checkout"}
                                                iconName={<SlArrowRight className='md:text-3xl text-white' />}
                                                btnStyle={"text-white mt-4 font-[600] flex-row-reverse gap-4 md:text-[32px] text-[25px] w-full bg-primary p-4"}
                                                onBtnClick={()=> setTicketModal({...ticketModal, ticketSummaryModal: true})}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        )}
                    </>
                ) : (
                    <Modal isOpen={ticketModal.selectTicketModal} style={""} onCloseModal={()=> setTicketModal({...ticketModal, selectTicketModal: false}) }>
                        <div className='md:w-[842px] w-full bg-[#F1F3F6] absolute'>
                            <div className='bg-white p-4 shadow-lg'>
                                <div className='text-primary font-[400] md:text-[32px] text-[25px]'>Select Tickets</div>
                            </div>
                            <div className=''>
                                <div className='flex items-center justify-between md:text-[20px] text-[14px] font-[600] text-primary p-4'>
                                    <div className=''>Ticket Types</div>
                                    <div className=''>Quantity</div>
                                </div>

                                <div className="h-[250px] overflow-auto">
                                    <div className='flex justify-between items-center p-6 border-l-[15px] border-green-700 bg-white border-[1px]'>
                                        <div className=''>
                                            <div className='text-primary font-[600] md:text-[32px] text-[25px]'>Standard ticket</div>
                                            <div className='inline-flex items-center gap-[2px] text-[#5A5A5A] text-[25px]'><BiBitcoin className='text-[#F7931A] text-3xl rotate-[30deg]' /> {parseFloat(event?.ticket_price * ticketQuantity).toFixed(10)} BTC</div>
                                        </div>
                                        <div className='flex items-center justify-evenly gap-5'>
                                            <div className='w-[30px] h-[30px] cursor-pointer border-[1px] border-primary grid place-items-center rounded-full' onClick={()=> handleQuantity('decrement')}>-</div>
                                            <div className='text-[#5A5A5A] text-[25px]'>{ticketQuantity}</div>
                                            <div className='w-[30px] h-[30px] cursor-pointer border-[1px] border-primary grid place-items-center rounded-full' onClick={()=> handleQuantity('increment')}>+</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='shadow-lg p-8 md:text-[25px] text-[15px] bg-white'>
                                    <div className='flex justify-center items-center gap-8'>
                                        <div className=''>Qty: <span className='text-green-700'>{ticketQuantity}</span></div>
                                        <div className='inline-flex items-center'>Total: <BiBitcoin className='text-[#F7931A] rotate-[30deg]' /> <span className='text-green-700'>{parseFloat(event?.ticket_price * ticketQuantity).toFixed(10)} BTC</span></div>
                                    </div>
                                    <Button 
                                        text={"Proceed"}
                                        iconName={<SlArrowRight className='md:text-3xl text-white' />}
                                        btnStyle={"text-white mt-4 font-[600] flex-row-reverse gap-4 md:text-[32px] text-[25px] w-full bg-primary p-4"}
                                        onBtnClick={()=> setTicketModal({...ticketModal, ticketDetailsModal: true})}
                                    />
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
            </>
        )}
    </div>
  )
}

export default EventDetails;