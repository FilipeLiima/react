import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contato() {
  return (
    <div
      className="container contato-section minha-classe-personalizada"
      id="contato-section"
    >
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form
            action="https://api.staticforms.xyz/submit"
            method="POST"
            className="card p-4"
          >
            <input
              type="hidden"
              name="accessKey"
              value="2ca664b2-630c-43f9-aac7-91707216203d"
            />
            <input type="hidden" name="redirectTo" value="#" />
            <h2 className="mb-4 text-center">CONTATO</h2>
            <p>
              Estou sempre aberto a novas oportunidades e colaborações. Sinta-se
              à vontade para entrar em contato comigo para discutir projetos
              interessantes ou apenas para dizer olá!
            </p>

            <div className="mb-3">
              <label htmlFor="nome" className="form-label"></label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Digite seu nome"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label"></label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Digite seu email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="assunto" className="form-label"></label>
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Digite o assunto"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mensagem" className="form-label"></label>
              <textarea
                name="message"
                className="form-control"
                placeholder="Digite sua mensagem"
                rows="5" // Defina o número de linhas desejado
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              ENVIAR
            </button>
          </form>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-lg-6 text-center">
          <div className="box">
            <a href="https://github.com/FilipeLiima" className="btn github">
              <div className="icon">
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "35px" }} />
              </div>
              <span>Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/-filipelima/"
              className="btn linkedin"
            >
              <div className="icon">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: "35px" }}
                />
              </div>
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
