"use client"

import { usePathname } from "next/navigation"
import { useEffect,useState,useMemo } from "react"
import Link from 'next/link'
import { ChevronDown } from "lucide"

interface ImageMap {
  [path: string]: string; // Define the interface for imageMap with string keys and string values
}

type PropType = {
  data:any

 } 
const LandingPage: React.FC<PropType> = (props) => {
  const [imagePath, setImagePath] = useState<string | null>(null)
  const [title, setTitle] = useState<string | null>(null)
  const imageMap:{ [path: string]: { url: string; title: string ; subTitle?:string|undefined; cta?:boolean} } = useMemo(() => {
    // Define the imageMap object here
    return{
      "/": {
        url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721314048/pexels-rachel-claire-4992830_a1ttdi.jpg",
        title: "Effortless Entertaining",
        subTitle:"San fransisco bay area Hello",
        cta:true
  
      },
      "/employment":{
          url:"https://res.cloudinary.com/kulanicloud/image/upload/v1721336902/pexels-olly-3760072_u2udyp.jpg",
          title:"Employment"
        }
      ,
      "/services":{
        url:"https://res.cloudinary.com/kulanicloud/image/upload/v1721337200/pexels-ibrahimboran-903376_zfpjob.jpg",
        title:"Services"
      }
    ,
    "/sample-menus":{
      url:"https://res.cloudinary.com/kulanicloud/image/upload/v1721337089/pexels-lina-16550375_aokvlk.jpg",
      title:"Sample Menus"
    }
  ,
      "/about": {
        url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721312130/pexels-elletakesphotos-2696064_u1kfsw.jpg",
        title: "About us",
      },
      "/venues": {
        url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721313708/pexels-pavel-danilyuk-7119176_scwvmj.jpg",
        title: "THE PERFECT VENUE SETS THE SCENE",
      },
      "/weddings": {
        url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721313532/pexels-shinshiakiiro-5037372_qlrhpf.jpg",
        title: "Elegant Weddings",
        cta:true
      },
      "/corporate": {
        url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721314024/pexels-rachel-claire-4857713_kgtjd0.jpg",
        title: "Impressive Corporate Events With Impressive Ease",
        cta:true
      },
      "/contact": {
        url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721314061/pexels-ketut-subiyanto-4353579_ergjbj.jpg",
        title: "What are you invisioning?",
      },
      "/private-events": {
        url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721314048/pexels-rachel-claire-4992830_a1ttdi.jpg",
        title: "Private Events",
        cta:true
      },
    }

    } ,[])


  const pathname = usePathname()
  useEffect(() => {
    const handleRouteChange = () => {
      const newImagePath = imageMap[pathname].url || "/";
      const newTitle = imageMap[pathname].title || ""
      setImagePath(newImagePath)
      setTitle(newTitle)
    }
    handleRouteChange()
    return () => {}
  }, [pathname,imageMap])
  return (
    <div  style={{ backgroundImage: `url(${imagePath || "/default-image.jpg"})` }} className="relative grid place-content-center h-[95dvh] lg:h-dvh bg-cover origin-center ">
        <div className='absolute inset-0 bg-neutral-950/70 z-10'></div>
       
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="h-5 w-5 z-20 text-white absolute bottom-5 animate-bounce left-1/2">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
</svg>


        <section className='z-20 flex flex-col items-center gap-5 w-[90%] max-w-2xl mx-auto text-white'>
            <h1 className='text-lg  lg:text-6xl text-center font-light uppercase tracking-[8px] w-full leading-tight'>{title}</h1>
            <p className='lg:text-xs text-[.65rem] font-normal tracking-[8px] uppercase text-center'>{imageMap[pathname]?.subTitle&&imageMap[pathname]?.subTitle}</p>
            {imageMap[pathname]?.cta&&<Link className='border border-[#AA8E65] text-[#AA8E65] hover:bg-[#AA8E65] hover:text-white py-3 tracking-[4px] leading-tight uppercase text-xs  px-5' href={"/"}>learn more</Link>}
        </section>
       

    </div>
  )
}

export default LandingPage