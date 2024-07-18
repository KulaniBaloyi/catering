"use client"
import { usePathname } from "next/navigation"
import { useEffect,useState } from "react"
import Link from "next/link";
export default function SharedLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [active,setActive]= useState<string|null>(null)
    const pathname = usePathname()
    useEffect(() => {
        const handleRouteChange = () => {
            setActive(pathname)
        }
        handleRouteChange()
        return () => {}
      }, [pathname])
    return (  
        <div>
            <nav className="border-b border-[#eee] bg-[#FAFAFA] text-sm font-light leading-3 w-full">
                <ul className="flex flex-wrap items-center justify-center lg:gap-10 gap-3 ">
                    <li className={`${active=="/about"&&"border-b-[#907142]"} py-3 lg:py-6 uppercase text-[#907142] border-b-2 border-transparent hover:border-b-2 hover:border-[#907142] transition-all duration-300 ease-in-out`}><Link scroll={false} href="/about">About</Link></li>
                    <li className={`${active=="/services"&&"border-b-[#907142]"} py-3 lg:py-6 uppercase text-[#907142] border-b-2 border-transparent hover:border-b-2 hover:border-[#907142] transition-all duration-300 ease-in-out`}><Link scroll={false} href="/services">Services</Link></li>
                    <li className={`${active=="/sample-menus"&&"border-b-[#907142]"} py-3 lg:py-6 uppercase text-[#907142] border-b-2 border-transparent hover:border-b-2 hover:border-[#907142] transition-all duration-300 ease-in-out`}><Link scroll={false} href="/sample-menus">Sample Menus</Link></li>
                    <li className={`${active=="/venues"&&"border-b-[#907142]"} py-3 lg:py-6 uppercase text-[#907142] border-b-2 border-transparent hover:border-b-2 hover:border-[#907142] transition-all duration-300 ease-in-out`}><Link scroll={false} href="/venues">Venues</Link></li>
                    <li className={`${active=="/employment"&&"border-b-[#907142]"} py-3 lg:py-6 uppercase text-[#907142] border-b-2 border-transparent hover:border-b-2 hover:border-[#907142] transition-all duration-300 ease-in-out`}><Link scroll={false} href="/employment">Employment</Link></li>
                </ul>
            </nav>
            <div className="w-[95%] md:w-[90%] lg:w-4/5 mx-auto mt-10 lg:mt-20"> {children}</div>
            {/**contact component */}
           
        </div>
        
    );
  }
  