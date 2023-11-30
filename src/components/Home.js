import React from "react";
import Robot from "../assets/Robot face-pana.svg";

export default function Home() {
  return (
    <section>
      <header>
        <a href=""></a>

        <nav className="navegation">
          <ul>
            <li>
              <a href="index.html">HOME</a>
            </li>
            <li>
              <a href="#portfolio-section">PROJETOS</a>
            </li>
            <li>
              <a href="#contato-section">CONTATO</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <div className="text">
          <h2>
            Bem-vindo à página inicial de Filipe Lima. <br />
            <span>Developer / Data Engineer!</span>
          </h2>
          <p>
            Engenheiro Civil, graduado pela UNIFTC. <br />
            Cientista da Computação, em formação pela ESTÁCIO.
          </p>
        </div>

        <div>
          <img className="img" src={Robot} alt="Descrição da imagem" />
        </div>
      </div>
    </section>
  );
}
