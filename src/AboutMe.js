import React from "react";
import "./AboutMe.css";
import photo2 from "./images/photo2.png";

const AboutMe = () => {
  return (
    <section className="about_section">
      <div className="first_div_about">
        <div>
          <h1 className="title">Dra. Sabrina Bedin</h1>
          <p className="subtitle">CRM/SC 39153</p>
        </div>
      </div>

      <div className="about_container">
        <div className="text_container_about">
          <h2 className="about_title">
            Sobre mim
            <span className="line_about"></span>
          </h2>
          <p className="description">
            <b>Médica generalista,</b> formada pela Universidade do Sul de Santa
            Catarina (Unisul), com atuação voltada para medicina esportiva,
            endocrinologia e saúde mental.
          </p>
          <p className="description">
            Atualmente, sou <b>pós-graduanda</b> em Medicina Esportiva pela
            Faculdade Uniguaçu e em Endocrinologia pela Academia Brasileira de
            Saúde Funcional Integrativa, buscando sempre aprofundar meus
            conhecimentos para oferecer um cuidado completo e individualizado.
          </p>
          <p className="description">
            <b>Entusiasta do esporte,</b> além da medicina, sou atleta de
            <b> CrossFit,</b> com participação no Campeonato Brasileiro da
            modalidade (TCB) e na semifinal (Copa Sur) do mundial (CrossFit
            Games). Minha paixão pelo esporte e por um estilo de vida saudável
            reflete diretamente na minha abordagem médica, buscando sempre
            auxiliar meus pacientes a viverem com mais saúde, equilíbrio e
            qualidade de vida.
          </p>
          <p className="description">
            Acredito que <b>saúde vai muito além da ausência de doenças.</b> Ela
            envolve um corpo ativo, uma mente saudável e hábitos que fazem
            sentido para cada pessoa. Meu objetivo é te ajudar a conquistar uma
            vida mais leve e com mais disposição para o que realmente importa.
          </p>
        </div>
        <br />
        <div className="image_container">
          <img
            className="main_image_about"
            src={photo2}
            alt="Imagem Dra. Sabrina Bedin"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
