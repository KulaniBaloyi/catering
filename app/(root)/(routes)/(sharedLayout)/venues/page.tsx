"use client"
import React from 'react'

const VENUE_PARTNERS = [
  { name: "City Hall", location: "San Francisco" },
  { name: "The Ferry Building", location: "San Francisco" },
  { name: "Palace of Fine Arts", location: "San Francisco" },
  { name: "The Green Room", location: "San Francisco" },
  { name: "Asian Art Museum", location: "San Francisco" },
  { name: "Bently Reserve", location: "San Francisco" },
  { name: "The Old Mint", location: "San Francisco" },
  { name: "Conservatory of Flowers", location: "San Francisco" },
  { name: "De Young Museum", location: "San Francisco" },
];

const VenuesPage = () => {
  return (
    <div className='bg-[#fcfaf7] min-h-screen pt-32 pb-24 overflow-x-hidden'>
      {/* 1. Header Section */}
      <section className='max-w-[1400px] mx-auto px-6 lg:px-12 mb-24'>
        <div className='max-w-4xl'>
          <h2 className='text-4xl lg:text-6xl font-serif leading-tight mb-10 text-neutral-900 tracking-tight'>
            Choosing a <span className='italic text-[#aa8e65]'>Venue</span>
          </h2>
          <div className='space-y-6 max-w-3xl'>
            <p className='text-[#656769] leading-relaxed text-base lg:text-xl font-light'>
              Choosing a venue can be challenging (even if you’re just looking to host it at home). We’ll work with you personally to determine how many guests we’ll need to accommodate and what kind of atmosphere best complements your goals and expectations.
            </p>
            <p className='text-[#656769] leading-relaxed text-base lg:text-xl font-light'>
              In addition to helping you find the best location, we customize every aspect of your event to your liking, budget, and schedule. Below is just a small glimpse into the amazing San Francisco spaces we frequent.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Venue Partners Grid */}
      <section className='max-w-[1400px] mx-auto px-6 lg:px-12'>
        <div className='flex items-center gap-4 mb-20'>
          <h2 className='text-2xl lg:text-3xl font-serif text-neutral-900 tracking-tight whitespace-nowrap'>Our Venue Partners</h2>
          <div className='h-px flex-1 bg-neutral-200' />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24'>
          {VENUE_PARTNERS.map((venue, i) => (
            <article key={i} className='flex flex-col group'>
              {/* Image Container */}
              <div className='relative w-full aspect-square bg-neutral-200 overflow-hidden shadow-sm'>
                <div className='absolute inset-0 bg-neutral-300 group-hover:scale-105 transition-transform duration-1000' />
                {/* Border overlay for premium feel */}
                <div className='absolute inset-0 border border-black/5 z-10' />
              </div>

              {/* Overlapping Text Box - FIXED: Squish-proof and Overflow-safe */}
              <div className='relative z-20 w-[85%] mx-auto -mt-12 bg-white p-6 lg:p-8 shadow-xl border-l-4 border-[#aa8e65] transition-transform group-hover:-translate-y-2 duration-500'>
                <h3 className='text-xl lg:text-2xl font-serif text-neutral-900 mb-2'>
                  {venue.name}
                </h3>
                <p className='text-[10px] tracking-[3px] uppercase text-[#aa8e65] font-bold'>
                  {venue.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Call to Action */}
      <section className='mt-40 flex flex-col items-center py-20 bg-white border-y border-neutral-100'>
        <h3 className='text-2xl font-serif mb-8 text-neutral-800'>Have a venue in mind?</h3>
        <button className='border-2 border-[#AA8E65] text-[#AA8E65] hover:bg-[#AA8E65] hover:text-white py-4 px-12 tracking-[4px] uppercase text-[10px] font-bold transition-all duration-300'>
          let&apos;s talk logistics
        </button>
      </section>
    </div>
  )
}

export default VenuesPage