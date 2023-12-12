import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faEyeLowVision,
  faBuildingColumns,
  faChargingStation,
  faArrowRight,
  faCog,
  faCalculator,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import engenhariaImg from "../assets/portfolio_engenharia.pdf";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const caixas = document.querySelectorAll(".caixa");

    caixas.forEach((caixa) => {
      const categories = caixa.getAttribute("data-category").split(" ");

      if (selectedCategory === "all" || categories.includes(selectedCategory)) {
        caixa.style.display = "block";
      } else {
        caixa.style.display = "none";
      }
    });
  }, [selectedCategory]);
  useEffect(() => {
    // Definir o fundo preto no carregamento do componente
    document.body.style.backgroundColor = "black";

    // Restaurar o fundo original quando o componente for desmontado
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []); // O segundo argumento vazio garante que o efeito ocorra apenas uma vez no montagem/desmontagem
  return (
    <div className="container-fluid mt-2 meu-container-fluid-personalizado p-0 m-0">
      <div className="row"></div>
      <div className="container mt-4 text-center">
        <h2 className="titulo-seletor">Lista de todos os projetos:</h2>
        <nav className="category-selector">
          <ul className="list-unstyled d-flex justify-content-center m-0 p-0">
            <li className="d-inline" style={{ margin: "0 10px" }}>
              <button
                className={`btn btn-primary botao-filtro ${
                  selectedCategory === "all" ? "active" : ""
                } m-0`}
                onClick={() => handleCategoryChange("all")}
              >
                Todos
              </button>
            </li>
            <li className="d-inline" style={{ margin: "0 10px" }}>
              <button
                className={`btn btn-primary botao-filtro ${
                  selectedCategory === "javascript" ? "active" : ""
                } m-0`}
                onClick={() => handleCategoryChange("javascript")}
              >
                Javascript
              </button>
            </li>
            <li className="d-inline" style={{ margin: "0 10px" }}>
              <button
                className={`btn btn-primary botao-filtro ${
                  selectedCategory === "python" ? "active" : ""
                } m-0`}
                onClick={() => handleCategoryChange("python")}
              >
                Python
              </button>
            </li>
            <li className="d-inline" style={{ margin: "0 10px" }}>
              <button
                className={`btn btn-primary botao-filtro ${
                  selectedCategory === "cienciadedados" ? "active" : ""
                } m-0`}
                onClick={() => handleCategoryChange("cienciadedados")}
              >
                Ciência de dados
              </button>
            </li>
            <li className="d-inline" style={{ margin: "0 10px" }}>
              <button
                className={`btn btn-primary botao-filtro ${
                  selectedCategory === "engenharia" ? "active" : ""
                } m-0`}
                onClick={() => handleCategoryChange("engenharia")}
              >
                Engenharia
              </button>
            </li>
            <li className="d-inline" style={{ margin: "0 10px" }}>
              <button
                className={`btn btn-primary botao-filtro ${
                  selectedCategory === "visaocomputacional" ? "active" : ""
                } m-0`}
                onClick={() => handleCategoryChange("visaocomputacional")}
              >
                Visão Computacional
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container-fluid mt-2 p-0">
        <div className="row justify-content-center m-0">
          {/* Conteúdo de portfolio */}
          <div className="row justify-content-center m-0">
            <div className="col-12 col-md-2">
              <div
                className="caixa meu-caixa-personalizado"
                data-category="python engenharia"
              >
                <Link to="">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    alt="Ícone Tecnologia 1"
                    className="icone-fluid"
                  />
                </Link>
                <div className="conteudo-caixa">
                  <h4 className="titulo-projeto">
                    Plataforma Financeira - (Em construção)
                  </h4>
                  <p>
                    Infraestrutura de Engenharia de Dados para processamento
                    eficiente de grandes volumes e garantia de qualidade dos
                    dados.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div
                className="caixa meu-caixa-personalizado"
                data-category="python cienciadedados"
              >
                <Link to="https://github.com/FilipeLiima/cripto">
                  <FontAwesomeIcon
                    icon={faEthereum}
                    alt="Ícone Tecnologia 1"
                    className="icone-fluid"
                  />
                </Link>
                <div className="conteudo-caixa">
                  <h4 className="titulo-projeto">
                    Criptoativos - (Em construção)
                  </h4>
                  <p>
                    Análise de criptoativos conectada a um banco de dados local,
                    permitindo aos usuários adicionar e remover ativos e
                    acompanhar a evolução da carteira.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div
                className="caixa meu-caixa-personalizado"
                data-category="visaocomputacional python"
              >
                <Link to="https://github.com/FilipeLiima/visaocomputacional">
                  <FontAwesomeIcon
                    icon={faEyeLowVision}
                    alt="Ícone Tecnologia 1"
                    className="icone-fluid"
                  />
                </Link>
                <div className="conteudo-caixa">
                  <h4 className="titulo-projeto">Computer Vision App</h4>
                  <p>
                    Detecção de pessoas e carros em vídeos, com precisão na
                    identificação por meio de processamento de imagem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div
                className="caixa meu-caixa-personalizado"
                data-category="cienciadedados python"
              >
                <Link to="https://github.com/FilipeLiima/fraud">
                  <FontAwesomeIcon
                    icon={faBuildingColumns}
                    alt="Ícone Tecnologia 1"
                    className="icone-fluid"
                  />
                </Link>
                <div className="conteudo-caixa">
                  <h4 className="titulo-projeto">Prevenção de fraudes App</h4>
                  <p>
                    Algoritmo de prevenção em Machine Learning identifica
                    atividades fraudulentas em transações financeiras com
                    cartões de crédito.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div
                className="caixa meu-caixa-personalizado"
                data-category="python cienciadedados"
              >
                <Link to="https://github.com/FilipeLiima/tesla">
                  <FontAwesomeIcon
                    icon={faChargingStation}
                    alt="Ícone Tecnologia 1"
                    className="icone-fluid"
                  />
                </Link>
                <div className="conteudo-caixa">
                  <h4 className="titulo-projeto">Tesla Supercharger App</h4>
                  <p>
                    {" "}
                    disponibilidade de supercarregadores em mapas interativos,
                    permitindo que motoristas localizem os pontos carregamento
                    mais próximos.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center m-0"></div>
            <div className="col-12 col-md-2">
              <div
                className="caixa meu-caixa-personalizado"
                data-category="javascript"
              >
                <Link to="https://filipeliima.github.io/Paginadelogin/">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    alt="Ícone Tecnologia 1"
                    className="icone-fluid"
                  />
                </Link>

                <div className="conteudo-caixa">
                  <h4 className="titulo-projeto">Login Page</h4>
                  <p>
                    A Página de Login em JavaScript fornece uma interface de
                    entrada segura para autenticação de usuários.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div
                className="caixa meu-caixa-personalizado"
                data-category="engenharia"
              >
                <a
                  href={engenhariaImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <FontAwesomeIcon
                    icon={faCog}
                    alt="Ícone Tecnologia 1"
                    className="icone-fluid"
                  />
                </a>
                <div className="conteudo-caixa">
                  <h4 className="titulo-projeto">Engenharia</h4>
                  <p>
                    Plano estruturado que utiliza princípios técnicos e
                    matemáticos para resolver problemas ou criar soluções
                    específicas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div
                className="caixa meu-caixa-personalizado"
                data-category="javascript"
              >
                <Link to="https://filipeliima.github.io/Calculadora-/">
                  <FontAwesomeIcon
                    icon={faCalculator}
                    alt="Ícone Tecnologia 1"
                    className="icone-fluid"
                  />
                </Link>
                <div className="conteudo-caixa">
                  <h4 className="titulo-projeto">Calculadora</h4>
                  <p>
                    Projeto em JavaScript para cálculos matemáticos básicos, com
                    operações de adição, subtração, multiplicação e divisão.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div
                className="caixa meu-caixa-personalizado"
                data-category="javascript"
              >
                <Link to="https://filipeliima.github.io/Landingpageapple/">
                  <FontAwesomeIcon
                    icon={faApple}
                    alt="Ícone Tecnologia 1"
                    className="icone-fluid"
                  />
                </Link>
                <div className="conteudo-caixa">
                  <h4 className="titulo-projeto">Apple Landing Page</h4>
                  <p>
                    Projeto web dinâmico em JavaScript que representa
                    visualmente a marca Apple, destaca produtos, inovações e
                    valores da empresa.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div
                className="caixa meu-caixa-personalizado"
                data-category="javascript"
              >
                <Link to="https://filipeliima.github.io/Relogio/">
                  <FontAwesomeIcon
                    icon={faStopwatch}
                    alt="Ícone Tecnologia 1"
                    className="icone-fluid"
                  />
                </Link>
                <div className="conteudo-caixa">
                  <h4 className="titulo-projeto">Relógio</h4>
                  <p>
                    Projeto em JavaScript que apresenta a hora atual em formato
                    digital, oferecendo uma interface minimalista com horas, min
                    e seg em tempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
