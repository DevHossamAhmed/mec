import Image from 'next/image'
import Heroimg from '../../assets/images/banner1.png'
import { Search } from './search'
const Hero = () => {
  return (
    <div className=' m-auto text-white items-center pt-6'>
        <div className='flex container m-auto leading-[40px] mt-[10%] flex-col xl:flex-row '>
            <div className='items-center justify-center m-auto'>
                <h1 className='text-[20px] pt-10 xl:pt-0 xl:text-[30px] font-bold'><span className='text-[#84589a] text-[30px] font-bold'>أكبر</span> مكان </h1>
                <p className='text-[18px] font-bold'>
                    لتعلم <span className='text-[#84589a]'>البرامج المالية الاحترافية المعتمدة</span>
                </p>
                <Search/>
                <br/>
                <button className="w-[150px] h-[45px] bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] justify-center text-center font-medium text-[20px]  to-[#81559c] rounded-3xl">ابدأ الان </button>
            </div>
            <div className='flex items-center justify-center m-auto'>
                <Image src={Heroimg} alt='hero'/>
            </div>
        </div>
    </div>
  )
}

export default Hero