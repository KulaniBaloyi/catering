"use client"
import { usePathname, useRouter } from "next/navigation"
import useMenu from "@/hooks/use-menu"

const MENU_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Private Events", path: "/private-events" },
  { name: "Weddings", path: "/weddings" },
  { name: "Corporate", path: "/corporate" },
  { name: "Venues", path: "/venues" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]

const Menu = () => {
  const close = useMenu((state: any) => state.close)
  const isOpen = useMenu((state: any) => state.isOpen)
  const router = useRouter()
  const pathname = usePathname()

  if (!isOpen) return null

  const handleClick = (path: string) => {
    router.push(path)
    close()
  }

  return (
    <div className="fixed inset-0 z-[9999] flex justify-end">
      {/* Overlay */}
      <div 
        onClick={close}
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-500" 
      />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-sm bg-neutral-950 h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        
        {/* Header/Close */}
        <div className="flex justify-end p-6">
          <button 
            onClick={close} 
            className="text-white/50 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        {/* Navigation List */}
        <nav className="flex-1 px-8 pt-4">
          <ul className="space-y-2">
            {MENU_LINKS.map((link) => (
              <li 
                key={link.path}
                onClick={() => handleClick(link.path)}
                className="group flex items-center justify-between py-4 cursor-pointer border-b border-white/5 transition-all"
              >
                <span className={`text-xl uppercase tracking-[0.3em] transition-colors duration-300 ${pathname === link.path ? 'text-[#AA8E65]' : 'text-white group-hover:text-[#AA8E65]'}`}>
                  {link.name}
                </span>
                
                {/* Visual Indicator */}
                <div className={`h-1.5 w-1.5 rounded-full bg-[#AA8E65] transition-all duration-500 ${pathname === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Info */}
        <div className="p-8 border-t border-white/5">
          <p className="text-[#AA8E65] text-[10px] uppercase tracking-[0.4em] font-bold">The Gravy Train</p>
          <p className="text-white/30 text-[9px] uppercase tracking-[0.2em] mt-1">Express Catering & Events</p>
        </div>
      </div>
    </div>
  )
}

export default Menu