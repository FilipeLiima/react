import React from 'react';

const techs = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vite.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "tailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-hover.svg" },
  { name: "NEXT.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-plain.svg" },
  { name: "plotly", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-line.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

const TechMarquee: React.FC = () => {
  return (
    <section className="w-full py-12 bg-surface-container-lowest overflow-hidden border-y border-white/5 relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10"></div>
      
      <div className="flex whitespace-nowrap overflow-hidden">
        {/* Using CSS animate-marquee for maximum smoothness (Motion) */}
        <div className="flex items-center gap-24 px-12 animate-marquee">
          {techs.map((tech, i) => (
            <div key={`loop1-${i}`} className="flex items-center gap-3">
              <img src={tech.icon} className="w-8 h-8 opacity-40 grayscale brightness-200" alt={tech.name} />
              <span className="font-headline text-3xl font-bold text-white tracking-widest opacity-80 uppercase">{tech.name}</span>
            </div>
          ))}
          {/* Duplicate for seamless effect */}
          {techs.map((tech, i) => (
            <div key={`loop2-${i}`} className="flex items-center gap-3">
              <img src={tech.icon} className="w-8 h-8 opacity-40 grayscale brightness-200" alt={tech.name} />
              <span className="font-headline text-3xl font-bold text-white tracking-widest opacity-80 uppercase">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
