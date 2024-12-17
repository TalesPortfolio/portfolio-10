import React, { useState } from "react";
import { HeroContainer, VideoBackground, VideoFallback, Content } from "./styles";

const HeroSection = () => {
  const [isVideoError, setIsVideoError] = useState(false);

  return (
    <HeroContainer id="home">
      {/* Vídeo de Fundo */}
      {!isVideoError && (
        <VideoBackground
          autoPlay
          loop
          muted
          playsInline
          onError={() => setIsVideoError(true)} // Se o vídeo falhar
        >
          <source src="/bg.mp4" type="video/mp4" />
        </VideoBackground>
      )}

      {/* Fallback: Imagem estática */}
      {isVideoError && <VideoFallback />}

      {/* Conteúdo principal */}
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
