"use client";
import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  object-fit: cover;
  z-index: -2;
`;

export const VideoFallback = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/img2.jpg') center center / cover no-repeat;
  z-index: -1;
`;

export const Content = styled.div`
  text-align: center;
  z-index: 1;

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  p {
    font-size: 1.5rem;
  }
`;