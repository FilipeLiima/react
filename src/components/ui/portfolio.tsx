import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";
import { ChevronsRight } from "lucide-react";
import { Code } from "lucide-react";
import { Sigma } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { Bitcoin } from "lucide-react";
import { Cable } from "lucide-react";
import { DraftingCompass } from "lucide-react";
import { Link } from "react-router-dom";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const content = [
    <Card className="p-4 bg-black text-white border-none">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold">DESCRIÇÃO</h4>
          <p className="text-gray-400 mb-2">
            HYDRO V1 é um aplicativo de dimensionamento voltado para projetos de
            engenharia.
          </p>
          <h4 className="text-lg font-semibold">FUNCIONALIDADES</h4>
          <p className="text-gray-400 mb-2">
            O HYDRO V1 é um aplicativo de dimensionamento para engenharia,
            projetado para calcular diâmetros de tubos de água fria, água quente
            e esgoto. Ele facilita a determinação da vazão de sistemas
            hidráulicos e a capacidade de carga de caixas d'água. Com uma
            interface amigável, o aplicativo também prevê a integração futura
            com redes neurais, permitindo análises preditivas e otimizações,
            tornando-se uma ferramenta essencial para engenheiros que buscam
            eficiência em seus projetos hidráulicos.
          </p>
          <h4 className="text-lg font-semibold">TECNOLOGIAS</h4>
          <div className="flex items-center text-gray-400 mb-2">
            <Code className="w-5 h-5 mr-2" />
            <span>
              REACT - TYPESCRIPT - TAILWINDCSS - PYTHON - REDES NEURAIS
            </span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold ml-8">HYDRO V1</h4>
          <div className="flex items-start ml-8 space-x-4">
            <p className="text-gray-400">
              App de dimensionamento para projetos hidrossanitários
            </p>
            <DraftingCompass className="w-60 h-60 text-white" />
          </div>

          <a
            href="https://github.com/FilipeLiima/hydro_v1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 bg-purple-400 text-black font-bold px-4 py-2 rounded ml-8 flex items-center space-x-2">
              <span>Mais informações</span>
              <ChevronsRight className="h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </Card>,
    <Card className="p-4 bg-black text-white border-none">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold">DESCRIÇÃO</h4>
          <p className="text-gray-400 mb-2">
            CRYPTO HOME é um aplicativo descentralizado de alugueis de imóveis
            utilizando a web 3
          </p>
          <h4 className="text-lg font-semibold">FUNCIONALIDADES</h4>
          <p className="text-gray-400 mb-2">
            CRYPTO HOME é um aplicativo inovador de aluguel de imóveis que
            utiliza a tecnologia Web 3. Com uma abordagem descentralizada, ele
            permite que proprietários e inquilinos se conectem diretamente,
            eliminando intermediários e reduzindo custos. A plataforma oferece
            segurança e transparência nas transações, aproveitando contratos
            inteligentes para garantir a conformidade e a confiança entre as
            partes. CRYPTO HOME facilita a busca e a gestão de imóveis,
            proporcionando uma experiência ágil e moderna.
          </p>
          <h4 className="text-lg font-semibold">TECNOLOGIAS</h4>
          <div className="flex items-center text-gray-400 mb-2">
            <Code className="w-5 h-5 mr-2" />
            <span>REACT - TYPESCRIPT - TAILWINDCSS - SOLIDITY</span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold ml-8">CRYPTO HOME</h4>
          <div className="flex items-start ml-8 space-x-4">
            <p className="text-gray-400">
              App de alugueis de imóveis de forma descentralizada
            </p>
            <Bitcoin className="w-60 h-60 text-white" />
          </div>
          <a
            href="https://github.com/FilipeLiima/auth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 bg-purple-400 text-black font-bold px-4 py-2 rounded ml-8 flex items-center space-x-2">
              <span>Mais informações</span>
              <ChevronsRight className="h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </Card>,
    <Card className="p-4 bg-black text-white border-none">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold">DESCRIÇÃO</h4>
          <p className="text-gray-400 mb-2">
            SMARTBETS é um aplicativo descentralizado voltado para apostas
            esportivas na web 3.
          </p>
          <h4 className="text-lg font-semibold">FUNCIONALIDADES</h4>
          <p className="text-gray-400 mb-2">
            SMARTBETS é um aplicativo descentralizado projetado para apostas
            esportivas. Ele oferece uma plataforma segura e transparente,
            permitindo que os usuários façam apostas diretamente entre si, sem
            intermediários. Com recursos avançados, a SMARTBETS proporciona uma
            experiência de apostas ágil e interativa, garantindo a integridade
            das transações por meio de contratos inteligentes. Este aplicativo é
            ideal para entusiastas de esportes que buscam uma nova forma de se
            envolver em apostas com confiança e autonomia.
          </p>
          <h4 className="text-lg font-semibold">TECNOLOGIAS</h4>
          <div className="flex items-center text-gray-400 mb-2">
            <Code className="w-5 h-5 mr-2" />
            <span>
              REACT - TYPESCRIPT - SOLIDITY - API - CHAINLINK PROTOCOLS
            </span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold ml-8">SMARTBETS</h4>
          <div className="flex items-start ml-8 space-x-4">
            <p className="text-gray-400">
              App descentralizado de apostas esportivas na WEB 3
            </p>
            <CircleDollarSign className="w-60 h-60 text-white" />
          </div>

          <a
            href="https://github.com/FilipeLiima/smartbets"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 bg-purple-400 text-black font-bold px-4 py-2 rounded ml-8 flex items-center space-x-2">
              <span>Mais informações</span>
              <ChevronsRight className="h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </Card>,
    <Card className="p-4 bg-black text-white border-none">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold">DESCRIÇÃO</h4>
          <p className="text-gray-400 mb-2">
            TESLA SUPERCHARGER é um aplicativo voltado para identificação de
            super carregadores Tesla ao redor do mundo.
          </p>
          <h4 className="text-lg font-semibold">FUNCIONALIDADES</h4>
          <p className="text-gray-400 mb-2">
            TESLA SUPERCHARGER é um aplicativo dedicado à identificação de
            supercarregadores Tesla ao redor do mundo. Com uma interface
            intuitiva, o aplicativo permite que os usuários localizem facilmente
            estações de carregamento rápidas e convenientes, otimizando suas
            viagens e garantindo que nunca fiquem sem energia. O APP fornece
            informações sobre a disponibilidade e o status das estações,
            facilitando o planejamento de rotas para motoristas de veículos
            elétricos.
          </p>
          <h4 className="text-lg font-semibold">TECNOLOGIAS</h4>
          <div className="flex items-center text-gray-400 mb-2">
            <Code className="w-5 h-5 mr-2" />
            <span> PYTHON - DASH - PLOTLY - MAPBOX API</span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold ml-8">TESLA SUPERCHARGER</h4>
          <div className="flex items-start ml-8 space-x-4">
            <p className="text-gray-400">
              App de identificação de carregadores SUPERCHARGE TESLA
            </p>
            <Cable className="w-60 h-60 text-white" />
          </div>
          <a
            href="https://github.com/FilipeLiima/tesla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 bg-purple-400 text-black font-bold px-4 py-2 rounded ml-8 flex items-center space-x-2">
              <span>Mais informações</span>
              <ChevronsRight className="h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </Card>,
    <Card className="p-4 bg-black text-white border-none">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold">DESCRIÇÃO</h4>
          <p className="text-gray-400 mb-2">
            ENGINEER WORKS é um portfólio de projetos de engenharia que abrange
            diversas disciplinas.
          </p>
          <h4 className="text-lg font-semibold">FUNCIONALIDADES</h4>
          <p className="text-gray-400 mb-2">
            ENGINEER WORKS é um portfólio que abrange a modelagem de projetos de
            engenharia nas disciplinas de arquitetura, instalações
            hidrossanitárias e estruturais. Com uma apresentação clara e
            organizada, o portfólio permite que profissionais e interessados
            explorem uma variedade de soluções desenvolvidas para atender a
            desafios específicos em cada área. Desde a concepção até a
            implementação, o ENGINEER WORKS destaca as melhores práticas e as
            mais recentes tecnologias utilizadas em projetos.
          </p>
          <h4 className="text-lg font-semibold">TECNOLOGIAS</h4>
          <div className="flex items-center text-gray-400 mb-2">
            <Code className="w-5 h-5 mr-2" />
            <span>AUTODESK REVIT</span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold ml-8">ENGINEER WORKS</h4>
          <div className="flex items-start ml-8 space-x-4">
            <p className="text-gray-400">
              Portfólio de modelagem de projetos de engenharia
            </p>
            <Sigma className="w-60 h-60 text-white" />
          </div>
          <Link to="/engineer">
            <button className="mt-4 bg-purple-400 text-black font-bold px-4 py-2 rounded ml-8 flex items-center space-x-2">
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

      <p className="text-gray-400 mb-8 text-lg">
        Confira algumas das soluções criadas
      </p>

      <div className="mb-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab(0)}
            className={`px-4 py-2 ${
              activeTab === 0 ? "text-white" : "text-gray-400 hover:text-white"
            } rounded bg-transparent`}
          >
            HYDRO V1
          </button>
          <button
            onClick={() => setActiveTab(4)}
            className={`px-4 py-2 ${
              activeTab === 4 ? "text-white" : "text-gray-400 hover:text-white"
            } rounded bg-transparent`}
          >
            ENGINEER WORKS
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`px-4 py-2 ${
              activeTab === 1 ? "text-white" : "text-gray-400 hover:text-white"
            } rounded bg-transparent`}
          >
            CRYPTO HOME
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`px-4 py-2 ${
              activeTab === 2 ? "text-white" : "text-gray-400 hover:text-white"
            } rounded bg-transparent`}
          >
            SMARTBETS
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className={`px-4 py-2 ${
              activeTab === 3 ? "text-white" : "text-gray-400 hover:text-white"
            } rounded bg-transparent`}
          >
            TESLA SUPERCHARGER
          </button>
        </div>
      </div>

      <div className="content text-white text-lg">{content[activeTab]}</div>
    </div>
  );
}
