import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Tech } from "./tech";
import { Areas } from "./areas";
import { Portfolio } from "./portfolio";
import ME from "../../assets/me.png";

export function Section() {
  return (
    <div className="bg-black flex flex-col items-center justify-center font-Inter">
      <div className="max-w-[1600px] mx-auto flex justify-center items-start">
        <div className="w-1/2">
          <Card className="bg-violet-950 text-start border-none m-5 p-4 mb-8 mt-8 flex items-center justify-between">
            <div>
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium">
                SOBRE MIM:
              </h1>
              <h2 className="text-gray-400 mt-8 mb-8 text-bold">
                Sou um engenheiro e desenvolvedor que atua com front-end e
                soluções web 3, com expertise em TypeScript, Python e Solidity.
                Minha experiência colaborando com equipes multidisciplinares, me
                permite desenvolver soluções inovadoras garantindo a qualidade
                do código e as melhores práticas de desenvolvimento.
              </h2>
            </div>
            <Avatar
              className="mr-2 hidden md:block"
              style={{ width: "200px", height: "200px" }}
            >
              <AvatarImage src={ME} alt="ME" />
            </Avatar>
          </Card>
        </div>
      </div>
      <Tech />
      <Areas />
      <Portfolio />
    </div>
  );
}
