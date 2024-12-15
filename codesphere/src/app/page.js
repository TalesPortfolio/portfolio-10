"use client";

import GlobalStyles from "../styles/createGlobalStyle";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/NavBar/NavBar";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <>
      <GlobalStyles /> {/* Estilos globais */}
      <Navbar />
      <HeroSection /> {/* Seção com vídeo de fundo */}
      <Services />
    </>
  );
}
