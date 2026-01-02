"use client"
import React from 'react'

const SERVICES_DATA = [
  {
    title: "Staffing & Bar",
    desc: "Our personal, full-service approach makes planning for any size get-together effortless. Our event planning experts will work with you directly from start to finish for events of any size, scope or venue."
  },
  {
    title: "Event Planning",
    desc: "From conceptualizing the theme to managing the timeline, we handle the logistics so you can be a guest at your own party. Professionalism at every touchpoint."
  },
  {
    title: "Venue Selection",
    desc: "The perfect venue sets the scene. We help you secure exclusive locations in the San Francisco area that match your event's distinct personality and requirements."
  },
  {
    title: "Custom Decor",
    desc: "We design splendid, appropriate decor that transforms spaces. Every floral arrangement and table setting is curated to satisfy guests to the highest level."
  }
];

const ServicesPage = () => {
  return (
    <div className='bg-[#fcfaf7] min-h-screen pt-32 pb-24 overflow-x-hidden'>
      {/* 1. Header Section - Wide & Airy */}
      <section className='max-w-[1400px] mx-auto px-6 lg:px-12 mb-24'>
        <div className='max-w-4xl'>
          <h2 className='text-4xl lg:text-6xl font-serif leading-tight mb-10 text-neutral-900 tracking-tight'>
            Full Service <span className='italic text-[#aa8e65]'>Events</span>
          </h2>
          <p className='text-[#656769] leading-relaxed text-base lg:text-xl font-light max-w-3xl'>
            Our idea of full-service event planning means finding the perfect combination of unique food, setting, atmosphere and people and catering it with a distinct level of sophistication. 
            We cook astonishing cuisine on-site, entertain your guests and customize every element of your gathering. 
            All you’ll need to do is sit back and enjoy yourself.
          </p>
        </div>
      </section>

      {/* 2. Featured Services Grid */}
      <section className='max-w-[1400px] mx-auto px-6 lg:px-12'>
        <div className='flex items-center gap-4 mb-16'>
            <h2 className='text-2xl lg:text-3xl font-serif text-neutral-900 tracking-tight'>Featured Services</h2>
            <div className='h-px flex-1 bg-neutral-200' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20'>
          {SERVICES_DATA.map((service, i) => (
            <article key={i} className='group flex flex-col'>
              {/* Image Placeholder - Aspect Square */}
              <div className='relative w-full aspect-square bg-neutral-200 overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl'>
                 <div className='absolute inset-0 bg-neutral-300 group-hover:scale-105 transition-transform duration-1000' />
                 <div className='absolute inset-0 border border-black/5' />
              </div>

              {/* Text Content */}
              <div className='pt-8'>
                <h4 className='text-2xl lg:text-3xl text-neutral-900 font-serif mb-4 leading-tight group-hover:text-[#aa8e65] transition-colors'>
                  {service.title}
                </h4>
                <p className='text-sm lg:text-base leading-relaxed font-light text-[#575A5B] max-w-sm'>
                  {service.desc}
                </p>
                <div className='mt-6 w-8 h-px bg-[#aa8e65] group-hover:w-16 transition-all duration-500' />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Bottom CTA - Consistent with Private Events */}
      <section className='mt-40 flex flex-col items-center py-20 bg-white border-y border-neutral-100'>
         <h3 className='text-2xl font-serif mb-8 text-neutral-800 tracking-tight'>Ready to start your project?</h3>
         <button className='border-2 border-[#AA8E65] text-[#AA8E65] hover:bg-[#AA8E65] hover:text-white py-4 px-12 tracking-[4px] uppercase text-[10px] font-bold transition-all duration-300'>
            get in touch
          </button>
      </section>
    </div>
  )
}

export default ServicesPage