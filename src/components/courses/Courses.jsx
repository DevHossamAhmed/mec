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
import Imge1 from '../../assets/images/1.png'
import Imge2 from '../../assets/images/3.png'
// import Imge3 from '../../assets/images/3.png'

import {TbFileCertificate} from 'react-icons/tb'
import {MdLocationOn} from 'react-icons/md'
import {GiBackwardTime} from 'react-icons/gi'
import {BsStarFill , BsStarHalf} from 'react-icons/bs'


const Courses = () => {
  return (
    <div className='pt-[35px] container m-auto mb-[30px]'>
         <div className='flex px-3  justify-between mb-[15px]'>
            <h1 className='text-white text-[16px] xl:text-[20px] font-bold'> الدورات القادمة </h1>

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
                    slidesPerView:1.5 ,
                    spaceBetween:10,
                },
                480:{
                    slidesPerView:2 ,
                    spaceBetween:15,
                },
                768:{
                    slidesPerView:2.5 ,
                    spaceBetween:15,
                },
                1280:{
                    slidesPerView:4 ,
                    spaceBetween:15,
                }
            }}
        >
            <SwiperSlide className='px-3'>
                <div className='bg-[#191a25] w-[100%] relative'>
                    <Image src={Img1} alt='Img1' className='imagcor' />
                    <div className='absolute top-[235px] right-[35%] flex m-auto justify-center'>
                        <Image src={Imge1} alt='Imge1' className='imgavatar' />
                        <div className='text-white w-[30px] h-[30px]
                        bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c] border-[#81559c]
                        rounded-full border-2  ' >
                            <TbFileCertificate className='text-[20px] my-[3px] mx-[3px]  text-center items-center justify-center' />
                        </div>
                    </div>
                    <h1 className='text-[#a0a3a7] pr-[15px] pl-[15px] pb-[15px]  text-[16px] font-bold pt-[20px]'>    المبادئ والاساسيات التحليل الفني</h1>
                    <p className='flex items-center gap-1 pb-[10px] text-white pr-[15px] pl-[15px] text-[14px] '> <MdLocationOn className='text-[#81559c] text-[20px] '/> اون لاين</p>
                    <p className='flex items-center gap-1 pb-[10px] text-white pr-[15px] pl-[15px] text-[14px] '> <BiCalendar className='text-[#81559c] text-[20px] '/>  07/10/2023</p>
                    <p className='flex items-center gap-1  text-white pr-[15px] pl-[15px] text-[14px] '> <GiBackwardTime className='text-[#81559c] text-[20px] '/> 45 ساعة </p>
                    <div className='flex items-center gap-2 text-white py-[10px] px-[15px] justify-end'>
                        <BsStarHalf className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <span className='text-[18px] pr-[5px]'>4.5</span>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-[#191a25] w-[100%] relative'>
                    <Image src={Img1} alt='Img1' className='imagcor'/>
                    <div className='absolute top-[235px] right-[35%] flex m-auto justify-center'>
                        <Image src={Imge2} alt='Imge1' className='imgavatar' />
                        <div className='text-white w-[30px] h-[30px]
                        bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c] border-[#81559c]
                        rounded-full border-2  ' >
                            <TbFileCertificate className='text-[20px] my-[3px] mx-[3px]  text-center items-center justify-center' />
                        </div>
                    </div>
                    <h1 className='text-[#a0a3a7] pr-[15px] pl-[15px] pb-[15px]  text-[16px] font-bold pt-[20px]'>    المبادئ والاساسيات التحليل الفني</h1>
                    <p className='flex items-center gap-1 pb-[10px] text-white pr-[15px] pl-[15px] text-[14px] '> <MdLocationOn className='text-[#81559c] text-[20px] '/> اون لاين</p>
                    <p className='flex items-center gap-1 pb-[10px] text-white pr-[15px] pl-[15px] text-[14px] '> <BiCalendar className='text-[#81559c] text-[20px] '/>  07/10/2023</p>
                    <p className='flex items-center gap-1  text-white pr-[15px] pl-[15px] text-[14px] '> <GiBackwardTime className='text-[#81559c] text-[20px] '/> 45 ساعة </p>
                    <div className='flex items-center gap-2 text-white py-[10px] px-[15px] justify-end'>
                        <BsStarHalf className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <span className='text-[18px] pr-[5px]'>4.5</span>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-[#191a25] w-[100%] relative'>
                    <Image src={Img1} alt='Img1' className='imagcor'/>
                    <div className='absolute top-[235px] right-[35%] flex m-auto justify-center'>
                        <Image src={Imge2} alt='Imge1' className='imgavatar' />
                        <div className='text-white w-[30px] h-[30px]
                        bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c] border-[#81559c]
                        rounded-full border-2  ' >
                            <TbFileCertificate className='text-[20px] my-[3px] mx-[3px]  text-center items-center justify-center' />
                        </div>
                    </div>
                    <h1 className='text-[#a0a3a7] pr-[15px] pl-[15px] pb-[15px]  text-[16px] font-bold pt-[20px]'>    المبادئ والاساسيات التحليل الفني</h1>
                    <p className='flex items-center gap-1 pb-[10px] text-white pr-[15px] pl-[15px] text-[14px] '> <MdLocationOn className='text-[#81559c] text-[20px] '/> اون لاين</p>
                    <p className='flex items-center gap-1 pb-[10px] text-white pr-[15px] pl-[15px] text-[14px] '> <BiCalendar className='text-[#81559c] text-[20px] '/>  07/10/2023</p>
                    <p className='flex items-center gap-1  text-white pr-[15px] pl-[15px] text-[14px] '> <GiBackwardTime className='text-[#81559c] text-[20px] '/> 45 ساعة </p>
                    <div className='flex items-center gap-2 text-white py-[10px] px-[15px] justify-end'>
                        <BsStarHalf className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <span className='text-[18px] pr-[5px]'>4.5</span>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[100%] relative'>
                    <Image src={Img1} alt='Img1' className='imagcor' />
                    <div className='absolute top-[235px] right-[35%] flex m-auto justify-center'>
                        <Image src={Imge1} alt='Imge1' className='imgavatar' />
                        <div className='text-white w-[30px] h-[30px]
                        bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c] border-[#81559c]
                        rounded-full border-2  ' >
                            <TbFileCertificate className='text-[20px] my-[3px] mx-[3px]  text-center items-center justify-center' />
                        </div>
                    </div>
                    <h1 className='text-[#a0a3a7] pr-[15px] pl-[15px] pb-[15px]  text-[16px] font-bold pt-[20px]'>    المبادئ والاساسيات التحليل الفني</h1>
                    <p className='flex items-center gap-1 pb-[10px] text-white pr-[15px] pl-[15px] text-[14px] '> <MdLocationOn className='text-[#81559c] text-[20px] '/> اون لاين</p>
                    <p className='flex items-center gap-1 pb-[10px] text-white pr-[15px] pl-[15px] text-[14px] '> <BiCalendar className='text-[#81559c] text-[20px] '/>  07/10/2023</p>
                    <p className='flex items-center gap-1  text-white pr-[15px] pl-[15px] text-[14px] '> <GiBackwardTime className='text-[#81559c] text-[20px] '/> 45 ساعة </p>
                    <div className='flex items-center gap-2 text-white py-[10px] px-[15px] justify-end'>
                        <BsStarHalf className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <span className='text-[18px] pr-[5px]'>4.5</span>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[100%] relative'>
                    <Image src={Img1} alt='Img1' className='imagcor' />
                    <div className='absolute top-[235px] right-[35%] flex m-auto justify-center'>
                        <Image src={Imge1} alt='Imge1' className='imgavatar' />
                        <div className='text-white w-[30px] h-[30px]
                        bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c] border-[#81559c]
                        rounded-full border-2  ' >
                            <TbFileCertificate className='text-[20px] my-[3px] mx-[3px]  text-center items-center justify-center' />
                        </div>
                    </div>
                    <h1 className='text-[#a0a3a7] pr-[15px] pl-[15px] pb-[15px]  text-[16px] font-bold pt-[20px]'>    المبادئ والاساسيات التحليل الفني</h1>
                    <p className='flex items-center gap-1 pb-[10px] text-white pr-[15px] pl-[15px] text-[14px] '> <MdLocationOn className='text-[#81559c] text-[20px] '/> اون لاين</p>
                    <p className='flex items-center gap-1 pb-[10px] text-white pr-[15px] pl-[15px] text-[14px] '> <BiCalendar className='text-[#81559c] text-[20px] '/>  07/10/2023</p>
                    <p className='flex items-center gap-1  text-white pr-[15px] pl-[15px] text-[14px] '> <GiBackwardTime className='text-[#81559c] text-[20px] '/> 45 ساعة </p>
                    <div className='flex items-center gap-2 text-white py-[10px] px-[15px] justify-end'>
                        <BsStarHalf className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <span className='text-[18px] pr-[5px]'>4.5</span>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[100%] relative'>
                    <Image src={Img1} alt='Img1' className='imagcor' />
                    <div className='absolute top-[235px] right-[35%] flex m-auto justify-center'>
                        <Image src={Imge1} alt='Imge1' className='imgavatar' />
                        <div className='text-white w-[30px] h-[30px]
                        bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c] border-[#81559c]
                        rounded-full border-2  ' >
                            <TbFileCertificate className='text-[20px] my-[3px] mx-[3px]  text-center items-center justify-center' />
                        </div>
                    </div>
                    <h1 className='text-[#a0a3a7] pr-[15px] pl-[15px] pb-[15px]  text-[16px] font-bold pt-[20px]'>    المبادئ والاساسيات التحليل الفني</h1>
                    <p className='flex items-center gap-1 pb-[10px] text-white pr-[15px] pl-[15px] text-[14px] '> <MdLocationOn className='text-[#81559c] text-[20px] '/> اون لاين</p>
                    <p className='flex items-center gap-1 pb-[10px] text-white pr-[15px] pl-[15px] text-[14px] '> <BiCalendar className='text-[#81559c] text-[20px] '/>  07/10/2023</p>
                    <p className='flex items-center gap-1  text-white pr-[15px] pl-[15px] text-[14px] '> <GiBackwardTime className='text-[#81559c] text-[20px] '/> 45 ساعة </p>
                    <div className='flex items-center gap-2 text-white py-[10px] px-[15px] justify-end'>
                        <BsStarHalf className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <BsStarFill className='text-yellow-300'/>
                        <span className='text-[18px] pr-[5px]'>4.5</span>
                    </div>

                </div>
            </SwiperSlide>
            <button className='absolute hidden xl:block top-[50%] group right-[2px] duration-500 button-next-slide z-50  text-white font-bold w-[40px] text-[35px] items-center justify-center text-center m-auto h-[40px] rounded-full bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c]'>
                <MdNavigateNext />
            </button>
            <button className='absolute hidden xl:block top-[50%] group left-[-8px] duration-500 button-prev-slide z-50 text-white  px-1 font-bold w-[40px] text-[35px] items-center justify-center text-center m-auto h-[40px] rounded-full bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c]'>
                <MdNavigateBefore/>
            </button>
        </Swiper>
    </div>
  )
}

export default Courses