"use client";

import GlobalStyles from "../styles/createGlobalStyle";
import HeroSection from "../componets/HeroSection/page";
import Navbar from "../componets/NavBar/page";

export default function Home() {
  return (
    <>
      <GlobalStyles /> {/* Estilos globais */}
      <Navbar />
      <HeroSection /> {/* Seção com vídeo de fundo */}
    </>
  );
}
