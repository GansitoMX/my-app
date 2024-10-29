import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo1.png';



const ImageLogo = styled.img`
  width: 10%;

`;

// Styled components para la Navbar
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  background-color: #c82070;
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
      <ImageLogo src={Logo} href="#"></ImageLogo>  
      <NavLink href="#services">Precios</NavLink>
      <NavLink
      href="https://wa.me/5216621665771" 
      target="_blank"
      rel="noopener noreferrer"
      >Contacto</NavLink>
      
    </NavbarContainer>
    
  );
};

export default Navbar;
