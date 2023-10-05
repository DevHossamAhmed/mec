'use client'
import React from 'react'
import {MdArrowBackIos, MdArrowBackIosNew, MdKeyboardDoubleArrowLeft, MdNavigateBefore, MdNavigateNext} from 'react-icons/md'
import {LiaCertificateSolid} from 'react-icons/lia'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {AiFillApple} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import {FaTwitter , FaGooglePlay} from 'react-icons/fa'

import {Navigation , Pagination , Ally} from 'swiper';

import { Swiper , SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='w-full bg-[#1f2033] relative'>
        <button className="absolute text-white border-white border-2 w-[120px] mt-[-20px] left-[20px] h-[40px] bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c] rounded-3xl">اتصل بنا </button>
        <h1 className='text-white pt-[80px] text-center text-[30px] font-bold'>جوائزنا</h1>
        <div className='flex container m-auto pt-[60px]'>
            <Swiper
                navigation={{
                    nextEl:".button-next-slide",
                    prevEl:".button-prev-slide",
                }}
                freeMode={true}
                grabCursor={true}
                className='mySwiper relative group'

                breakpoints={{
                    0:{
                        slidesPerView:1.25 ,
                        spaceBetween:10,
                    },
                    480:{
                        slidesPerView:2 ,
                        spaceBetween:15,
                    },
                    768:{
                        slidesPerView:2 ,
                        spaceBetween:15,
                    },
                    1280:{
                        slidesPerView:5 ,
                        spaceBetween:15,
                    }
                }}
            >
                <SwiperSlide>
                    <div className='flex rounded-full bg-[#382a6b] text-start w-[250px] h-[160px]'>
                        <LiaCertificateSolid className=' text-[150px] text-[#7045a5]'/>
                        <div className=''>
                        <h1 className='block text-white pr-[5px]  pl-[5px] text-[16px] font-bold 
                        pt-[20px]'> 2019</h1> <br/>
                        <div >
                            <p className='text-[#a0a3a7] pr-[5px] text-[16px]'>جائزة التميز في خدمات التدريب المالي في الشرق الاوسط والخليج</p>
                        </div>
                        </div>
                    

                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className='flex rounded-full bg-[#382a6b] text-start w-[250px] h-[160px]'>
                        <LiaCertificateSolid className=' text-[150px] text-[#7045a5]'/>
                        <div className=''>
                        <h1 className='block text-white pr-[5px]  pl-[5px] text-[16px] font-bold 
                        pt-[20px]'> 2019</h1> <br/>
                        <div >
                            <p className='text-[#a0a3a7] pr-[5px] text-[16px]'>جائزة التميز في خدمات التدريب المالي في الشرق الاوسط والخليج</p>
                        </div>
                        </div>
                    

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex rounded-full bg-[#382a6b] text-start w-[250px] h-[160px]'>
                        <LiaCertificateSolid className=' text-[150px] text-[#7045a5]'/>
                        <div className=''>
                        <h1 className='block text-white pr-[5px]  pl-[5px] text-[16px] font-bold 
                        pt-[20px]'> 2019</h1> <br/>
                        <div >
                            <p className='text-[#a0a3a7] pr-[5px] text-[16px]'>جائزة التميز في خدمات التدريب المالي في الشرق الاوسط والخليج</p>
                        </div>
                        </div>
                    

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex rounded-full bg-[#382a6b] text-start w-[250px] h-[160px]'>
                        <LiaCertificateSolid className=' text-[150px] text-[#7045a5]'/>
                        <div className=''>
                        <h1 className='block text-white pr-[5px]  pl-[5px] text-[16px] font-bold 
                        pt-[20px]'> 2019</h1> <br/>
                        <div >
                            <p className='text-[#a0a3a7] pr-[5px] text-[16px]'>جائزة التميز في خدمات التدريب المالي في الشرق الاوسط والخليج</p>
                        </div>
                        </div>
                    

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex rounded-full bg-[#382a6b] text-start w-[250px] h-[160px]'>
                        <LiaCertificateSolid className=' text-[150px] text-[#7045a5]'/>
                        <div className=''>
                        <h1 className='block text-white pr-[5px]  pl-[5px] text-[16px] font-bold 
                        pt-[20px]'> 2019</h1> <br/>
                        <div >
                            <p className='text-[#a0a3a7] pr-[5px] text-[16px]'>جائزة التميز في خدمات التدريب المالي في الشرق الاوسط والخليج</p>
                        </div>
                        </div>
                    

                    </div>
                </SwiperSlide>
            

            </Swiper>
        </div>
        <div className='flex container px-8 m-auto pt-[60px] justify-between'>
                <div className='flex gap-8 pb-[20px] cursor-pointer'>
                    <Link className='text-white cursor-pointer'>من نحن</Link>
                    <Link className='text-white cursor-pointer'>اتصل بنا</Link>
                    <Link className='text-[#cc3f15] cursor-pointer'>تحذير المخاطرة</Link>
                    <Link className='flex text-[#a0a3a7] items-center gap-2'> 
                        <AiOutlineCopyrightCircle/>
                        2005-2023 خبراء المال
                    </Link>
                </div>
                <div className='flex  gap-8 pb-[20px] cursor-pointer text-end left-0'>
                    <Link className='flex text-[#636371] cursor-pointer w-[30px] h-[30px] rounded-full border-[2px] border-[#636371]
                    items-center text-center m-auto justify-center
                    '> 
                        <FaGooglePlay/>
                    </Link>
                    <Link className='flex text-[#636371] cursor-pointer w-[30px] h-[30px] rounded-full border-[2px] border-[#636371]
                    items-center text-center m-auto justify-center
                    '> 
                        <AiFillApple/>
                    </Link>
                    <Link className='flex text-[#636371] cursor-pointer w-[30px] h-[30px] rounded-full border-[2px] border-[#636371]
                    items-center text-center m-auto justify-center
                    '>
                        <FaTwitter/>    
                    </Link>


                    <Link className='flex text-[#636371] cursor-pointer w-[30px] h-[30px] rounded-full border-[2px] border-[#636371]
                    items-center text-center m-auto justify-center
                    '>
                        <BiLogoFacebook />    
                    </Link>

                </div>
        </div>
    </div>
  )
}

export default Footer