import React from "react";
import { Link } from "react-router-dom";
import mapa from "../assets/mapa.png";
import fraudes from "../assets/fraudes.png";
import visao from "../assets/visão.png";

export default function Portfolio() {
  return (
    <section
      className="container-fluid mt-4 text-center meu-container-fluid-personalizado background-dark"
      id="portfolio-section"
    >
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="conteudo-texto meu-conteudo-texto-personalizado">
            <h2>PORTFÓLIO</h2>
            <p>
              Aqui você pode navegar por todos os projetos que construí ao longo
              do tempo. Alguns projetos estão finalizados, outros ainda em
              constante desenvolvimento:
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="caixa">
                <Link to="https://github.com/FilipeLiima/tesla">
                  <img
                    src={mapa}
                    alt="Imagem Tecnologia 1"
                    className="img-fluid"
                  />
                </Link>
                <div className="conteudo-caixa">
                  <h4>Tesla Supercharger App</h4>
                  <p>
                    Bem-vindo ao Tesla Supercharger App, sua ferramenta
                    indispensável para uma experiência de carregamento elétrico
                    sem complicações. Verifique disponibilidade de equipamentos
                    em sua região!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="caixa">
                <Link to="https://github.com/FilipeLiima/fraud">
                  <img
                    src={fraudes}
                    alt="Imagem Tecnologia 2"
                    className="img-fluid"
                  />
                </Link>
                <div className="conteudo-caixa">
                  <h4>Prevenção de Fraudes App</h4>
                  <p>
                    Conheça o App de Prevenção de Fraudes e mantenha-se à frente
                    com recursos avançados de prevenção de fraudes, tornando
                    suas transações livres de preocupações
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="caixa">
                <Link to="https://github.com/FilipeLiima/visaocomputacional">
                  <img
                    src={visao}
                    alt="Imagem Tecnologia 3"
                    className="img-fluid"
                  />
                </Link>
                <div className="conteudo-caixa">
                  <h4>Computer Vision App</h4>
                  <p>
                    Sua ferramenta indispensável para explorar o mundo visual.
                    Desfrute de recursos avançados que proporcionam uma nova
                    perspectiva, Uma experiência visual aprimorada ao seu
                    alcance com reconhecimento de objetos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/projects" className="btn btn-primary mt-3 mb-4">
            Ver Mais
          </Link>
        </div>
      </div>
    </section>
  );
}
