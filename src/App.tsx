import { Card } from "@/components/ui/card";
import { Section } from "./components/ui/section";
import { Contato } from "./components/ui/contato";

export function App() {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 m-5  text-white font-Inter">
        <a href="/" className="mr-6 text-xl">
          Home
        </a>
        <a href="#projetos" className="mr-6 text-xl">
          Projetos
        </a>
        <a href="#contato" className="mr-2 text-xl">
          Contato
        </a>
      </div>

      <div className="grid grid-cols-2 font-Inter">
        <div className="bg-black flex flex-col justify-center items-center">
          <Card className="bg-black p-6 w-[400px] self-center border-none relative">
            <div className="text-center">
              <h2 className="text-white py-5 text-2xl">Hey, I'm filipe 👋</h2>
              <h1 className="text-8xl text-white ">Developer</h1>
              <h1 className="text-8xl text-white ">Engineer</h1>
            </div>
          </Card>
        </div>

        <div className="bg-black p-4 flex justify-center items-center h-screen">
          <img
            src="./src/assets/logo.svg"
            alt="Description of image"
            className="max-w-full max-h-full rounded-lg"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <Section />
      <Contato />
    </div>
  );
}