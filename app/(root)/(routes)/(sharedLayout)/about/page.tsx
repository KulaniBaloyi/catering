"use client"
import React from 'react'

const VALUES_DATA = [
  { 
    title: "Thoughtful & Purposeful", 
    desc: "Every aspect of a The Gravy Train event is intentional. We don't just serve food; we curate moments that have meaning and significance." 
  },
  { 
    title: "Artisan Quality", 
    desc: "With 20+ years in SF's prestigious restaurant scene, our culinary savvy ensures every dish tells a story from preparation to plating." 
  },
  { 
    title: "Effortless Entertaining", 
    desc: "We bring passion, modesty, and poise to the table, allowing our clients to simply sit back and enjoy the company of their guests." 
  },
  { 
    title: "Community Driven", 
    desc: "We aim to revolutionize the Bay Area catering space by bringing a distinct sophistication and comprehensive approach to every neighbor." 
  }
];

const AboutPage = () => {
  return (
    <div className='bg-[#fcfaf7] min-h-screen pt-32 pb-24 overflow-x-hidden'>
      
      {/* 1. OUR STORY - WIDE & ELEGANT */}
      <section className='max-w-[1400px] mx-auto px-6 lg:px-12 mb-32'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
          <div className='lg:col-span-5'>
            <h2 className='text-4xl lg:text-6xl font-serif leading-tight text-neutral-900 tracking-tight mb-8'>
              Our <span className='italic text-[#aa8e65]'>Story</span>
            </h2>
            <div className='w-20 h-px bg-[#aa8e65] mb-8' />
          </div>
          
          <div className='lg:col-span-7 space-y-6'>
            <p className='text-xl lg:text-2xl font-serif text-neutral-800 leading-relaxed'>
              With more than 20 years experience in a number of the San Francisco Bay Area’s most prestigious restaurants, our leadership team now brings a unique culinary savvy to The Gravy Train.
            </p>
            <p className='text-[#656769] font-light leading-loose text-base lg:text-lg'>
              The mindset of The Gravy Train revolves around more than just artisan cuisine and a custom catering experience. We aim to revolutionize the Bay Area catering space by bringing a distinct sophistication and comprehensive start-to-finish approach to every member of the community. 
            </p>
            <p className='text-[#656769] font-light leading-loose text-base lg:text-lg'>
              Every ingredient in every artisan dish has meaning and significance to the people to whom it is served. Every meal (from preparation to plating) tells a story. That’s what we call effortless entertaining.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR VALUES - OVERLAPPING GRID */}
      <section className='max-w-[1400px] mx-auto px-6 lg:px-12'>
        <div className='flex items-center gap-4 mb-24'>
            <h2 className='text-3xl lg:text-4xl font-serif text-neutral-900 tracking-tight'>Our Values</h2>
            <div className='h-px flex-1 bg-neutral-200' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32 lg:gap-y-48'>
          {VALUES_DATA.map((value, i) => (
            <article key={i} className='group flex flex-col relative'>
              
              {/* Image Box (Project style) */}
              <div className='relative w-full aspect-[4/3] bg-neutral-200 overflow-hidden shadow-sm'>
                 <div className='absolute inset-0 bg-neutral-300 group-hover:scale-105 transition-transform duration-1000' />
                 <div className='absolute inset-0 border border-black/5 z-10' />
              </div>

              {/* Overlapping Text Box - FIXED Logic */}
              <div className='relative z-20 w-[88%] mx-auto -mt-20 bg-white p-8 lg:p-12 shadow-2xl border-l-4 border-[#aa8e65] transition-transform group-hover:-translate-y-2 duration-500'>
                <h3 className='text-2xl lg:text-3xl font-serif text-neutral-900 mb-4'>
                  {value.title}
                </h3>
                <p className='text-sm lg:text-base text-neutral-600 font-light leading-relaxed'>
                  {value.desc}
                </p>
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className='mt-48 flex flex-col items-center py-24 bg-white border-y border-neutral-100'>
         <h3 className='text-2xl lg:text-3xl font-serif mb-10 text-neutral-800 tracking-tight'>Experience the difference.</h3>
         <button className='border-2 border-[#AA8E65] text-[#AA8E65] hover:bg-[#AA8E65] hover:text-white py-5 px-16 tracking-[4px] uppercase text-[11px] font-bold transition-all duration-300 shadow-sm'>
            work with us
          </button>
      </section>

    </div>
  )
}

export default AboutPage