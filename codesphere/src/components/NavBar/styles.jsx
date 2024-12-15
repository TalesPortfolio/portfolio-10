"use client";
import styled from "styled-components";
import colors from "../../styles/colors";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${colors.navBar};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export const Logo = styled.img`
  height: 120px;

  @media (max-width: 768px) {
    height: 80px; /* Reduz o tamanho da logo em tablets */
  }

  @media (max-width: 480px) {
    height: 60px; /* Reduz o tamanho da logo em telefones */
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    gap: 1rem; /* Reduz o espaço entre os itens do menu */
  }

  @media (max-width: 480px) {
    display: none; /* Esconde o menu em telas pequenas */
  }
`;

export const MenuItem = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #00f0ff;
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Reduz o tamanho da fonte */
  }
`;

export const DivLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a{
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #00f0ff;
  }

  @media (max-width: 768px) {
    font-size: 2rem; /* Ajusta o título em tablets */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Ajusta o título em telefones */
  }
`;
