import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contato() {
  return (
    <div className="contato-section" id="contato-section">
      <div className="main-login">
        <div className="direita-centralizada">
          <form
            action="https://api.staticforms.xyz/submit"
            method="POST"
            className="card-login"
          >
            <input
              type="hidden"
              name="accessKey"
              value="2ca664b2-630c-43f9-aac7-91707216203d"
            />
            <input type="hidden" name="redirectTo" value="#" />
            <h2>CONTATO</h2>
            <p>
              Sinta-se à vontade para entrar em contato comigo para qualquer
              dúvida. Se você deseja acompanhar meu trabalho, me encontre no
              Linkedin / Github logo abaixo. Caso contrário, envie-me um e-mail
              em f.lima182@icloud.com.
            </p>

            <div className="textfield">
              <label htmlFor="nome"></label>
              <input type="text" name="name" placeholder="Digite seu nome" />
            </div>

            <div className="textfield">
              <label htmlFor="email"></label>
              <input type="email" name="email" placeholder="Digite seu email" />
            </div>

            <div className="textfield">
              <label htmlFor="assunto"></label>
              <input
                type="text"
                name="subject"
                placeholder="Digite o assunto"
              />
            </div>

            <div className="textfield_2">
              <label htmlFor="mensagem"></label>
              <input
                type="text"
                name="message"
                placeholder="Digite sua mensagem"
              />
            </div>

            <button className="btn-enviar">ENVIAR</button>
          </form>

          <div className="box">
            <a href="https://github.com/FilipeLiima" className="btn github">
              <div className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <span>Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/-filipelima/"
              className="btn linkedin"
            >
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
