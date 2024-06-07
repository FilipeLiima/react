import { Card } from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";
import { ShieldAlert } from "lucide-react";

export function Portfolio() {
  return (
    <div
      id="projetos"
      className="bg-black flex flex-col items-center text-start mb-8 mt-8 max-w-[1400px] font-Inter"
    >
      <h1 className="text-4xl text-white font-bold mb-4 flex items-center">
        <span className="flex-grow font-bold">Projetos em destaque</span>
        <ShieldAlert size={28} className="ml-2 " />
      </h1>

      <p className="text-gray-400 mb-8 text-lg">
        Veja alguns dos meus trabalhos recentes
      </p>
      <div className="max-w-[1400px]">
        <PortfolioCard
          title="Smartbets App"
          subtitle="Plataforma de apostas descentralizadas, criada com contratos inteligentes na rede Ethereum e potencializada pela tecnologia da Chainlink. Desfrute de uma experiência de apostas transparente e segura."
          link="https://github.com/FilipeLiima/smartbets"
        />
        <PortfolioCard
          title="Crypto Home App"
          subtitle="Explore a revolução no mercado imobiliário com o app de aluguel de imóveis. Com a segurança dos smart contracts, a plataforma utiliza tokens ERC20 e ERC721 para garantir a autenticidade e rastreabilidade dos ativos."
          link="https://github.com/FilipeLiima/auth"
        />

        <PortfolioCard
          title="Tesla Supercharger App"
          subtitle="Bem-vindo ao Tesla Supercharger App, sua ferramenta indispensável para uma experiência de carregamento elétrico sem complicações. Verifique a disponibilidade dos equipamentos em qualquer parte do mundo."
          link="https://github.com/FilipeLiima/tesla"
        />
        <PortfolioCard
          title="Engineer - (Comming soon)"
          subtitle="Acompanhe portfólio de projetos de engenharia modelados em Autodesk Revit para as disciplinas de arquitetura, estrutura e hidráulica"
          link="https://github.com/FilipeLiima/tesla"
        />
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/FilipeLiima"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl bg-violet-950 hover:bg-violet-800 text-white  p-3 flex items-center rounded-full"
        >
          Ver mais
          <MoveUpRight size={20} className="ml-2" />
        </a>
      </div>
    </div>
  );
}

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  link: string;
}

function PortfolioCard({ title, subtitle, link }: PortfolioCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card className="bg-violet-950 border-none p-12 mb-8">
        <div className="p-4 ">
          <h3 className="text-white font-bold text-3xl mb-2">{title}</h3>
          <p className="text-white font-light text-lg">{subtitle}</p>
        </div>
      </Card>
    </a>
  );
}
