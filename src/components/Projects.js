import React, { useState, useEffect } from "react";
import mapa from "../assets/mapa.png";
import fraudes from "../assets/fraudes.png";
import visão from "../assets/visão.png";
import engenharia from "../assets/portfolio_engenharia.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faEye,
  faChargingStation,
  faRightToBracket,
  faGear,
  faCalculator,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { faEthereum, faApple } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const caixas = document.querySelectorAll(".caixa-projeto");

    caixas.forEach((caixa) => {
      const categories = caixa.getAttribute("data-category").split(" ");

      if (selectedCategory === "all" || categories.includes(selectedCategory)) {
        caixa.style.display = "block";
      } else {
        caixa.style.display = "none";
      }
    });
  }, [selectedCategory]);

  return (
    <div>
      <div className="novoconteudo">
        <div className="conteudo-texto">
          <h1>Foco. Disciplina. Código aberto.</h1>
          <p>
            Aqui você pode navegar por todos os projetos que construí ao longo
            do tempo. Alguns projetos estão finalizados, outros ainda em
            desenvolvimento.
          </p>
          <h2>Projetos em destaque:</h2>
        </div>
      </div>

      <div className="novoconteudo">
        <div className="caixa">
          <a href="https://github.com/FilipeLiima/tesla">
            <img src={mapa} alt="Imagem Tecnologia 2" />
            <div className="titulo"></div>
          </a>
        </div>

        <div className="caixa">
          <a href="https://github.com/FilipeLiima/fraud">
            <img src={fraudes} alt="Imagem Tecnologia 2" />
            <div className="titulo"></div>
          </a>
        </div>

        <div className="caixa">
          <a href="https://github.com/FilipeLiima/visaocomputacional">
            <img src={visão} alt="Imagem Tecnologia 2" />
            <div className="titulo"></div>
          </a>
        </div>
      </div>

      <div className="container-nav">
        <h2 className="titulo-seletor">Lista de todos os projetos:</h2>
        <nav className="category-selector">
          <ul>
            <li>
              <button
                className="botao-filtro"
                onClick={() => handleCategoryChange("all")}
              >
                Todos
              </button>
            </li>
            <li>
              <button
                className="botao-filtro"
                onClick={() => handleCategoryChange("javascript")}
              >
                Javascript
              </button>
            </li>
            <li>
              <button
                className="botao-filtro"
                onClick={() => handleCategoryChange("python")}
              >
                Python
              </button>
            </li>
            <li>
              <button
                className="botao-filtro"
                onClick={() => handleCategoryChange("cienciadedados")}
              >
                Ciência de dados
              </button>
            </li>
            <li>
              <button
                className="botao-filtro"
                onClick={() => handleCategoryChange("visaocomputacional")}
              >
                Visão Computacional
              </button>
            </li>
            <li>
              <button
                className="botao-filtro"
                onClick={() => handleCategoryChange("engenharia")}
              >
                Engenharia
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container-caixas-projeto">
        {/* Caixa 1 */}
        <div
          className="caixa-projeto"
          data-category="engenharia python"
          id="python"
        >
          <a href="">
            <div className="icone">
              <FontAwesomeIcon icon={faDatabase} className="fa-bounce" />
            </div>
            <div className="titulo">
              Estruturação de plataforma financeira (EM CONSTRUÇÃO)
            </div>
            <div className="texto2">
              Este projeto de Engenharia de Dados foca na infraestrutura para
              coleta, armazenamento e processamento de dados, utilizando Hadoop
              para armazenamento distribuído, Apache Kafka para streaming e
              Docker para consistência do ambiente. A meta é criar uma
              arquitetura robusta, escalável e capaz de processar grandes
              volumes, proporcionando uma base sólida para análises futuras. A
              abordagem visa garantir a qualidade e disponibilidade dos dados,
              permitindo insights significativos.
            </div>
          </a>
        </div>

        {/* Caixa 2 */}
        <div
          className="caixa-projeto"
          data-category="cienciadedados python"
          id="python"
        >
          <a href="">
            <div className="icone">
              <FontAwesomeIcon icon={faEthereum} className="fa-bounce" />
            </div>
            <div className="titulo">
              Análise de criptoativos (EM CONSTRUÇÃO)
            </div>
            <div className="texto2">
              O app de análise de criptoativos consome dados de uma API,
              oferecendo visualizações intuitivas e análises preditivas por meio
              de um modelo de machine learning. Uma interface amigável torna a
              experiência acessível a investidores de todos os níveis,
              capacitando decisões informadas no universo dinâmico das
              criptomoedas.
            </div>
          </a>
        </div>

        {/* Caixa 3 */}
        <div
          className="caixa-projeto"
          data-category="visaocomputacional python"
          id="python"
        >
          <a href="https://github.com/FilipeLiima/visaocomputacional">
            <div className="icone">
              <FontAwesomeIcon icon={faEye} className="fa-bounce" />
            </div>
            <div className="titulo">Detecção de pessoas e carros</div>
            <div className="texto2">
              Este projeto de Visão Computacional utiliza a biblioteca OpenCV em
              conjunto com o modelo YOLOv3-Tiny para realizar a detecção de
              pessoas e carros em imagens e vídeos. Através de técnicas
              avançadas de processamento de imagem, o sistema é capaz de
              identificar e delimitar com precisão a presença de seres humanos e
              veículos nas cenas observadas.
            </div>
          </a>
        </div>

        {/* Caixa 4 */}
        <div
          className="caixa-projeto"
          data-category="cienciadedados python"
          id="python"
        >
          <a href="https://github.com/FilipeLiima/fraud">
            <div class="icone">
              <FontAwesomeIcon icon={faEye} className="fa-bounce" />
            </div>
            <div class="titulo">Prevenção de fraudes bancárias</div>
            <div class="texto2">
              Um algoritmo de prevenção de fraudes em machine learning é um
              sistema computacional que utiliza técnicas de aprendizado de
              máquina para identificar e prevenir atividades fraudulentas em
              diversos contextos, como transações financeiras, detecção de
              fraudes em cartões de crédito, fraudes online, entre outros.{" "}
            </div>
          </a>
        </div>

        {/* Caixa 5 */}
        <div
          className="caixa-projeto"
          data-category="cienciadedados python"
          id="python"
        >
          <a href="https://github.com/FilipeLiima/tesla">
            <div className="icone">
              <FontAwesomeIcon icon={faChargingStation} className="fa-bounce" />
            </div>
            <div className="titulo">Dashboard tesla</div>
            <div className="texto2">
              O painel da Tesla é uma interface digital que exibe informações de
              disponibilidade de supercarregadores ao redor do mundo, através de
              uma navegação por mapas interativos. Os motoristas podem
              visualizar os pontos de carregamento mais próximos.
            </div>
          </a>
        </div>

        {/* Caixa 6 */}
        <div className="caixa-projeto" data-category="javascript" id="python">
          <a href="https://filipeliima.github.io/Paginadelogin/">
            <div className="icone">
              <FontAwesomeIcon icon={faRightToBracket} className="fa-bounce" />
            </div>
            <div className="titulo">Login Page</div>
            <div className="texto2">
              A Página de Login é um projeto em JavaScript que oferece uma
              interface de entrada de usuário segura e eficiente. Este projeto
              proporciona uma maneira simples para os usuários autenticarem-se
              em um sistema ou site, garantindo a proteção dos dados e a
              privacidade das informações pessoais.
            </div>
          </a>
        </div>

        {/* Caixa 7 */}
        <div className="caixa-projeto" data-category="engenharia" id="python">
          <a href={engenharia}>
            <div className="icone">
              <FontAwesomeIcon icon={faGear} className="fa-bounce" />
            </div>
            <div className="titulo">Engenharia</div>
            <div className="texto2">
              Um projeto de engenharia é um plano detalhado e estruturado que
              envolve a aplicação de princípios científicos, técnicos e
              matemáticos para resolver problemas ou criar produtos, sistemas ou
              estruturas que atendam a necessidades específicas.
            </div>
          </a>
        </div>

        {/* Caixa 8 */}
        <div className="caixa-projeto" data-category="javascript" id="python">
          <a href="https://filipeliima.github.io/Calculadora-/">
            <div className="icone">
              <FontAwesomeIcon icon={faCalculator} className="fa-bounce" />
            </div>
            <div className="titulo">Calculadora</div>
            <div className="texto2">
              A Calculadora é um projeto de software desenvolvido em JavaScript,
              que oferece funcionalidades de cálculos matemáticos básicos. Essa
              aplicação de desktop fornece uma interface simples e eficiente,
              permitindo que os usuários realizem operações matemáticas de
              adição, subtração, multiplicação e divisão.
            </div>
          </a>
        </div>

        {/* Caixa 9 */}
        <div className="caixa-projeto" data-category="javascript" id="python">
          <a href="https://filipeliima.github.io/Landingpageapple/">
            <div className="icone">
              <FontAwesomeIcon icon={faApple} className="fa-bounce" />
            </div>
            <div className="titulo">Apple Landing Page</div>
            <div className="texto2">
              A Landing Page Apple é um projeto web dinâmico desenvolvido em
              JavaScript, que serve como uma representação visual envolvente da
              marca Apple. Esta página inicial interativa oferece uma
              experiência única aos visitantes, destacando os produtos,
              inovações e valores da empresa.
            </div>
          </a>
        </div>

        {/* Caixa 10 */}
        <div className="caixa-projeto" data-category="javascript" id="python">
          <a href="https://filipeliima.github.io/Relogio/">
            <div className="icone">
              <FontAwesomeIcon icon={faClock} className="fa-bounce" />
            </div>
            <div className="titulo">Relógio digital</div>
            <div className="texto2">
              O Relógio Digital é um projeto em JavaScript que oferece uma forma
              simples e prática de exibir a hora atual em formato digital. Este
              projeto fornece uma interface minimalista que exibe horas, minutos
              e segundos em tempo real, proporcionando aos usuários uma
              referência precisa do tempo.
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
