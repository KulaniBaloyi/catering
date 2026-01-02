"use client"
import React from 'react'
import Link from 'next/link'

const CUISINE_DATA = [
  { title: "Made to Taste", desc: "The Gravy Train cuisine is about customizing every aspect of flavor and presentation to the style and preferences of our couples. We make artisan dishes for your unique celebration." },
  { title: "Local, Fresh Ingredients", desc: "Only fresh, thoughtful, locally sourced ingredients go into every wedding masterpiece. Our ingredients pay homage to our values and your specific tastes." },
  { title: "On-Site Chefs", desc: "Our expert chefs hand-prepare a fresh, delicious, artisan menu of stunning appetizers and entrees—all cooked on-site at your venue for peak quality." },
  { title: "Taste It First", desc: "Our wedding tastings set the table for a personal experience. We love learning about our couples through the food that brings people together." }
];

const WeddingsPage = () => {
  return (
    <div className='bg-[#fcfaf7] min-h-screen pt-20 pb-20 overflow-x-hidden'>
      
      {/* 1. HERO SECTION */}
      <section className='max-w-[1400px] mx-auto text-center py-24 px-6'>
        <h2 className='text-4xl lg:text-6xl text-neutral-900 font-serif leading-tight mb-8 tracking-tight'>
          The Gravy Train designs <span className='italic text-[#aa8e65]'>elegant and personal</span> wedding experiences.
        </h2>
        <p className='max-w-2xl mx-auto text-[#656769] text-sm lg:text-lg font-light tracking-wide leading-relaxed'>
          Indoors or outdoors. Extravagantly large or intimately small. We are uniquely mindful of every detail that goes into building your dream wedding, from cuisine to cutlery.
        </p>
      </section>

      {/* 2. FEATURED WEDDING - STACKED OVERLAP (NO CUT-OFF) */}
      <section className='max-w-[1500px] mx-auto px-6 mb-40'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          
          {/* Image - Spans first 8 columns */}
          <div className='lg:col-start-1 lg:col-end-9 lg:row-start-1 aspect-square lg:aspect-video relative z-0 shadow-2xl overflow-hidden'>
            <div className='absolute inset-0 bg-[url("https://res.cloudinary.com/kulanicloud/image/upload/v1721313532/pexels-shinshiakiiro-5037372_qlrhpf.jpg")] bg-cover bg-center transition-transform duration-1000 hover:scale-105' />
          </div>
          
          {/* Content Box - Spans columns 7 to 13 (Stacked Overlap) */}
          <div className='lg:col-start-7 lg:col-end-13 lg:row-start-1 z-10 bg-white p-10 lg:p-16 xl:p-20 shadow-2xl border-t-8 border-[#aa8e65] mt-[-60px] lg:mt-0'>
            <label className='text-[#aa8e65] text-[11px] tracking-[5px] mb-6 block uppercase font-bold'>Featured Wedding</label>
            <h4 className='font-serif text-3xl lg:text-5xl mb-8 text-neutral-900 leading-tight'>Rachel & Adam&apos;s Summer Celebration</h4>
            <p className='text-[#656769] text-sm lg:text-base font-light leading-loose mb-10'>
              A whimsical bank-side ceremony in the Santa Cruz mountains. From distressed wooden benches to large colorful pillows, we helped curate a fun, breathtaking day for all their guests.
            </p>
            <button className='text-neutral-900 border-b-2 border-[#aa8e65] pb-1 tracking-[3px] uppercase text-[10px] font-bold hover:text-[#aa8e65] transition-colors'>
              view event
            </button>
          </div>
        </div>
      </section>

      {/* 3. THOUGHTFUL EXPERIENCE - DARK DIVIDER */}
      <section className='bg-neutral-900 py-32 text-center text-white mb-40 shadow-inner'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='font-serif text-3xl lg:text-5xl mb-8 tracking-tight'>A thoughtful wedding experience.</h2>
          <div className='w-20 h-px bg-[#aa8e65] mx-auto mb-10' />
          <p className='text-white/70 font-light text-sm lg:text-xl leading-loose max-w-3xl mx-auto'>
            We know wedding planning can be stressful. With our full-service approach, we provide thoughtful food, gracious service, lush florals, and logistics. Everything you need for a stress-free and breathtaking day.
          </p>
        </div>
      </section>

      {/* 4. CUSTOM CUISINE - PROJECTS GRID (SQUISH-PROOF) */}
      <section className='max-w-[1500px] mx-auto px-6 mb-40'>
        <div className='flex items-center gap-6 mb-20'>
          <h2 className='text-4xl lg:text-6xl font-serif text-neutral-900 tracking-tight'>Custom Cuisine</h2>
          <div className='h-px flex-1 bg-neutral-200' />
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-40'>
          {CUISINE_DATA.map((item, i) => (
            <article key={i} className='flex flex-col group'>
              {/* Image box for the project */}
              <div className='aspect-video bg-neutral-200 relative overflow-hidden shadow-lg'>
                <div className='absolute inset-0 bg-neutral-300 group-hover:scale-105 transition-transform duration-1000' />
              </div>
              
              {/* Content box sits naturally in the flow with negative margin overlap */}
              <div className='bg-white p-8 lg:p-12 shadow-xl border-l-4 border-[#aa8e65] mt-[-60px] lg:mt-[-80px] w-[92%] mx-auto z-10 transition-transform group-hover:-translate-y-2 duration-500'>
                <h3 className='text-2xl lg:text-3xl font-serif mb-4 text-neutral-900'>{item.title}</h3>
                <p className='text-sm lg:text-base text-neutral-600 font-light leading-relaxed'>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <div className='flex flex-col items-center py-24 bg-white border-y border-neutral-100'>
         <h3 className='text-2xl lg:text-3xl font-serif mb-10 text-neutral-800 tracking-tight'>Ready to plan your dream wedding?</h3>
         <Link 
            href="/contact" 
            className='border-2 border-[#AA8E65] text-[#AA8E65] py-5 px-16 tracking-[4px] uppercase text-[11px] font-bold hover:bg-[#AA8E65] hover:text-white transition-all duration-300'
          >
            schedule a meeting
          </Link>
      </div>

    </div>
  )
}

export default WeddingsPage