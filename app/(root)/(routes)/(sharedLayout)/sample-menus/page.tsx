import React from 'react'

const SampleMenusPage = () => {
  return (
    <div className='w-full max-w-3xl m-auto'>
    <h2 className='text-2xl  lg:text-4xl leading-[54px] mb-7 text-[#333] font-light'>View Our Sample Menus</h2>
    <p className='text-[#656769] leading-relaxed text-xs sm:text-sm md:text-base  lg:text-lg font-light'>Only fresh, thoughtful, locally sourced ingredients go into every culinary masterpiece prepared at a Fork & Spoon event. Our ingredients pay homage to our values and are a reflection of our clients tastes.

</p>
<section className='grid grid-cols-1 text-xs lg:text-sm sm:grid-cols-2 gap-10 place-content-center my-20'>
  <p className='text-center cursor-pointer border border-[#AA8E65] w-auto grow-0 text-[#AA8E65] py-3 px-5 hover:bg-[#AA8E65] hover:text-white transition-all ease-in-out duration-300'>Hor DOeuvres</p>
  <p className='text-center cursor-pointer border border-[#AA8E65] text-[#AA8E65] py-3 px-5 hover:bg-[#AA8E65] hover:text-white transition-all ease-in-out duration-300'>Buffets</p>
  <p className='text-center cursor-pointer border border-[#AA8E65] text-[#AA8E65] py-3 px-5 hover:bg-[#AA8E65] hover:text-white transition-all ease-in-out duration-300'>Stations</p>
  <p className='text-center cursor-pointer border border-[#AA8E65] text-[#AA8E65] py-3 px-5 hover:bg-[#AA8E65] hover:text-white transition-all ease-in-out duration-300'>Plated</p>
</section>
    </div>
  )
}

export default SampleMenusPage