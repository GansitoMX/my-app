// src/components/ContactForm.js
import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f1f1f1;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 10px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 10px;
  font-size: 1rem;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 1rem;
`;

const ContactForm = () => {
  return (
    <ContactSection>
      <ContactTitle data-aos="fade-in">Contáctanos</ContactTitle>
      <Form data-aos="fade-in">
        <Input type="text" placeholder="Escribe tu nombre" required />
        <Input type="email" placeholder="Email" required />
        <TextArea rows="5" placeholder="Mensaje..." required />
        <SubmitButton type="submit">Enviar correo</SubmitButton>
      </Form>
    </ContactSection>
  );
};

export default ContactForm;
