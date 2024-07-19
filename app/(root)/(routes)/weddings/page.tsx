import React from 'react'

const WeddingsPage = () => {
  return (
    <div className='flex flex-col'>
    <h2 className='mt-20 text-2xl w-full max-w-2xl mx-auto lg:text-4xl leading-[54px] mb-7 text-[#333] font-light'>Fork & Spoon Productions designs elegant and personal wedding experiences.</h2>
    <p className='mb-7 w-full max-w-2xl mx-auto text-[#656769] leading-relaxed text-xs sm:text-sm md:text-base  lg:text-lg font-light'>Indoors or outdoors. Extravagantly large or intimately small. We are uniquely mindful of every detail that goes into building your dream wedding, from cuisine to cutlery. Fork & Spoon &lsquo; wedding catering experiences create the best of memories for each and every guest.</p>
    <section className='ml-[10%] grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div className='border aspect-square h-96 w-full'></div>
      <div className='bg-[#FAFAFA] p-2 aspect-square h-96 mt-[10%] w-full'>
        <label className='text-[#aa8e65] text-sm tracking-[2px] mb-5 uppercase font-light'>our events</label>
        <h4 className='font-light text-2xl my-7 text-[#333] leading-tight'>Rachel & Adams Summer Wedding Celebration</h4>
        <p className='mb-7 text-[#656769] leading-relaxed text-xs sm:text-sm md:text-base  lg:text-lg font-light'>We were delighted when Rachel and Aaron asked us to help them with their  wedding at their family ranch in the Santa Cruz mountains. Both Rachel and Aaron wanted the day to be whimsical and fun for all of their guests. The ceremony was held on the banks of the ranch’s lake with guests sitting on distressed wooden benches with large colorful pillows and paper parasols.</p>
        <button className='text-[#AA8E65] py-3 tracking-[4px] leading-tight uppercase text-xs '>view event</button>
      </div>
      
    </section>
    <section className='bg-[#FAFAFA] py-24 text-center '>
        <h2 className='m-auto w-full max-w-2xl text-[#333] font-light mb-3 leading-[54px] text-2xl lg:text-4xl' >A thoughtful wedding experience you&lsquo;re sure to love!</h2>
        <p className='m-auto w-full text-[#656769] max-w-2xl font-light mb-3 leading-[54px] text-sm lg:text-lg'>We know that wedding planning can be stressful. With our attention to detail and full-service approach, we are determined to make your wedding day stress-free and breathtaking for you and your loved ones. We meet with you in-person to discuss your ideas for wedding catering, venues, themes and more. We make suggestions, ask for your feedback, and customize each part of your wedding experience to your taste. We provide thoughtful food with customized menus, gracious service, full event design and execution, lush florals, planning and logistics, acquisition of sub-vendors and anything else you need for your dream Arizona wedding.</p>
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

export default WeddingsPage