import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Section 1: Events */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] tracking-[5px] mb-10 uppercase font-bold text-[#AA8E65]">Events</h3>
            <ul className="flex flex-col space-y-5 text-[13px] lg:text-[14px] font-light tracking-wide text-neutral-400">
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/private-events">Private Events</Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/weddings">Weddings</Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/corporate">Corporate</Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </div>

          {/* Section 2: Company */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] tracking-[5px] mb-10 uppercase font-bold text-[#AA8E65]">Our Company</h3>
            <ul className="flex flex-col space-y-5 text-[13px] lg:text-[14px] font-light tracking-wide text-neutral-400">
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/about">About Our Story</Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/services">Bespoke Services</Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/employment">Join The Team</Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/accessibility">Accessibility</Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact/CTA */}
          <div className="md:col-span-6 flex flex-col items-start lg:items-end lg:text-right">
            <h3 className="text-[11px] tracking-[5px] mb-10 uppercase font-bold text-[#AA8E65]">Get In Touch</h3>
            <p className="font-light text-base lg:text-lg leading-relaxed text-neutral-300 max-w-md">
              We look forward to planning your next artisan experience. 
              Reach us at <span className="text-white border-b border-[#AA8E65] pb-1 cursor-pointer">415.860.0798</span>
            </p>
            <Link 
              className="mt-10 border-2 border-[#AA8E65] text-[#AA8E65] py-4 px-10 tracking-[4px] uppercase text-[10px] font-bold hover:bg-[#AA8E65] hover:text-white transition-all duration-500" 
              href="/contact"
            >
              Start a Conversation
            </Link>
          </div>
        </section>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] tracking-[2px] uppercase text-neutral-500 text-center md:text-left">
            <p>&copy; 2026 The Gravy Train &bull; 1760 Mswapeni Suite K Johannesburg</p>
          </div>
          
          <div className="text-[10px] tracking-[2px] uppercase text-neutral-500">
            Design by <span className="text-white hover:text-[#AA8E65] cursor-pointer transition-colors">Kulani Baloyi</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer