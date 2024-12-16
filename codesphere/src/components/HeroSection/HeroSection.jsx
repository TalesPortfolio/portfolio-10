import React from "react";
import { HeroContainer, VideoBackground, Content } from "./styles";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      
      <VideoBackground autoPlay loop muted>
        <source src="/bg.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo en HTML5.
      </VideoBackground>

      {/* Contenu principal */}
      <Content>
        <h1>Bienvenue à CodeSphere</h1>
        <p>Votre avenir, notre code</p>
        <p>Code intelligent, solutions innovantes.</p>
        <p>Des solutions technologiques qui connectent, innovent et transforment.</p>
      </Content>

    </HeroContainer>
  );
};

export default HeroSection;