import React from 'react'

const VenuesPage = () => {
  return (
    <div className='w-full m-auto'>
    <h2 className='text-2xl  lg:text-4xl leading-[54px] mb-7 text-[#333] font-light'>Choosing a Venue</h2>
    <p className='mb-7 text-[#656769] leading-relaxed text-xs sm:text-sm md:text-base  lg:text-lg font-light'>Depending on your occasion, choosing a venue can be challenging (even if you’re just looking to host it at home).  We’ll work with you personally to determine how many guests we’ll need to accommodate and what kind of atmosphere best complements your goals and expectations. We’ll make sure that your ideal venue meets your budget and schedule constraints and even book sub-vendors for your event. We show up, set up, and clean-up.</p>
    <p className='mb-7 text-[#656769] leading-relaxed text-xs sm:text-sm md:text-base  lg:text-lg font-light'>In addition to helping you find the best venue, we can customize every aspect of your event to your liking, your budget, your schedule and your occasion. Read below to learn more about just some of the amazing San Francisco venues we have worked in for just a small glimpse in to what we can do for you in your selected venue.</p>

    <h2 className='text-2xl  lg:text-4xl leading-[54px] mt-20 text-[#333] font-light col-span-3'>Our Venue Partners</h2>
<section className='grid  grid-cols-1 text-xs lg:text-sm sm:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center my-20'>

  <article className='relative border-2 aspect-square mt-20 '>
    <div className='absolute bg-[#FAFAFA] py-8 px-5 w-4/5 -bottom-10 left-[10%] z-20'>
      <h3 className='text-3xl mb-7 text-[#333] font-light'>City Hall, SF</h3>
      <p className='text-sm font-light text-[#575A5B]'>San Fransico</p>
    </div>
  </article>
  <article className='border-2 aspect-square mt-20'></article>
  <article className='border-2 aspect-square mt-20'></article>
  <article className='border-2 aspect-square mt-20'></article>
  <article className='border-2 aspect-square mt-20'></article>
  <article className='border-2 aspect-square mt-20'></article>
  <article className='border-2 aspect-square mt-20'></article>
  <article className='border-2 aspect-square mt-20'></article>
  <article className='border-2 aspect-square mt-20'></article>
  <article className='border-2 aspect-square mt-20'></article>
  <article className='border-2 aspect-square mt-20'></article>
</section>
    </div>
  )
}

export default VenuesPage