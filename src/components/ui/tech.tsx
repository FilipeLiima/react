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
    <Card className="bg-black max-w-[1400px] mx-auto border-none mb-8 mt-8 ">
      <div>
        <h2 className="text-gray-400 m-5 mt-8 mb-8 text-xl text-center">
          SKILLS E TECNOLOGIAS
        </h2>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {/* Primeira Linha */}
        <div className="col-span-6 md:col-span-1">
          <img src={Javascript} alt="Javascript" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Typescript} alt="Typescript" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Python} alt="Python" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Solidity} alt="Solidity" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={React} alt="React" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Vite} alt="Vite" />
        </div>

        {/* Segunda Linha */}
        <div className="col-span-6 md:col-span-1">
          <img src={Shadcn} alt="Shadcn" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Bootstrap} alt="Bootstrap" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Tailwind} alt="Tailwind" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Next} alt="Next" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Numpy} alt="Numpy" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Streamlit} alt="Streamlit" />
        </div>

        {/* Terceira Linha */}

        <div className="col-span-6 md:col-span-1">
          <img src={Plotly} alt="Plotly" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Opencv} alt="Opencv" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Docker} alt="Docker" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Kafka} alt="Kafka" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Tensorflow} alt="Tensorflow" />
        </div>
        <div className="col-span-6 md:col-span-1">
          <img src={Postgres} alt="Postgres" />
        </div>
      </div>
    </Card>
  );
}
