import React from 'react'
import InstName from './InstName'

const Instructors = () => {
  return (
    <div className='w-full bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c]'>
        <div className='text-white justify-center text-center pt-[80px] font-bold text-[25px]'>
            <h1>OUR CERTIFIES INSTRUCTORS</h1>
            <p className='text-[#a0a3a7] text-[20px] pt-[15px] pb-[40px] font-semibold'> MEC certified instructors</p>
            
        </div>
        <div className='container m-auto'>
         <InstName/>
        </div>
    </div>
  )
}

export default Instructors