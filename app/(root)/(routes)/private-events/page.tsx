"use client"
import React from 'react'
import Link from 'next/link'

const CUISINE_DATA = [
  { title: "Made to Taste", desc: "The Gravy Train cuisine is about customizing every aspect of flavor and presentation to the style and preferences of our guests and clients!" },
  { title: "Local, Fresh Ingredients", desc: "Only fresh, thoughtful, locally sourced ingredients go into every culinary masterpiece prepared at our events." },
  { title: "On-Site Chefs", desc: "Our expert chefs hand-prepare a fresh, delicious, artisan menu of stunning appetizers, entrees and desserts—all cooked on-site!" },
  { title: "Taste It First", desc: "Our tastings set the table for an amazingly personal catering experience. We love to learn about our clients and their tastes." }
];

const PrivateEventsPage = () => {
  return (
    <div className='bg-[#fcfaf7] min-h-screen pt-20 pb-20 overflow-x-hidden'>
      
      {/* 1. HERO */}
      <section className='max-w-4xl mx-auto text-center py-24 px-6'>
        <h2 className='text-4xl lg:text-6xl text-neutral-900 font-serif leading-tight mb-8'>
          Outstanding private events from <span className='italic text-[#aa8e65]'>creation to clean-up.</span>
        </h2>
        <p className='text-[#656769] text-sm lg:text-lg font-light tracking-wide'>
          A whimsical group excursion. A bar or bat mitzvah for friends and family. We create memorable moments at every social gathering.
        </p>
      </section>

      {/* 2. DINNER & LEISURE - FIXED OVERLAP */}
      <section className='max-w-[1400px] mx-auto px-6 mb-40'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          
          {/* Image - Placed in Cols 1 to 9 */}
          <div className='lg:col-start-1 lg:col-end-9 lg:row-start-1 h-[400px] lg:h-[600px] relative z-0 shadow-xl overflow-hidden'>
            <div className='absolute inset-0 bg-[url("https://res.cloudinary.com/kulanicloud/image/upload/v1721314048/pexels-rachel-claire-4992830_a1ttdi.jpg")] bg-cover bg-center' />
          </div>
          
          {/* Content Box - Placed in Cols 7 to 13 (Stacks on top of image) */}
          <div className='lg:col-start-7 lg:col-end-13 lg:row-start-1 z-10 bg-white p-10 lg:p-16 shadow-2xl border-t-8 border-[#aa8e65] mt-[-50px] lg:mt-0'>
            <label className='text-[#aa8e65] text-[11px] tracking-[4px] mb-4 block uppercase font-bold'>Our Events</label>
            <h4 className='font-serif text-3xl lg:text-5xl mb-6 text-neutral-900'>Dinner & Lecture with Friends</h4>
            <p className='text-[#656769] text-sm lg:text-base font-light leading-relaxed mb-8'>
              Intimate evenings attending a private reading followed by a great meal amongst friends. Taking advantage of what our local farmers are bringing in is always inspiring.
            </p>
            <button className='text-neutral-900 border-b-2 border-[#aa8e65] pb-1 tracking-[2px] uppercase text-[10px] font-bold'>
              view event
            </button>
          </div>
        </div>
      </section>

      {/* 3. ARTISANAL MISSION */}
      <section className='bg-neutral-900 py-32 text-center text-white mb-40'>
        <div className='max-w-3xl mx-auto px-6'>
          <h2 className='font-serif text-3xl lg:text-5xl mb-6'>An artisanal catered experience.</h2>
          <div className='w-16 h-px bg-[#aa8e65] mx-auto mb-8' />
          <p className='text-white/70 font-light text-sm lg:text-lg leading-relaxed'>
            Whatever you are celebrating, we work with you from start-to-finish to ensure that your event is planned simply and executed stunningly.
          </p>
        </div>
      </section>

      {/* 4. CUSTOM CUISINE - SQUISH-PROOF FLOW */}
      <section className='max-w-[1400px] mx-auto px-6 mb-40'>
        <h2 className='text-4xl lg:text-6xl font-serif text-neutral-900 mb-20'>Custom Cuisine</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32'>
          {CUISINE_DATA.map((item, i) => (
            <article key={i} className='flex flex-col'>
              <div className='aspect-video bg-neutral-200 relative overflow-hidden shadow-lg'>
                <div className='absolute inset-0 bg-neutral-300' />
              </div>
              {/* Box sits naturally, shifted up slightly, width controlled by parent grid */}
              <div className='bg-white p-8 lg:p-12 shadow-xl border-l-4 border-[#aa8e65] mt-[-60px] lg:mt-[-80px] w-[90%] mx-auto z-10'>
                <h3 className='text-2xl lg:text-3xl font-serif mb-4 text-neutral-900'>{item.title}</h3>
                <p className='text-sm text-neutral-600 font-light leading-relaxed'>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <div className='flex flex-col items-center py-20 border-t border-neutral-100'>
         <h3 className='text-2xl font-serif mb-8'>Ready to plan your next gathering?</h3>
         <Link href="/contact" className='border-2 border-[#AA8E65] text-[#AA8E65] py-4 px-12 tracking-[4px] uppercase text-[10px] font-bold hover:bg-[#AA8E65] hover:text-white transition-all'>
            schedule a meeting
          </Link>
      </div>
    </div>
  )
}

export default PrivateEventsPage