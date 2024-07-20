import React from 'react'

const PrivateEventsPage = () => {
  return (
    <div className='flex flex-col w-[90%] lg:w-4/5 '>
      <h2 className='mt-20 text-2xl max-w-2xl mx-auto lg:text-4xl leading-[54px] mb-7 text-[#333] font-light'>The Gravy Train Express enables outstanding private events from creation to clean-up.</h2>
      <p className='mb-7 w-full max-w-2xl mx-auto text-[#656769] leading-relaxed text-xs sm:text-sm md:text-base  lg:text-lg font-light'>A whimsical group excursion. A bar or bat mitzvah for friends and family. A trendy urban get-together. We create memorable moments at every social gathering.</p>
      <section className='ml-[10%] grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='border aspect-square h-96 w-full'></div>
        <div className='bg-[#FAFAFA] p-2 aspect-square h-96 mt-[10%] w-full'>
          <label className='text-[#aa8e65] text-sm tracking-[2px] mb-5 uppercase font-light'>our events</label>
          <h4 className='font-light text-2xl my-7 text-[#333] leading-tight'>Dinner & Lecture with Friends</h4>
          <p className='mb-7 text-[#656769] leading-relaxed text-xs sm:text-sm md:text-base  lg:text-lg font-light'>What could be better than an intimate evening of attending a private reading of a new best seller followed by a great meal amongst friends? Spring has sprung, and taking advantage of what our local farmers are bringing in on their trucks is always inspiring.</p>
          <button className='text-[#AA8E65] py-3 tracking-[4px] leading-tight uppercase text-xs '>view event</button>
        </div>
        
      </section>
      <section className='bg-[#FAFAFA] py-24 text-center '>
          <h2 className='m-auto w-full max-w-2xl text-[#333] font-light mb-3 leading-[54px] text-2xl lg:text-4xl' >An artisanal catered experience.</h2>
          <p className='m-auto w-full text-[#656769] max-w-2xl font-light mb-3 leading-[54px] text-sm lg:text-lg'>What are you celebrating? Whatever it might be (birthday party, bar/bat mitzvah, graduation, etc.), we work with you from start-to-finish to ensure that your event is planned simply and executed stunningly. Our private event planners work with you personally to customize menus, lay out an agenda, and even plan around your budget. We collaborate with you, make suggestions, ask for your feedback, and finally give you an exact mental picture of your amazing private event. We arrive day of with everything you need - from on-site chefs to servers and valet parking.</p>
      </section>
      <h2 className='m-auto w-4/5 text-[#333] font-light leading-[54px] text-2xl lg:text-4xl' >Custom Cuisine</h2>
    <section className='w-4/5 mx-auto grid  grid-cols-1 text-xs lg:text-sm sm:grid-cols-2 gap-5 place-content-center mb-20 mt-5'>
    <article className='relative border-2 aspect-video mt-20 '>
    <div className='absolute bg-[#FAFAFA] py-8 px-5 w-4/5 -bottom-10 left-[10%] z-20'>
      <h3 className='text-3xl mb-7 text-[#333] font-light'>Made to Taste</h3>
      <p className='text-sm font-light text-[#575A5B]'>Fork & Spoon cuisine is about customizing every aspect of flavor and presentation to the style and preferences of our guests and clients! We make amazing artisan dishes for any occasion.</p>
    </div>
  </article>
  <article className='relative border-2 aspect-video mt-20 '>
    <div className='absolute bg-[#FAFAFA] py-8 px-5 w-4/5 -bottom-10 left-[10%] z-20'>
      <h3 className='text-3xl mb-7 text-[#333] font-light'>Local, Fresh Ingredients</h3>
      <p className='text-sm font-light text-[#575A5B]'>Only fresh, thoughtful, locally sourced ingredients go into every culinary masterpiece prepared at a Fork & Spoon event. Our ingredients pay homage to our values and are a reflection of our clients’ tastes.</p>
    </div>
  </article>
  <article className='relative border-2 aspect-video mt-20 '>
    <div className='absolute bg-[#FAFAFA] py-8 px-5 w-4/5 -bottom-10 left-[10%] z-20'>
      <h3 className='text-3xl mb-7 text-[#333] font-light'>On-Site Chefs</h3>
      <p className='text-sm font-light text-[#575A5B]'>Our expert chefs hand-prepare a fresh, delicious, artisan menu of stunning appetizers, entrees and desserts—all cooked on-site for our guests!</p>
    </div>
  </article>
  <article className='relative border-2 aspect-video mt-20 '>
    <div className='absolute bg-[#FAFAFA] py-8 px-5 w-4/5 -bottom-10 left-[10%] z-20'>
      <h3 className='text-3xl mb-7 text-[#333] font-light'>Taste It First</h3>
      <p className='text-sm font-light text-[#575A5B]'>Our tastings set the table for an amazingly personal catering experience. We love to learn about (and cook for) our clients, and our food can bring people together like no other event service!</p>
    </div>
  </article>
  
  
</section>
<button className='border border-[#AA8E65] text-[#AA8E65] hover:bg-[#AA8E65] hover:text-white py-3 tracking-[4px] leading-tight uppercase text-xs  px-5 mb-10 self-center'>schedule a meeting</button>
    </div>
  )
}

export default PrivateEventsPage