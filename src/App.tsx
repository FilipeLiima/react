import Hero from './components/sections/Hero';
import TechMarquee from './components/sections/TechMarquee';
import Expertise from './components/sections/Expertise';
import ProjectCarousel from './components/sections/ProjectCarousel';
import ContactForm from './components/sections/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-on-surface font-body selection:bg-primary selection:text-on-primary">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#121212]/40 backdrop-blur-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-full bg-gradient-to-b from-[#3a3939]/10 to-transparent">
          <div className="flex items-center">
            <img src="/assets/logo_fl.png" alt="FL Logo" className="w-8 h-8 mr-3 object-contain" />
            <div className="font-headline text-xl font-bold tracking-tighter text-white uppercase">FILIPE LIMA</div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="font-headline tracking-tight text-sm uppercase text-[#bae6ff] border-b-2 border-[#66d9ff] pb-1 hover:text-[#bae6ff] transition-colors duration-300" href="#">Home</a>
            <a className="font-headline tracking-tight text-sm uppercase text-white/60 hover:text-[#bae6ff] transition-colors duration-300" href="#skills">Skills</a>
            <a className="font-headline tracking-tight text-sm uppercase text-white/60 hover:text-[#bae6ff] transition-colors duration-300" href="#projects">Projetos</a>
            <a className="font-headline tracking-tight text-sm uppercase text-white/60 hover:text-[#bae6ff] transition-colors duration-300" href="#contact">Contato</a>
          </div>
          <div className="w-20 hidden md:block"></div>
        </div>
      </nav>

      <main className="pt-24 overflow-x-hidden">
        <Hero />
        <TechMarquee />
        <Expertise />
        <ProjectCarousel />
        <ContactForm />
      </main>

      <footer className="w-full py-12 px-8 bg-[#080808] border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
          <div className="font-body text-[0.875rem] font-light text-white/40 tracking-widest uppercase">
            © 2026 FILIPE LIMA. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
