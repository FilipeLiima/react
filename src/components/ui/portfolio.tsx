import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  ShieldAlert,
  ChevronsRight,
  Code,
  Sigma,
  CircleDollarSign,
  Bitcoin,
  Cable,
  DraftingCompass,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const content = [
    // HYDRO V1
    <Card className="p-4 bg-black text-white border-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold">DESCRIÇÃO</h4>
          <p className="text-gray-400 mb-2">
            HYDRO V1 é um aplicativo de dimensionamento voltado para projetos de engenharia.
          </p>
          <h4 className="text-lg font-semibold">FUNCIONALIDADES</h4>
          <p className="text-gray-400 mb-2">
            Calcula diâmetros de tubos, vazão e capacidade de caixas d'água, com futura integração de IA.
          </p>
          <h4 className="text-lg font-semibold">TECNOLOGIAS</h4>
          <div className="flex items-center text-gray-400 mb-2">
            <Code className="w-5 h-5 mr-2" />
            <span>REACT - TYPESCRIPT - TAILWINDCSS - PYTHON - REDES NEURAIS</span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold sm:ml-8">HYDRO V1</h4>
          <div className="flex flex-col sm:flex-row sm:items-start sm:ml-8 sm:space-x-4">
            <p className="text-gray-400 mb-2">
              App de dimensionamento para projetos hidrossanitários
            </p>
            <DraftingCompass className="text-white w-40 h-40 sm:w-60 sm:h-60" />
          </div>
          <a href="https://github.com/FilipeLiima/hydro_v1" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-purple-400 text-black font-bold px-4 py-2 rounded sm:ml-8 flex items-center space-x-2">
              <span>Mais informações</span>
              <ChevronsRight className="h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </Card>,

    // CRYPTO HOME
    <Card className="p-4 bg-black text-white border-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold">DESCRIÇÃO</h4>
          <p className="text-gray-400 mb-2">App descentralizado de aluguel de imóveis via Web3.</p>
          <h4 className="text-lg font-semibold">FUNCIONALIDADES</h4>
          <p className="text-gray-400 mb-2">
            Elimina intermediários com contratos inteligentes. Seguro e transparente.
          </p>
          <h4 className="text-lg font-semibold">TECNOLOGIAS</h4>
          <div className="flex items-center text-gray-400 mb-2">
            <Code className="w-5 h-5 mr-2" />
            <span>REACT - TYPESCRIPT - TAILWINDCSS - SOLIDITY</span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold sm:ml-8">CRYPTO HOME</h4>
          <div className="flex flex-col sm:flex-row sm:items-start sm:ml-8 sm:space-x-4">
            <p className="text-gray-400 mb-2">App de alugueis de imóveis de forma descentralizada</p>
            <Bitcoin className="text-white w-40 h-40 sm:w-60 sm:h-60" />
          </div>
          <a href="https://github.com/FilipeLiima/auth" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-purple-400 text-black font-bold px-4 py-2 rounded sm:ml-8 flex items-center space-x-2">
              <span>Mais informações</span>
              <ChevronsRight className="h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </Card>,

    // SMARTBETS
    <Card className="p-4 bg-black text-white border-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold">DESCRIÇÃO</h4>
          <p className="text-gray-400 mb-2">App descentralizado de apostas esportivas na Web3.</p>
          <h4 className="text-lg font-semibold">FUNCIONALIDADES</h4>
          <p className="text-gray-400 mb-2">
            Permite apostas peer-to-peer com contratos inteligentes. Transparente e sem intermediários.
          </p>
          <h4 className="text-lg font-semibold">TECNOLOGIAS</h4>
          <div className="flex items-center text-gray-400 mb-2">
            <Code className="w-5 h-5 mr-2" />
            <span>REACT - TYPESCRIPT - SOLIDITY - API - CHAINLINK</span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold sm:ml-8">SMARTBETS</h4>
          <div className="flex flex-col sm:flex-row sm:items-start sm:ml-8 sm:space-x-4">
            <p className="text-gray-400 mb-2">App descentralizado de apostas esportivas</p>
            <CircleDollarSign className="text-white w-40 h-40 sm:w-60 sm:h-60" />
          </div>
          <a href="https://github.com/FilipeLiima/smartbets" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-purple-400 text-black font-bold px-4 py-2 rounded sm:ml-8 flex items-center space-x-2">
              <span>Mais informações</span>
              <ChevronsRight className="h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </Card>,

    // TESLA SUPERCHARGER
    <Card className="p-4 bg-black text-white border-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold">DESCRIÇÃO</h4>
          <p className="text-gray-400 mb-2">Localizador de estações de carregamento Tesla pelo mundo.</p>
          <h4 className="text-lg font-semibold">FUNCIONALIDADES</h4>
          <p className="text-gray-400 mb-2">
            Interface intuitiva, status de estações e planejamento de rotas com energia garantida.
          </p>
          <h4 className="text-lg font-semibold">TECNOLOGIAS</h4>
          <div className="flex items-center text-gray-400 mb-2">
            <Code className="w-5 h-5 mr-2" />
            <span>PYTHON - DASH - PLOTLY - MAPBOX API</span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold sm:ml-8">TESLA SUPERCHARGER</h4>
          <div className="flex flex-col sm:flex-row sm:items-start sm:ml-8 sm:space-x-4">
            <p className="text-gray-400 mb-2">Identificação de carregadores Tesla</p>
            <Cable className="text-white w-40 h-40 sm:w-60 sm:h-60" />
          </div>
          <a href="https://github.com/FilipeLiima/tesla" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-purple-400 text-black font-bold px-4 py-2 rounded sm:ml-8 flex items-center space-x-2">
              <span>Mais informações</span>
              <ChevronsRight className="h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </Card>,

    // ENGINEER WORKS
    <Card className="p-4 bg-black text-white border-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold">DESCRIÇÃO</h4>
          <p className="text-gray-400 mb-2">Portfólio de projetos multidisciplinares em engenharia.</p>
          <h4 className="text-lg font-semibold">FUNCIONALIDADES</h4>
          <p className="text-gray-400 mb-2">
            Modelagem em arquitetura, instalações e estruturas com destaque às melhores práticas.
          </p>
          <h4 className="text-lg font-semibold">TECNOLOGIAS</h4>
          <div className="flex items-center text-gray-400 mb-2">
            <Code className="w-5 h-5 mr-2" />
            <span>AUTODESK REVIT</span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold sm:ml-8">ENGINEER WORKS</h4>
          <div className="flex flex-col sm:flex-row sm:items-start sm:ml-8 sm:space-x-4">
            <p className="text-gray-400 mb-2">Portfólio de modelagem de engenharia</p>
            <Sigma className="text-white w-40 h-40 sm:w-60 sm:h-60" />
          </div>
          <Link to="/engineer">
            <button className="mt-4 bg-purple-400 text-black font-bold px-4 py-2 rounded sm:ml-8 flex items-center space-x-2">
              <span>Mais informações</span>
              <ChevronsRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </Card>,
  ];

  return (
    <div
      id="projetos"
      className="bg-black flex flex-col items-center text-start mb-8 mt-8 max-w-[1400px] font-Inter"
    >
      <h1 className="text-xl text-gray-400 mb-4 flex items-center">
        <span className="flex-grow">PROJETOS E FUNCIONALIDADES</span>
        <ShieldAlert size={28} className="ml-2" />
      </h1>

      <h2 className="text-white text-4xl mb-4 text-center font-bold">
        Descubra como nossos projetos <br />
        abordam desafios do mundo real em diferentes cenários
      </h2>

      <p className="text-gray-400 mb-8 text-lg">Confira algumas das soluções criadas</p>

      <div className="mb-4">
        <div className="flex flex-wrap justify-center gap-4">
          {["HYDRO V1", "CRYPTO HOME", "SMARTBETS", "TESLA SUPERCHARGER", "ENGINEER WORKS"].map(
            (label, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 ${
                  activeTab === idx ? "text-white" : "text-gray-400 hover:text-white"
                } rounded bg-transparent`}
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>

      <div className="content text-white text-lg">{content[activeTab]}</div>
    </div>
  );
}
