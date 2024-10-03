import React from 'react';
import styled from 'styled-components';
import LogosTech from '../assets/html.png';
import LogosTech2 from '../assets/css.png';
import LogosTech3 from '../assets/logo192.png';
import LogosTech4 from '../assets/wp.png';
import LogosTech5 from '../assets/carro-vacio.png';
import LogosTech6 from '../assets/video-marketing.png';

const ContentSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f3f3f3;
`;

const ContentTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ContentText = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: justify;
  font-family: Consolas;
`;

const TecnologiasIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 6%;
  margin: 5px 5px 5px 5px;
  height: auto; /* Responsive image */
`;

const ContentTitle2 = styled.h2`
  font-size: 2 rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ContentText2 = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: center;
  font-family: Consolas;
`;

const Content = () => {
  return (
    <ContentSection>
      <ContentTitle data-aos="fade-up">¿Qué hacemos?</ContentTitle>
      <ContentText data-aos="fade-up">
        En <strong>DemonCode Studios</strong>, nos especializamos en crear páginas web <strong>a la medida</strong> para pequeños negocios y emprendedores. Ofrecemos un servicio personalizado que refleja con precisión la visión de nuestros clientes, asegurando que cada proyecto sea único y de la más alta calidad para impulsar su presencia digital.
      </ContentText>

      <ContentTitle2 data-aos="fade-up">Servicios</ContentTitle2>
      <ContentText2 data-aos="fade-up">
        Diseño y desarrollo web | E-Commerce | Edición de videos
      </ContentText2>

      <TecnologiasIcons>
        <Image src={LogosTech} data-aos="zoom-in" />
        <Image src={LogosTech2} data-aos="zoom-in" data-aos-delay="200" />
        <Image src={LogosTech3} data-aos="zoom-in" data-aos-delay="400" />
        <Image src={LogosTech4} data-aos="zoom-in" data-aos-delay="600" />
        <Image src={LogosTech5} data-aos="zoom-in" data-aos-delay="800" />
        <Image src={LogosTech6} data-aos="zoom-in" data-aos-delay="1000" />
      </TecnologiasIcons>
    </ContentSection>
  );
};

export default Content;
