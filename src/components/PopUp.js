import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PopUpImg from '../assets/pop_up.jpg';


// Estilo para el contenedor modal
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Aseguramos que esté sobre todo */
`;

// Estilo para la imagen centrada
const ModalImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Componente principal
const PopUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mostrar el modal cuando la página termine de cargar
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  // Función para cerrar el modal al hacer clic fuera de la imagen
  const handleCloseModal = (e) => {
    // Si el clic es en el fondo (ModalContainer), se cierra el modal
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {isModalOpen && (
        <ModalContainer onClick={handleCloseModal}>
          <ModalImage src={PopUpImg} alt="Modal" />
        </ModalContainer>
      )}
    </>
  );
};

export default PopUp;
