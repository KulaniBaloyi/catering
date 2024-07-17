import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
    <div className='min-h-screen mx-auto w-[90%] max-w-5xl border-4 border-teal-500'>
        <nav className='border-b  border-[#eee]  bg-[#FAFAFA] w-full clear-both text-base leading-none'>
            <ul className='flex items-center'>
                <li className=''><Link className='inline-block tracking-[1px] mx-5 py-5 px-2 text-sm uppercase text-[#907142] border-b-2 border-b-[#907142]' href="/">About</Link></li>
                <li className=''><Link className='inline-block tracking-[1px] mx-5 py-5 px-2 text-sm uppercase text-[#907142] border-b-2 border-b-[#907142]' href="/">Services</Link></li>
                <li className=''><Link className='inline-block tracking-[1px] mx-5 py-5 px-2 text-sm uppercase text-[#907142] border-b-2 border-b-[#907142]' href="/">Sample Menus</Link></li>
                <li className=''><Link className='inline-block tracking-[1px] mx-5 py-5 px-2 text-sm uppercase text-[#907142] border-b-2 border-b-[#907142]' href="/">Venues</Link></li>
                <li className=''><Link className='inline-block tracking-[1px] mx-5 py-5 px-2 text-sm uppercase text-[#907142] border-b-2 border-b-[#907142]' href="/">Employment</Link></li>
            </ul>
        </nav>
        <section>
            <h2 className='text-5xl leading-[58px] mb-7 text-[#333] font-light'>Our Story</h2>
            <p className='mb-7 text-zinc-800 font-light'>With more than 20 years experience in a number of the San Francisco Bay Area’s most prestigious restaurants, our leadership team now brings a unique culinary savvy and thought leadership to Fork & Spoon Productions.</p>
            <p className='mb-7 text-zinc-800 font-light'>The mindset of Fork & Spoon revolves around more than just artisan cuisine and a custom catering experience. We aim to revolutionize the Bay Area catering space by bringing a distinct sophistication and comprehensive start-to-finish approach to every member of the community. Every aspect of a Fork & Spoon event is thoughtful and purposeful. Every ingredient in every artisan dish has meaning and significance to the people to whom it is served. Every meal (from preparation to plating) tells a story.</p>
            <p className='text-zinc-700 font-light'>Fork & Spoon is artisan catering with passion, modesty and poise. Together, that’s what we call effortless entertaining.</p>
        </section>
        <section>
        <h2 className='text-5xl leading-[58px] mb-7 text-[#333] font-light'>Our Values</h2>
        {/**each article will be a component */}
         {/**each section will be a component */}
        <div className='grid grid-cols-2 gap-10'>
            <article className='border-4 border-dotted border-skk-600 w-full h-[300px] relative mb-64'>
                <div className='border border-double border-teal-300 w-4/5 h-[240px] absolute left-[10%] top-[60%]'></div>
            </article>
            <article className='border-4 border-dotted border-skk-600 w-full h-[300px]'></article>
            <article className='border-4 border-dotted border-skk-600 w-full h-[300px]'></article>
            <article className='border-4 border-dotted border-skk-600 w-full h-[300px]'></article>
        </div>
        </section>
    </div>
  )
}

export default About