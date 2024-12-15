import React from "react";
import { Nav, Logo, Menu, MenuItem, Title,DivLogo } from "./styles"; // Importa os estilos do arquivo styles.jsx

const Navbar = () => {
  return (
    <Nav>
      <DivLogo>
        <Logo src="/images/logo.png" alt="CodeSphere Logo" />
        <Title>CodeSphere</Title>
      </DivLogo>
      <Menu>
        <MenuItem href="#home">Home</MenuItem>
        <MenuItem href="#services">Services</MenuItem>
        <MenuItem href="#team">Team</MenuItem>
        <MenuItem href="#projects">Projects</MenuItem>
        <MenuItem href="#contact">Contact</MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
