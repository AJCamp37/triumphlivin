import logo from '/src/assets/logo.png';
interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={logo}
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`font-medium transition-colors cursor-pointer ${scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-800 hover:text-blue-600'}`}>
              Home
            </button>
            <button onClick={() => scrollToSection('programs')} className={`font-medium transition-colors cursor-pointer ${scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-800 hover:text-blue-600'}`}>
              Programs
            </button>
            <button onClick={() => scrollToSection('our-homes')} className={`font-medium transition-colors cursor-pointer ${scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-800 hover:text-blue-600'}`}>
              Our Homes
            </button>
            <button onClick={() => scrollToSection('about')} className={`font-medium transition-colors cursor-pointer ${scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-800 hover:text-blue-600'}`}>
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className={`font-medium transition-colors cursor-pointer ${scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-800 hover:text-blue-600'}`}>
              Contact
            </button>
          </div>

          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md whitespace-nowrap cursor-pointer"
          >
            Get Help
          </button>
        </div>
      </div>
    </nav>
  );
}