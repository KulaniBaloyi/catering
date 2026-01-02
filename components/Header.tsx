"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import useMenu from "@/hooks/use-menu"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const openMenu = useMenu((state: any) => state.open)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper to keep the JSX clean
  const linkStyle = (path: string) => `
    text-[10px] uppercase tracking-[0.2em] transition-all duration-300
    ${pathname === path ? "text-[#edd6b2]" : "text-white/80 hover:text-[#edd6b2]"}
  `

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] lg:px-[8%] transition-all duration-500 
      ${isScrolled ? "bg-black/90 backdrop-blur-md h-16 border-b border-white/10" : "bg-transparent h-24"}`}
    >
      {/* Mobile Trigger */}
      <button 
        onClick={() => openMenu()} 
        className="lg:hidden text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Left Navigation */}
      <nav className="hidden lg:flex flex-[.4] items-center gap-12">
        <Link href="/private-events" className={linkStyle("/private-events")}>Private Events</Link>
        <Link href="/weddings" className={linkStyle("/weddings")}>Weddings</Link>
        <Link href="/corporate" className={linkStyle("/corporate")}>Corporate</Link>
      </nav>

      {/* Center Branding */}
      <div className="text-center">
        <Link href="/" className="flex flex-col items-center">
          <h1 className="text-xl lg:text-2xl font-serif tracking-widest text-white uppercase leading-none">
            The Gravy Train
          </h1>
          <p className="text-[#AA8E65] text-[9px] tracking-[0.4em] uppercase font-bold mt-1">
            express
          </p>
        </Link>
      </div>

      {/* Right Navigation */}
      <nav className="hidden lg:flex flex-[.4] items-center justify-end gap-12">
        <Link href="/venues" className={linkStyle("/venues")}>Venues</Link>
        <Link href="/about" className={linkStyle("/about")}>About</Link>
        <Link href="/contact" className={linkStyle("/contact")}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header