"use client"
import { useState,useEffect } from "react"
//import { X } from "lucide-react"
import useMenu from "@/hooks/use-menu"
import { useRouter } from "next/navigation"
const Menu = () => {
    const [isMounted,setIsMounted]= useState(false)
    const close = useMenu((state:any)=>state.close)
    const isOpen= useMenu((state:any)=>state.isOpen)
    const route = useRouter()

    useEffect(()=>{
        setIsMounted(true)
    },[])

    const handleClick = (path:string)=>{
        route.push(`${path}`)
        close()
    }
if(!isMounted)return

if(!isOpen)return

return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]">
        <div className="bg-white absolute left-0 top-0 bottom-0 w-full z-[99999] flex flex-col">
        <button onClick={()=>close()} className="group leading-snug text-[1.4em] p-5 py-10  border-zinc-500/20 font-medium uppercase tracking-normal transition-all duration-300 ease-out cursor-pointer relative">
                   X
                </button>
            <ul className="flex flex-col mt-10 overflow-y-auto">
            <li onClick={()=>handleClick('/')} className="group hover:bg-zinc-200/30  leading-snug text-[1.4em] p-4 border-y border-zinc-500/20 font-medium uppercase tracking-normal transition-all duration-300 ease-out cursor-pointer relative pl-5">
                    <p className="group-hover:scale-100 scale-0 absolute left-0 top-1 bottom-1 animate-pulse   w-1 rounded-full bg-gradient-to-r from-orange-600 to-yellow-600"/>
                  home
                </li>
               
            </ul>
        </div>
    </div>
  )
}

export default Menu