import React from 'react'
import InstName from './InstName'

const Instructors = () => {
  return (
    <div className=' bg-gradient-to-l  from-[#471fbc] via-[#6137ad] to-[#81559c] pb-[40px]'>
        <div className='text-white justify-center text-center 
            pt-[80px] font-bold text-[25px] '>
            <h1>OUR CERTIFIES INSTRUCTORS</h1>
            <p className='text-[#a0a3a7] text-[20px] pt-[15px] pb-[40px] font-semibold'> MEC certified instructors</p>
            
        </div>
        <div className='container m-auto pr-[10px]'>
         <InstName/>
         <button className='text-white bg-transparent w-[250px] text-center flex  rounded-3xl m-auto justify-center my-[20px] items-center h-[40px] border border-white'>
          BECOME AN INSTRUCTOR 
         </button>

        </div>
    </div>
  )
}

export default Instructors