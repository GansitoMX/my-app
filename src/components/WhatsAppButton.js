import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const WhatsAppButtonStyled = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #1EBEA5;
  }
`;

const Msjbubble = styled.div`
  position: fixed;
  bottom: 20px;
  right: 90px;
  background-color: #f3f3f3;
  color: gray;
  border-radius: 25px;
  padding: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.3s ease;

`;

const WhatsAppButton = () => {
  return (
    <WhatsAppButtonStyled
      href="https://wa.me/5216621665771" 
      target="_blank"
      rel="noopener noreferrer"
    >      
      <FaWhatsapp />     
      <Msjbubble>Más Información</Msjbubble>
    </WhatsAppButtonStyled>
    
  );
};

export default WhatsAppButton;