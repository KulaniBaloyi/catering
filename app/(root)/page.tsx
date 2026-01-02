import LandingPage from "@/components/LandingPage";
import MissionStatement from "@/components/MissionStatement";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfaf7]">
      
      
      {/* Intro Section - Editorial Style */}
      <section className="py-24 lg:py-40 px-[5%]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Decorative Divider */}
          <div className="flex items-center gap-4 justify-center mb-10">
            <span className="h-[1px] w-12 bg-[#AA8E65]/30" />
            <span className="h-2 w-2 rounded-full border border-[#AA8E65]" />
            <span className="h-[1px] w-12 bg-[#AA8E65]/30" />
          </div>

          <h2 className="text-3xl lg:text-5xl text-center font-serif leading-tight text-neutral-900 tracking-tight">
            The Gravy Train Express creates <span className="italic text-[#AA8E65]">memorable events</span> by customizing every menu and providing uncompromising attention to detail.
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <p className="text-sm lg:text-base text-neutral-600 leading-relaxed font-light first-letter:text-4xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-[#AA8E65]">
              We believe that a personal attention to detail is the foundation for creating a great event experience. From concept to preparation. From catering to presentation. From service to clean-up. We are dedicated to delivering your kind of perfectly personal and professional event experience.
            </p>
            <p className="text-sm lg:text-base text-neutral-600 leading-relaxed font-light">
              Intimate San Francisco catered events, tasteful corporate celebrations, stylishly elegant weddings—we blend artisan-quality cuisine with first-class professionalism. Our effort makes entertaining <span className="font-semibold text-neutral-900">effortless</span>.
            </p>
          </div>
        </div>
      </section>

      <MissionStatement />
    </main>
  );
}