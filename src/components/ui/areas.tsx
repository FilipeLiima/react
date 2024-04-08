import { Card } from "@/components/ui/card";
import Dev from "../../assets/dev.png";
import Web from "../../assets/web.png";
import IA from "../../assets/ia.svg";

export function Areas() {
  return (
    <div className="bg-black border-none max-w-[1400px] mx-auto font-Inter">
      <p className="text-white text-center mt-8 mb-8 text-3xl font-bold">
        Áreas de atuação
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-black">
        {/* Card 1 - Área 1 */}
        <div className="col-span-1">
          <Card className="bg-black text-white flex flex-col p-6 text-center border-none">
            <div className="col-span-1 flex justify-center items-center">
              <img
                src={Dev}
                alt="dev"
                className="w-32 h-32 rounded-full mb-4"
              />
            </div>
            <h3 className="text-white text-3xl font-medium mb-2">
              Desenvolvimento
            </h3>
            <p className="text-gray-400 text-lg">
              Abrange a criação de aplicativos acessíveis, utilizando linguagens
              de marcação e estilização. Isso inclui a integração de APIs para
              funcionalidades específicas e a programação de interfaces
              responsivas, com uso de frameworks modernos para otimizar o
              desenvolvimento.
            </p>
          </Card>
        </div>
        {/* Card 2 - Área 2 */}
        <div className="col-span-1">
          <Card className="bg-black text-white flex flex-col text-center p-6 border-none">
            <div className="col-span-1 flex justify-center items-center">
              <img
                src={Web}
                alt="web"
                className="w-32 h-32 rounded-full mb-4"
              />
            </div>
            <h3 className="text-white text-3xl font-medium mb-2">Web 3</h3>
            <p className="text-gray-400 text-lg">
              Envolve a criação de Smart Contracts, Dapps, tokens não fungíveis
              (NFTs) que são imutáveis e descentralizados. Além disso, abrange a
              utilização de blockchain para garantir transações seguras e
              transparentes, revolucionando modelos de negócios e interações
              online
            </p>
          </Card>
        </div>
        {/* Card 3 - Área 3 */}
        <div className="col-span-1">
          <Card className="bg-black text-white flex flex-col text-center p-6 border-none">
            <div className="col-span-1 flex justify-center items-center">
              <img src={IA} alt="ia" className="w-32 h-32 rounded-full mb-4" />
            </div>
            <h3 className="text-white text-3xl font-medium mb-2">
              Inteligência artificial
            </h3>
            <p className="text-gray-400 text-lg">
              Abrange o desenvolvimento de sistemas baseados em redes neurais
              artificiais, modelos matemáticos e algoritmos de processamento de
              linguagem natural. Esses sistemas são projetados para imitar a
              inteligência humana, permitindo resolver problemas complexos
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
