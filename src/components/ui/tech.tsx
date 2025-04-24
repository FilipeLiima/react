import { Card } from "@/components/ui/card";
import Javascript from "../../assets/javascript.svg";
import Typescript from "../../assets/typescript.svg";
import Python from "../../assets/python.svg";
import Solidity from "../../assets/solidity.svg";
import React from "../../assets/react.svg";
import Vite from "../../assets/vite.svg";
import Shadcn from "../../assets/shadcn.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import Tailwind from "../../assets/tailwind.svg";
import Next from "../../assets/next.svg";
import Numpy from "../../assets/numpy.svg";
import Streamlit from "../../assets/streamlit.svg";
import Plotly from "../../assets/plotly.svg";
import Opencv from "../../assets/opencv.svg";
import Docker from "../../assets/docker.svg";
import Kafka from "../../assets/kafka.svg";
import Tensorflow from "../../assets/tensorflow.svg";
import Postgres from "../../assets/postgres.svg";

export function Tech() {
  return (
    <Card className="bg-black max-w-[1400px] mx-auto border-none mb-8 mt-8 px-4 py-6">
      <div>
        <h2 className="text-gray-400 m-5 mt-8 mb-8 text-xl text-center">
          SKILLS E TECNOLOGIAS
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Primeira Linha */}
        <div className="flex justify-center">
          <img src={Javascript} alt="Javascript" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Typescript} alt="Typescript" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Python} alt="Python" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Solidity} alt="Solidity" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={React} alt="React" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Vite} alt="Vite" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>

        {/* Segunda Linha */}
        <div className="flex justify-center">
          <img src={Shadcn} alt="Shadcn" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Bootstrap} alt="Bootstrap" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Tailwind} alt="Tailwind" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Next} alt="Next" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Numpy} alt="Numpy" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Streamlit} alt="Streamlit" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>

        {/* Terceira Linha */}
        <div className="flex justify-center">
          <img src={Plotly} alt="Plotly" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Opencv} alt="Opencv" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Docker} alt="Docker" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Kafka} alt="Kafka" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Tensorflow} alt="Tensorflow" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={Postgres} alt="Postgres" className="w-16 sm:w-20 md:w-24 lg:w-full h-auto" />
        </div>
      </div>
    </Card>
  );
}
