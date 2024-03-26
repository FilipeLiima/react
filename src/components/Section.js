import React from "react";
import Perfil from "../assets/perfil.png";

export default function Section() {
  return (
    <section className="custom-background">
      <div className="container mt-4">
        <div className="row">
          {/* Coluna da Esquerda (Foto Menor) */}
          <div className="col-md-4">
            <div className="foto">
              <img
                src={Perfil}
                alt="Sua Foto"
                className="img-fluid"
                style={{ maxWidth: "200px" }}
              />
            </div>
          </div>

          {/* Coluna da Direita (Texto e Linha do Tempo) */}
          <div className="col-md-8">
            <div className="texto">
              <h2>Sobre mim:</h2>
              <h4> Hey, I'm filipe 👋 </h4>
              <p>
                Com mais de 9 anos de experiência colaborando com equipes
                multidisciplinares, desenvolvi uma paixão pela tecnologia que me
                levou a me tornar um desenvolvedor habilidoso. Minhas principais
                motivações residem em enfrentar desafios, otimizar processos por
                meio da análises, e criar soluções eficientes que proporcionem
                uma experiência de usuário excepcional. Estou constantemente em
                busca de novos desafios para expandir meu conhecimento e
                contribuir de forma significativa para o sucesso dos projetos em
                que estou envolvido.
              </p>

              {/* Linha do Tempo */}
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="main-timeline">
                      <div class="timeline">
                        <a href="#" class="timeline-content">
                          <div class="timeline-year">2013</div>
                          <h3 class="title">Adm / Financeiro</h3>
                          <p class="description">
                            Experiência de 8 anos na área Administrativa /
                            Financeira, envolvendo planejamento financeiro,
                            interação com o setor comercial, gestão de
                            documentos, elaboração de planilhas, emissão de
                            relatórios, cadastro de notas fiscais eletrônicas,
                            treinamento de colaboradores, gestão de folha de
                            pagamento, atendimento ao cliente e suporte em
                            manutenção de sistemas.
                          </p>
                        </a>
                      </div>
                      <div class="timeline">
                        <a href="#" class="timeline-content">
                          <div class="timeline-year">2022</div>
                          <h3 class="title">Engenharia</h3>
                          <p class="description">
                            Experiência em elaboração de orçamentos, contratos e
                            memorial descritivo. Habilidades em leitura e
                            interpretação de projetos de engenharia. Cálculo de
                            materiais e gestão eficiente de mão de obra interna
                            e terceirizada.
                          </p>
                        </a>
                      </div>
                      <div class="timeline">
                        <a href="#" class="timeline-content">
                          <div class="timeline-year">2023</div>
                          <h3 class="title">Engenharia</h3>
                          <p class="description">
                            Participação na elaboração de projetos de
                            sinalização viária e modelagem estrutural com ênfase
                            em detalhamento de baldrame e sapatas. Proficiente
                            na criação de planilhas de análise,
                            pré-dimensionamento e planejamento.
                          </p>
                        </a>
                      </div>
                      <div class="timeline">
                        <a href="#" class="timeline-content">
                          <div class="timeline-year">2023</div>
                          <h3 class="title">Engenharia / Desenvolvimento</h3>
                          <p class="description">
                            Análise exploratória, extração, tratamento de
                            datasets e manipulação de bancos de dados.
                            Desenvolvimento de aplicações e treinamento de
                            modelos de machine learning. Conhecimento em
                            algoritmos de reconhecimento facial e de imagens,
                            processamento de linguagem natural (PLN) e
                            reconhecimento de voz. Documentação de processos, e
                            versionamento de códigos com GIT, seguindo boas
                            práticas de desenvolvimento.
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
