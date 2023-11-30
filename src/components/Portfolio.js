import React from "react";
import { Link } from "react-router-dom";
import mapa from "../assets/mapa.png";
import fraudes from "../assets/fraudes.png";
import visão from "../assets/visão.png";

export default function Portfolio() {
  return (
    <div className="portfolio-section" id="portfolio-section">
      <div className="novoconteudo">
        <div className="conteudo-texto">
          <h2>PORTFÓLIO</h2>
          <p>Uma amostra dos projetos em que tenho trabalhado:</p>
        </div>
        <div className="novoconteudo">
          <div className="caixa">
            <Link to="https://github.com/FilipeLiima/tesla">
              <img src={mapa} alt="Imagem Tecnologia 2" />
              <div className="titulo"></div>
            </Link>
          </div>

          <div className="caixa">
            <Link to="https://github.com/FilipeLiima/fraud">
              <img src={fraudes} alt="Imagem Tecnologia 2" />
              <div className="titulo"></div>
            </Link>
          </div>

          <div className="caixa">
            <Link to="https://github.com/FilipeLiima/visaocomputacional">
              <img src={visão} alt="Imagem Tecnologia 2" />
              <div className="titulo"></div>
            </Link>
          </div>

          {/* Link para a rota "/projects" */}
          <Link to="/projects" className="ver-mais" id="meuBotao">
            Ver Mais
          </Link>
        </div>
      </div>
    </div>
  );
}
