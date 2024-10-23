import React from 'react';
import styled from 'styled-components';
import cardImages1 from '../assets/1.jpg'
import cardImages2 from '../assets/2.jpg'
import cardImages3 from '../assets/3.jpg'
import cardImages4 from '../assets/4.jpg'

// Estilos para la sección completa
const ContentSection = styled.div`
    font-family: Consolas;
    padding: 2rem;
    background-color: #f9f9f9;
`;

// Contenedor de las tarjetas con display grid
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); // 4 columnas
    gap: 1.5rem; // Espacio entre las tarjetas
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr); // 2 columnas en pantallas medianas
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr; // 1 columna en pantallas pequeñas
    }
`;

// Estilos para cada tarjeta
const Card = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;
    &:hover {
        transform: translateY(-5px); // Efecto hover
    }
`;

// Imagen dentro de la tarjeta
const CardImage = styled.img`
    width: 100%;
    height: 180px; // Altura fija de la imagen
    object-fit: cover;
`;

// Contenedor del contenido de la tarjeta
const CardContent = styled.div`
    padding: 1rem;
    text-align: center;
`;

// Título de la tarjeta
const CardTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #333;
`;

// Enlace dentro de la tarjeta
const CardLink = styled.a`
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    &:hover {
        color: #0056b3;
    }
`;

const DetalleServicios = () => {
    return (
        <ContentSection>
            <GridContainer>
                {/* Tarjeta 1 */}
                <Card>
                    <CardImage src={cardImages1} alt="Proyecto 1" />
                    <CardContent>
                        <CardTitle>App Convertir Unidades</CardTitle>
                        <CardLink href="https://symphonious-flan-5bd085.netlify.app/" target="_blank" rel="noopener noreferrer">
                            Ver Proyecto
                        </CardLink>
                    </CardContent>
                </Card>

                {/* Tarjeta 2 */}
                <Card>
                    <CardImage src={cardImages2} alt="Proyecto 2" />
                    <CardContent>
                        <CardTitle>Geolocalización de IP</CardTitle>
                        <CardLink href="https://verdant-scone-08831b.netlify.app/" target="_blank" rel="noopener noreferrer">
                            Ver Proyecto
                        </CardLink>
                    </CardContent>
                </Card>

                {/* Tarjeta 3 */}
                <Card>
                    <CardImage src={cardImages3} alt="Video 1" />
                    <CardContent>
                        <CardTitle>Video para Empresa 1</CardTitle>
                        <CardLink href="https://drive.google.com/file/d/1IipsHDndD1xXhBUvhrqc4xq-X2VrNLcW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Ver Video
                        </CardLink>
                    </CardContent>
                </Card>

                {/* Tarjeta 4 */}
                <Card>
                    <CardImage src={cardImages4} alt="Video 2" />
                    <CardContent>
                        <CardTitle>Video para Empresa 2</CardTitle>
                        <CardLink href="https://drive.google.com/file/d/1c8UyAElUBoxJDHZTIseIVubJTkoDpyTD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Ver Video
                        </CardLink>
                    </CardContent>
                </Card>
            </GridContainer>
        </ContentSection>
    );
};

export default DetalleServicios;
