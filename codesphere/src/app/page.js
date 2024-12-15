"use client";

import GlobalStyles from "../styles/createGlobalStyle";
import HeroSection from "../pages/HeroSection/page";
import Navbar from "../pages/NavBar/page";

export default function Home() {
  return (
    <>
      <GlobalStyles /> {/* Estilos globais */}
      <Navbar />
      <HeroSection /> {/* Seção com vídeo de fundo */}
    </>
  );
}
