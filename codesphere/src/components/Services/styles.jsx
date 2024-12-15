"use client";
import styled from "styled-components";

export const ServicesContainer = styled.section`
  position: relative;
  z-index: 1; /* Para o conteúdo ficar acima do vídeo */
  padding: 5rem 2rem;
  color: #fff;
  text-align: center;
  padding-top: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 3rem;
    color: #00ffff;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    max-width: 600px;
  }
`;

export const ServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ffff;
  padding: 2rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  width: calc(33.333% - 2rem); /* 3 cards por linha */

  @media (max-width: 768px) {
    width: calc(50% - 2rem); /* 2 cards por linha */
  }

  @media (max-width: 480px) {
    width: 100%; /* 1 card por linha */
  }
`;

