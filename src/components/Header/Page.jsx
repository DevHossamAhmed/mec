"use client" ;

import { useContext , useEffect , useState } from "react";

// next image
import Image from "next/image";

// Logo
import Logo from '../../assets/images/Logo.webp'

// react scroll
import {Link} from 'react-scroll';

// components



// media query hook
import { useMediaQuery } from "react-responsive";


// Icons
import { BiMenuAltLeft , BiX} from "react-icons/bi"
import { IoIosLogIn } from 'react-icons/io'
import { CgUserAdd } from 'react-icons/cg'
import { MdLanguage } from 'react-icons/md'


const Header = () => {

  const [header , setHeader] = useState(false);
  const [nav , setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query:'(min-width:1200px)',
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
    <header className={`${ header ? ' shadow-md py-2' : ' shadow-none py-4'} flex fixed w-full z-50 
    bg-[#1b1730]  
  `}>
      <div className="flex  m-auto container flex-col xl:flex-row xl:items-center xl:justify-between ">
        <div className="flex  text-center items-center px-7 justify-between ">
          {/* logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer flex  xl:mr-0 "
          >
            <Image src={Logo} alt="logo" width={120} height={50}/>
          </Link>
          {/* nav open menu */}
          <div onClick={()=>setNav(!nav)} className="cursor-pointer xl:hidden">
            {nav ? (<BiX className="text-2xl text-white"/>) : (<BiMenuAltLeft className="text-2xl text-white"/>)}
          </div>
      
        </div>
        {/* nav */}
        <nav className={`${
          nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'
        } flex flex-col xl:flex-row xl:gap-3  bg-[#1b1730] justify-between w-[650px] text-white  overflow-hidden items-center  font-medium leading-10 text-[18px]  
        `}>

          <div className="xl:hidden flex  justify-center items-center text-center 
          border-b-[1px] border-b-black dark:border-b-slate-100  h-[70px]">
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
            className="cursor-pointer hover:text-violet-600 "
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
          border-t-[1px]  border-b-black dark:border-b-slate-100  h-[70px]">
          <button className="underline flex justify-center text-primary items-center gap-1 ">
          ENGLISH
          <MdLanguage/>
          </button> 
         
          </div>

        </nav>
        <div className="flex text-white font-medium  gap-5 justify-between items-center  hidden xl:block">
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

export default Header