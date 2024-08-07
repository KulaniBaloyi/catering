"use client"
import { useState,useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import useMenu from "@/hooks/use-menu"

const Header = () => {
    const [isMounted,setIsMounted] = useState(false)
    const [isScrolled,setIsScrolled]= useState(false)
      const pathname = usePathname()
      const open = useMenu((state:any)=>state.open)



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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" onClick={()=>open()} className="lg:hidden h-5  w-5 cursor-pointer">
  <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>

    <ul className="flex-[.4] hidden  lg:flex gap-16 items-center justify-center uppercase text-xs font-thin">
        <li className={`${pathname=="/private-events"&&"text-[#edd6b2]"} hover:text-[#edd6b2] transition-all ease-in-out durtion-300`}><Link scroll={false} href="/private-events">Private Events</Link></li>
        <li className={`${pathname=="/weddings"&&"text-[#edd6b2]"}hover:text-[#edd6b2] transition-all ease-in-out durtion-300`}><Link scroll={false} href='/weddings'>Weddings</Link></li>
        <li className={`${pathname=="/corporate"&&"text-[#edd6b2]"} hover:text-[#edd6b2] transition-all ease-in-out durtion-300`}><Link scroll={false} href='/corporate'>Corporate</Link></li>
    </ul>
    <div className="flex flex-1 w-44 absolute left-0 right-0 top-4 m-auto flex-col items-center">
        <h1 className="uppercase text-base leading-tight"><Link scroll={false} href="/">The Gravy Train</Link></h1>
        <p className="text-[#AA8E65] text-xs leading-tight uppercase">express</p>
    </div>
    <ul className="flex-[.4] hidden lg:flex gap-16 items-center justify-center uppercase text-xs font-thin">
        <li className={`${pathname=="/venues"&&"text-[#edd6b2]"} hover:text-[#edd6b2] transition-all ease-in-out durtion-300`}><Link scroll={false} href='/venues'>Venues</Link></li>
        <li className={`${pathname=="/about"&&"text-[#edd6b2]"} hover:text-[#edd6b2] transition-all ease-in-out durtion-300`}><Link scroll={false} href="/about">About</Link></li>
        <li className={`${pathname=="/contact"&&"text-[#edd6b2]"} hover:text-[#edd6b2] transition-all ease-in-out duration-300`}><Link scroll={false} href="/contact">Contact</Link></li>
    </ul>
    
   </header>
  )
}

export default Header