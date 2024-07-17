"use client"
import { useOrigin } from "@/app/hooks/use-origin"
import { useParams } from "next/navigation"



import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
const LandingPage = () => {
    const params = useParams()
    const origin = useOrigin()
    const baseUrl = `${origin}/${params}`
  console.log(baseUrl)
  return (
    <div style={{backgroundImage:"url('https://res.cloudinary.com/kulanicloud/image/upload/v1721159833/pexels-naimbic-2291367_rcvcg0.jpg')"}} className="relative grid place-content-center min-h-screen bg-cover origin-center ">
        <div className='absolute inset-0 bg-neutral-950/70 z-10'></div>
        <section className='z-20 flex flex-col items-center gap-5 w-full max-w-md  text-white'>
            <h1 className='text-6xl text-center font-light uppercase tracking-[8px] leading-tight'>effortless entertaining</h1>
            <p className='text-xs font-normal tracking-[8px] uppercase text-center'>San fransisco bay area</p>
            <Link className='border border-[#AA8E65] text-[#AA8E65] py-3 tracking-[4px] leading-tight uppercase text-sm px-5' href={"/"}>learn more</Link>
            <p>{baseUrl}</p>
        </section>
       

    </div>
  )
}

export default LandingPage