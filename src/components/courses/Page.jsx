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
        <div className='flex justify-between mb-[15px]'>
            <h1 className='text-white text-[20px] font-bold'>الدورات القادمة</h1>

            <h2 className='flex items-center justify-end font-bold gap-1 text-[#f0b90b] '>عرض المزيد 
                <MdKeyboardDoubleArrowLeft/>
            </h2>
        </div>
        <div className=' flex container m-auto gap-2'>
            <div className='bg-[#191a25] w-[350px] h-[290px]'>
                <Image src={Img1} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'>حوكمة الشركات من المتخصص الاسلامي</h1>
                <p className='text-white pr-[5px] text-[16px] '>برامج السوق المالية</p>
                <div className='flex w-full text-white  justify-between pr-[5px] pl-[5px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س 5600</h2>
                    <h2 className='flex items-center'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            <div className='bg-[#191a25] w-[350px] h-[290px]'>
                <Image src={Img2} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'>شهادة اسلامية معتمد متخصص</h1>
                <p className='text-white pr-[5px] text-[16px] '>برامج المصرفية الاسلامية</p>
                <div className='flex w-full bottom-1 text-white justify-between pr-[5px] pl-[5px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س 4200</h2>
                    <h2 className='flex items-center'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            <div className='bg-[#191a25] w-[350px] h-[290px]'>
                <Image src={Img3} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'>موجات إليوت</h1>
                <p className='text-white pr-[5px] text-[16px] '>اساليب موجات إليوت</p>
                <div className='flex w-full mt-[22px] text-white justify-between pr-[5px] pl-[5px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س 4200</h2>
                    <h2 className='flex items-center'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            <div className='bg-[#191a25] w-[350px] h-[290px]'>
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
            <div className='bg-[#191a25] w-[350px] h-[290px]'>
                <Image src={Img5} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'>  محلل فني معتمد  </h1>
                <p className='text-white pr-[5px] text-[16px] '>التحليل الفني  </p>
                <div className='flex w-full mt-[22px] text-white justify-between pr-[5px] pl-[5px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س 1500</h2>
                    <h2 className='flex items-center'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
            <div className='bg-[#191a25] w-[350px] h-[290px]'>
                <Image src={Img3} alt='Img1' />
                <h1 className='text-[#a0a3a7] pr-[5px] pl-[5px] text-[16px] font-bold pt-[10px]'>  حكومة الشركات  </h1>
                <p className='text-white pr-[5px] text-[16px] '>برامج السوق المالية</p>
                <div className='flex w-full mt-[22px] text-white justify-between pr-[5px] pl-[5px] text-[15px] font-semibold pt-[10px]'>
                    <h2>ر.س 1500</h2>
                    <h2 className='flex items-center'>15 ابريل
                        <BiCalendar/>
                    </h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses