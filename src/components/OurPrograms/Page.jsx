import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'

const OurPrograms = () => {
  return (
    <div className='w-full bg-[#191a25]  '>
      <div className=' container m-auto items-center justify-center pt-[50px] mb-[25px] relative'>
        <h1 className='text-white  text-[25px] xl:text-[30px] font-semibold text-center  mb-[25px] '>برامجنا التدريبية</h1>
        <p className='text-[#a0a3a7] text-[16px] xl:text-[20px] text-center '>طور مهاراتك الذاتية من خلال برامجنا المهنية التي تغطي كل ما تحتاجه</p>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <button className='text-white bg-transparent w-[250px] text-center flex  rounded-3xl m-auto justify-center my-[20px] items-center h-[40px] border border-white'>عرض جميع البرامج والدورات</button>
      </div>
      <div className='h-[30px]'></div>
    </div>
  )
}

export default OurPrograms