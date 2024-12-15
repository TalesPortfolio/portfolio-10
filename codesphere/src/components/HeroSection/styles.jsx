"use client";
import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
  padding-top: 180px;

  @media (max-width: 768px) {
    padding-top: 100px; /* Reduz padding em tablets */
  }

  @media (max-width: 480px) {
    padding-top: 80px; /* Reduz padding em telefones */
  }
`;


export const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Mantém o vídeo coberto */
  z-index: -1;
`;

export const Content = styled.div`
  h1 {
    font-size: 3rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;