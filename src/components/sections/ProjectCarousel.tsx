import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react';

const projects = [
  {
    id: 0,
    title: "Tesla Supercharger",
    description: "Localizador de estações de carregamento Tesla pelo mundo.",
    features: "Interface intuitiva, status de estações e planejamento de rotas com energia garantida.",
    techs: "Python - Dash - Plotly - Mapbox API",
    link: "https://github.com/FilipeLiima/tesla",
    icons: ["charging_station", "bolt", "ev_station", "battery_full"],
    type: "icons"
  },
  {
    id: 1,
    title: "Crypto Home",
    description: "App descentralizado de aluguel de imóveis via Web3.",
    features: "Elimina intermediários com contratos inteligentes. Seguro e transparente.",
    techs: "REACT - TYPESCRIPT - TAILWINDCSS - SOLIDITY",
    link: "https://github.com/FilipeLiima/auth",
    icons: ["lock", "key", "house", "check_circle"],
    type: "icons"
  },
  {
    id: 2,
    title: "Smartbets",
    description: "App descentralizado de apostas esportivas na Web3.",
    features: "Permite apostas peer-to-peer com contratos inteligentes. Transparente e sem intermediários.",
    techs: "REACT - TYPESCRIPT - SOLIDITY - API - CHAINLINK",
    link: "https://github.com/FilipeLiima/smartbets",
    icons: ["sports_soccer", "casino", "token", "account_balance_wallet"],
    type: "icons"
  },
  {
    id: 3,
    title: "Hydro v1",
    description: "HYDRO V1 é um aplicativo de dimensionamento voltado para projetos de engenharia.",
    features: "Calcula diâmetros de tubos, vazão e capacidade de caixas d'água, com futura integração de IA.",
    techs: "REACT - TYPESCRIPT - TAILWINDCSS - PYTHON - REDES NEURAIS",
    link: "#",
    icons: ["edit_square", "functions", "water_drop", "analytics"],
    type: "icons",
    soon: true
  },
  {
    id: 4,
    title: "Projetos de Engenharia",
    description: "Portfólio de projetos multidisciplinares em engenharia.",
    features: "Modelagem em arquitetura, instalações e estruturas com destaque às melhores práticas.",
    techs: "AUTODESK REVIT",
    link: "/assets/engineer_portfolio.jpg",
    icons: ["edit_note", "view_in_ar", "architecture", "apartment"],
    type: "lightbox" // Special type for Modal Zoom
  }
];

const ProjectCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  const handleAction = (e: React.MouseEvent) => {
    if (projects[current].type === 'lightbox') {
      e.preventDefault();
      setIsLightboxOpen(true);
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden min-h-screen" style={{ backgroundImage: "url('/assets/background_aurora.png')", backgroundPosition: "center 80%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline text-sm tracking-[0.4em] uppercase text-primary mb-4">PROJETOS</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold text-white uppercase">PROJETOS E FUNCIONALIDADES</h3>
          <p className="text-white/60 text-sm mt-4 max-w-2xl mx-auto uppercase tracking-[0.1em]">Descubra como nossos projetos abordam desafios do mundo real em diferentes cenários. Confira algumas das soluções criadas.</p>
        </div>

        <div className="obsidian-glass rounded-[40px] overflow-hidden min-h-[600px] flex flex-col md:flex-row shadow-2xl">
          {/* Left Side: Display */}
          <div className="w-full md:w-[65%] p-8 md:p-12 flex flex-col relative border-b md:border-b-0 md:border-r border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col h-full"
              >
                <div className="mb-auto">
                  <h4 className="font-headline text-3xl font-bold text-white mb-6 uppercase tracking-tighter">{projects[current].title}</h4>
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-headline uppercase text-primary tracking-widest block mb-1">Descrição</span>
                      <p className="text-white/80 text-sm leading-relaxed">{projects[current].description}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-headline uppercase text-primary tracking-widest block mb-1">Funcionalidades</span>
                      <p className="text-white/80 text-sm leading-relaxed">{projects[current].features}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-headline uppercase text-primary tracking-widest block mb-1">Tecnologias</span>
                      <p className="text-white/40 text-[11px] font-medium tracking-[0.2em] font-headline uppercase">{projects[current].techs}</p>
                    </div>
                  </div>
                </div>

                {/* Motion Area: Real Motion with animate-charge */}
                <div className="mt-8 flex gap-4 justify-center items-center h-56 w-full overflow-hidden">
                    <div className="flex gap-4">
                      {projects[current].icons?.map((icon, idx) => (
                        <div 
                          key={idx} 
                          className={`w-24 h-32 rounded-3xl border border-primary-container/50 flex items-center justify-center animate-charge 
                            ${idx === 0 ? 'bg-primary-container/20' : ''} 
                            ${idx === 1 ? 'bg-primary-container/40' : ''} 
                            ${idx === 2 ? 'bg-primary-container/60' : ''} 
                            ${idx === 3 ? 'bg-primary-container shadow-[0_0_30px_rgba(102,217,255,0.3)]' : ''}`}
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                          <span className={`material-symbols-outlined text-4xl ${idx === (projects[current].icons?.length || 0) - 1 ? 'text-black' : 'text-primary-container'}`}>{icon}</span>
                        </div>
                      ))}
                    </div>
                </div>

                <div className="mt-auto pt-8">
                  <a 
                    href={projects[current].link} 
                    target="_blank" 
                    rel="noreferrer" 
                    onClick={handleAction}
                    className={`w-fit font-bold px-8 py-3 font-headline text-[10px] tracking-[0.2em] uppercase rounded-full transition-all flex items-center gap-2 group/btn ${projects[current].soon ? 'bg-primary-container/20 text-white/40 cursor-not-allowed' : 'bg-primary-container text-black hover:bg-primary-container/90 shadow-[0_5px_15px_rgba(102,217,255,0.2)]'}`}
                  >
                    {projects[current].soon ? 'Em breve' : 'Ver Projeto Online'}
                    {!projects[current].soon && <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-10 flex gap-4 pt-10 border-t border-white/5">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all text-white">
                <ArrowLeft size={20} />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all text-white">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Side: Navigation */}
          <div className="w-full md:w-[35%] bg-white/[0.03] p-8 md:p-12 flex flex-col">
            <span className="text-[10px] font-headline text-primary tracking-widest uppercase mb-10 block">Navegação de Projetos</span>
            <ul className="space-y-6 flex-grow">
              {projects.map((p, idx) => (
                <li key={p.id}>
                  <button 
                    onClick={() => setCurrent(idx)} 
                    className={`font-headline text-lg uppercase tracking-tighter w-full text-left transition-all ${current === idx ? 'text-primary border-b-2 border-primary-container pb-1' : 'text-white/40 hover:text-white'}`}
                  >
                    0{idx + 1}. {p.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center overflow-y-auto"
          >
            <div className="sticky top-0 w-full p-8 flex justify-end z-20">
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all text-white"
              >
                <X size={24} />
              </button>
            </div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl w-full px-4 pb-20 mt-[-40px]"
            >
              <img 
                src="/assets/engineer_portfolio.jpg" 
                alt="Engineer Works Portfolio" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectCarousel;
