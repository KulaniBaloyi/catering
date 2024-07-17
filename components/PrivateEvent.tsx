
import Link from "next/link"
const PrivateEvent = () => {
  return (
    <section className='  cont  mx-auto relative'>
    <div className="absolute -left-52 h-[512px] w-[440px] -top-16 z-10 border-4 border-dotted border-yellow-500" ></div>
    <div className="absolute left-16"></div>
    <h2 className='text-[#141819] text-4xl mb-7 font-light leading-[56px] max-w-4xl ml-16'>Private Events.</h2>
    <p className='text-[#656769] leading-relaxed text-lg font-light mb-14 max-w-4xl ml-16'>We believe that a personal attention to detail is the foundation for creating a great event experience. From concept to preparation. From catering to presentation. From service to clean-up. We are dedicated to delivering your kind of perfectly personal and professional event experience. Intimate San Francisco catered events, tasteful corporate celebrations, stylishly elegant weddings—we blend artisan-quality cuisine with first-class professionalism. Our effort makes entertaining effortless.</p>
    <Link className="text-[#AA8E65]  leading-tight tracking-[.2rem] text-sm uppercase ml-16" href="#">Learn More</Link>
   </section>
  )
}

export default PrivateEvent