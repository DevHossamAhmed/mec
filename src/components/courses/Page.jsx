import React from 'react'
import {MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import {BiCalendar} from 'react-icons/bi'

import Img1 from '../../assets/images/img-1.png'
import Img2 from '../../assets/images/img-2.png'
import Img3 from '../../assets/images/img-3.png'
import Img4 from '../../assets/images/img-4.png'
import Img5 from '../../assets/images/img-5.png'
import Image from 'next/image'

const Courses = () => {
  return (
    <div className='container m-auto mt-[60px] mb-[60px]'>
        <div className='flex px-3  justify-between mb-[15px]  xl:pr-0 xl:pl-0'>
            <h1 className='text-white text-[20px] font-bold'>الدورات القادمة</h1>

            <h2 className='flex items-center justify-end font-bold xl:pr-0 xl:pl-0 gap-1 text-[#f0b90b] '>عرض المزيد 
                <MdKeyboardDoubleArrowLeft/>
            </h2>
        </div>
        <div className='  grid container px-3 xl:px-0 m-auto gap-2 grid-cols-1  md:grid-cols-2 lg:grid-cols-6 xl:flex-row'>
            <div className='bg-[#191a25] w-[100%] h-[430px] lg:h-[320px] '>
                <Image src={Img1} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[15px] pl-[15px] pb-[10px] text-[14px] font-bold pt-[15px]'>حوكمة الشركات من المتخصص الاسلامي</h1>
                <p className='text-white pr-[15px] pl-[15px] text-[16px] '>برامج السوق المالية</p>
                <div className='flex w-full text-white pr-[15px] pl-[15px]  justify-between pb-[15px]  text-[15px] font-semibold pt-[10px] '>
                    <h2>ر.س <span className='font-bold'>5600</span></h2>
                    <h2 className='flex items-center gap-[8px]'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            <div className='bg-[#191a25] w-[100%] h-[430px] lg:h-[320px]'>
                <Image src={Img2} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[15px] pl-[15px] pb-[15px] text-[14px] font-bold pt-[10px]'>شهادة اسلامية معتمد متخصص</h1>
                <p className='text-white pr-[15px] pl-[15px] text-[16px] '>برامج المصرفية الاسلامية</p>
                <div className='flex w-full bottom-1 text-white pb-[15px] justify-between pr-[15px] pl-[15px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س <span className='font-bold'>4200</span></h2>
                    <h2 className='flex items-center gap-[8px]'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            <div className='bg-[#191a25] w-[100%] h-[430px] lg:h-[320px]'>
                <Image src={Img3} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[15px] pl-[15px] pb-[15px] text-[14px] font-bold pt-[10px]'>موجات إليوت</h1>
                <p className='text-white pr-[15px] pl-[15px] text-[16px] '>اساليب موجات إليوت</p>
                <div className='flex w-full mt-[22px] text-white pb-[15px] justify-between pr-[15px] pl-[15px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س <span className='font-bold'>4200</span></h2>
                    <h2 className='flex items-center gap-[8px]'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            <div className='bg-[#191a25] w-[100%] h-[430px] lg:h-[320px]'>
                <Image src={Img4} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[15px] pl-[15px] pb-[15px] text-[14px] font-bold pt-[10px]'>    المبادئ والاساسيات التحليل الفني</h1>
                <p className='text-white pr-[15px] pl-[15px] text-[16px] '>برامج السوق المالية</p>
                <div className='flex w-full text-white justify-between pb-[15px] pr-[15px] pl-[15px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س <span className='font-bold'>1500</span></h2>
                    <h2 className='flex items-center gap-[8px]'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            <div className='bg-[#191a25] w-[100%] h-[430px] lg:h-[320px] '>
                <Image src={Img5} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[15px] pl-[15px] pb-[15px] text-[14px] font-bold pt-[10px]'>  محلل فني معتمد  </h1>
                <p className='text-white pr-[15px] pl-[15px] text-[16px] '>التحليل الفني  </p>
                <div className='flex w-full mt-[22px] text-white pb-[15px] justify-between pr-[15px] pl-[15px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س <span className='font-bold'>1500</span></h2>
                    <h2 className='flex items-center gap-[8px]'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            <div className='bg-[#191a25] w-[100%] h-[430px] lg:h-[320px]'>
                <Image src={Img3} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[15px] pl-[15px] pb-[15px]  text-[14px] font-bold pt-[10px]'>  حكومة الشركات  </h1>
                <p className='text-white pr-[15px] pl-[15px] text-[16px] '>برامج السوق المالية</p>
                <div className='flex w-full mt-[22px] text-white pb-[15px] justify-between pr-[15px] pl-[15px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س <span className='font-bold'>1500</span></h2>
                    <h2 className='flex items-center gap-[8px]'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses