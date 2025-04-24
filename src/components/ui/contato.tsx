import { Card } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export function Contato() {
  return (
    <div id="contato" className="bg-black py-60">
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 font-Inter">
        <div className="md:col-span-1">
          <h1 className="text-4xl text-white mb-8 text-left">CONTATO</h1>
          <h2 className="text-lg text-gray-400 mb-8">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à
            vontade para entrar em contato comigo para discutir projetos
            interessantes ou apenas para dizer olá!
          </h2>
        </div>

        <Card className="bg-black p-8 flex flex-col justify-center items-center w-full md:col-span-1">
          <p className="text-white mb-4">
            Entre em contato ou me siga nas redes sociais:
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/-filipelima/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white w-8 h-8 mb-1 cursor-pointer"
              />
            </a>

            <a
              href="https://github.com/FilipeLiima"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white w-8 h-8 mb-1 cursor-pointer"
              />
            </a>

            <a
              href="https://discord.gg/HvMPEPNe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-white w-8 h-8 mb-1 cursor-pointer"
              />
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
