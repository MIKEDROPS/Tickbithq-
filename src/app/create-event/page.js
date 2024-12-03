"use client";

import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { BiBitcoin } from 'react-icons/bi';
import { FaArrowLeft } from 'react-icons/fa';
import { IoIosStar, IoMdTime } from 'react-icons/io';
import { IoTicketOutline, IoTicketSharp } from 'react-icons/io5';
import { LuCalendarDays, LuMapPin, LuShare2 } from 'react-icons/lu';
import Map from '../../../public/assets/img/Map.png';
import { toast } from 'react-toastify';
import axios from 'axios';
import { authPublicRequest, BASE_URL_MAIN } from '@/utils/requestMethods';
import { AppContext } from '@/context/AppContext';

const CreateEvent = () => {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [eventData, setEventData] = useState({
        event_title: "",
        event_category: "",
        event_type: "",
        event_img: "",
        start_date: "",
        start_time: "",
        end_time: "",
        location: "",
        event_description: "",
        running_event: "",
        ticket_name: "",
        ticket_price: "",
    })

  return (
    <div className='flex gap-6 md:mt-[6rem] mt-[3rem] p-8'>
        <div className='flex-[2]'>
            <div className='md:flex hidden'>
                <FaArrowLeft onClick={()=> router.back()} className='text-3xl cursor-pointer' />
            </div>
        </div>
        {step == 0 ? 
            <EventOne 
                step={step} 
                setStep={setStep}
                eventData={eventData}
                setEventData={setEventData}
                event_title={eventData.event_title}
                event_category={eventData.event_category}
                event_type={eventData.event_type}
                start_date={eventData.start_date}
                start_time={eventData.start_time}
                end_time={eventData.end_time}
                location={eventData.location}
                event_description={eventData.event_description}
            /> : step == 1 ? <EventTwo 
                    step={step} 
                    setStep={setStep} 
                    event_img={eventData.event_img}
                    eventData={eventData}
                    setEventData={setEventData}
                />: step == 2 ? 
                <EventThree 
                    step={step} 
                    setStep={setStep}
                    setEventData={setEventData}
                    eventData={eventData}
                    ticket_name={eventData.ticket_name}
                    ticket_price={eventData.ticket_price}
                    running_event={eventData.running_event}
                /> : step == 3 ? <EventFour 
                    step={step} 
                    setStep={setStep} 
                    eventData={eventData}
                    setEventData={setEventData}
                    event_title={eventData.event_title}
                    event_category={eventData.event_category}
                    event_type={eventData.event_type}
                    event_img={eventData.event_img}
                    start_date={eventData.start_date}
                    start_time={eventData.start_time}
                    end_time={eventData.end_time}
                    location={eventData.location}
                    event_description={eventData.event_description}
                    ticket_name={eventData.ticket_name}
                    ticket_price={eventData.ticket_price}
                    running_event={eventData.running_event}
                /> : <h1 className='text-red-500'>this step Doe not Exist</h1> }
        {/* <EventFour /> */}
    </div>
  )
}

export default CreateEvent;


function EventOne({setStep, step, event_title,
    event_category,
    event_type,
    start_date,
    start_time,
    end_time,
    location,
    event_description,
    setEventData,
    eventData
}){
    return (
        <div className='w-full md:space-y-14'>
            <div className=''>
                <div className='md:text-[36px] text-[24px] font-[700] text-primary'>Create a New Event</div>
            </div>
            <div className="">
                Pagination
            </div>
            <div className='w-full space-y-6'>
                <div className='flex items-center gap-2'>
                    <div className='flex-[1.1]'></div>
                    <div className='md:text-[30px] flex-[8] text-[20px]'>Event Details</div>
                </div>
                <div className='flex items-center text-[18px] gap-2'>
                    <label className='font-[600] flex-[1.1] text-right'>Event Title <span className='text-red-500'>*</span></label>
                    <div className='flex-[8]'>
                        <input value={event_title} onChange={(e)=> setEventData({...eventData, event_title: e.target.value})} placeholder={"Enter the name of your event"} className={'rounded-[6px] text-[#ACACAC] p-2 border-[1px] border-primary md:w-[675px]'} type={'text'} />
                    </div>
                </div>
                <div className='flex items-center text-[18px] gap-2'>
                    <label className='font-[600] flex-[1.1] text-right'>Event Category <span className='text-red-500'>*</span></label>
                    <div className='flex-[8]'>
                        <select value={event_category} onChange={(e)=> setEventData({...eventData, event_category: e.target.value})} className={'rounded-[6px] p-2 text-[#ACACAC] border-[1px] border-primary bg-transparent md:w-[675px]'}>
                            <option>Please select one</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Educational & Business">Educational & Business</option>
                            <option value="Cultural & Arts">Cultural & Arts</option>
                            <option value="Sports & Fitness">Sports & Fitness</option>
                            <option value="Technology & Innovation">Technology & Innovation</option>
                            <option value="Travel & Adventure">Travel & Adventure</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='w-full space-y-6'>
                <div className='flex items-center gap-2'>
                    <div className='flex-[1.1]'></div>
                    <div className='md:text-[30px] flex-[8] text-[20px]'>Date & Time</div>
                </div>
                <div className='flex items-center text-[18px] gap-2'>
                    <label className='font-[600] flex-[1.1] text-right'>Event Type <span className='text-red-500'>*</span></label>
                    <div className='flex-[8] flex items-center gap-8'>
                        <div className='inline-flex items-center gap-2 text-primary text-[16px] font-[500]'>
                            <input type="radio" value="single event" name="single event" checked={event_type == "single event"} onChange={(e)=> setEventData({...eventData, event_type: e.target.value})} />
                            Single Event
                        </div>
                        <div className='inline-flex items-center gap-2 text-primary text-[16px] font-[500]'>
                            <input type="radio" value="recurring event" name="recurring event"  checked={event_type == "recurring event"} onChange={(e)=> setEventData({...eventData, event_type: e.target.value})} />
                            Recurring Event
                        </div>
                    </div>
                </div>
                <div className='flex text-[18px] gap-2 w-full'>
                    <label className='font-[600] flex-[1.1] text-right'>Event Date <span className='text-red-500'>*</span></label>
                    <div className='flex-[8] flex items-center gap-8'>
                        <div className='flex flex-col w-full'>
                            <div className='text-primary font-[500] text-[16px]'>Start Date</div>
                            <input value={start_date} onChange={(e)=> setEventData({...eventData, start_date: e.target.value})}  type="date" className={'rounded-[6px] text-[#ACACAC] p-2 border-[1px] border-primary md:w-full'} placeholder='DD/MM/YY' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='text-primary font-[500] text-[16px]'>Start Time</div>
                            <input value={start_time} onChange={(e)=> setEventData({...eventData, start_time: e.target.value})}  type="time" className={'rounded-[6px] text-[#ACACAC] p-2 border-[1px] border-primary md:w-full'} placeholder='12:00 AM' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='text-primary font-[500] text-[16px]'>End Time</div>
                            <input value={end_time} onChange={(e)=> setEventData({...eventData, end_time: e.target.value})}  type="time" className={'rounded-[6px] text-[#ACACAC] p-2 border-[1px] border-primary md:w-full'} placeholder='12:00 AM' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full space-y-6'>
                <div className='flex items-center gap-2'>
                    <div className='flex-[1.1]'></div>
                    <div className='md:text-[30px] flex-[8] text-[20px]'>Location</div>
                </div>
                <div className='flex items-center text-[18px] gap-2'>
                    <label className='font-[600] flex-[1.1] text-right'>Where will your <span className='text-red-500'>*</span> event take place?</label>
                    <div className='flex-[8]'>
                        <select value={location} onChange={(e)=> setEventData({...eventData, location: e.target.value})}  className={'rounded-[6px] p-2 text-[#ACACAC] border-[1px] border-primary bg-transparent md:w-[675px]'}>
                            <option>Please select one</option>
                            <option value="port-harcourt">Port Harcourt</option>
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className='w-full space-y-6'>
                <div className='flex items-center gap-2'>
                    <div className='flex-[1.1]'></div>
                    <div className='md:text-[30px] flex-[8] text-[20px]'>Additional Information</div>
                </div>
                <div className='flex text-[18px] gap-2'>
                    <label className='font-[600] flex-[1.1] text-right'>Where will your <span className='text-red-500'>*</span> event take place?</label>
                    <div className='flex-[8]'>
                        <textarea value={event_description} onChange={(e)=> setEventData({...eventData, event_description: e.target.value})}  placeholder="Describe what's special about your event & other important details." className={'rounded-[6px] h-[300px] p-2 text-[#ACACAC] border-[1px] border-primary bg-transparent md:w-[675px]'}></textarea>
                    </div>
                </div>
            </div>

            <div className='flex justify-end'>
                <Button 
                    text={"Save & Continue"}
                    btnStyle={"bg-primary p-4 rounded-[8px] md:text-[18px] text-white md:w-[247.5px]"}
                    onBtnClick={()=> {
                        if(!event_title ||
                            !event_category ||
                            !event_type ||
                            !start_date,
                            !start_time ||
                            !end_time ||
                            !location ||
                            !event_description){
                             toast("Fields cannot be empty");
                             return;
                         }
                        setStep(1)
                        console.log(eventData)
                    }}
                />
            </div>
        </div>
    );
}
function EventTwo({
    setStep, 
    step, 
    setEventData,
    eventData
}){

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setEventData({ ...eventData, event_img: file });
    };


    return (
        <div className='w-full md:space-y-14'>
            <div className=''>
                <div className='md:text-[36px] text-[24px] font-[700] text-primary'>Event Banner</div>
                {/* <p className=''>Location</p> */}
            </div>
            <div className="">
                Pagination
            </div>

            <div className=''>
                <div className='md:text-[30px] flex-[8] text-[20px]'>Upload Image</div>
                <input type='file' onChange={handleFileChange} className='border-[1px] border-primary rounded-[8px] p-2 md:w-[675px]' />
                <p className="md:w-[562px] md:text-[18px] text-[14px] font-[500] text-[#5A5A5A]">Feature Image must be at least 1170 pixels wide by 504 pixels high. Valid file formats: JPG, GIF, PNG.</p>
            </div>
            

            <div className='flex items-center justify-end'>
                <Button 
                    text={"Go back to Edit Event"}
                    btnStyle={"p-4 rounded-[8px] md:text-[18px] text-primary md:w-[247.5px]"}
                    onBtnClick={()=> setStep(0)}
                />
                <Button 
                    text={"Save & Continue"}
                    btnStyle={"bg-primary p-4 md:text-[18px] rounded-[8px] text-white md:w-[247.5px]"}
                    onBtnClick={()=> {
                        if(
                            !eventData.event_img
                        ){
                             toast("Fields cannot be empty");
                             return;
                         }
                        setStep(2)
                        console.log(eventData)
                    }}
                />
            </div>
        </div>
    );
}


function EventThree({
    setStep, 
    step, 
    setEventData,
    eventData,
    ticket_name,
    ticket_price,
    running_event
}){
    const [runningEvent, setRunningEvent] = useState(null);

    return (
        <div className='w-full md:space-y-14'>
            <div className=''>
                <div className='md:text-[36px] text-[24px] font-[700] text-primary'>Event Ticketing</div>
                {/* <p className=''>Location</p> */}
            </div>
            <div className="">
                Pagination
            </div>

            <div className='flex flex-col text-[18px] gap-2 w-full'>
                <label className='font-[500] md:text-[30px]'>What type of event are you running?</label>
                <div className='flex items-center gap-8'>
                    <div onClick={()=> {
                        setRunningEvent(0)
                        setEventData({...eventData, running_event: "paid"})
                    }} className={`flex flex-col h-[166.5px] text-center ${runningEvent == 0 ? 'border-primary' : 'border-[#d1d1d1]'}  border-[2px] rounded-[6px] md:w-[423px] items-center gap-2 justify-center`}>
                        <IoTicketOutline className='text-[5rem]' />
                        <span className='md:text-[16.5px] font-[600]'>Ticketed Event</span>
                        <span className='md:text-[15px]'>My event requires tickets for entry</span>
                    </div>
                    <div onClick={()=> {
                        setRunningEvent(1)
                        setEventData({...eventData, running_event: "free"})
                    }} className={`flex flex-col h-[166.5px] text-center ${runningEvent == 1 ? 'border-primary' : 'border-[#d1d1d1]'} border-[2px] rounded-[6px] md:w-[423px] items-center gap-2 justify-center`}>
                        <IoTicketOutline className='text-[5rem]' />
                        <span className='md:text-[16.5px] font-[600]'>Free Event</span>
                        <span className='md:text-[15px]'>I’m running a free event</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col text-[18px] gap-2 w-full'>
                <label className='font-[500] md:text-[30px]'>What tickets are you selling?</label>
                <div className='flex items-center gap-8'>
                    <div className='flex flex-col gap-1 w-full'>
                        <div className='text-primary font-[500] text-[16px]'>Ticket Name</div>
                        <input value={ticket_name} onChange={(e)=> setEventData({...eventData, ticket_name: e.target.value})}   type="text" className={'rounded-[6px] text-[#ACACAC] p-2 border-[1px] border-primary md:w-full'} placeholder='Ticket Name e.g. General Admission' />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <div className='text-primary font-[500] text-[16px]'>Ticket Price</div>
                        <input value={ticket_price} onChange={(e)=> setEventData({...eventData, ticket_price: e.target.value})}   type="text" className={'rounded-[6px] text-[#ACACAC] p-2 border-[1px] border-primary md:w-full'} placeholder='0.00' />
                    </div>
                </div>
            </div>
            

            <div className='flex items-center justify-end'>
                <Button 
                    text={"Go back"}
                    btnStyle={"p-4 rounded-[8px] md:text-[18px] text-primary md:w-[247.5px]"}
                    onBtnClick={()=> setStep(1)}
                />
                <Button 
                    text={"Save & Continue"}
                    btnStyle={"bg-primary p-4 md:text-[18px] rounded-[8px] text-white md:w-[247.5px]"}
                    onBtnClick={()=>{
                        if(
                            !ticket_name ||
                            !ticket_price ||
                            !running_event){
                             toast("Fields cannot be empty");
                             return;
                         }
                         setStep(3)
                    }}
                />
            </div>
        </div>
    );
}
function EventFour({
    setStep, 
    step,
    event_title,
    event_category,
    event_type,
    start_date,
    start_time,
    end_time,
    location,
    event_description,
    setEventData,
    eventData,
    event_img,
    ticket_name,
    ticket_price,
    running_event
}){

    const {userInfo, userData} = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const authUserRequest = axios.create({
        baseURL: BASE_URL_MAIN,
        headers: {
            "Content-Type": "multipart/form-data",
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


    const createEventHandler = async ()=>{
        if(!event_title ||
           !event_category ||
           !event_type ||
           !start_date,
           !start_time ||
           !end_time ||
           !location ||
           !event_description ||
           !event_img ||
           !ticket_name ||
           !ticket_price ||
           !running_event){
            toast("Fields cannot be empty");
            return;
        }


        let formData = new FormData();

        formData.append("event_title", event_title);
        formData.append("event_category", event_category);
        formData.append("event_type", event_type);
        formData.append("start_date", start_date);
        formData.append("start_time", start_time);
        formData.append("end_time", end_time);
        formData.append("location", location);
        formData.append("event_description", event_description);
        formData.append("running_event", running_event);
        formData.append("ticket_name", ticket_name);
        formData.append("ticket_price", parseFloat(ticket_price));
        formData.append("image", event_img);

        setIsLoading(true);

        try {
            const {data} = await authUserRequest.post(`/events/${userData?._id}/create-event`, formData);
            if(data.success == true){
                toast(data.message);
                setIsLoading(false)
                setTimeout(()=>{
                    router.push("/")
                }, 2000)
            }
        } catch (error) {
            let err = error.response?.data;
            setIsLoading(false)
            toast(err?.message)
        }
    }


    return (
        <div className='w-full md:space-y-14'>
        <div className=''>
            <div className='md:text-[36px] text-[24px] font-[700] text-primary'>Event Summary</div>
            {/* <p className=''>Location</p> */}
        </div>
        <div className="">
            Pagination
        </div>

        <p className="md:text-[18px] text-primaryfont-[400]">{"Nearly there! Check everything’s correct."}</p>

        <div className=''>
            <div className='w-full'>
                <div className='w-full'>
                    <div className=''>
                        {event_img ? (
                            <Image src={URL.createObjectURL(event_img)} className='rounded-[15px] object-cover w-full h-[450px]' alt='' width={1000} height={300} />
                        ) : (
                            <Image src={'https://res.cloudinary.com/samueladexcloudinary/image/upload/v1731154303/tickbit-hero_nq4mia.jpg'} className='rounded-[15px] object-cover w-full h-[450px]' alt='' width={1000} height={300} />
                        )}
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='md:text-[51px] text-[25px] text-[#2D2C3C] font-[800]'>{eventData?.event_title}</div>

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
                                {eventData?.start_date}
                            </div>
                            <div className='md:text-[18px] text-[14px] text-primary inline-flex items-center gap-2 font-[400]'>
                                <IoMdTime className='text-2xl' />
                                {eventData?.start_time} PM - {eventData?.end_time} PM
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
                            <div className='inline-flex items-center gap-[2px]'><IoTicketSharp /> {eventData?.ticket_name} Ticket: <BiBitcoin className='text-[#F7931A] rotate-[30deg]' /> {eventData?.ticket_price} BTC</div>
                        </div>
                    </div>
                </div>

                <div className='my-8'>
                    <div className='md:text-[30px] text-[20px] font-[700] text-primary mb-3'>Location</div>
                    <div className='flex gap-2'>
                        <LuMapPin className='text-2xl' />
                        <p className='md:w-[500px]'>{eventData?.location}</p>
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
                        <p className=''>{eventData?.event_description}</p>
                    </div>
                </div>
            </div>
        </div>
        

        <div className='flex items-center gap-5 justify-end'>
            <Button
                text={"Save for Later"}
                btnStyle={"p-4 rounded-[8px] md:text-[18px] bg-secondary md:w-[247.5px]"}
                onBtnClick={()=> setStep(1)}
            />
            <Button 
                text={"Publish Event"}
                loading={isLoading}
                btnStyle={"bg-primary p-4 md:text-[18px] rounded-[8px] text-white md:w-[247.5px]"}
                onBtnClick={()=> {
                    console.log("event-Data: ", eventData, {...eventData.event_img});
                    createEventHandler()
                }}
            />
        </div>
    </div>
    );
}