import React from "react";
import "./Local.css";
import iconPin from "./images/icon_pin.png";
import ImageGallery from "./ImageGallery";

const Local = () => {
  return (
    <section className="local-container">
      <div>
        <h2 className="local-title">Local de atendimento</h2>
      </div>
      <p className="local-subtitle">conheça meu consultório</p>
      <br />
      <div className="local-item">
        <div className="local-header">
          <h3 className="local-type">Presencial</h3>
        </div>
        <p className="local-text">
          Espaço acolhedor localizado no coração do Santa Mônica em
          <b> Florianópolis</b>, Santa Catarina.
        </p>
        <div>
          <div className="local-address">
            <img
              src={iconPin}
              alt="Ícone de localização"
              className="local-icon"
            />
            <span>
              R. Dr. Agostinho Sielski, 67 - Sala 203 - Santa Monica,
              Florianópolis - SC, 88035-320, Brasil
            </span>
          </div>
        </div>
      </div>

      <div className="local-item">
        <div className="local-header">
          <h3 className="local-type">On-line</h3>
        </div>
        <p className="local-text">
          Realizada no conforto da sua casa ou de
          <b> qualquer local do mundo </b>
          através de videochamada em data e horário agendados previamente.
        </p>
      </div>

      <iframe
        className="linked-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.1305374672875!2d-48.510427724860236!3d-27.58948227625021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952738e4a46a575d%3A0x7ca9273d265010e0!2sR.%20Dr.%20Agostinho%20Sielski%2C%2067%20-%20Sala%20203%20-%20Santa%20Monica%2C%20Florian%C3%B3polis%20-%20SC%2C%2088035-320!5e0!3m2!1spt-BR!2sbr!4v1739887631945!5m2!1spt-BR!2sbr"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <ImageGallery />
    </section>
  );
};

export default Local;
