import React from "react";
import styled from "styled-components";

const IconCardSection = styled.div`
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  animation: gradientBackground 8s ease infinite;
  min-height: 60vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;

  @keyframes gradientBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }

  @media (max-width: 1024px) {
    gap: 0.5rem;
    padding: 1.5rem;
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
  min-height: 150px; /* Mantener la altura mínima de las tarjetas */
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-7px);
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 1rem; /* Espacio entre tarjetas en pantallas pequeñas */
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    font-family: Consolas;
  }
`;

const Icons = () => {
  return (
    <IconCardSection>
      <Card>
        <Icon>⏰</Icon>
        <CardText>
          <strong>24/7.</strong> Tu negocio está disponible todo el día para
          clientes potenciales.
        </CardText>
      </Card>

      <Card>
        <Icon>📜</Icon>
        <CardText>
          <strong>Credibilidad.</strong> Una página web profesional aumenta la confianza en
          tu marca.
        </CardText>
      </Card>

      <Card>
        <Icon>🌎</Icon>
        <CardText>
          <strong>Globalizado.</strong> Puedes llegar a clientes de cualquier parte
          del mundo.
        </CardText>
      </Card>

      <Card>
        <Icon>💎</Icon>
        <CardText>
          <strong>Diferencia.</strong> Una carta de presentación profesional que te
          resalta de los demás.
        </CardText>
      </Card>
    </IconCardSection>
  );
};

export default Icons;

