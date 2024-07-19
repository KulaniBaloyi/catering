import React from 'react'

const EmploymentPage = () => {
  return (
    <div className='w-full max-w-2xl m-auto'>
    <h2 className='text-2xl  lg:text-4xl leading-[54px] mb-7 text-[#333] font-light'>Join Our Team</h2>
    <p className='mb-7 text-[#656769] leading-relaxed text-xs sm:text-sm md:text-base  lg:text-lg font-light'>We believe that a personal attention to detail is the foundation for creating a great client experience.</p>
    <p className='mb-7 text-[#656769] leading-relaxed text-xs sm:text-sm md:text-base  lg:text-lg font-light'>Our mission is to create the most distinct and artisan-quality personal event catering experience in Arizona. We do this by living by our values. If you share these values, we’d love to meet you.</p>

    <h2 className='text-2xl  lg:text-4xl leading-[54px] mt-20 text-[#333] font-light col-span-3'>Our Venue Partners</h2>
<section className=' text-xs lg:text-sm my-20'>
  <div className='flex flex-col mb-4'>
    <label className='mb-2'>*Name</label>
    <input type='text' className='p-3 border focus:outline-none '/>
  </div>
  <div className='flex flex-col mb-4'>
    <label className='mb-2'>*Email</label>
    <input type='email' className='p-3 border focus:outline-none '/>
  </div>
  <div className='flex flex-col mb-4'>
    <label className='mb-2'>*Phone</label>
    <input type='text' className='p-3 border focus:outline-none '/>
  </div>
  <div className='flex flex-col mb-4'>
    <label className='mb-2'>*Position Appying For?</label>
    <input type='text' className='p-3 border focus:outline-none '/>
    
    
  </div>
  <div className='flex flex-col mb-4'>
    <label className='mb-2'>*Resume</label>
    <label className='mb-2'>Drop Files here</label>
    <p className='text-[#AA8E65] text-sm tracking-[.2em] leading-5 uppercase border border-black rounded-sm px-2 py-1 self-start mb-2 bg-zinc-200'>Select files</p>
    <label className='mb-2'>Max. file size: 300MB</label>
   
    
  </div>
  <div className='flex flex-col mb-4'>
    <label className='mb-2'>*Message</label>
    <textarea rows={10} className='p-3 border focus:outline-none '></textarea>
    
    
  </div>
  <button className='w-full bg-[#AA8E65] text-white py-3 px-5 uppercase mt-5'>submit</button>

  
</section>
    </div>
  )
}

export default EmploymentPage