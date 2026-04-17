import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto border-t border-white/5" id="contact">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/3"
        >
          <h2 className="font-headline text-sm tracking-[0.4em] uppercase text-primary mb-4">CONTATO</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8 uppercase">VAMOS CONVERSAR?</h3>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs uppercase tracking-widest text-[10px]">
            Disponível para novos projetos e colaborações. Fique à vontade para entrar em contato através do formulário ou redes sociais.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-2/3 w-full"
        >
          <form action="https://formsubmit.co/f.lima182@icloud.com" method="POST" className="space-y-6">
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-headline text-[10px] uppercase tracking-widest text-white/60">Nome</label>
                <input name="name" required className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Seu nome completo" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-headline text-[10px] uppercase tracking-widest text-white/60">E-mail</label>
                <input name="email" required className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="contato@exemplo.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-headline text-[10px] uppercase tracking-widest text-white/60">Mensagem</label>
              <textarea name="message" required className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Descreva seu projeto ou ideia..." rows={4}></textarea>
            </div>
            <button className="w-full bg-primary-container text-black font-bold py-4 font-headline text-xs tracking-widest uppercase rounded-full hover:bg-primary-container/90 transition-all shadow-[0_10px_30px_rgba(102,217,255,0.3)]" type="submit">
              Enviar Mensagem
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-white/5 flex justify-center gap-10">
            {/* LinkedIn Icon SVG */}
            <a href="https://www.linkedin.com/in/filipesantanaa/" target="_blank" rel="noreferrer" className="group">
              <svg className="w-8 h-8 fill-white/20 group-hover:fill-primary transition-colors duration-300" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            {/* GitHub Icon SVG */}
            <a href="https://github.com/filipeliima" target="_blank" rel="noreferrer" className="group">
              <svg className="w-8 h-8 fill-white/20 group-hover:fill-primary transition-colors duration-300" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            {/* Discord/Generic Link Symbol (Material Symbols ok here) */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
