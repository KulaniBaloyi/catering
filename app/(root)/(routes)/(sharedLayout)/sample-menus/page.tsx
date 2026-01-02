"use client"
import React from 'react'

const MENU_CATEGORIES = [
  { title: "Hors D'oeuvres", slug: "hors-doeuvres" },
  { title: "Buffet Selections", slug: "buffets" },
  { title: "Culinary Stations", slug: "stations" },
  { title: "Plated Dinners", slug: "plated" }
];

const SampleMenusPage = () => {
  return (
    <div className='bg-[#fcfaf7] min-h-screen pt-32 pb-24'>
      {/* 1. Header Section */}
      <section className='max-w-[1400px] mx-auto px-6 lg:px-12 mb-20 text-center lg:text-left'>
        <div className='max-w-3xl'>
          <h2 className='text-4xl lg:text-6xl font-serif leading-tight mb-8 text-neutral-900 tracking-tight'>
            View Our <span className='italic text-[#aa8e65]'>Sample Menus</span>
          </h2>
          <p className='text-[#656769] leading-relaxed text-base lg:text-xl font-light'>
            Only fresh, thoughtful, locally sourced ingredients go into every culinary masterpiece prepared at The Gravy Train. 
            Our ingredients pay homage to our values and are a reflection of our clients&apos; sophisticated tastes.
          </p>
        </div>
      </section>

      {/* 2. Menu Selection Grid */}
      <section className='max-w-[1400px] mx-auto px-6 lg:px-12'>
        <div className='flex items-center gap-4 mb-16'>
            <h2 className='text-2xl lg:text-3xl font-serif text-neutral-900 tracking-tight'>Menu Categories</h2>
            <div className='h-px flex-1 bg-neutral-200' />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          {MENU_CATEGORIES.map((menu, i) => (
            <div 
              key={i} 
              className='group relative cursor-pointer flex flex-col items-center justify-center border border-neutral-200 bg-white p-12 lg:p-16 transition-all duration-500 hover:border-[#AA8E65] hover:shadow-2xl hover:-translate-y-1'
            >
              {/* Decorative corner element */}
              <div className='absolute top-4 left-4 w-4 h-4 border-t border-l border-neutral-200 group-hover:border-[#AA8E65] transition-colors' />
              <div className='absolute bottom-4 right-4 w-4 h-4 border-b border-r border-neutral-200 group-hover:border-[#AA8E65] transition-colors' />

              <h3 className='text-xl lg:text-2xl font-serif text-neutral-900 text-center mb-6'>
                {menu.title}
              </h3>
              
              <span className='text-[10px] tracking-[4px] uppercase font-bold text-[#AA8E65] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                View PDF
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Footer Context */}
      <section className='max-w-2xl mx-auto px-6 mt-32 text-center'>
        <p className='text-sm text-neutral-400 font-light italic'>
          * Note: These are sample menus intended to inspire. We specialize in fully customized menus tailored to your specific event needs and dietary requirements.
        </p>
      </section>
    </div>
  )
}

export default SampleMenusPage