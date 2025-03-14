import React from "react";
import "./HelpSection.css";
import logo_ajuda from "./images/logo_ajuda.png";

const HelpSection = () => {
  return (
    <section className="help-section">
      <div className="help-container">
        {/* Área de Texto */}
        <div className="help-text">
          <div className="help_first">
            <h2 className="help_title">Saiba como eu posso te ajudar</h2>
            <p className="help_subtitle">Áreas de atuação</p>
          </div>
          <br />
          <div className="card">
            <h3 className="card_title">Medicina Esportiva</h3>
            <ul className="card_list">
              <li>Otimização de desempenho físico e recuperação</li>
              <li>Suplementação esportiva</li>
              <li>Fadiga crônica e overtraining</li>
              <li>Mudanças no estilo de vida</li>
              <li>Prevenção de lesões</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="card_title">Saúde Mental</h3>
            <ul className="card_list">
              <li>Estresse crônico e Burnout</li>
              <li>Insônia e distúrbios do sono</li>
              <li>Ansiedade e depressão</li>
              <li>Transtornos alimentares</li>
              <li>Transtornos do humor</li>
              <li>Qualidade de vida</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="card_title">Endocrinologia</h3>
            <ul className="card_list">
              <li>Distúrbios Hormonais</li>
              <li>Emagrecimento saudável e obesidade</li>
              <li>Climatério e menopausa</li>
              <li>Distúrbios gastrointestinais</li>
            </ul>
          </div>
        </div>

        {/* Área da Imagem */}
        <div className="help-image">
          <img className="help_logo" src={logo_ajuda} alt="Imagem Logotipo" />
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
