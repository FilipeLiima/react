import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center px-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full items-center">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 order-2 md:order-1"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] tracking-[0.2em] font-headline uppercase mb-6"
          >
            portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-headline text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-8 uppercase"
          >
            Developer<br/>Engineer
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex justify-center items-center order-1 md:order-2"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <motion.img 
            alt="Filipe Lima Hero Asset" 
            className="w-full h-auto max-w-5xl object-contain brightness-110 relative z-10" 
            src="/assets/hero_v7.jpg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
