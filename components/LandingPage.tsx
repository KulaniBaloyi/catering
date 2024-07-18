"use client"

import { usePathname } from "next/navigation"
import { useEffect,useState,useMemo } from "react"
import Link from 'next/link'

interface ImageMap {
  [path: string]: string; // Define the interface for imageMap with string keys and string values
}

type PropType = {
  data:any

 } 
const LandingPage: React.FC<PropType> = (props) => {
  const [imagePath, setImagePath] = useState<string | null>(null)
  const [title, setTitle] = useState<string | null>(null)
  const imageMap:{ [path: string]: { url: string; title: string ; subTitle?:string; cta?:boolean} } = useMemo(() => {
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
    <div  style={{ backgroundImage: `url(${imagePath || "/default-image.jpg"})` }} className="relative grid place-content-center min-h-screen bg-cover origin-center ">
        <div className='absolute inset-0 bg-neutral-950/70 z-10'></div>
        <section className='z-20 flex flex-col items-center gap-5 w-full max-w-2xl  text-white'>
            <h1 className='text-lg lg:text-6xl text-center font-light uppercase tracking-[8px] leading-tight'>{title}</h1>
            <p className='lg:text-xs text-[.65rem] font-normal tracking-[8px] uppercase text-center'>{imageMap[pathname].subTitle&&imageMap[pathname].subTitle}</p>
            {imageMap[pathname].cta&&<Link className='border border-[#AA8E65] text-[#AA8E65] hover:bg-[#AA8E65] hover:text-white py-3 tracking-[4px] leading-tight uppercase text-xs  px-5' href={"/"}>learn more</Link>}
        </section>
       

    </div>
  )
}

export default LandingPage