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
            <h3>Desenvolvimento Web</h3>
            <p>Criação de sites modernos e responsivos para sua empresa.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Sistemas Personalizados</h3>
            <p>Implementação de sistemas sob medida para suas necessidades.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Consultoria Técnica</h3>
            <p>Ajuda especializada para resolver desafios tecnológicos.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Desenvolvimento Web</h3>
            <p>Criação de sites modernos e responsivos para sua empresa.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Sistemas Personalizados</h3>
            <p>Implementação de sistemas sob medida para suas necessidades.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Consultoria Técnica</h3>
            <p>Ajuda especializada para resolver desafios tecnológicos.</p>
          </ServiceCard>
        </div>
        
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;
