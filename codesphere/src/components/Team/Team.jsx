import React from "react";
import {
  TeamContainer,
  TeamContent,
  MemberCard,
  Avatar,
  MemberInfo,
  SocialLinks,
} from "./styles";

const Team = () => {
  return (
    <TeamContainer id="team">
      <h2>Rencontrez Notre Équipe</h2>
      <TeamContent>
        {/* Carte de Thales */}
        <MemberCard>
          <Avatar src="/images/tales.jpeg" alt="Avatar de Tales" />
          <MemberInfo>
            <h3>Tales</h3>
            <p>
              Développeur passionné par la technologie avec une vaste expérience dans
              divers langages de programmation, tels que JavaScript, PHP, C et C++, Solidity.
              Spécialiste du front-end avec React, HTML5 et CSS, avec une solide
              connaissance du back-end en utilisant PHP et des bases de données comme
              MySQL et MongoDB. Compétent en Linux, frameworks modernes et
              optimisation SEO, prêt à relever des défis et à créer des solutions
              efficaces.
            </p>
            <SocialLinks>
              <a
                href="https://github.com/tales1982"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tales-lima-de-paula/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </SocialLinks>
          </MemberInfo>
        </MemberCard>
        <MemberCard>
          <Avatar src="/images/sandro.png" alt="Avatar de Sandro" />
          <MemberInfo>
            <h3>Sandro</h3>
            <p>
              Étudiant à 42 Luxembourg avec une expérience en Cobol, C et C++.
              Passionné par la programmation et les solutions logicielles robustes,
              il aime relever des défis complexes et perfectionner ses compétences
              dans le développement logiciel.
            </p>
            <SocialLinks>
              <a
                href="https://github.com/WeberSandro"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sandro-weber-48b97a311/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </SocialLinks>
          </MemberInfo>
        </MemberCard>
        <MemberCard>
          <Avatar src="/images/andre.jpeg" alt="Avatar d'Andre" />
          <MemberInfo>
            <h3>Andre</h3>
            <p>
              Spécialisé en business intelligence et data analytics, avec une expertise
              en Python, Power BI, SQL et une solide connaissance du GDPR.
              Passionné par l'analyse de données et la création de solutions stratégiques
              pour améliorer les performances des entreprises.
            </p>
            <SocialLinks>
              <a
                href="https://github.com/AndreLuiz-Cardoso"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/andre-l-cardoso/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </SocialLinks>
          </MemberInfo>
        </MemberCard>
        <MemberCard>
          <Avatar src="/images/philipe.jpeg" alt="Avatar de Philipe" />
          <MemberInfo>
            <h3>Philipe</h3>
            <p>
              Étudiant à 42 Luxembourg avec des compétences en back-end, Blockchain, développement
              de jeux en C et connaissances en réseaux. Passionné par la technologie
              et toujours en quête d'apprentissage.
            </p>
            <SocialLinks>
              <a
                href="https://github.com/LuisFilipePires"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/luis-fil-5b5a8a136/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </SocialLinks>
          </MemberInfo>
        </MemberCard>
      </TeamContent>
    </TeamContainer>
  );
};

export default Team;
