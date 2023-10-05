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

import Img1 from '../../assets/images/avatar1.jpg'
import Img2 from '../../assets/images/avatar2.jpg'
import Img3 from '../../assets/images/avatar3.jpg'

const InstName = () => {
  return (
    <div className='pt-[35px]'>

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
            <div className='bg-[#382a6b] text-center py-7 w-[250px] h-[250px]'>
                <Image src={Img1} alt='Img1'  className='imgcard m-auto  '/>
                <h1 className='text-white pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'> PROF.AHMED IBRAHIM</h1>
                <p className='text-[#a0a3a7] pr-[5px] text-[16px] '>
                    In publishing and graphic design, <br />
                    lorem ipsum is a placeholder text
                </p>

            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#392b6a] text-center py-7 w-[250px] h-[250px]'>
                <Image src={Img1} alt='Img1'  className='imgcard m-auto  '/>
                <h1 className='text-white pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'> PROF.AHMED IBRAHIM</h1>
                <p className='text-[#a0a3a7] pr-[5px] text-[16px] '>
                    In publishing and graphic design, <br />
                    lorem ipsum is a placeholder text
                </p>

            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#44356c] text-center py-7 w-[250px] h-[250px]'>
                <Image src={Img1} alt='Img1'  className='imgcard m-auto  '/>
                <h1 className='text-white pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'> PROF.AHMED IBRAHIM</h1>
                <p className='text-[#a0a3a7] pr-[5px] text-[16px] '>
                    In publishing and graphic design, <br />
                    lorem ipsum is a placeholder text
                </p>

            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#433564] text-center py-7 w-[250px] h-[250px]'>
                <Image src={Img1} alt='Img1'  className='imgcard m-auto  '/>
                <h1 className='text-white pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'> PROF.AHMED IBRAHIM</h1>
                <p className='text-[#a0a3a7] pr-[5px] text-[16px] '>
                    In publishing and graphic design, <br />
                    lorem ipsum is a placeholder text
                </p>

            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#473962] text-center py-7 w-[250px] h-[250px]'>
                <Image src={Img1} alt='Img1'  className='imgcard m-auto  '/>
                <h1 className='text-white pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'> PROF.AHMED IBRAHIM</h1>
                <p className='text-[#a0a3a7] pr-[5px] text-[16px] '>
                    In publishing and graphic design, <br />
                    lorem ipsum is a placeholder text
                </p>

            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#4c3d5f] text-center py-7 w-[250px] h-[250px]'>
                <Image src={Img1} alt='Img1'  className='imgcard m-auto  '/>
                <h1 className='text-white pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'> PROF.AHMED IBRAHIM</h1>
                <p className='text-[#a0a3a7] pr-[5px] text-[16px] '>
                    In publishing and graphic design, <br />
                    lorem ipsum is a placeholder text
                </p>

            </div>
            </SwiperSlide>
        <button className='absolute top-[50%] group right-[-15px] duration-500 button-next-slide z-50  text-white font-bold w-[40px] text-[35px] items-center justify-center text-center m-auto h-[40px] rounded-full bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c]'>
            <MdNavigateNext />
        </button>
        <button className='absolute top-[50%] group left-[-10px] duration-500 button-prev-slide z-50 text-white  px-1 font-bold w-[40px] text-[35px] items-center justify-center text-center m-auto h-[40px] rounded-full bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c]'>
            <MdNavigateBefore/>
        </button>
        </Swiper>
    </div>
  )
}

export default InstName