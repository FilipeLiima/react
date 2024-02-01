import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faVial,
  faEyeLowVision,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import open from "../assets/opencv.png";
import docker from "../assets/docker.png";
import javascript from "../assets/javascript.png";
import kafka from "../assets/kafka.png";
import python from "../assets/python.png";
import numpy from "../assets/numpy.png";
import pandas from "../assets/pandas.png";
import pytorch from "../assets/pytorch.png";
import tensorflow from "../assets/tensorflow.png";
import streamlit from "../assets/streamlit.png";
import react from "../assets/react.png";
import postgresql from "../assets/postgresql.png";

export default function Box() {
  const [mostrarTecnologiasState, setMostrarTecnologias] = useState(false);

  const renderAreasDeAtuacao = () => (
    <div className="d-flex">
      <div className="col mb-4 mx-2" style={{ height: "100%" }}>
        <div className="card">
          <div className="card-body">
            <FontAwesomeIcon icon={faCode} className="fa-2x" />
            <h5 className="card-title">Developer</h5>
            <p className="card-text">
              Desenvolvedor de Software trabalha com diversas linguagens de
              programação, projeta e implementa soluções inovadoras. Colabora em
              equipes ágeis, garantindo alta qualidade e performance dos
              sistemas em todo fluxo do projeto. Possui habilidades analíticas e
              busca constantemente aprimoramento técnico.
            </p>
          </div>
        </div>
      </div>
      <div className="col mb-4 mx-2" style={{ height: "100%" }}>
        <div className="card">
          <div className="card-body">
            <FontAwesomeIcon icon={faRocket} className="fa-2x" />
            <h5 className="card-title">Data Engineering</h5>
            <p className="card-text">
              Engenharia de dados é a prática de projetar e desenvolver
              infraestruturas eficientes para coletar, processar e armazenar
              dados. Os engenheiros de dados criam pipelines,integram
              tecnologias como ETL, bancos de dados distribuídos e serviços em
              nuvem para garantir o ciclo completo dos dados.
            </p>
          </div>
        </div>
      </div>
      <div className="col mb-4 mx-2" style={{ height: "100%" }}>
        <div className="card">
          <div className="card-body">
            <FontAwesomeIcon icon={faVial} className="fa-2x" />
            <h5 className="card-title">Data Science</h5>
            <p className="card-text">
              Data Science é a aplicação de métodos científicos, processos e
              algoritmos para extrair insights valiosos a partir de dados.
              Profissionais de Data Science utilizam estatísticas, aprendizado
              de máquina para tomar decisões informadas, impulsionar descobertas
              e oferecer soluções inovadoras.
            </p>
          </div>
        </div>
      </div>
      <div className="col mb-4 mx-2" style={{ height: "100%" }}>
        <div className="card">
          <div className="card-body">
            <FontAwesomeIcon icon={faEyeLowVision} className="fa-2x" />
            <h5 className="card-title">Computer Vision</h5>
            <p className="card-text">
              Computer Vision é a disciplina que capacita máquinas a interpretar
              o mundo visual por meio de algoritmos, extraindo informações de
              imagens ou vídeos. Essencial em campos como reconhecimento facial,
              veículos autônomos e análise médica, Computer Vision oferece uma
              compreensão avançada do ambiente visual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTecnologias = () => (
    // Dividir os ícones em duas linhas com 5 colunas cada
    <div className="row">
      <div className="col-2 mb-4">
        <img src={python} alt="Imagem Tecnologia 1" className="img-fluid" />
      </div>
      <div className="col-2 mb-4">
        <img src={javascript} alt="Imagem Tecnologia 2" className="img-fluid" />
      </div>
      <div className="col-2 mb-4">
        <img src={numpy} alt="Imagem Tecnologia 2" className="img-fluid" />
      </div>
      <div className="col-2 mb-4">
        <img src={pandas} alt="Imagem Tecnologia 1" className="img-fluid" />
      </div>
      <div className="col-2 mb-4">
        <img src={pytorch} alt="Imagem Tecnologia 1" className="img-fluid" />
      </div>
      <div className="col-2 mb-4">
        <img src={streamlit} alt="Imagem Tecnologia 1" className="img-fluid" />
      </div>
      <div className="col-2 mb-4">
        <img src={react} alt="Imagem Tecnologia 1" className="img-fluid" />
      </div>
      <div className="col-2 mb-4">
        <img src={open} alt="Imagem Tecnologia 1" className="img-fluid" />
      </div>
      <div className="col-2 mb-4">
        <img src={docker} alt="Imagem Tecnologia 1" className="img-fluid" />
      </div>
      <div className="col-2 mb-4">
        <img src={kafka} alt="Imagem Tecnologia 1" className="img-fluid" />
      </div>
      <div className="col-2 mb-4">
        <img src={tensorflow} alt="Imagem Tecnologia 1" className="img-fluid" />
      </div>
      <div className="col-2 mb-4">
        <img src={postgresql} alt="Imagem Tecnologia 1" className="img-fluid" />
      </div>
    </div>
  );

  return (
    <section className="container mt-5 meu-container-personalizado">
      <div className="row text-center">
        <div className="col">
          <button
            className={`btn btn-primary ${
              !mostrarTecnologiasState ? "active" : ""
            }`}
            onClick={() => setMostrarTecnologias(false)}
          >
            Áreas de Atuação
          </button>
        </div>
        <div className="col">
          <button
            className={`btn btn-primary ${
              mostrarTecnologiasState ? "active" : ""
            }`}
            onClick={() => setMostrarTecnologias(true)}
          >
            Tecnologias
          </button>
        </div>
      </div>

      <div className="row mt-4">
        {mostrarTecnologiasState ? renderTecnologias() : renderAreasDeAtuacao()}
      </div>
    </section>
  );
}
