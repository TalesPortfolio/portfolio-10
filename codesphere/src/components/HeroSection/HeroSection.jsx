import React from "react";
import { HeroContainer, VideoBackground, Content, } from "./styles";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      
      <VideoBackground autoPlay loop muted>
        <source src="/bg.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo em HTML5.
      </VideoBackground>

      {/* Conteúdo principal */}
      <Content>
  <h1>Bem-vindo ao CodeSphere</h1>
  <p>Seu Futuro, Nosso Código</p>
  <p>Código inteligente, soluções inovadoras.</p>
  <p>Soluções tecnológicas que conectam, inovam e transformam.</p>


</Content>


     

    </HeroContainer>
  );
};

export default HeroSection;
