import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 2rem 3rem;
  background-color: #0056b3;
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #f3f3f3;
  }
`;

const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;  /* Tamaño fijo */
  height: 40px; /* Tamaño fijo */
  background-color: white;
  border-radius: 50%;  /* Forma redonda */
  color: #0056b3;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 18px;  /* Tamaño específico para el logo */
    height: 18px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterRow>
        <FooterText>Col. Centenario, Hermosillo Sonora. México. CP 83260</FooterText>
      </FooterRow>

      <FooterRow>
        <PhoneNumber>
          <FaPhoneAlt />
          <FooterText>+52 662-166-5771</FooterText>
        </PhoneNumber>
      </FooterRow>

      <FooterRow>
        <SocialLink href="https://www.facebook.com/demonCodeStudios" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <FaFacebookF />
          </IconWrapper>
        </SocialLink>
        <FooterText>Síguenos en Facebook</FooterText>
      </FooterRow>

      <FooterRow>
        <FooterText>&copy; 2024 DemonCode Studios. All rights reserved.</FooterText>
      </FooterRow>
    </FooterContainer>
  );
};

export default Footer;
