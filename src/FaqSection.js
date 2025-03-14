import React, { useState } from "react";
import "./FaqSection.css";
import lastImage from "./images/last_image.png";

const FaqSection = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdownChange = (index) => {
    setSelectedOption(selectedOption === index ? null : index); // Toggle dropdown open/close
  };

  const questions = [
    "Quando devo buscar uma consulta?",
    "Como funciona a consulta?",
    "Quanto tempo dura o acompanhamento?",
    "Há retorno incluído?",
    "A Dra. Sabrina atende planos de saúde?",
    "Há algum público ou condição que a doutora não atende?",
    "A Medicina do Esporte é somente para atletas?",
  ];

  const answers = [
    "Se você deseja prevenção, se sente que sua rotina está mais difícil do que deveria ser, que seu corpo não responde como antes ou que seu bem-estar já não é o mesmo, pode ser hora de procurar ajuda. Sintomas como cansaço excessivo, oscilações de humor, dificuldade de concentração, insônia, alterações no peso ou queda no rendimento físico e mental muitas vezes são ignorados porque parecem normais—mas não são. Eles podem estar afetando sua saúde, produtividade, relações e qualidade de vida sem que você perceba. Uma consulta pode te ajudar a entender o que está acontecendo e encontrar soluções para viver melhor, seja para cuidar da saúde mental, otimizar sua performance esportiva ou ajustar hábitos para mais equilíbrio no dia a dia. Você não precisa aceitar viver com menos energia, disposição e bem-estar do que poderia ter.",
    "O agendamento é feito de forma simples e rápida, diretamente pelo WhatsApp. As consultas são particulares e a primeira dura cerca de 1h30. As demais consultas têm duração média de 1 hora. O atendimento pode ser presencial ou online, de acordo com sua preferência. Há um retorno on-line incluído após cada consulta, com duração de até 30 minutos, que pode ser agendado até 30 dias após.",
    "O tempo de acompanhamento varia para cada paciente, pois depende dos objetivos, da evolução do tratamento e das necessidades individuais. Para alguns, uma consulta pontual já pode trazer clareza e direcionamento. Para quem busca mudanças mais profundas, como melhora na performance esportiva, ajustes hormonais ou equilíbrio da saúde mental, o acompanhamento tende a ser contínuo. A frequência das consultas é definida de forma personalizada, garantindo um cuidado eficaz e adaptado à sua realidade. Na primeira consulta, alinhamos suas expectativas e traçamos um plano que faça sentido para você.",
    "Sim. Um retorno on-line, com duração de até 30 minutos, após cada consulta, e que pode ser agendado para até 30 dias após.",
    "Neste método de atendimento e acompanhamento, não. No entanto, alguns planos oferecem a opção de reembolso de consultas particulares mediante apresentação da nota fiscal do atendimento. Recomendamos que entre em contato com seu plano de saúde para verificar se esse benefício está disponível para você e quais são os critérios necessários para o reembolso.",
    "Atualmente, o atendimento é voltado para adultos e adolescentes a partir de 17 anos. Casos pediátricos e situações que fogem ao seu escopo de atuação são direcionadas para profissionais especializados, visando sempre o melhor cuidado para cada paciente.",
    "Não! A Medicina do Esporte não é exclusiva para atletas. Ela é voltada para qualquer pessoa que queira melhorar a saúde e a qualidade de vida através da atividade física. Seja você um iniciante que quer começar a treinar de forma segura, alguém que busca mais disposição no dia a dia, ou um praticante regular que deseja melhorar a performance e prevenir lesões, a medicina esportiva pode te ajudar a ter um corpo mais forte e saudável, independentemente do seu nível de atividade.",
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-title">Dúvidas frequentes</h2>
      <div className="dropdowns-container">
        {questions.map((question, index) => (
          <div key={index} className="dropdown-container">
            <button
              className={
                "dropdown-button " + (selectedOption === index ? "open" : "")
              }
              onClick={() => handleDropdownChange(index)}
            >
              {question}
            </button>
            {selectedOption === index && (
              <div className="dropdown-content">
                <p className="answer">{answers[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h3 className="contact-title">Ainda tem alguma dúvida?</h3>
        <a
          href="https://api.whatsapp.com/send/?phone=554830361491&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="first_button">Entre em contato aqui </button>
        </a>
        <div>
          <a
            href="https://www.instagram.com/sabrinabedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="auto"
              viewBox="0 0 448 512"
            >
              <path
                fill="#23547b"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
        </div>
      </div>
      <img
        className="last_image"
        src={lastImage}
        alt="Imagem Dra. Sabrina Bedin"
      />
    </div>
  );
};

export default FaqSection;
