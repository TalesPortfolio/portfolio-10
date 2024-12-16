import React from "react";
import { ServicesContainer, ServicesContent, ServiceCard } from "./styles";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesContent>
        <h2>Nossos Serviços</h2>
        <p>Conheça as soluções que oferecemos para impulsionar seu negócio.</p>

        <div>
          <ServiceCard>
            <img src="images/app.jpg" alt="Desenvolvimento de Aplicações Web" />
            <h3>Desenvolvimento de Aplicações Web</h3>
            <p>Criação de interfaces dinâmicas e responsivas com React, NextJs, Next, Vite, JavaScript, Typescript,  .</p>
          </ServiceCard>
          <ServiceCard>
            <img src="images/webdev.jpg" alt="Desenvolvimento de Sites Responsivos" />
            <h3>Desenvolvimento de Sites Responsivos</h3>
            <p>Projetos modernos utilizando HTML5, CSS3, Foundation, Bulma, Tailwind, Bootstrap.</p>
          </ServiceCard>
          <ServiceCard>
            <img src="images/bd.jpg" alt="Consultoria em Bancos de Dados" />
            <h3>Consultoria em Bancos de Dados</h3>
            <p>Otimização e modelagem de bancos de dados como Oracle, MongoDB e MySQL.</p>
          </ServiceCard>
          <ServiceCard>
            <img src="images/backend.jpg" alt="Desenvolvimento Backend" />
            <h3>Desenvolvimento Backend</h3>
            <p>Construção de backends robustos utilizando PHP e frameworks associados.</p>
          </ServiceCard>
          <ServiceCard>
            <img src="images/game.avif" alt="Desenvolvimento de Jogos" />
            <h3>Desenvolvimento de Jogos</h3>
            <p>Criação de jogos e aplicações gráficas com a linguagem C.</p>
          </ServiceCard>
          <ServiceCard>
            <img src="images/web3.png" alt="Desenvolvimento de Aplicações Web3" />
            <h3>Desenvolvimento de Aplicações Web3</h3>
            <p>Criação de soluções descentralizadas com foco em blockchain.</p>
          </ServiceCard>
        </div>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;
