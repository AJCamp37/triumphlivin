import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import hero from '/src/assets/hero.jpg'

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
      
      <Navigation scrolled={scrolled} />

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-4xl font-extrabold text-blue-600 tracking-wide uppercase">Triumph Independent Living Homes</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-slate-800">Empowering Independence</span>
                <br />
                <span className="text-slate-800">For Every Resident</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Triumph offers independent living homes designed specifically to provide stability, respect, and tailored resources for seniors, veterans, those committed to sobriety, and individuals transitioning back into society. Our program supports your journey to empowered, independent living.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              >
                Apply Now
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all whitespace-nowrap cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={hero}
                alt="Welcoming home exterior"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}