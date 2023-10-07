import Image from 'next/image'
import Heroimg from '../../assets/images/banner1.png'
import { Search } from './search'
const Hero = () => {
  return (
    <div className=' m-auto text-white items-center pt-[60px] xl:pt-[10px]'>
        <div className='flex container m-auto gap-[180px] justify-between leading-[40px] mt-[10%] flex-col xl:flex-row '>
            <div className='text-center xl:text-right items-center justify-center m-auto'>
                <h1 className='text-[30px] pt-10 xl:pt-0 pb-[18px] xl:text-[40px] font-bold'><span className='text-[#84589a] xl:text-[40px] font-bold text-[40px] '>أكبر</span> مكان </h1>
                <p className='text-[25px] xl:text-[30px] pb-[15px] font-bold'>
                    لتعلم <span className='text-[#84589a]'>البرامج المالية والاستثمارية والمهنية المعتمدة   </span>
                </p>
                <Search/>
                <br/>
                <button className="w-[280px] xl:w-[220px] h-[45px] bg-gradient-to-l  from-[#471fbc] via-[#6137ad] justify-center text-center font-medium text-[20px]  to-[#81559c] rounded-3xl">ابدأ الان </button>
            </div>
            <div className=' flex hidden xl:block'>
                <Image src={Heroimg} alt='hero' className=''/>
            </div>
        </div>
    </div>
  )
}

export default Hero