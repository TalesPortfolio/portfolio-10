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
      <Hamburger onClick={() => setIsOpen(!isOpen)}>☰</Hamburger>
      <Menu isOpen={isOpen}>
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
