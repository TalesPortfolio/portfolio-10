"use client";
import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh; /* Garante altura mínima */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
  padding-top: 380px;

  @media (max-width: 768px) {
    padding-top: 120px; /* Ajusta o topo para tablets */
  }

  @media (max-width: 480px) {
    padding-top: 100px; /* Ajusta o topo para telefones */
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
  position: relative;
  z-index: 1;

  h1 {
    font-size: 4rem;
    margin: 0;
    color: #00ffff;

    @media (max-width: 768px) {
      font-size: 2.5rem; /* Reduz o tamanho para tablets */
    }

    @media (max-width: 480px) {
      font-size: 2rem; /* Reduz o tamanho para telefones */
    }
  }

  p {
    font-size: 1.8rem;
    margin: 1rem 0;
    color: #ffffff;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;


//  export const Button = styled.a`
//    display: inline-block;
//    margin-top: 1.5rem;
//    padding: 0.8rem 1.5rem;
//    font-size: 1.2rem;
//    font-weight: bold;
//    color: #000;
//    background-color: #00ffff; /* Azul neon */
//    border-radius: 5px;
//    text-decoration: none;
//    transition: background-color 0.3s;
//    &:hover {
//      background-color: #00cccc; /* Um tom mais escuro ao passar o mouse */
//      color: #fff;
//      }
//    `;

