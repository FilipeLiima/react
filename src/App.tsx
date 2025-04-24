import { Card } from "@/components/ui/card";
import { Section } from "./components/ui/section";
import { Contato } from "./components/ui/contato";
import Home from "./assets/home.svg";

export function App() {
  return (
    <div id="app" className="relative min-h-screen font-Inter bg-black">
      {/* NAVBAR */}
      <div className="absolute top-0 right-0 m-5 flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left z-10">
        <a href="/" className="text-base sm:text-xl text-gray-400 hover:text-white">
          Home
        </a>
        <a href="#projetos" className="text-base sm:text-xl text-gray-400 hover:text-white">
          Projetos
        </a>
        <a href="#contato" className="text-base sm:text-xl text-gray-400 hover:text-white">
          Contato
        </a>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* TEXTO À ESQUERDA */}
        <div className="flex flex-col justify-center items-center p-6">
          <Card className="bg-black p-4 sm:p-6 w-full max-w-md border-none relative">
            <div className="text-center space-y-3">
              <h2 className="text-gray-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Hey, eu sou Filipe 👋
              </h2>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white leading-none">
                Developer
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white leading-none">
                Engineer
              </h1>
            </div>
          </Card>
        </div>

        {/* IMAGEM À DIREITA */}
        <div className="flex justify-center items-center p-4">
          <img
            src={Home}
            alt="Imagem ilustrativa"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg"
          />
        </div>
      </div>

      {/* OUTRAS SEÇÕES */}
      <Section />
      <Contato />
    </div>
  );
}
