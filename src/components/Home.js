import React from "react";
import Robot from "../assets/Fingerprint-bro.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="container-fluid">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white justify-content-end">
          <div className="navbar-nav">
            <Link className="nav-item nav-link ms-4 " to="/">
              HOME
            </Link>
            <a className="nav-item nav-link ms-4" href="#portfolio-section">
              PROJETOS
            </a>
            <a className="nav-item nav-link ms-4" href="#contato-section">
              CONTATO
            </a>
          </div>
        </nav>
      </header>

      <div className="row align-items-center">
        {/* Caixa com nomes à esquerda */}
        <div className="col-md-6 text-center">
          <div className="text">
            <p className="text-primary text-small">
              Bem-vindo à página inicial de Filipe Lima.
            </p>
            <h2 className="text-white text-large">
              <small>Developer / Engineer</small>
            </h2>
            <p className="text-medium">
              Engenheiro Civil, graduado pela UNIFTC. <br />
              Cientista da Computação, em formação pela ESTÁCIO.
            </p>
          </div>
        </div>

        {/* Caixa com a foto à direita */}
        <div className="col-md-6">
          <img
            className="img-fluid mx-auto"
            style={{ width: "80%", padding: "20px" }}
            src={Robot}
            alt="Descrição da imagem"
          />
        </div>
      </div>
    </section>
  );
}
