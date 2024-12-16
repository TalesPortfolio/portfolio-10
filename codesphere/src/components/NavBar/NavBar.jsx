import React, { useState } from "react";
import { Nav, Logo, Menu, MenuItem, Title, DivLogo, Hamburger } from "./styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <DivLogo>
        <Logo src="/images/logo.png" alt="CodeSphere Logo" />
        <a href="#top">
          <Title>CodeSphere</Title>
        </a>
      </DivLogo>
      {/* Botão Hamburguer com condicional */}
      <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        {!isOpen ? "☰" : "✖"} {/* Alterna entre ícones ☰ e ✖ */}
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem href="#home" onClick={() => setIsOpen(false)}>
          Home
        </MenuItem>
        <MenuItem href="#services" onClick={() => setIsOpen(false)}>
          Services
        </MenuItem>
        <MenuItem href="#team" onClick={() => setIsOpen(false)}>
          Team
        </MenuItem>
        <MenuItem href="#projects" onClick={() => setIsOpen(false)}>
          Projects
        </MenuItem>
        <MenuItem href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
