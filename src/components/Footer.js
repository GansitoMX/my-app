// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #0056b3;
  color: white;
  text-align: left;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Col. Centenario, Hermosillo Sonora. México. CP 83260</p>
      <p>&copy; 2024 DemonCode Studios. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
