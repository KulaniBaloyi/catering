"use client"
import { useState,useEffect } from "react"
import Link from "next/link"

const Header = () => {
    const [isMounted,setIsMounted] = useState(false)
    const [isScrolled,setIsScrolled]= useState(false)


    useEffect(() => {
        setIsMounted(true)
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 100); // Adjust the threshold as needed
        }
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
    
      }, [])
    
    if(!isMounted)return
    
  return (
   <header className={`${isScrolled&&"bg-[#222]"} transition-all ease-in-out duration-300 origin-top h-16 fixed flex items-center justify-between left-0 right-0 text-white font-bold top-0  z-50  px-[2.5%] lg:px-[7.5%]`}>
    <ul className="flex-[.4] hidden  lg:flex gap-16 items-center justify-center uppercase text-xs font-thin">
        <li className="hover:text-[#edd6b2] transition-all ease-in-out durtion-300"><Link scroll={false} href="/private-events">Private Events</Link></li>
        <li className="hover:text-[#edd6b2] transition-all ease-in-out durtion-300"><Link scroll={false} href='/weddings'>Weddings</Link></li>
        <li className="hover:text-[#edd6b2] transition-all ease-in-out durtion-300"><Link scroll={false} href='/corporate'>Corporate</Link></li>
    </ul>
    <div className="flex flex-1 w-44 absolute left-0 right-0 top-4 m-auto flex-col items-center">
        <h1 className="uppercase text-base leading-tight"><Link scroll={false} href="/">Fork & Spoon</Link></h1>
        <p className="text-[#AA8E65] text-xs leading-tight uppercase">productions</p>
    </div>
    <ul className="flex-[.4] hidden lg:flex gap-16 items-center justify-center uppercase text-xs font-thin">
        <li className="hover:text-[#edd6b2] transition-all ease-in-out durtion-300"><Link scroll={false} href='/venues'>Venues</Link></li>
        <li className="hover:text-[#edd6b2] transition-all ease-in-out durtion-300"><Link scroll={false} href="/about">About</Link></li>
        <li className="text-[#edd6b2]"><Link scroll={false} href="/contact">Contact</Link></li>
    </ul>
    
   </header>
  )
}

export default Header