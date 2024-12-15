// src/styles/GlobalStyles.js
"use client"; // Torna o componente um Client Component

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

`;

export default GlobalStyles;
