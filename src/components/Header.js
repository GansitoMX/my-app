import React from 'react';
import styled, { keyframes } from 'styled-components';
import headerImage from '../assets/headerImg2.png';

// Animación de fondo degradado
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;


// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 7s ease infinite;
  color: #424242;
  padding: 0 5rem;
  font-family: 'San Francisco', Helvetica, sans-serif;
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const HeaderImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 65%;
  padding-top: 150px;
  height: auto;
`;

const HeaderTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  letter-spacing: -2px;
  color: white;
`;

const HeaderSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: Consolas, sans-serif;
  color: white;
`;

const HeaderButton = styled.a`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #ff9800;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: #cf8211;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle data-aos="fade-right">
          demonCode
        </HeaderTitle>
        <HeaderSubtitle data-aos="fade-down">
          Somos <strong>Freelance</strong>, una agencia de desarrollo y diseño web, tenemos el poder y la habilidad de "cortar" problemas con soluciones web elegantes.
        </HeaderSubtitle>
        <HeaderButton
          href="https://wa.me/5216621665771" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Comenzar
        </HeaderButton>
      </HeaderContent>

      <HeaderImage data-aos="fade-up">
        <Image src={headerImage} alt="Imagen de ejemplo" />
      </HeaderImage>
    </HeaderContainer>
  );
};

export default Header;
