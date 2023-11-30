import React from "react";
import Perfil from "../assets/perfil.png";

export default function Section() {
  return (
    <div className="container">
      <div className="foto">
        <img src={Perfil} alt="Sua Foto" />
      </div>
      <div className="texto">
        <h2>SOBRE MIM:</h2>
        <p>
          Profissional com formação em Engenharia. Atualmente sou graduando em
          Ciências da Computação com o objetivo de realizar transição de
          carreira para área de tecnologia, enquanto me dedico a projetos
          voltados para Big Data, Inteligência Artificial, e suas subáreas:
          Machine Learning, Deep Learning e Visão Computacional. Utilizo Python
          como principal stack de desenvolvimento.
        </p>
        <br />

        <ul className="timeline" id="timeline">
          <li className="li complete">
            <div className="timestamp">
              <span className="author">Aux. Administrativo</span>
              <span className="date">2013-2021</span>
            </div>
            <div className="status">
              <h4>Adm/Financeiro</h4>
            </div>
          </li>
          <li className="li complete">
            <div className="timestamp">
              <span className="author">Adm. Obras</span>
              <span className="date">2022</span>
            </div>
            <div className="status">
              <h4>Engenharia</h4>
            </div>
          </li>
          <li className="li complete">
            <div className="timestamp">
              <span className="author">Eng. Projetos</span>
              <span className="date">2023</span>
            </div>
            <div className="status">
              <h4>Engenharia</h4>
            </div>
          </li>
          <li className="li">
            <div className="timestamp">
              <span className="author">Eng. Artificial Inteligence</span>
              <span className="date">2023</span>
            </div>
            <div className="status">
              <h4>Ti/Engenharia</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
