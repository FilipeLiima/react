import { Card } from "@/components/ui/card";
import { Section } from "./components/ui/section";
import { Contato } from "./components/ui/contato";
import Home from "./assets/home.svg";

export function App() {
  return (
    <div id="app" className="relative">
      <div className="absolute top-0 right-0 m-5  text-white font-Inter">
        <a href="/react/" className="mr-6 text-xl">
          Home
        </a>
        <a href="#projetos" className="mr-6 text-xl">
          Projetos
        </a>
        <a href="#contato" className="mr-2 text-xl">
          Contato
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 font-Inter">
        <div className="bg-black flex flex-col justify-center items-center">
          <Card className="bg-black p-6 w-[400px] self-center border-none relative">
            <div className="text-center">
              <h2 className="text-gray-400 py-5 text-2xl md:text-3xl lg:text-4xl">
                Hey, eu sou filipe 👋
              </h2>
              <h1 className="text-9xl text-white ">Developer</h1>
              <h1 className="text-9xl text-white ">Engineer</h1>
            </div>
          </Card>
        </div>

        <div className="bg-black p-4 flex justify-center items-center h-screen">
          <img
            src={Home}
            alt="Description of image"
            className="w-full h-auto rounded-lg"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <Section />
      <Contato />
    </div>
  );
}
