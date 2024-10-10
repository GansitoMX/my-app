import React, {useEffect} from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Content from './components/Content';
import IconCards from './components/IconCards';
import Servicios from './components/Servicios';
import DetalleServicios from './components/DetalleServicios';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PopUp from './components/PopUp';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duración de las animaciones en milisegundos
      once: true, // Si la animación solo debe ocurrir una vez
    });
  }, []);
  
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
      <PopUp />
      <Header />      
      <Content />
      <DetalleServicios />
      <IconCards />
      <div id="services">
      <Servicios />
      </div>
      <WhatsAppButton />
      <Footer />
      </div>
    </div>
  );
};

export default App;