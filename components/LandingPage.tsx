"use client"
import { usePathname } from "next/navigation"
import Link from 'next/link'

interface PageContent {
  url: string;
  title: string;
  subTitle?: string;
  cta?: boolean;
}

const PAGE_DATA: Record<string, PageContent> = {
  "/": {
    url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721314048/pexels-rachel-claire-4992830_a1ttdi.jpg",
    title: "Effortless Entertaining",
    subTitle: "San Francisco Bay Area",
    cta: true
  },
  "/employment": {
    url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721336902/pexels-olly-3760072_u2udyp.jpg",
    title: "Join The Team",
  },
  "/services": {
    url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721337200/pexels-ibrahimboran-903376_zfpjob.jpg",
    title: "Bespoke Services",
  },
  "/about": {
    url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721312130/pexels-elletakesphotos-2696064_u1kfsw.jpg",
    title: "Our Story",
  },
  "/weddings": {
    url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721313532/pexels-shinshiakiiro-5037372_qlrhpf.jpg",
    title: "Elegant Weddings",
    cta: true
  },
  "/corporate": {
    url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721314024/pexels-rachel-claire-4857713_kgtjd0.jpg",
    title: "Impressive Events",
    subTitle: "Corporate Excellence",
    cta: true
  },
  "/contact": {
    url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721314061/pexels-ketut-subiyanto-4353579_ergjbj.jpg",
    title: "Start a Conversation",
  },
  "/private-events": {
    url: "https://res.cloudinary.com/kulanicloud/image/upload/v1721314048/pexels-rachel-claire-4992830_a1ttdi.jpg",
    title: "Private Events",
    cta: true
  },
};

const LandingPage = () => {
  const pathname = usePathname();
  const content = PAGE_DATA[pathname] || PAGE_DATA["/"];

  return (
    <div className="relative h-[70vh] lg:h-[85vh] w-full bg-black overflow-hidden">
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          key={pathname}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${content.url})` }}
        />
      </div>

      {/* 2. FIXED OVERLAY - Using a solid-to-transparent black mask */}
      <div className="absolute inset-0 z-10 bg-black/50 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />

      {/* 3. Content Overlay */}
      <section className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6">
        
        {/* Animated Gold Accent Line */}
        <div className="w-[1px] h-16 bg-[#AA8E65] mb-8 animate-pulse" />

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif italic leading-tight max-w-5xl tracking-tight text-white drop-shadow-lg">
          {content.title}
        </h1>
        
        {content.subTitle && (
          <p className="mt-6 text-[11px] tracking-[0.7em] uppercase text-[#AA8E65] font-bold">
            {content.subTitle}
          </p>
        )}

        {content.cta && (
          <div className="mt-12">
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center gap-4 border border-[#AA8E65] px-10 py-4 hover:bg-[#AA8E65] transition-all duration-500"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#AA8E65] group-hover:text-white font-bold transition-colors">
                View Project
              </span>
              <div className="w-4 group-hover:w-8 h-[1px] bg-[#AA8E65] group-hover:bg-white transition-all duration-500" />
            </Link>
          </div>
        )}
      </section>

      {/* 4. Modern Edge Detail */}
      <div className="absolute bottom-10 left-10 hidden lg:block z-20">
        <p className="text-[9px] uppercase tracking-[0.5em] text-white/60 rotate-180 [writing-mode:vertical-lr]">
          Est. 2026 &bull; The Gravy Train
        </p>
      </div>
    </div>
  );
};

export default LandingPage;