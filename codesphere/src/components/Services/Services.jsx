import React from "react";
import { ServicesContainer, ServicesContent, ServiceCard } from "./styles";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesContent>
        <h2>Nos Services</h2>
        <p>Découvrez les solutions que nous proposons pour booster votre entreprise.</p>

        <div>
          <ServiceCard>
            <img src="images/app.jpg" alt="Développement d'Applications Web" />
            <h3>Développement d'Applications Web</h3>
            <p>Création d'interfaces dynamiques et réactives avec React, Next.js, Vite, JavaScript et TypeScript.</p>
          </ServiceCard>
          <ServiceCard>
            <img src="images/webdev.jpg" alt="Développement de Sites Responsifs" />
            <h3>Développement de Sites Responsifs</h3>
            <p>Projets modernes utilisant HTML5, CSS3, Foundation, Bulma, Tailwind et Bootstrap.</p>
          </ServiceCard>
          <ServiceCard>
            <img src="images/bd.jpg" alt="Consultation en Bases de Données" />
            <h3>Consultation en Bases de Données</h3>
            <p>Optimisation et modélisation de bases de données telles qu'Oracle, MongoDB et MySQL.</p>
          </ServiceCard>
          <ServiceCard>
            <img src="images/backend.jpg" alt="Développement Backend" />
            <h3>Développement Backend</h3>
            <p>Construction de backends robustes en utilisant PHP et des frameworks associés.</p>
          </ServiceCard>
          <ServiceCard>
            <img src="images/game.avif" alt="Développement de Jeux" />
            <h3>Développement de Jeux</h3>
            <p>Création de jeux et d'applications graphiques avec le langage C.</p>
          </ServiceCard>
          <ServiceCard>
            <img src="images/web3.png" alt="Développement d'Applications Web3" />
            <h3>Développement d'Applications Web3</h3>
            <p>Création de solutions décentralisées avec un focus sur la blockchain smart contract.</p>
          </ServiceCard>
        </div>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;
