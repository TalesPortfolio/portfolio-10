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
      <h2>Conheça Nossa Equipe</h2>
      <TeamContent>
        {/* Card do Thales */}
        <MemberCard>
        <Avatar src="/images/tales3.png"  alt="Tales Avatar" />
          <MemberInfo>
            <h3>Tales</h3>
            <p>
              Aluno da 42 Luxembourg e apaixonado por tecnologia. Adoro resolver
              problemas complexos e criar soluções inovadoras.
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
          <Avatar src="/images/thales-avatar.png" alt="Sandro Avatar" />
          <MemberInfo>
            <h3>Sandro</h3>
            <p>
              Aluno da 42 Luxembourg e apaixonado por tecnologia. Adoro resolver
              problemas complexos e criar soluções inovadoras.
            </p>
            <SocialLinks>
              <a
                href="https://github.com/seuGitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/seuLinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </SocialLinks>
          </MemberInfo>
        </MemberCard>
        <MemberCard>
          <Avatar src="/images/thales-avatar.png" alt="Andre Avatar" />
          <MemberInfo>
            <h3>Andre</h3>
            <p>
              Aluno da 42 Luxembourg e apaixonado por tecnologia. Adoro resolver
              problemas complexos e criar soluções inovadoras.
            </p>
            <SocialLinks>
              <a
                href="https://github.com/seuGitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/seuLinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </SocialLinks>
          </MemberInfo>
        </MemberCard>
        <MemberCard>
          <Avatar src="/images/f.png" alt="Philipe Avatar" />
          <MemberInfo>
            <h3>Philipe</h3>
            <p>
              Aluno da 42 Luxembourg e apaixonado por tecnologia. Adoro resolver
              problemas complexos e criar soluções inovadoras.
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
      </TeamContent>
    </TeamContainer>
  );
};

export default Team;
