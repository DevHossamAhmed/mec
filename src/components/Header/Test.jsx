'use client';

import { useContext , useEffect , useState } from "react";

// next image
import Image from 'next/image';
import Logo from '../../assets/images/Logo.webp';

// icons
import { BiMenuAltLeft , BiX} from "react-icons/bi"
import { MdLanguage } from 'react-icons/md'
import { IoIosLogIn } from 'react-icons/io'
import { CgUserAdd } from 'react-icons/cg'


import { Link } from "react-scroll";

import { useMediaQuery } from "react-responsive";



const Test = () => {

    const [header , setHeader] = useState(false);
    const [nav , setNav] = useState(false);
  
    const desktopMode = useMediaQuery({
      query:'(min-width:1900px)',
    });
  
    useEffect(()=>{
      const handleScroll = () =>{
        // header
        if (window.scrollY > 100) {
          setHeader(true)
        } else {
          setHeader(false)
        }
      };
  
      // add event listener
      window.addEventListener('scroll' , handleScroll);
  
      // remove event listener
      return () => {
        window.removeEventListener('scroll' , handleScroll);
      };
  
    });


  return (
    <header className=
       {`${ header ? ' shadow-md py-2' : ' shadow-none py-4'} bg-[#1b1730]  py-4 shadow-md fixed w-full max-w-[2500px] m-auto z-50 transition-all duration-300`}
    >
        <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center
            xl:justify-between
        ">
            <div className="flex justify-between items-center px-4 ">
                {/* logo */}
                <Link
                    to="home"
                    className="cursor-pointer"
                >
                    <Image src={Logo} alt="logo" width={94}/>
                </Link>

                {/* nav open menu */}
                <div onClick={()=>setNav(!nav)} className="cursor-pointer xl:hidden">
                    {nav ? (<BiX className="text-3xl text-white"/>) : (<BiMenuAltLeft className="text-3xl text-white"/>)}
                </div>
            </div>
            {/* nav */}
        <nav className={`${
            nav ? 'max-h-max  flex px-8 xl:py-0 xl:px-0':'max-h-0 xl:max-h-max'
        } flex flex-col w-full bg-[#1b1730] gap-y-6 overflow-hidden font-bold
        xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 text-center text-white
        `}>

                <div className="xl:hidden flex  justify-center items-center text-center 
                    h-[70px]">
                <button className="underline flex justify-center text-primary items-center gap-1 ">
                    تسجيل الدخول
                    <IoIosLogIn/>
                </button> 
                <span className="w-[1px] h-[25px] bg-black dark:bg-slate-100 mx-7 rounded-md"></span>
                <button className="underline flex justify-center items-center gap-1 text-primary">
                    عضوية جديدة
                    <CgUserAdd/>
                </button> 
                </div> 

                <Link
                    to="courses"
                    smooth={desktopMode}
                    spy={true}
                    className="cursor-pointer pl-[10px] hover:text-violet-600 "
                >المعهد التدريبي</Link>
                <Link
                    to="e-training"
                    smooth={desktopMode}
                    spy={true}
                    className="cursor-pointer hover:text-violet-600"
                >الاكاديمية التعليمية</Link>
                <Link
                    to="seminars"
                    smooth={desktopMode}
                    spy={true}
                    className="cursor-pointer hover:text-violet-600"
                >الديوانية </Link>
                <Link
                    to="news"
                    smooth={desktopMode}
                    spy={true}
                    className="cursor-pointer hover:text-violet-600"
                >الأدوات</Link>
                <Link
                    to="contactus"
                    smooth={desktopMode}
                    spy={true}
                    className="cursor-pointer hover:text-violet-600"
                >المؤتمرات</Link>
                <Link
                    to="contactus"
                    smooth={desktopMode}
                    spy={true}
                    className="cursor-pointer hover:text-violet-600"
                >اتصل بنا</Link>

                <div className="xl:hidden flex  justify-center items-center text-center 
                    border-t-[1px]  border-b-black dark:border-b-slate-400  h-[70px]">
                    <button className="underline flex justify-center text-primary items-center gap-1 ">
                    ENGLISH
                    <MdLanguage/>
                    </button> 
                    
                </div>

        </nav>
        <div className="flex w-[600px] text-end text-white font-medium  gap-5 justify-between items-center  hidden xl:block">
        <Link
            to="contactus"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer hover:text-violet-600"
          >تسجيل الدخول </Link>
          <button className="w-[120px] h-[40px] bg-gradient-to-l ml-3 mr-3 from-[#471fbc] via-[#6137ad] to-[#81559c] rounded-3xl">عضوية جديدة</button>
          <Link
            to="contactus"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer hover:text-violet-600"
          > ENGLISH</Link>
        </div>
        </div>
    </header>
  )
}

export default Test