"use client"
import React from 'react'

const EmploymentPage = () => {
  return (
    <div className='bg-[#fcfaf7] min-h-screen pt-32 pb-24'>
      {/* 1. Intro Section */}
      <section className='max-w-[1400px] mx-auto px-6 lg:px-12 mb-20'>
        <div className='max-w-2xl'>
          <h2 className='text-4xl lg:text-6xl font-serif leading-tight mb-8 text-neutral-900 tracking-tight'>
            Join Our <span className='italic text-[#aa8e65]'>Team</span>
          </h2>
          <div className='space-y-6'>
            <p className='text-[#656769] leading-relaxed text-base lg:text-xl font-light'>
              We believe that personal attention to detail is the foundation for creating a great client experience.
            </p>
            <p className='text-[#656769] leading-relaxed text-base lg:text-xl font-light'>
              Our mission is to create the most distinct and artisan-quality personal event catering experience in the area. We do this by living by our values. If you share these, we’d love to meet you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Application Form */}
      <section className='max-w-[1400px] mx-auto px-6 lg:px-12'>
        <div className='flex items-center gap-4 mb-16'>
            <h2 className='text-2xl lg:text-3xl font-serif text-neutral-900 tracking-tight'>Apply Now</h2>
            <div className='h-px flex-1 bg-neutral-200' />
        </div>

        <form className='max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Name */}
          <div className='flex flex-col space-y-2'>
            <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Full Name *</label>
            <input 
              type='text' 
              className='p-4 bg-white border border-neutral-200 focus:border-[#AA8E65] focus:outline-none transition-colors font-light'
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div className='flex flex-col space-y-2'>
            <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Email Address *</label>
            <input 
              type='email' 
              className='p-4 bg-white border border-neutral-200 focus:border-[#AA8E65] focus:outline-none transition-colors font-light'
              placeholder="email@example.com"
            />
          </div>

          {/* Phone */}
          <div className='flex flex-col space-y-2'>
            <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Phone Number *</label>
            <input 
              type='tel' 
              className='p-4 bg-white border border-neutral-200 focus:border-[#AA8E65] focus:outline-none transition-colors font-light'
              placeholder="(555) 000-0000"
            />
          </div>

          {/* Position */}
          <div className='flex flex-col space-y-2'>
            <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Position Applying For? *</label>
            <select className='p-4 bg-white border border-neutral-200 focus:border-[#AA8E65] focus:outline-none transition-colors font-light appearance-none text-neutral-600'>
              <option>Select a position</option>
              <option>Server / Front of House</option>
              <option>Culinary / Chef</option>
              <option>Event Coordinator</option>
              <option>Logistics / Set-up</option>
            </select>
          </div>

          {/* Resume Upload - Modern Styled */}
          <div className='flex flex-col space-y-2 md:col-span-2'>
            <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Resume / CV *</label>
            <div className='border-2 border-dashed border-neutral-200 bg-white p-10 flex flex-col items-center justify-center space-y-4 hover:border-[#AA8E65] transition-colors cursor-pointer group'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-[#AA8E65] transition-colors"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                <div className='text-center'>
                    <p className='text-sm text-neutral-600'>Drag files here or <span className='text-[#AA8E65] underline'>browse</span></p>
                    <p className='text-[10px] text-neutral-400 mt-1'>PDF, DOCX (Max 10MB)</p>
                </div>
                <input type="file" className="hidden" />
            </div>
          </div>

          {/* Message */}
          <div className='flex flex-col space-y-2 md:col-span-2'>
            <label className='text-[10px] uppercase tracking-[2px] font-bold text-neutral-500'>Message / Cover Note *</label>
            <textarea 
              rows={6} 
              className='p-4 bg-white border border-neutral-200 focus:border-[#AA8E65] focus:outline-none transition-colors font-light'
              placeholder="Tell us about yourself..."
            ></textarea>
          </div>

          <button className='md:col-span-2 bg-[#AA8E65] text-white py-5 px-10 uppercase text-[11px] tracking-[4px] font-bold hover:bg-neutral-900 transition-all duration-300 shadow-lg'>
            Submit Application
          </button>
        </form>
      </section>
    </div>
  )
}

export default EmploymentPage