import LandingPage from "@/components/LandingPage";
import MissionStatement from "@/components/MissionStatement";
import PrivateEvent from "@/components/PrivateEvent";

export default function Home() {
  return (
    <main className="w-[90%] lg:w-4/5 mx-auto">
      <h1 className="mt-10 lg:mt-20  text-2xl w-full lg:max-w-2xl mx-auto lg:text-4xl leading-[54px] mb-7 text-[#333] font-light">The Gravy Train Express creates memorable events by customizing every menu and providing uncompromising attention to detail.</h1>
      <p className='mb-7 w-full lg:max-w-2xl mx-auto text-[#656769] leading-relaxed text-xs sm:text-sm md:text-base  lg:text-lg font-light'>We believe that a personal attention to detail is the foundation for creating a great event experience. From concept to preparation. From catering to presentation. From service to clean-up. We are dedicated to delivering your kind of perfectly personal and professional event experience. Intimate San Francisco catered events, tasteful corporate celebrations, stylishly elegant weddings—we blend artisan-quality cuisine with first-class professionalism. Our effort makes entertaining effortless.</p>
    </main>
  );
}
