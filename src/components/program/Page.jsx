import React from 'react'
import {MdKeyboardDoubleArrowLeft} from 'react-icons/md'

const Program = () => {
  return (
    <div>
        
        <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 px-3 container m-auto text-white gap-6 mt-[90px] xl:mt-[30px] '>
            <div className='w-[100%]   h-[150px] border-b-[4px] border-b-[#e4b00a] rounded-md bg-[#191a25] p-[20px] leading-[30px]'>
                <h1 className='font-semibold text-[20px]'>برامج الزمالة المهنية</h1>
                <p className='text-[#76777a]'>15 برنامج - 50 الف متدرب</p>
                <h2 className='flex items-center  justify-end pt-[20px] font-bold gap-1 text-[#e4b00a]  '>التفاصيل 
                <MdKeyboardDoubleArrowLeft/>
                </h2>
            </div>
            <div className='w-[100%] h-[150px] rounded-md border-b-[4px] border-b-[#14c61b] bg-[#191a25] p-[20px] leading-[30px]'>
                <h1 className='font-semibold text-[20px]'>برامج المصرفية الاسلامية</h1>
                <p className='text-[#76777a]'>11 برنامج - 100 الف متدرب</p>
                <h2 className='flex items-center justify-end pt-[20px] font-bold gap-1 text-[#14c61b] '>التفاصيل 
                <MdKeyboardDoubleArrowLeft/>
                </h2>
            </div>
            <div className='w-[100%]  h-[150px] rounded-md border-b-[4px] border-b-[#0c3070] bg-[#191a25] p-[20px] leading-[30px]'>
                 <h1 className='font-semibold text-[20px]'>برامج الاسواق المالية</h1>
                <p className='text-[#76777a]'>12 برنامج - 13 الف متدرب</p>
                <h2 className='flex items-center justify-end pt-[20px] font-bold gap-1 text-[#0c3070] '>التفاصيل 
                <MdKeyboardDoubleArrowLeft/>
                </h2>
            </div>
            <div className='w-[100%] h-[150px] rounded-md border-b-[4px] border-b-[#8b2b0f] bg-[#191a25] p-[20px] leading-[30px]'>
                <h1 className='font-semibold text-[20px]'>برامج المالية التطويرية</h1>
                <p className='text-[#76777a]'>20 برنامج - 20 الف متدرب</p>
                <h2 className='flex items-center justify-end pt-[20px] font-bold gap-1 text-[#8b2b0f]  '>التفاصيل 
                <MdKeyboardDoubleArrowLeft/>
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Program