import React from 'react';
import styled from 'styled-components';

// Styled components para la Navbar
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  background-color: #ff9800;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding-right: 2rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px;
  scroll-behavior: smooth;
  
  &:hover {
    color: #000;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink href="#services">Precios</NavLink>
      <NavLink href="#contact">Contacto</NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
