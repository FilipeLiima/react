import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faRocket,
  faVial,
  faEyeLowVision,
} from "@fortawesome/free-solid-svg-icons";
import plotly from "../assets/plotly.png";
import dash from "../assets/dash.png";
import opencv from "../assets/opencv.png";
import python from "../assets/python.png";
import numpy from "../assets/numpy.png";
import pandas from "../assets/pandas.png";
import pytorch from "../assets/pytorch.png";
import tensorflow from "../assets/tensorflow.png";
import streamlit from "../assets/streamlit.png";
import seaborn from "../assets/seaborn.png";

export default function Box() {
  const [mostrarTecnologiasState, setMostrarTecnologias] = useState(false);
  function mostrarAreasDeAtuacao() {
    document.getElementById("conteudoAreas").style.display = "flex";
    document.getElementById("conteudoTecnologias").style.display = "none";
  }

  function mostrarTecnologias() {
    document.getElementById("conteudoAreas").style.display = "none";
    document.getElementById("conteudoTecnologias").style.display = "flex";
  }
  var completes = document.querySelectorAll(".complete");
  var toggleButton = document.getElementById("toggleButton");

  function toggleComplete() {
    var lastComplete = completes[completes.length - 1];
    lastComplete.classList.toggle("complete");
  }

  return (
    <div className="caixas-container" id="container">
      <div className="box">
        <div className="btn area" onClick={mostrarAreasDeAtuacao}>
          <div className="icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <span>Áreas de atuação</span>
        </div>

        <div className="btn tec" onClick={mostrarTecnologias}>
          <div className="icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <span>Tecnologias</span>
        </div>
      </div>

      <div className="conteudo" id="conteudoAreas">
        <div className="caixa" id="python">
          <div className="icone">
            <FontAwesomeIcon icon={faRocket} />
          </div>
          <div className="titulo">Data Engineering</div>
          <div className="texto2">
            Engenharia de dados é a prática de projetar e desenvolver
            infraestruturas eficientes para coletar, processar e armazenar
            dados. Os engenheiros de dados criam pipelines de dados confiáveis,
            permitindo análises robustas e tomada de decisões informadas nas
            organizações. Integram tecnologias como ETL, bancos de dados
            distribuídos e serviços em nuvem para garantir o ciclo completo dos
            dados.
          </div>
        </div>

        <div className="caixa" id="dataScience">
          <div className="icone">
            <FontAwesomeIcon icon={faVial} />
          </div>
          <div className="titulo">Data Science</div>
          <div className="texto2">
            Data Science é a aplicação de métodos científicos, processos e
            algoritmos para extrair insights valiosos a partir de dados.
            Envolvendo estatísticas, aprendizado de máquina e análise de dados,
            capacita profissionais a tomar decisões informadas, impulsionando
            descobertas e soluções inovadoras.
          </div>
        </div>

        <div className="caixa" id="computerVision">
          <div className="icone">
            <FontAwesomeIcon icon={faEyeLowVision} />
          </div>
          <div className="titulo">Computer Vision</div>
          <div className="texto2">
            Visão Computacional é a disciplina que capacita máquinas a
            interpretar o mundo visual, utilizando algoritmos para extrair
            informações de imagens ou vídeos. Essa prática é essencial em
            reconhecimento facial, veículos autônomos e análise médica,
            proporcionando uma compreensão avançada do ambiente visual.
          </div>
        </div>
      </div>

      <div
        className="conteudos"
        id="conteudoTecnologias"
        style={{ display: mostrarTecnologiasState ? "block" : "none" }}
      >
        <div className="caixas">
          <img src={plotly} alt="Imagem Tecnologia 1" />
          <div className="titulo"></div>
        </div>
        <div className="caixas">
          <img src={dash} alt="Imagem Tecnologia 2" />
          <div className="titulo"></div>
        </div>
        <div className="caixas">
          <img src={opencv} alt="Imagem Tecnologia 3" />
          <div className="titulo"></div>
        </div>
        <div className="caixas">
          <img src={python} alt="Imagem Tecnologia 4" />
          <div className="titulo"></div>
        </div>
        <div className="caixas">
          <img src={numpy} alt="Imagem Tecnologia 5" />
          <div className="titulo"></div>
        </div>
        <div className="caixas">
          <img src={pandas} alt="Imagem Tecnologia 6" />
          <div className="titulo"></div>
        </div>
        <div className="caixas">
          <img src={pytorch} alt="Imagem Tecnologia 7" />
          <div className="titulo"></div>
        </div>
        <div className="caixas">
          <img src={tensorflow} alt="Imagem Tecnologia 8" />
          <div className="titulo"></div>
        </div>
        <div className="caixas">
          <img src={streamlit} alt="Imagem Tecnologia 9" />
          <div className="titulo"></div>
        </div>
        <div className="caixas">
          <img src={seaborn} alt="Imagem Tecnologia 10" />
          <div className="titulo"></div>
        </div>
      </div>
    </div>
  );
}
