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
                Com mais de 9 anos de experiência colaborando com equipes
                multidisciplinares, desenvolvi uma paixão pela tecnologia que me
                levou a me tornar um desenvolvedor habilidoso. Minhas principais
                motivações residem em enfrentar desafios, otimizar processos por
                meio da análise e criar soluções eficientes que proporcionem uma
                experiência de usuário excepcional. Estou constantemente em
                busca de novos desafios para expandir meu conhecimento e
                contribuir de forma significativa para o sucesso dos projetos em
                que estou envolvido.
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
