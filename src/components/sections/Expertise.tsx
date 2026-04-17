import { motion } from 'framer-motion';

const expertiseItems = [
  {
    icon: "globe",
    tag: "Innovation",
    title: "Tecnologia e Inovação",
    description: "Criação de aplicativos acessíveis envolve linguagens de marcação e estilização, integração de APIs e programação de interfaces responsivas, utilizando frameworks modernos para otimizar o desenvolvimento."
  },
  {
    icon: "category",
    tag: "Web3",
    title: "Descentralização Digital",
    description: "Envolve a criação de Smart Contracts, Dapps e NFTs imutáveis e descentralizados, utilizando blockchain para garantir transações seguras e transparentes, revolucionando modelos de negócios."
  },
  {
    icon: "database",
    tag: "AI / ML",
    title: "Redes Neurais",
    description: "Abrange o desenvolvimento de sistemas com redes neurais artificiais e algoritmos de processamento de linguagem natural, projetados para imitar a inteligência humana e resolver problemas complexos."
  },
  {
    icon: "terminal",
    tag: "Civil Eng",
    title: "Construção Inteligente",
    description: "Envolve modelos integrados que representam todos os aspectos de uma construção, utilizando modelos paramétricos e dados de materiais para criar uma representação virtual detalhada e colaborativa do projeto."
  }
];

const Expertise: React.FC = () => {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto" id="skills">
      <div className="mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-headline text-sm tracking-[0.4em] uppercase text-primary mb-4"
        >
          SKILLS
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-4xl md:text-5xl font-bold text-white uppercase"
        >
          ÁREAS DE ATUAÇÃO
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 p-px">
        {expertiseItems.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#080808] p-10 hover:bg-[#121212] transition-colors group relative"
          >
            <div className="mb-12 relative w-16 h-16">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {/* Added animate-pulse for "Motion" */}
              <span className="material-symbols-outlined text-5xl text-primary animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
                {item.icon}
              </span>
            </div>
            <div className="inline-block px-2 py-0.5 bg-surface-variant text-[10px] font-headline text-on-surface-variant tracking-widest uppercase mb-4">
              {item.tag}
            </div>
            <h4 className="font-headline text-xl text-white mb-4 uppercase tracking-tighter">{item.title}</h4>
            <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
