'use client';
import React from 'react'
import {MdArrowBackIos, MdArrowBackIosNew, MdKeyboardDoubleArrowLeft, MdNavigateBefore, MdNavigateNext} from 'react-icons/md'

import {Navigation , Pagination , Ally} from 'swiper';

import { Swiper , SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { BiCalendar } from 'react-icons/bi';
import Image from 'next/image';

import Img1 from '../../assets/images/img-1.png'
import Img2 from '../../assets/images/img-2.png'
import Img3 from '../../assets/images/img-3.png'
import Img4 from '../../assets/images/img-4.png'
import Img5 from '../../assets/images/img-5.png'

const SectionFour = () => {
  return (
    <div className='pt-[35px]'>
         <div className='flex justify-between mb-[15px]'>
            <h1 className='text-white text-[20px] font-bold'>برامج المصرفية الاسلامية  </h1>

            <h2 className='flex items-center justify-end font-bold gap-1 text-[#f0b90b] '>عرض المزيد 
                <MdKeyboardDoubleArrowLeft/>
            </h2>
        </div>
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
            <div className='bg-[#191a25] w-[250px] h-[320px]'>
                <Image src={Img1} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'>    المبادئ والاساسيات التحليل الفني</h1>
                <p className='text-white pr-[5px] text-[16px] '>برامج السوق المالية</p>
                <div className='flex w-full text-white justify-between pr-[5px] pl-[5px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س 1500</h2>
                    <h2 className='flex items-center'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[250px] h-[320px]'>
                <Image src={Img2} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'>    المبادئ والاساسيات التحليل الفني</h1>
                <p className='text-white pr-[5px] text-[16px] '>برامج السوق المالية</p>
                <div className='flex w-full text-white justify-between pr-[5px] pl-[5px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س 1500</h2>
                    <h2 className='flex items-center'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[250px] h-[320px]'>
                <Image src={Img3} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'>    المبادئ والاساسيات التحليل الفني</h1>
                <p className='text-white pr-[5px] text-[16px] '>برامج السوق المالية</p>
                <div className='flex w-full text-white justify-between pr-[5px] pl-[5px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س 1500</h2>
                    <h2 className='flex items-center'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[250px] h-[320px]'>
                <Image src={Img4} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'>    المبادئ والاساسيات التحليل الفني</h1>
                <p className='text-white pr-[5px] text-[16px] '>برامج السوق المالية</p>
                <div className='flex w-full text-white justify-between pr-[5px] pl-[5px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س 1500</h2>
                    <h2 className='flex items-center'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[250px] h-[320px]'>
                <Image src={Img5} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'>    المبادئ والاساسيات التحليل الفني</h1>
                <p className='text-white pr-[5px] text-[16px] '>برامج السوق المالية</p>
                <div className='flex w-full text-white justify-between pr-[5px] pl-[5px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س 1500</h2>
                    <h2 className='flex items-center'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[250px] h-[320px]'>
                <Image src={Img2} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'>    المبادئ والاساسيات التحليل الفني</h1>
                <p className='text-white pr-[5px] text-[16px] '>برامج السوق المالية</p>
                <div className='flex w-full text-white justify-between pr-[5px] pl-[5px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س 1500</h2>
                    <h2 className='flex items-center'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            </SwiperSlide>
        <button className='absolute top-[50%] group right-[-12px] duration-500 button-next-slide z-50  text-white font-bold w-[40px] text-[35px] items-center justify-center text-center m-auto h-[40px] rounded-full bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c]'>
            <MdNavigateNext />
        </button>
        <button className='absolute top-[50%] group left-[-10px] duration-500 button-prev-slide z-50 text-white  px-1 font-bold w-[40px] text-[35px] items-center justify-center text-center m-auto h-[40px] rounded-full bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c]'>
            <MdNavigateBefore/>
        </button>
        </Swiper>
    </div>
  )
}

export default SectionFour