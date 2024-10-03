import React from 'react';
import styled from "styled-components";

// Sección de contenido de servicios
const ServicesContent = styled.div`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

// Estilos para las tarjetas
const PackageCard = styled.div`
  background-color: ${({ highlighted }) => (highlighted ? '#fff9ef' : '#fff')}; /* Fondo claro para la destacada */
  border: ${({ highlighted }) => (highlighted ? '3px solid #ff9800' : '1px solid #ddd')}; /* Border destacado */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 400px;
  transition: transform 0.3s;
  display: grid;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    //color: ${({ highlighted }) => (highlighted ? '#ff9800' : '#333')}; /* Color del título */
    margin-bottom: 2rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
  }
`;

const H2 = styled.h2`
    background-color: #f09433;
    padding: 1rem;
    border-radius: 6px;
    color: white;
`;


const Servicios = () => {
  return (
    <ServicesContent>
      {/* Primera Tarjeta (no destacada) */}
      <PackageCard data-aos="fade-right">
        <h2>Paquete Personal</h2>
        <p><strong>1 Sitio web</strong> .com, .com.mx, .mx, etc...</p>
        <p><strong>Rendimiento normal</strong> Tiempos de carga normales.</p>
        <p><strong>5 GB de almacenamiento de SSD</strong> Rapidez de un disco de estado sólido.</p>
        <p><strong>Cuentas de correo profesional ilimitadas (1 GB)</strong></p>
        <p><strong>❌ Backup en la nube 100% automático</strong></p>
        <p><strong>❌ Restauración completa de tu web</strong></p>    
        <span>Costo total: $3,500 MXN</span>
        <br></br>
      </PackageCard>

      {/* Segunda Tarjeta (destacada en color naranja) */}
      <PackageCard highlighted data-aos="fade-left">
        <H2>RECOMENDADO Paquete Emprendedor</H2>
        <p><strong>1 Sitio web</strong> .com, .com.mx, .mx, etc...</p>
        <p><strong>Rendimiento mejorado</strong> Tiempos de carga optimizados.</p>
        <p><strong>25 GB de almacenamiento de SSD</strong> Guarda más contenido.</p>
        <p><strong>Cuentas de correo profesional ilimitadas (1 GB)</strong></p>
        <p><strong>Backup en la nube 100% automático</strong></p>
        <p><strong>Restauración completa de tu web</strong></p>
        
        <span>Total a pagar: $4,500 MXN</span>
        <br></br>
      </PackageCard>
    </ServicesContent>
  );
};

export default Servicios;
