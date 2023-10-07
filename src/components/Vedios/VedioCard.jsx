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

const VedioCard = () => {
  return (
    <div className='pt-[35px] mb-[50px]'>
         <div className='flex px-3 xl:px-0 justify-between mb-[15px]'>
            <h1 className='text-white text-[18px] xl:text-[20px] font-bold'>الفيديوهات     </h1>


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
                    slidesPerView:5 ,
                    spaceBetween:15,
                }
            }}
        >
            <SwiperSlide className='px-3 xl:px-0'>
            <div className='bg-[#191a25] w-[250px] h-[200px]'>
            <iframe width="250" height="150" src="https://www.youtube.com/embed/rMmYdn7fBD4" title="أكاديمية مصرف الراجحي |  برنامج تأهيل الخريجين" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                <h1 className='text-white pr-[5px] pl-[5px] text-[14px] font-bold pt-[10px]'>    دورة الراجحي   </h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[250px] h-[200px]'>
            <iframe width="250" height="150" src="https://www.youtube.com/embed/-O-B8nJFW84" title="معهد خبراء المال" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
                <h1 className='text-white pr-[5px] pl-[5px] text-[14px] font-bold pt-[10px]'>    امسية خبراء المال    </h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[250px] h-[200px]'>
            <iframe width="250" height="150" src="https://www.youtube.com/embed/IwPypAOIAvE" title="ماذا قال الشيخ الدكتور / عايض القرني عن المال اثناء زيارته لمعهد خبراء المال؟" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
                <h1 className='text-white pr-[5px] pl-[5px] text-[14px] font-bold pt-[10px]'>    عايض القرني في خبراء المال    </h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[250px] h-[200px]'>
            <iframe width="250" height="150" src="https://www.youtube.com/embed/_tY0jQKI0PI" title="الدكتور / محمد الفاضل رئيس مجلس إدارة شركة خبراء المال في ضيافة برنامج الاقتصاد" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
                <h1 className='text-white pr-[15px] pl-[15px] text-[14px] font-bold pt-[10px]'>    لقاء خاص مع الدكتور محمد الفاضل  </h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[250px] h-[200px]'>
            <iframe width="250" height="150" src="https://www.youtube.com/embed/dIaWdwhitEI" title="من فعاليات ندوة النجاح بأسواق المال بتاري 13 مايو 2017" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
                <h1 className='text-white pr-[5px] pl-[5px] text-[14px] font-bold pt-[10px]'>    ندوة خبراء المال    </h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[250px] h-[200px]'>
            <iframe width="250" height="150" src="https://www.youtube.com/embed/rMmYdn7fBD4" title="أكاديمية مصرف الراجحي |  برنامج تأهيل الخريجين" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                <h1 className='text-white pr-[5px] pl-[5px] text-[14px] font-bold pt-[10px]'>    دورة الراجحي   </h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#191a25] w-[250px] h-[200px]'>
            <iframe width="250" height="150" src="https://www.youtube.com/embed/rMmYdn7fBD4" title="أكاديمية مصرف الراجحي |  برنامج تأهيل الخريجين" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                <h1 className='text-white pr-[5px] pl-[5px] text-[14px] font-bold pt-[10px]'>    دورة الراجحي   </h1>
            </div>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default VedioCard