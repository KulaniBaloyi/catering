import Link from "next/link"
import { FaFacebookSquare,FaInstagram } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="p-[2.5%] px-[5%] lg:px-[7.5%] lg:p-[5%] z-20 bg-[#222] text-white ">
        <section className="grid grid-cols-1 md:grid-cols-3">
            <ul className="flex flex-col mb-16">
                <h1 className="text-2xl tracking-[2px] mb-9 uppercase font-light leading-tight">EVENTS</h1>
                <li className="text-sm hover:text-[#AA8E65] transition-all duration-300 ease-in-out cursor-pointer font-thin">Private Events</li>
                <li className="mt-6 text-sm hover:text-[#AA8E65] transition-all duration-300 ease-in-out cursor-pointer font-thin">Weddings</li>
                <li className="mt-6 text-sm hover:text-[#AA8E65] transition-all duration-300 ease-in-out cursor-pointer font-thin">Corporate</li>
                <li className="mt-6 text-sm hover:text-[#AA8E65] transition-all duration-300 ease-in-out cursor-pointer font-thin">Venues</li>
            </ul>
            <ul className="flex flex-col mb-16">
                <h1 className="text-2xl tracking-[2px] mb-9 uppercase font-light leading-tight">Our Company</h1>
                <li className="text-sm hover:text-[#AA8E65] transition-all duration-300 ease-in-out cursor-pointer font-thin">About</li>
                <li className="mt-6 text-sm hover:text-[#AA8E65] transition-all duration-300 ease-in-out cursor-pointer font-thin">Blog</li>
                <li className="mt-6 text-sm hover:text-[#AA8E65] transition-all duration-300 ease-in-out cursor-pointer font-thin">Services</li>
                <li className="mt-6 text-sm hover:text-[#AA8E65] transition-all duration-300 ease-in-out cursor-pointer font-thin">Employment</li>
                <li className="mt-6 text-sm hover:text-[#AA8E65] transition-all duration-300 ease-in-out cursor-pointer font-thin">Accessibility</li>
            </ul>
            <ul className="flex flex-col mb-16">
                <h1 className="text-2xl tracking-[2px] mb-9 uppercase font-light leading-tight">Contact us</h1>
                <p className=" font-thin text-sm">We are happy to answer your questions and look forward to planning your event. Please call <span className="border-b border-[#333]">415.860.0798</span>, or</p>
                <Link className='self-start border mt-5 border-[#AA8E65] text-[#AA8E65] py-3 tracking-[4px] leading-tight uppercase text-xs px-5' href={"/"}>send us a message</Link>
            </ul>
            <div className="md:col-span-3 leading-6 text-sm py-5 flex flex-col md:flex-row md:justify-between border-t border-[#444]">
                <p>	&copy;2023 Fork &amp; Spoon Production · 1760 Cesar Chavez Suite K San Francisco, CA 94124 · 415.860.0798 · Site by <span className="text-[#AA8E65]">nuphoriq</span></p>
                <div className="flex items-center gap-2"><FaFacebookSquare height={50} width={50} /><FaInstagram /></div>
            </div>
        </section>
    </footer>
  )
}

export default Footer