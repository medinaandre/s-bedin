import React from "react";
import "./FollowUp.css";
import iconHand from "./images/icon_hand.png";
import iconTalk from "./images/icon_talk.png";
import iconClock from "./images/icon_clock.png";
import iconMedical from "./images/icon_medical.png";

const FollowUp = () => {
  return (
    <section className="consultation-section">
      <h3 className="consultation-subtitle">
        <span className="line"></span> Sobre as consultas
        <span className="line"></span>
      </h3>
      <h2 className="consultation-title">Como funciona o meu acompanhamento</h2>

      <div className="consultation-container">
        <div className="consultation-box">
          <img
            src={iconTalk}
            alt="Ícone de pessoas conversando"
            className="consultation-icon"
          />
          <div className="consultation-text">
            <p>
              Atendimentos <b>personalizados</b>, sempre focados no seu
              bem-estar e necessidades individuais.
            </p>
            <br />
            <p>
              As consultas seguem um modelo <b>humanizado</b>, buscando entender
              seu histórico, queixas e objetivos de saúde.
            </p>
            <br />
            <p>
              <b>Conhecer a sua história</b> é importante para que eu possa
              oferecer um atendimento completo e eficaz.
            </p>
          </div>
        </div>

        <div className="consultation-box">
          <img
            src={iconHand}
            alt="Ícone de aperto de mão"
            className="consultation-icon"
          />
          <div className="consultation-text">
            <p>
              Abordagem integral, oferecendo um
              <b> atendimento sem pressa</b>, no qual trabalho lado a lado com o
              paciente para definir metas reais e alcançáveis para a melhora da
              sua saúde.
            </p>
            <br />
            <p>
              Esse cuidado se estende também ao pós-consulta, garantindo um
              acompanhamento <b>próximo e contínuo</b>.
            </p>
          </div>
        </div>

        <div className="consultation-box">
          <img
            src={iconClock}
            alt="Ícone de relógio"
            className="consultation-icon"
          />
          <div className="consultation-text">
            <p>
              A <b>primeira consulta</b> possui duração de até 90 minutos. As
              demais, 60 minutos em média.
            </p>
            <br />
            <p>
              Há um<b> retorno on-line incluído</b> após cada consulta, com
              duração de até 30 minutos, que pode ser agendado em até 30 dias
              após.
            </p>
            <br />
            <p>
              Todos os pacientes possuem <b>meu contato</b> profissional que
              estará disponível para eventuais dúvidas e ajustes pontuais.
            </p>
          </div>
        </div>

        <div className="consultation-box">
          <img
            src={iconMedical}
            alt="Ícone de estetoscópio"
            className="consultation-icon"
          />
          <div className="consultation-text">
            <ul>
              <li>✔️ Abordagem completa para sua saúde física e mental.</li>
              <br />
              <li>✔️ Medicina baseada em evidências.</li>
              <br />
              <li>✔️ Orientações claras, práticas e ajustadas à sua rotina.</li>
              <br />
              <li>✔️ Encaminhamentos e exames quando necessários.</li>
              <br />
              <li>
                ✔️ <b>Presencial ou on-line.</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=554830361491&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="first_button">Agende sua consulta</button>
      </a>
    </section>
  );
};

export default FollowUp;
