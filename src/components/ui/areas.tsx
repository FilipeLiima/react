import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";
import { GalleryHorizontalEnd } from "lucide-react";
import { Brain } from "lucide-react";
import { DraftingCompass } from "lucide-react";

export function Areas() {
  return (
    <div className="bg-black border-none max-w-[1400px] mx-auto font-Inter">
      <p className="text-gray-400 text-center mt-8 mb-8 text-xl ">
        ÁREAS DE ATUAÇÃO
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black">
        <div className="col-span-1">
          <Card className="bg-black text-white flex flex-col p-6 border-none">
            <div className="col-span-1 flex justify-center items-center"></div>
            <h3 className="text-white text-lg mb-2 flex items-center justify-start gap-2">
              <Code2 className="w-6 h-6 text-white" />
              Programação
            </h3>
            <p className="text-white text-2xl font-medium mb-4 text-left">
              Tecnologia e Inovação
            </p>

            <p className="text-gray-400 text-lg text-left">
              Criação de aplicativos acessíveis envolve linguagens de marcação e
              estilização, integração de APIs e programação de interfaces
              responsivas, utilizando frameworks modernos para otimizar o
              desenvolvimento.
            </p>
          </Card>
        </div>

        <div className="col-span-1">
          <Card className="bg-black text-white flex flex-col p-6 border-none">
            <div className="col-span-1 flex justify-center items-center"></div>
            <h3 className="text-white text-lg mb-2 flex items-center justify-start gap-2">
              <GalleryHorizontalEnd className="w-6 h-6 text-white" />
              WEB 3
            </h3>
            <p className="text-white text-2xl font-medium mb-4 text-left">
              Descentralização Digital
            </p>

            <p className="text-gray-400 text-lg text-left">
              Envolve a criação de Smart Contracts, Dapps e NFTs imutáveis e
              descentralizados, utilizando blockchain para garantir transações
              seguras e transparentes, revolucionando modelos de negócios.
            </p>
          </Card>
        </div>

        <div className="col-span-1">
          <Card className="bg-black text-white flex flex-col p-6 border-none">
            <div className="col-span-1 flex justify-center items-center"></div>
            <h3 className="text-white text-lg mb-2 flex items-center justify-start gap-2">
              <Brain className="w-6 h-6 text-white" />
              Inteligência Artificial
            </h3>
            <p className="text-white text-2xl font-medium mb-4 text-left">
              Redes Neurais
            </p>

            <p className="text-gray-400 text-lg text-left">
              Abrange o desenvolvimento de sistemas com redes neurais
              artificiais e algoritmos de processamento de linguagem natural,
              projetados para imitar a inteligência humana e resolver problemas
              complexos.
            </p>
          </Card>
        </div>

        <div className="col-span-1">
          <Card className="bg-black text-white flex flex-col p-6 border-none">
            <div className="col-span-1 flex justify-center items-center"></div>
            <h3 className="text-white text-lg mb-2 flex items-center justify-start gap-2">
              <DraftingCompass className="w-6 h-6 text-white" />
              Engenharia
            </h3>
            <p className="text-white text-2xl font-medium mb-4 text-left">
              Construção Inteligente
            </p>

            <p className="text-gray-400 text-lg text-left">
              Envolve modelos integrados que representam todos os aspectos de
              uma construção, utilizando modelos paramétricos e dados de
              materiais para criar uma representação virtual detalhada e
              colaborativa do projeto.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
