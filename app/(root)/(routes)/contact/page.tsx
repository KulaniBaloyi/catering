"use client"
import React from 'react'

const ContactPage = () => {
  return (
    <div className='bg-[#fcfaf7] min-h-screen pt-32 pb-24 overflow-x-hidden'>
      
      {/* 1. Header Section */}
      <section className='max-w-[1400px] mx-auto px-6 lg:px-12 mb-16'>
        <div className='max-w-3xl'>
          <h2 className='text-4xl lg:text-6xl font-serif leading-tight mb-8 text-neutral-900 tracking-tight'>
            Let’s start <span className='italic text-[#aa8e65]'>planning.</span>
          </h2>
          <p className='text-[#656769] leading-relaxed text-base lg:text-xl font-light'>
            Whether it’s an intimate dinner or a grand celebration, we’re here to handle the details. Fill out the form below or reach out to us directly.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className='max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16'>
        
        {/* Left Side: Contact Info */}
        <div className='lg:col-span-4 space-y-12'>
          <div>
            <h4 className='text-[10px] uppercase tracking-[4px] font-bold text-[#aa8e65] mb-4'>Inquiries</h4>
            <p className='text-xl lg:text-2xl font-serif text-neutral-800'>hello@thegravytrain.com</p>
            <p className='text-xl lg:text-2xl font-serif text-neutral-800 mt-2'>(555) 123-4567</p>
          </div>
          
          <div>
            <h4 className='text-[10px] uppercase tracking-[4px] font-bold text-[#aa8e65] mb-4'>Location</h4>
            <p className='text-neutral-600 font-light leading-relaxed'>
              Serving the San Francisco Bay Area <br />
              and surrounding regions.
            </p>
          </div>

          <div className='pt-8 border-t border-neutral-200'>
             <h4 className='text-[10px] uppercase tracking-[4px] font-bold text-neutral-400 mb-6'>Follow our Journey</h4>
             <div className='flex gap-6 text-sm uppercase tracking-widest font-bold text-neutral-800'>
                <span className='cursor-pointer hover:text-[#aa8e65] transition-colors'>Instagram</span>
                <span className='cursor-pointer hover:text-[#aa8e65] transition-colors'>Pinterest</span>
             </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className='lg:col-span-8 bg-white p-8 md:p-12 lg:p-16 shadow-2xl border-t-8 border-[#aa8e65]'>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            {/* Name */}
            <div className='flex flex-col space-y-2'>
              <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Full Name *</label>
              <input type='text' className='p-4 border-b border-neutral-200 focus:border-[#aa8e65] focus:outline-none transition-colors font-light' />
            </div>

            {/* Email */}
            <div className='flex flex-col space-y-2'>
              <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Email Address *</label>
              <input type='email' className='p-4 border-b border-neutral-200 focus:border-[#aa8e65] focus:outline-none transition-colors font-light' />
            </div>

            {/* Phone */}
            <div className='flex flex-col space-y-2'>
              <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Phone</label>
              <input type='text' className='p-4 border-b border-neutral-200 focus:border-[#aa8e65] focus:outline-none transition-colors font-light' />
            </div>

            {/* Venue */}
            <div className='flex flex-col space-y-2'>
              <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Potential Venue</label>
              <input type='text' className='p-4 border-b border-neutral-200 focus:border-[#aa8e65] focus:outline-none transition-colors font-light' />
            </div>

            {/* Event Type */}
            <div className='flex flex-col space-y-2'>
              <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Event Type</label>
              <input type='text' placeholder="Wedding, Corporate, etc." className='p-4 border-b border-neutral-200 focus:border-[#aa8e65] focus:outline-none transition-colors font-light' />
            </div>

            {/* Date */}
            <div className='flex flex-col space-y-2'>
              <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Event Date</label>
              <input type='text' placeholder='MM/DD/YYYY' className='p-4 border-b border-neutral-200 focus:border-[#aa8e65] focus:outline-none transition-colors font-light' />
            </div>

            {/* Guests */}
            <div className='flex flex-col space-y-2'>
              <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Guest Count</label>
              <input type='text' className='p-4 border-b border-neutral-200 focus:border-[#aa8e65] focus:outline-none transition-colors font-light' />
            </div>

            {/* Referral */}
            <div className='flex flex-col space-y-2'>
              <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>How did you hear about us?</label>
              <input type='text' className='p-4 border-b border-neutral-200 focus:border-[#aa8e65] focus:outline-none transition-colors font-light' />
            </div>

            {/* Message */}
            <div className='md:col-span-2 flex flex-col space-y-2 pt-4'>
              <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Message *</label>
              <textarea rows={6} className='p-4 border border-neutral-200 focus:border-[#aa8e65] focus:outline-none transition-colors font-light resize-none'></textarea>
            </div>

            <button className='md:col-span-2 bg-[#AA8E65] text-white py-6 px-10 uppercase text-[11px] tracking-[5px] font-bold hover:bg-neutral-900 transition-all duration-300 shadow-xl mt-4'>
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactPage